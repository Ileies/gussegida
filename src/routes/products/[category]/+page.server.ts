import { db } from '$lib/server/db';
import { categories, products } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { error } from '@sveltejs/kit';
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

export const load: PageServerLoad = async ({ params, locals }) => {
	const locale = locals.locale;

	const [cat] = await db
		.select()
		.from(categories)
		.where(eq(categories.slug, params.category))
		.limit(1);

	if (!cat) error(404, 'Kategorie nicht gefunden');

	const prods = await db
		.select()
		.from(products)
		.where(eq(products.category_id, cat.id))
		.orderBy(products.id);

	return {
		category: {
			slug: cat.slug,
			name: localeName(cat, locale),
			image_path: cat.image_path
		},
		products: prods.map((p) => ({
			slug: p.slug,
			name: localeName(p, locale),
			image_path: p.image_path
		}))
	};
};
