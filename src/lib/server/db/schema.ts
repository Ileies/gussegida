import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const categories = sqliteTable('categories', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	slug: text('slug').notNull().unique(),
	name_de: text('name_de').notNull(),
	name_en: text('name_en').notNull(),
	name_ar: text('name_ar').notNull(),
	name_tr: text('name_tr').notNull(),
	sort_order: integer('sort_order').notNull().default(0),
	image_path: text('image_path')
});

export const products = sqliteTable('products', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	category_id: integer('category_id')
		.notNull()
		.references(() => categories.id),
	slug: text('slug').notNull().unique(),
	name_de: text('name_de').notNull(),
	name_en: text('name_en').notNull(),
	name_ar: text('name_ar').notNull(),
	name_tr: text('name_tr').notNull(),
	image_path: text('image_path')
});
