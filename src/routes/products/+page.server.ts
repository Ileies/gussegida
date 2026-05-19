import { db } from '$lib/server/db';
import { categories, products } from '$lib/server/db/schema';
import { eq, sql } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

function localeName(
	r: { name_de: string; name_en: string; name_ar: string; name_tr: string },
	locale: string
): string {
	if (locale === 'en') return r.name_en;
	if (locale === 'ar') return r.name_ar;
	if (locale === 'tr') return r.name_tr;
	return r.name_de;
}

export const load: PageServerLoad = async ({ locals }) => {
	const locale = locals.locale;

	const rows = await db
		.select({
			slug: categories.slug,
			name_de: categories.name_de,
			name_en: categories.name_en,
			name_ar: categories.name_ar,
			name_tr: categories.name_tr,
			image_path: categories.image_path,
			productCount: sql<number>`count(${products.id})`
		})
		.from(categories)
		.leftJoin(products, eq(categories.id, products.category_id))
		.groupBy(categories.id)
		.orderBy(categories.sort_order);

	return {
		categories: rows.map((r) => ({
			slug: r.slug,
			name: localeName(r, locale),
			image_path: r.image_path,
			productCount: Number(r.productCount)
		}))
	};
};
