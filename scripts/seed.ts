import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { categories, products } from '../src/lib/server/db/schema';

const sqlite = new Database('gussegida.db');
const db = drizzle(sqlite);

async function main() {
	console.log('Seeding database...');

	await db.delete(products);
	await db.delete(categories);

	await db.insert(categories).values([
		{
			slug: 'syrups',
			name_de: 'Sirupe',
			name_en: 'Syrups',
			name_ar: 'شرابات',
			name_tr: 'Şuruplar',
			sort_order: 1,
			image_path: '/assets-original/general/Untitled-1-1024x512.jpg'
		},
		{
			slug: 'topping',
			name_de: 'Topping-Saucen',
			name_en: 'Topping Sauces',
			name_ar: 'صلصات التوبينغ',
			name_tr: 'Topping Sosları',
			sort_order: 2,
			image_path: '/assets-original/general/Topping-Soslar.jpg'
		},
		{
			slug: 'fruit-sauces',
			name_de: 'Fruchtsaucen',
			name_en: 'Fruit Sauces',
			name_ar: 'صلصات الفاكهة',
			name_tr: 'Meyveli Soslar',
			sort_order: 3,
			image_path: '/assets-original/general/Meyveli-Soslar.jpg'
		},
		{
			slug: 'bar-sauces',
			name_de: 'Bar-Saucen',
			name_en: 'Bar Sauces',
			name_ar: 'صلصات البار',
			name_tr: 'Bar Sosları',
			sort_order: 4,
			image_path: '/assets-original/general/Bar-Soslar.jpg'
		},
		{
			slug: 'deco-sauces',
			name_de: 'Dekorsaucen',
			name_en: 'Decoration Sauces',
			name_ar: 'صلصات الزينة',
			name_tr: 'Dekor Soslar',
			sort_order: 5,
			image_path: '/assets-original/general/Dekor-Soslar.jpg'
		},
		{
			slug: 'powder-drinks',
			name_de: 'Pulvergetranke',
			name_en: 'Powder Drinks',
			name_ar: 'مشروبات بودرة',
			name_tr: 'Toz İçecekler',
			sort_order: 6,
			image_path: '/cups.png'
		},
		{
			slug: 'herbal-teas',
			name_de: 'Krautertees',
			name_en: 'Herbal Teas',
			name_ar: 'شاي الأعشاب',
			name_tr: 'Bitki Çayları',
			sort_order: 7,
			image_path: '/cups.png'
		},
		{
			slug: 'frozen',
			name_de: 'Tiefkuhl',
			name_en: 'Frozen Products',
			name_ar: 'منتجات مجمدة',
			name_tr: 'Dondurulmuş Ürünler',
			sort_order: 8,
			image_path: '/assets-original/dondurulmus-urunler/Limonata_1-321x1024.jpg'
		}
	]);

	const catRows = await db.select().from(categories);
	const catId = Object.fromEntries(catRows.map((r) => [r.slug, r.id]));

	const syrupsId = catId['syrups'];
	const toppingId = catId['topping'];
	const fruitId = catId['fruit-sauces'];
	const barId = catId['bar-sauces'];
	const decoId = catId['deco-sauces'];
	const powderId = catId['powder-drinks'];
	const teaId = catId['herbal-teas'];
	const frozenId = catId['frozen'];

	await db.insert(products).values([
		// ===== SYRUPS (78) =====
		{
			category_id: syrupsId,
			slug: 'syr-portakal',
			name_de: 'Orange',
			name_en: 'Orange',
			name_ar: 'برتقال',
			name_tr: 'Portakal Şurubu',
			image_path: '/assets-original/syrups/Orange-Syrup-1.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-cilek',
			name_de: 'Erdbeere',
			name_en: 'Strawberry',
			name_ar: 'فراولة',
			name_tr: 'Çilek Şurubu',
			image_path: '/assets-original/syrups/Strawberry-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-beyaz-cikolata',
			name_de: 'Weisse Schokolade',
			name_en: 'White Chocolate',
			name_ar: 'شوكولاتة بيضاء',
			name_tr: 'Beyaz Çikolata Şurubu',
			image_path: null
		},
		{
			category_id: syrupsId,
			slug: 'syr-hindistan-cevizi',
			name_de: 'Kokosnuss',
			name_en: 'Coconut',
			name_ar: 'جوز الهند',
			name_tr: 'Hindistan Cevizi Şurubu',
			image_path: '/assets-original/syrups/hindistan-ceviz-mini.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-karamel',
			name_de: 'Karamell',
			name_en: 'Caramel',
			name_ar: 'كراميل',
			name_tr: 'Karamel Şurubu',
			image_path: '/assets-original/syrups/Karamel-mini.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-cikolata',
			name_de: 'Schokolade',
			name_en: 'Chocolate',
			name_ar: 'شوكولاتة',
			name_tr: 'Çikolata Şurubu',
			image_path: '/assets-original/syrups/cikolata-mini.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-nar',
			name_de: 'Granatapfel',
			name_en: 'Pomegranate',
			name_ar: 'رمان',
			name_tr: 'Nar Şurubu',
			image_path: '/assets-original/syrups/Pomegranate-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-nane',
			name_de: 'Minze',
			name_en: 'Mint',
			name_ar: 'نعناع',
			name_tr: 'Nane Şurubu',
			image_path: '/assets-original/syrups/Nane-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-muz',
			name_de: 'Banane',
			name_en: 'Banana',
			name_ar: 'موز',
			name_tr: 'Muz Şurubu',
			image_path: '/assets-original/syrups/Banana-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-misket-limon',
			name_de: 'Limette',
			name_en: 'Lime',
			name_ar: 'ليم',
			name_tr: 'Misket Limon Şurubu',
			image_path: '/assets-original/syrups/Lime-Syrup-1.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-vanilya',
			name_de: 'Vanille',
			name_en: 'Vanilla',
			name_ar: 'فانيليا',
			name_tr: 'Vanilya Şurubu',
			image_path: '/assets-original/syrups/Vanilla-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-mojito',
			name_de: 'Mojito',
			name_en: 'Mojito',
			name_ar: 'موهيتو',
			name_tr: 'Mojito Şurubu',
			image_path: null
		},
		{
			category_id: syrupsId,
			slug: 'syr-ananas',
			name_de: 'Ananas',
			name_en: 'Pineapple',
			name_ar: 'أناناس',
			name_tr: 'Ananas Şurubu',
			image_path: '/assets-original/syrups/Pineapple-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-findik',
			name_de: 'Haselnuss',
			name_en: 'Hazelnut',
			name_ar: 'بندق',
			name_tr: 'Fındık Şurubu',
			image_path: '/assets-original/syrups/Hazelnut-Syrup-1.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-yesil-elma',
			name_de: 'Gruner Apfel',
			name_en: 'Green Apple',
			name_ar: 'تفاح أخضر',
			name_tr: 'Yeşil Elma Şurubu',
			image_path: '/assets-original/syrups/Green-Apple-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-irish-cream',
			name_de: 'Irish Cream',
			name_en: 'Irish Cream',
			name_ar: 'كريم أيرلندي',
			name_tr: 'İrlanda Kreması Şurubu',
			image_path: '/assets-original/syrups/Irish-Cream-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-mango',
			name_de: 'Mango',
			name_en: 'Mango',
			name_ar: 'مانجو',
			name_tr: 'Mango Şurubu',
			image_path: '/assets-original/syrups/Mango-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-kizilcik',
			name_de: 'Cranberry',
			name_en: 'Cranberry',
			name_ar: 'توت بري',
			name_tr: 'Kızılcık Şurubu',
			image_path: '/assets-original/syrups/Cranberry-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-bogurtlen',
			name_de: 'Brombeere',
			name_en: 'Blackberry',
			name_ar: 'توت العليق',
			name_tr: 'Böğürtlen Şurubu',
			image_path: '/assets-original/syrups/Blackberry-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-karadut',
			name_de: 'Schwarze Maulbeere',
			name_en: 'Black Mulberry',
			name_ar: 'توت أسود',
			name_tr: 'Karadut Şurubu',
			image_path: '/assets-original/syrups/KaradutSrp.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-bubble-gum',
			name_de: 'Kaugummi',
			name_en: 'Bubble Gum',
			name_ar: 'علكة',
			name_tr: 'Sakız (Bubble Gum) Şurubu',
			image_path: '/assets-original/syrups/Bubble-Gum-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-frambuaz',
			name_de: 'Himbeere',
			name_en: 'Raspberry',
			name_ar: 'توت أحمر',
			name_tr: 'Frambuaz Şurubu',
			image_path: '/assets-original/syrups/Raspberry-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-kavun',
			name_de: 'Honigmelone',
			name_en: 'Melon',
			name_ar: 'شمام',
			name_tr: 'Kavun Şurubu',
			image_path: '/assets-original/syrups/Melon-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-karpuz',
			name_de: 'Wassermelone',
			name_en: 'Watermelon',
			name_ar: 'بطيخ',
			name_tr: 'Karpuz Şurubu',
			image_path: '/assets-original/syrups/Watermelon-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-seker',
			name_de: 'Zucker',
			name_en: 'Sugar',
			name_ar: 'سكر',
			name_tr: 'Şeker Şurubu',
			image_path: '/assets-original/syrups/Sugar-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-gul',
			name_de: 'Rose',
			name_en: 'Rose',
			name_ar: 'ورد',
			name_tr: 'Gül Şurubu',
			image_path: '/assets-original/syrups/Rose-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-kirmizi-meyveler',
			name_de: 'Rote Fruchte',
			name_en: 'Red Fruits',
			name_ar: 'فواكه حمراء',
			name_tr: 'Kırmızı Meyveler Şurubu',
			image_path: '/assets-original/syrups/kirmizimeyvelerSrp.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-seftali',
			name_de: 'Pfirsich',
			name_en: 'Peach',
			name_ar: 'خوخ',
			name_tr: 'Şeftali Şurubu',
			image_path: '/assets-original/syrups/Peach-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-akcaagac',
			name_de: 'Ahornsirup',
			name_en: 'Maple',
			name_ar: 'شراب القيقب',
			name_tr: 'Akçaağaç Şurubu',
			image_path: '/assets-original/syrups/Maple-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-fesleğen',
			name_de: 'Basilikum',
			name_en: 'Basil',
			name_ar: 'ريحان',
			name_tr: 'Fesleğen Şurubu',
			image_path: null
		},
		{
			category_id: syrupsId,
			slug: 'syr-kivi',
			name_de: 'Kiwi',
			name_en: 'Kiwi',
			name_ar: 'كيوي',
			name_tr: 'Kivi Şurubu',
			image_path: '/assets-original/syrups/Kiwi-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-lavanta',
			name_de: 'Lavendel',
			name_en: 'Lavender',
			name_ar: 'خزامى',
			name_tr: 'Lavanta Şurubu',
			image_path: '/assets-original/syrups/Lavender-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-salatalik',
			name_de: 'Gurke',
			name_en: 'Cucumber',
			name_ar: 'خيار',
			name_tr: 'Salatalık Şurubu',
			image_path: '/assets-original/syrups/salatalik-surubuv2211.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-kurabiye',
			name_de: 'Keks',
			name_en: 'Cookie',
			name_ar: 'كوكيز',
			name_tr: 'Kurabiye Şurubu',
			image_path: '/assets-original/syrups/Cookie-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-portakal-2',
			name_de: 'Orange (Variante 2)',
			name_en: 'Orange (Variant 2)',
			name_ar: 'برتقال (نوع 2)',
			name_tr: 'Portakal Şurubu (Varyant 2)',
			image_path: '/assets-original/syrups/Orange-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-limon',
			name_de: 'Zitrone',
			name_en: 'Lemon',
			name_ar: 'ليمون',
			name_tr: 'Limon Şurubu',
			image_path: '/assets-original/syrups/limon.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-mocha',
			name_de: 'Mokka',
			name_en: 'Mocha',
			name_ar: 'موكا',
			name_tr: 'Mocha Şurubu',
			image_path: '/assets-original/syrups/Mocha-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-zencefil',
			name_de: 'Ingwer',
			name_en: 'Ginger',
			name_ar: 'زنجبيل',
			name_tr: 'Zencefil Şurubu',
			image_path: '/assets-original/syrups/Ginger-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-yesil-erik',
			name_de: 'Grune Pflaume',
			name_en: 'Green Plum',
			name_ar: 'برقوق أخضر',
			name_tr: 'Yeşil Erik Şurubu',
			image_path: '/assets-original/syrups/Green-Plum-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-murver-cicegi',
			name_de: 'Holunderblute',
			name_en: 'Elderflower',
			name_ar: 'زهر البلسان',
			name_tr: 'Mürver Çiçeği Şurubu',
			image_path: '/assets-original/syrups/Elderflower-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-kayisi',
			name_de: 'Aprikose',
			name_en: 'Apricot',
			name_ar: 'مشمش',
			name_tr: 'Kayısı Şurubu',
			image_path: '/assets-original/syrups/KayisiSrp.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-kahve',
			name_de: 'Kaffee',
			name_en: 'Coffee',
			name_ar: 'قهوة',
			name_tr: 'Kahve Şurubu',
			image_path: '/assets-original/syrups/kahve-mini.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-frenk-uzumu',
			name_de: 'Johannisbeere',
			name_en: 'Currant',
			name_ar: 'كشمش',
			name_tr: 'Frenk Üzümü Şurubu',
			image_path: null
		},
		{
			category_id: syrupsId,
			slug: 'syr-kiraz',
			name_de: 'Kirsche',
			name_en: 'Cherry',
			name_ar: 'كرز',
			name_tr: 'Kiraz Şurubu',
			image_path: '/assets-original/syrups/KirazSrp.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-kestane',
			name_de: 'Kastanie',
			name_en: 'Chestnut',
			name_ar: 'كستناء',
			name_tr: 'Kestane Şurubu',
			image_path: '/assets-original/syrups/Chestnut-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-smoke',
			name_de: 'Rauch',
			name_en: 'Smoke',
			name_ar: 'دخان',
			name_tr: 'Smoke Şurubu',
			image_path: '/assets-original/syrups/Smoke-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-mesir-macunu',
			name_de: 'Mesir-Paste',
			name_en: 'Mesir Paste',
			name_ar: 'معجون مسير',
			name_tr: 'Mesir Macunu Şurubu',
			image_path: '/assets-original/syrups/Mesir-Paste-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-ceviz',
			name_de: 'Walnuss',
			name_en: 'Walnut',
			name_ar: 'جوز',
			name_tr: 'Ceviz Şurubu',
			image_path: '/assets-original/syrups/Walnut-Syrup-1.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-cim',
			name_de: 'Gras',
			name_en: 'Grass',
			name_ar: 'عشب',
			name_tr: 'Çim Şurubu',
			image_path: '/assets-original/syrups/Grass-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-carkifelek',
			name_de: 'Passionsfrucht',
			name_en: 'Passion Fruit',
			name_ar: 'فاكهة العاطفة',
			name_tr: 'Çarkıfelek Şurubu',
			image_path: '/assets-original/syrups/Passion-Fruit-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-lici',
			name_de: 'Lychee',
			name_en: 'Lychee',
			name_ar: 'ليتشي',
			name_tr: 'Liçi Şurubu',
			image_path: '/assets-original/syrups/lici-mini.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-karanfil',
			name_de: 'Nelke',
			name_en: 'Clove',
			name_ar: 'قرنفل',
			name_tr: 'Karanfil Şurubu',
			image_path: '/assets-original/syrups/Clove-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-visne',
			name_de: 'Sauerkirsche',
			name_en: 'Sour Cherry',
			name_ar: 'كرز حامض',
			name_tr: 'Vişne Şurubu',
			image_path: null
		},
		{
			category_id: syrupsId,
			slug: 'syr-tarcin',
			name_de: 'Zimt',
			name_en: 'Cinnamon',
			name_ar: 'قرفة',
			name_tr: 'Tarçın Şurubu',
			image_path: '/assets-original/syrups/Cinnamon-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-esmer-seker',
			name_de: 'Brauner Zucker',
			name_en: 'Brown Sugar',
			name_ar: 'سكر بني',
			name_tr: 'Esmer Şeker Şurubu',
			image_path: '/assets-original/syrups/EsmerSekerSrp.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-satsuma',
			name_de: 'Satsuma',
			name_en: 'Satsuma',
			name_ar: 'ساتسوما',
			name_tr: 'Satsuma Şurubu',
			image_path: '/assets-original/syrups/Bodrum-Mandalinasi-Satsuma-yazilacak-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-armut',
			name_de: 'Birne',
			name_en: 'Pear',
			name_ar: 'كمثرى',
			name_tr: 'Armut Şurubu',
			image_path: '/assets-original/syrups/ArmutSrp.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-enerji-icecegi',
			name_de: 'Energy Drink',
			name_en: 'Energy Drink',
			name_ar: 'مشروب طاقة',
			name_tr: 'Enerji İçeceği Şurubu',
			image_path: null
		},
		{
			category_id: syrupsId,
			slug: 'syr-damla-sakizi',
			name_de: 'Mastix',
			name_en: 'Mastic',
			name_ar: 'مصطكى',
			name_tr: 'Damla Sakızı Şurubu',
			image_path: '/assets-original/syrups/DamlaSakiziSrp.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-chai-tea',
			name_de: 'Chai Tea',
			name_en: 'Chai Tea',
			name_ar: 'شاي تشاي',
			name_tr: 'Chai Tea Şurubu',
			image_path: '/assets-original/syrups/Chai-Tea-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-antep-fistigi',
			name_de: 'Pistazie',
			name_en: 'Pistachio',
			name_ar: 'فستق',
			name_tr: 'Antep Fıstığı Şurubu',
			image_path: '/assets-original/syrups/Antepfistigisrp.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-acibadem',
			name_de: 'Bittermandel',
			name_en: 'Bitter Almond',
			name_ar: 'لوز مر',
			name_tr: 'Acıbadem Şurubu',
			image_path: '/assets-original/syrups/AcibademSyrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-akasya',
			name_de: 'Akazie',
			name_en: 'Acacia',
			name_ar: 'أقاقيا',
			name_tr: 'Akasya Şurubu',
			image_path: '/assets-original/syrups/AkasyaSrp.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-incir',
			name_de: 'Feige',
			name_en: 'Fig',
			name_ar: 'تين',
			name_tr: 'İncir Şurubu',
			image_path: null
		},
		{
			category_id: syrupsId,
			slug: 'syr-african',
			name_de: 'African',
			name_en: 'African',
			name_ar: 'أفريقي',
			name_tr: 'African Şurubu',
			image_path: '/assets-original/syrups/African-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-tatli-krema',
			name_de: 'Sweet Cream',
			name_en: 'Sweet Cream',
			name_ar: 'كريمة حلوة',
			name_tr: 'Tatlı Krema Şurubu',
			image_path: '/assets-original/syrups/sweetsugarSrp.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-ejder-meyvesi',
			name_de: 'Drachenfrucht',
			name_en: 'Dragon Fruit',
			name_ar: 'فاكهة التنين',
			name_tr: 'Ejder Meyvesi Şurubu',
			image_path: null
		},
		{
			category_id: syrupsId,
			slug: 'syr-italyan-karamel',
			name_de: 'Italienischer Karamell',
			name_en: 'Italian Caramel',
			name_ar: 'كراميل إيطالي',
			name_tr: 'İtalyan Karamel Şurubu',
			image_path: '/assets-original/syrups/italyan-karamel-mini.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-safran',
			name_de: 'Safran',
			name_en: 'Saffron',
			name_ar: 'زعفران',
			name_tr: 'Safran Şurubu',
			image_path: '/assets-original/syrups/safran-mini.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-pamuk-seker',
			name_de: 'Zuckerwatte',
			name_en: 'Cotton Candy',
			name_ar: 'غزل البنات',
			name_tr: 'Pamuk Şeker Şurubu',
			image_path: '/assets-original/syrups/pamukseker-mimi.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-marshmallow',
			name_de: 'Marshmallow',
			name_en: 'Marshmallow',
			name_ar: 'مارشميلو',
			name_tr: 'Marshmallow Şurubu',
			image_path: '/assets-original/syrups/marshmallow.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-toffee-nut',
			name_de: 'Toffee-Nuss',
			name_en: 'Toffee Nut',
			name_ar: 'توفي نت',
			name_tr: 'Toffee Nut Şurubu',
			image_path: '/assets-original/syrups/toffe-nut.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-balkabagi',
			name_de: 'Kurbis',
			name_en: 'Pumpkin',
			name_ar: 'قرع',
			name_tr: 'Balkabağı Şurubu',
			image_path: '/assets-original/syrups/balkabagi.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-popcorn',
			name_de: 'Popcorn',
			name_en: 'Popcorn',
			name_ar: 'فشار',
			name_tr: 'Popcorn Şurubu',
			image_path: '/assets-original/syrups/popcorn.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-limon-2',
			name_de: 'Zitrone (Variante 2)',
			name_en: 'Lemon (Variant 2)',
			name_ar: 'ليمون (نوع 2)',
			name_tr: 'Limon Şurubu (Varyant 2)',
			image_path: '/assets-original/syrups/Lime-Syrup.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-sekersiz-findik',
			name_de: 'Haselnuss (zuckerfrei)',
			name_en: 'Hazelnut (Sugar-Free)',
			name_ar: 'بندق (خالٍ من السكر)',
			name_tr: 'Şekersiz Fındık Şurubu',
			image_path: '/assets-original/syrups/sekersiz-findik.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-sekersiz-vanilya',
			name_de: 'Vanille (zuckerfrei)',
			name_en: 'Vanilla (Sugar-Free)',
			name_ar: 'فانيليا (خالية من السكر)',
			name_tr: 'Şekersiz Vanilya Şurubu',
			image_path: '/assets-original/syrups/sekersiz-vanilya.png'
		},
		{
			category_id: syrupsId,
			slug: 'syr-sekersiz-karamel',
			name_de: 'Karamell (zuckerfrei)',
			name_en: 'Caramel (Sugar-Free)',
			name_ar: 'كراميل (خالٍ من السكر)',
			name_tr: 'Şekersiz Karamel Şurubu',
			image_path: '/assets-original/syrups/sekersiz-karamel.png'
		},

		// ===== TOPPING (8) =====
		{
			category_id: toppingId,
			slug: 'top-beyaz-cikolata',
			name_de: 'Weisse Schokolade',
			name_en: 'White Chocolate',
			name_ar: 'شوكولاتة بيضاء',
			name_tr: 'Beyaz Çikolata',
			image_path: '/assets-original/topping/beyaz-cikolata-3-488x1024.jpg'
		},
		{
			category_id: toppingId,
			slug: 'top-bogurtlen',
			name_de: 'Brombeere',
			name_en: 'Blackberry',
			name_ar: 'توت العليق',
			name_tr: 'Böğürtlen',
			image_path: '/assets-original/topping/bogurtlen-1-488x1024.jpg'
		},
		{
			category_id: toppingId,
			slug: 'top-cikolata',
			name_de: 'Schokolade',
			name_en: 'Chocolate',
			name_ar: 'شوكولاتة',
			name_tr: 'Çikolata',
			image_path: '/assets-original/topping/cikolata-2-488x1024.jpg'
		},
		{
			category_id: toppingId,
			slug: 'top-cilek',
			name_de: 'Erdbeere',
			name_en: 'Strawberry',
			name_ar: 'فراولة',
			name_tr: 'Çilek',
			image_path: '/assets-original/topping/cilek-2-488x1024.jpg'
		},
		{
			category_id: toppingId,
			slug: 'top-frambuaz',
			name_de: 'Himbeere',
			name_en: 'Raspberry',
			name_ar: 'توت أحمر',
			name_tr: 'Frambuaz',
			image_path: '/assets-original/topping/frambuaz-3-488x1024.jpg'
		},
		{
			category_id: toppingId,
			slug: 'top-karamel',
			name_de: 'Karamell',
			name_en: 'Caramel',
			name_ar: 'كراميل',
			name_tr: 'Karamel',
			image_path: '/assets-original/topping/karamel-2-488x1024.jpg'
		},
		{
			category_id: toppingId,
			slug: 'top-kivi',
			name_de: 'Kiwi',
			name_en: 'Kiwi',
			name_ar: 'كيوي',
			name_tr: 'Kivi',
			image_path: '/assets-original/topping/kivi-3-488x1024.jpg'
		},
		{
			category_id: toppingId,
			slug: 'top-muz',
			name_de: 'Banane',
			name_en: 'Banana',
			name_ar: 'موز',
			name_tr: 'Muz',
			image_path: '/assets-original/topping/muz-3-488x1024.jpg'
		},

		// ===== FRUIT SAUCES (38) =====
		{
			category_id: fruitId,
			slug: 'fs-ananas',
			name_de: 'Ananas',
			name_en: 'Pineapple',
			name_ar: 'أناناس',
			name_tr: 'Ananas',
			image_path: '/assets-original/meyveli-soslar/ananas-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-antep-fistik',
			name_de: 'Pistazie',
			name_en: 'Pistachio',
			name_ar: 'فستق',
			name_tr: 'Antep Fıstık',
			image_path: '/assets-original/meyveli-soslar/antep-fistik-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-blue-curacao',
			name_de: 'Blue Curacao',
			name_en: 'Blue Curacao',
			name_ar: 'بلو كوراساو',
			name_tr: 'Blue Curacao',
			image_path: '/assets-original/meyveli-soslar/blue-curacao-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-bogurtlen',
			name_de: 'Brombeere',
			name_en: 'Blackberry',
			name_ar: 'توت العليق',
			name_tr: 'Böğürtlen',
			image_path: '/assets-original/meyveli-soslar/bogurtlen-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-carkifelek',
			name_de: 'Passionsfrucht',
			name_en: 'Passion Fruit',
			name_ar: 'فاكهة العاطفة',
			name_tr: 'Çarkıfelek',
			image_path: '/assets-original/meyveli-soslar/carkifelek-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-cilek',
			name_de: 'Erdbeere',
			name_en: 'Strawberry',
			name_ar: 'فراولة',
			name_tr: 'Çilek',
			image_path: '/assets-original/meyveli-soslar/cilek-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-damla-sakiz',
			name_de: 'Mastix',
			name_en: 'Mastic',
			name_ar: 'مصطكى',
			name_tr: 'Damla Sakız',
			image_path: '/assets-original/meyveli-soslar/damla-sakiz-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-ejder-meyvesi',
			name_de: 'Drachenfrucht',
			name_en: 'Dragon Fruit',
			name_ar: 'فاكهة التنين',
			name_tr: 'Ejder Meyvesi',
			image_path: '/assets-original/meyveli-soslar/ejder-meyve-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-frambuaz',
			name_de: 'Himbeere',
			name_en: 'Raspberry',
			name_ar: 'توت أحمر',
			name_tr: 'Frambuaz',
			image_path: '/assets-original/meyveli-soslar/frambuaz-2-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-greyfurt',
			name_de: 'Grapefruit',
			name_en: 'Grapefruit',
			name_ar: 'جريب فروت',
			name_tr: 'Greyfurt',
			image_path: '/assets-original/meyveli-soslar/greyfurt-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-hindistan-cevizi',
			name_de: 'Kokosnuss',
			name_en: 'Coconut',
			name_ar: 'جوز الهند',
			name_tr: 'Hindistan Cevizi',
			image_path: '/assets-original/meyveli-soslar/hindistan-ceviz-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-kan-portakal',
			name_de: 'Blutorange',
			name_en: 'Blood Orange',
			name_ar: 'برتقال دم',
			name_tr: 'Kan Portakal',
			image_path: '/assets-original/meyveli-soslar/kan-portakal-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-karadut',
			name_de: 'Schwarze Maulbeere',
			name_en: 'Black Mulberry',
			name_ar: 'توت أسود',
			name_tr: 'Karadut',
			image_path: '/assets-original/meyveli-soslar/karadut-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-karpuz',
			name_de: 'Wassermelone',
			name_en: 'Watermelon',
			name_ar: 'بطيخ',
			name_tr: 'Karpuz',
			image_path: '/assets-original/meyveli-soslar/karpuz-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-kavun',
			name_de: 'Honigmelone',
			name_en: 'Honeydew Melon',
			name_ar: 'شمام',
			name_tr: 'Kavun',
			image_path: '/assets-original/meyveli-soslar/kavun-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-kayisi',
			name_de: 'Aprikose',
			name_en: 'Apricot',
			name_ar: 'مشمش',
			name_tr: 'Kayısı',
			image_path: '/assets-original/meyveli-soslar/kayisi-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-kiraz',
			name_de: 'Kirsche',
			name_en: 'Cherry',
			name_ar: 'كرز',
			name_tr: 'Kiraz',
			image_path: '/assets-original/meyveli-soslar/kiraz-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-kirmizi-meyveler',
			name_de: 'Rote Fruchte',
			name_en: 'Red Fruits',
			name_ar: 'فواكه حمراء',
			name_tr: 'Kırmızı Meyveler',
			image_path: '/assets-original/meyveli-soslar/kirmizi-meyveler-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-kivi',
			name_de: 'Kiwi',
			name_en: 'Kiwi',
			name_ar: 'كيوي',
			name_tr: 'Kivi',
			image_path: '/assets-original/meyveli-soslar/kivi-2-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-kizilcik',
			name_de: 'Kornelkirsche',
			name_en: 'Cornelian Cherry',
			name_ar: 'كرز كورني',
			name_tr: 'Kızılcık',
			image_path: '/assets-original/meyveli-soslar/kizilcik-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-lici',
			name_de: 'Lychee',
			name_en: 'Lychee',
			name_ar: 'ليتشي',
			name_tr: 'Liçi',
			image_path: '/assets-original/meyveli-soslar/lici-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-limon',
			name_de: 'Zitrone',
			name_en: 'Lemon',
			name_ar: 'ليمون',
			name_tr: 'Limon',
			image_path: '/assets-original/meyveli-soslar/limon-2-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-mango',
			name_de: 'Mango',
			name_en: 'Mango',
			name_ar: 'مانجو',
			name_tr: 'Mango',
			image_path: '/assets-original/meyveli-soslar/mango-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-mavi-cilek',
			name_de: 'Heidelbeere',
			name_en: 'Blueberry',
			name_ar: 'توت أزرق',
			name_tr: 'Mavi Çilek',
			image_path: '/assets-original/meyveli-soslar/mavi-cilek-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-misket-limon',
			name_de: 'Limette',
			name_en: 'Lime',
			name_ar: 'ليم',
			name_tr: 'Misket Limon',
			image_path: '/assets-original/meyveli-soslar/misket-limon-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-muz',
			name_de: 'Banane',
			name_en: 'Banana',
			name_ar: 'موز',
			name_tr: 'Muz',
			image_path: '/assets-original/meyveli-soslar/muz-2-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-nar',
			name_de: 'Granatapfel',
			name_en: 'Pomegranate',
			name_ar: 'رمان',
			name_tr: 'Nar',
			image_path: '/assets-original/meyveli-soslar/nar-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-okaliptus',
			name_de: 'Eukalyptus',
			name_en: 'Eucalyptus',
			name_ar: 'أوكاليبتوس',
			name_tr: 'Okaliptus',
			image_path: '/assets-original/meyveli-soslar/okaliptus-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-papaya',
			name_de: 'Papaya',
			name_en: 'Papaya',
			name_ar: 'بابايا',
			name_tr: 'Papaya',
			image_path: '/assets-original/meyveli-soslar/papaya-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-portakal',
			name_de: 'Orange',
			name_en: 'Orange',
			name_ar: 'برتقال',
			name_tr: 'Portakal',
			image_path: '/assets-original/meyveli-soslar/portakal-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-sakiz',
			name_de: 'Mastix',
			name_en: 'Mastic',
			name_ar: 'مصطكى',
			name_tr: 'Sakız',
			image_path: '/assets-original/meyveli-soslar/sakiz-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-satsuma',
			name_de: 'Satsuma',
			name_en: 'Satsuma',
			name_ar: 'ساتسوما',
			name_tr: 'Satsuma',
			image_path: '/assets-original/meyveli-soslar/satsuma-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-seftali',
			name_de: 'Pfirsich',
			name_en: 'Peach',
			name_ar: 'خوخ',
			name_tr: 'Şeftali',
			image_path: '/assets-original/meyveli-soslar/seftali-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-tatli-eksi',
			name_de: 'Sub-Sauer',
			name_en: 'Sweet & Sour',
			name_ar: 'حلو وحامض',
			name_tr: 'Tatlı & Ekşi',
			image_path: '/assets-original/meyveli-soslar/tatli-eksi-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-visne',
			name_de: 'Sauerkirsche',
			name_en: 'Sour Cherry',
			name_ar: 'كرز حامض',
			name_tr: 'Vişne',
			image_path: '/assets-original/meyveli-soslar/visne-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-yaban-mersini',
			name_de: 'Blaubeere',
			name_en: 'Bilberry',
			name_ar: 'عنب الدب',
			name_tr: 'Yaban Mersini',
			image_path: '/assets-original/meyveli-soslar/yaban-mersin-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-yesil-elma',
			name_de: 'Gruner Apfel',
			name_en: 'Green Apple',
			name_ar: 'تفاح أخضر',
			name_tr: 'Yeşil Elma',
			image_path: '/assets-original/meyveli-soslar/yesil-elma-1-488x1024.jpg'
		},
		{
			category_id: fruitId,
			slug: 'fs-yesil-nane',
			name_de: 'Grune Minze',
			name_en: 'Green Mint',
			name_ar: 'نعناع أخضر',
			name_tr: 'Yeşil Nane',
			image_path: '/assets-original/meyveli-soslar/yesil-nane-488x1024.jpg'
		},

		// ===== BAR SAUCES (9) =====
		{
			category_id: barId,
			slug: 'bar-baharatli-balkabagi',
			name_de: 'Gewurzkürbis',
			name_en: 'Spiced Pumpkin',
			name_ar: 'قرع بالتوابل',
			name_tr: 'Baharatlı Balkabağı',
			image_path: '/assets-original/bar-soslar/baharatli-balkabagi-488x1024.jpg'
		},
		{
			category_id: barId,
			slug: 'bar-beyaz-cikolata',
			name_de: 'Weisse Schokolade',
			name_en: 'White Chocolate',
			name_ar: 'شوكولاتة بيضاء',
			name_tr: 'Beyaz Çikolata',
			image_path: '/assets-original/bar-soslar/beyaz-cikolata-2-488x1024.jpg'
		},
		{
			category_id: barId,
			slug: 'bar-bitter-cikolata',
			name_de: 'Zartbitterschokolade',
			name_en: 'Dark Chocolate',
			name_ar: 'شوكولاتة داكنة',
			name_tr: 'Bitter Çikolata',
			image_path: '/assets-original/bar-soslar/Biter-cikolata-488x1024.jpg'
		},
		{
			category_id: barId,
			slug: 'bar-cikolata',
			name_de: 'Schokolade',
			name_en: 'Chocolate',
			name_ar: 'شوكولاتة',
			name_tr: 'Çikolata',
			image_path: '/assets-original/bar-soslar/cikolata-1-488x1024.jpg'
		},
		{
			category_id: barId,
			slug: 'bar-findik',
			name_de: 'Haselnuss',
			name_en: 'Hazelnut',
			name_ar: 'بندق',
			name_tr: 'Fındık',
			image_path: '/assets-original/bar-soslar/findik-488x1024.jpg'
		},
		{
			category_id: barId,
			slug: 'bar-karamel',
			name_de: 'Karamell',
			name_en: 'Caramel',
			name_ar: 'كراميل',
			name_tr: 'Karamel',
			image_path: '/assets-original/bar-soslar/karamel-1-488x1024.jpg'
		},
		{
			category_id: barId,
			slug: 'bar-sutlu-cikolata',
			name_de: 'Vollmilchschokolade',
			name_en: 'Milk Chocolate',
			name_ar: 'شوكولاتة بالحليب',
			name_tr: 'Sütlü Çikolata',
			image_path: '/assets-original/bar-soslar/sutlu-cikolata-488x1024.jpg'
		},
		{
			category_id: barId,
			slug: 'bar-tuzlu-karamel',
			name_de: 'Salzkaramell',
			name_en: 'Salted Caramel',
			name_ar: 'كراميل بالملح',
			name_tr: 'Tuzlu Karamel',
			image_path: '/assets-original/bar-soslar/tuzlu-karamel-487x1024.jpg'
		},
		{
			category_id: barId,
			slug: 'bar-vanilya',
			name_de: 'Vanille',
			name_en: 'Vanilla',
			name_ar: 'فانيليا',
			name_tr: 'Vanilya',
			image_path: '/assets-original/bar-soslar/vanilya-488x1024.jpg'
		},

		// ===== DECO SAUCES (10) =====
		{
			category_id: decoId,
			slug: 'dko-beyaz-cikolata',
			name_de: 'Weisse Schokolade',
			name_en: 'White Chocolate',
			name_ar: 'شوكولاتة بيضاء',
			name_tr: 'Beyaz Çikolata',
			image_path: '/assets-original/dekor-sos/beyaz-cikolata-1228x2048.jpg'
		},
		{
			category_id: decoId,
			slug: 'dko-blue-curacao',
			name_de: 'Blue Curacao',
			name_en: 'Blue Curacao',
			name_ar: 'بلو كوراساو',
			name_tr: 'Blue Curacao',
			image_path: '/assets-original/dekor-sos/blue-curacao-1228x2048.jpg'
		},
		{
			category_id: decoId,
			slug: 'dko-cikolata',
			name_de: 'Schokolade',
			name_en: 'Chocolate',
			name_ar: 'شوكولاتة',
			name_tr: 'Çikolata',
			image_path: '/assets-original/dekor-sos/cikolata-1228x2048.jpg'
		},
		{
			category_id: decoId,
			slug: 'dko-cilek',
			name_de: 'Erdbeere',
			name_en: 'Strawberry',
			name_ar: 'فراولة',
			name_tr: 'Çilek',
			image_path: '/assets-original/dekor-sos/cilek-1-1228x2048.jpg'
		},
		{
			category_id: decoId,
			slug: 'dko-frambuaz',
			name_de: 'Himbeere',
			name_en: 'Raspberry',
			name_ar: 'توت أحمر',
			name_tr: 'Frambuaz',
			image_path: '/assets-original/dekor-sos/frambuaz-1228x2048.jpg'
		},
		{
			category_id: decoId,
			slug: 'dko-karamel',
			name_de: 'Karamell',
			name_en: 'Caramel',
			name_ar: 'كراميل',
			name_tr: 'Karamel',
			image_path: '/assets-original/dekor-sos/karamel-1228x2048.jpg'
		},
		{
			category_id: decoId,
			slug: 'dko-kivi',
			name_de: 'Kiwi',
			name_en: 'Kiwi',
			name_ar: 'كيوي',
			name_tr: 'Kivi',
			image_path: '/assets-original/dekor-sos/kivi-1228x2048.jpg'
		},
		{
			category_id: decoId,
			slug: 'dko-limon',
			name_de: 'Zitrone',
			name_en: 'Lemon',
			name_ar: 'ليمون',
			name_tr: 'Limon',
			image_path: '/assets-original/dekor-sos/limon-1228x2048.jpg'
		},
		{
			category_id: decoId,
			slug: 'dko-muz',
			name_de: 'Banane',
			name_en: 'Banana',
			name_ar: 'موز',
			name_tr: 'Muz',
			image_path: '/assets-original/dekor-sos/muz-1228x2048.jpg'
		},
		{
			category_id: decoId,
			slug: 'dko-portakal',
			name_de: 'Orange',
			name_en: 'Orange',
			name_ar: 'برتقال',
			name_tr: 'Portakal',
			image_path: '/assets-original/dekor-sos/portakal-1228x2048.jpg'
		},

		// ===== POWDER DRINKS (6) =====
		{
			category_id: powderId,
			slug: 'pwd-damla-sakiz-kahve',
			name_de: 'Türkischer Kaffee mit Mastix',
			name_en: 'Mastic Flavoured Turkish Coffee',
			name_ar: 'قهوة تركية بنكهة المصطكى',
			name_tr: 'Damla Sakız Aromalı Türk Kahvesi',
			image_path: '/assets-original/toz-icecekler/Mastic-Gum-Flavoured-Turkish-Coffee.png'
		},
		{
			category_id: powderId,
			slug: 'pwd-dibek-kahvesi',
			name_de: 'Dibek-Kaffee',
			name_en: 'Dibek Coffee',
			name_ar: 'قهوة ديبك',
			name_tr: 'Dibek Kahvesi',
			image_path: '/assets-original/toz-icecekler/Dibek-Coffee.png'
		},
		{
			category_id: powderId,
			slug: 'pwd-chai-tea',
			name_de: 'Chai Tea',
			name_en: 'Chai Tea',
			name_ar: 'شاي تشاي',
			name_tr: 'Chai Tea',
			image_path: '/assets-original/toz-icecekler/Chai-Tea-powdered-drinks-gusse-gida-surup.png'
		},
		{
			category_id: powderId,
			slug: 'pwd-sahlep',
			name_de: 'Sahlep',
			name_en: 'Sahlep',
			name_ar: 'سحلب',
			name_tr: 'Sahlep',
			image_path: '/assets-original/toz-icecekler/Sahlep.png'
		},
		{
			category_id: powderId,
			slug: 'pwd-sicak-cikolata',
			name_de: 'Heisse Schokolade',
			name_en: 'Hot Chocolate',
			name_ar: 'شوكولاتة ساخنة',
			name_tr: 'Sıcak Çikolata',
			image_path: '/assets-original/toz-icecekler/Hot-Chocolate.png'
		},
		{
			category_id: powderId,
			slug: 'pwd-turk-kahvesi',
			name_de: 'Turkischer Kaffee',
			name_en: 'Turkish Coffee',
			name_ar: 'قهوة تركية',
			name_tr: 'Türk Kahvesi',
			image_path: '/assets-original/toz-icecekler/Turkish-Coffee.png'
		},

		// ===== HERBAL TEAS (13) =====
		{
			category_id: teaId,
			slug: 'tea-adacayi',
			name_de: 'Salbei',
			name_en: 'Sage',
			name_ar: 'مريمية',
			name_tr: 'Adaçayı',
			image_path: '/assets-original/bitki-caylari/Gustea-Sage.png'
		},
		{
			category_id: teaId,
			slug: 'tea-elma-tarcin',
			name_de: 'Apfel-Zimt',
			name_en: 'Apple Cinnamon',
			name_ar: 'تفاح وقرفة',
			name_tr: 'Elma Tarçın',
			image_path: '/assets-original/bitki-caylari/Gustea-Apple-Cinnamon.png'
		},
		{
			category_id: teaId,
			slug: 'tea-elmali-karisik',
			name_de: 'Apfel-Krauter-Mischung',
			name_en: 'Apple Mixed Herbal',
			name_ar: 'شاي أعشاب بالتفاح',
			name_tr: 'Elmalı Karışık Bitki Çayı',
			image_path: '/assets-original/bitki-caylari/Gustea-Apple-Mixed-Herbal-Tea.png'
		},
		{
			category_id: teaId,
			slug: 'tea-kis-cayi',
			name_de: 'Wintertee',
			name_en: 'Winter Tea',
			name_ar: 'شاي الشتاء',
			name_tr: 'Kış Çayı',
			image_path: '/assets-original/bitki-caylari/Gustea-Winter-Tea.png'
		},
		{
			category_id: teaId,
			slug: 'tea-ihlamur',
			name_de: 'Lindenblute',
			name_en: 'Linden Blossom',
			name_ar: 'زهر الزيزفون',
			name_tr: 'Ihlamur',
			image_path: '/assets-original/bitki-caylari/Gustea-Linden.png'
		},
		{
			category_id: teaId,
			slug: 'tea-kusburnu',
			name_de: 'Hagebutte',
			name_en: 'Rosehip',
			name_ar: 'ورد المسك',
			name_tr: 'Kuşburnu',
			image_path: '/assets-original/bitki-caylari/Gustea-Rosehip.png'
		},
		{
			category_id: teaId,
			slug: 'tea-melisa',
			name_de: 'Melisse',
			name_en: 'Lemon Balm',
			name_ar: 'ميليسا',
			name_tr: 'Melisa',
			image_path: '/assets-original/bitki-caylari/Gustea-Melissa.png'
		},
		{
			category_id: teaId,
			slug: 'tea-nane-limon',
			name_de: 'Minze-Zitrone',
			name_en: 'Mint Lemon',
			name_ar: 'نعناع وليمون',
			name_tr: 'Nane Limon',
			image_path: '/assets-original/bitki-caylari/Gustea-Mint-and-Lemon.png'
		},
		{
			category_id: teaId,
			slug: 'tea-papatya',
			name_de: 'Kamille',
			name_en: 'Chamomile',
			name_ar: 'بابونج',
			name_tr: 'Papatya',
			image_path: '/assets-original/bitki-caylari/Gustea-Daisy.png'
		},
		{
			category_id: teaId,
			slug: 'tea-rezene',
			name_de: 'Fenchel',
			name_en: 'Fennel',
			name_ar: 'شمر',
			name_tr: 'Rezene',
			image_path: '/assets-original/bitki-caylari/Gustea-Fennel.png'
		},
		{
			category_id: teaId,
			slug: 'tea-tropik-meyveler',
			name_de: 'Tropische Fruchte',
			name_en: 'Tropical Fruits',
			name_ar: 'فواكه استوائية',
			name_tr: 'Tropik Meyveler Aromalı Bitki Çayı',
			image_path: '/assets-original/bitki-caylari/Gustea-Tropical-Fruits.png'
		},
		{
			category_id: teaId,
			slug: 'tea-yaseminli-yesil-cay',
			name_de: 'Jasmin-Gruntee',
			name_en: 'Jasmine Green Tea',
			name_ar: 'شاي أخضر بالياسمين',
			name_tr: 'Yaseminli Yeşil Çay',
			image_path: '/assets-original/bitki-caylari/Gustea-Jasmine-Green-Tea.png'
		},
		{
			category_id: teaId,
			slug: 'tea-yesil-cay',
			name_de: 'Gruntee',
			name_en: 'Green Tea',
			name_ar: 'شاي أخضر',
			name_tr: 'Yeşil Çay',
			image_path: '/assets-original/bitki-caylari/Gustea-Green-Tea.png'
		},

		// ===== FROZEN (4) =====
		{
			category_id: frozenId,
			slug: 'frz-karadut',
			name_de: 'Tiefkuhl-Schwarze-Maulbeere',
			name_en: 'Frozen Black Mulberry',
			name_ar: 'توت أسود مجمد',
			name_tr: 'Frozen Karadut',
			image_path: '/assets-original/dondurulmus-urunler/FrozenKaradut-321x1024.jpg'
		},
		{
			category_id: frozenId,
			slug: 'frz-narli-limonata',
			name_de: 'Granatapfel-Limonade',
			name_en: 'Pomegranate Lemonade',
			name_ar: 'ليمونادة بالرمان',
			name_tr: 'Narlı Limonata',
			image_path: '/assets-original/dondurulmus-urunler/narli-limonata_1-321x1024.jpg'
		},
		{
			category_id: frozenId,
			slug: 'frz-limonata',
			name_de: 'Limonade',
			name_en: 'Lemonade',
			name_ar: 'ليمونادة',
			name_tr: 'Limonata',
			image_path: '/assets-original/dondurulmus-urunler/Limonata_1-321x1024.jpg'
		},
		{
			category_id: frozenId,
			slug: 'frz-portakal-suyu',
			name_de: 'Orangensaft',
			name_en: 'Orange Juice',
			name_ar: 'عصير برتقال',
			name_tr: 'Portakal Suyu',
			image_path: '/assets-original/dondurulmus-urunler/portakal-suyu-321x1024.jpg'
		}
	]);

	const productCount = (await db.select().from(products)).length;
	const categoryCount = (await db.select().from(categories)).length;
	console.log(`Done: ${categoryCount} categories, ${productCount} products seeded.`);
}

main()
	.then(() => process.exit(0))
	.catch((e) => {
		console.error(e);
		process.exit(1);
	});
