<script lang="ts">
	import * as m from '$lib/messages';

	const categories = [
		{
			slug: 'syrups',
			label: () => m.product_syrups(),
			image: '/assets-original/general/Untitled-1-1024x512.jpg'
		},
		{
			slug: 'topping',
			label: () => m.product_topping(),
			image: '/assets-original/general/Topping-Soslar.jpg'
		},
		{
			slug: 'fruit-sauces',
			label: () => m.product_fruit_sauces(),
			image: '/assets-original/general/Meyveli-Soslar.jpg'
		},
		{
			slug: 'bar-sauces',
			label: () => m.product_bar_sauces(),
			image: '/assets-original/general/Bar-Soslar.jpg'
		},
		{
			slug: 'deco-sauces',
			label: () => m.product_deco_sauces(),
			image: '/assets-original/general/Dekor-Soslar.jpg'
		},
		{
			slug: 'powder-drinks',
			label: () => m.product_powder_drinks(),
			image: '/cups.png'
		},
		{
			slug: 'herbal-teas',
			label: () => m.product_herbal_teas(),
			image: '/cups.png'
		},
		{
			slug: 'frozen',
			label: () => m.product_frozen(),
			image: '/cups.png'
		}
	];
</script>

<section class="bg-white py-16 px-4">
	<div class="max-w-6xl mx-auto">
		<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
			{#each categories as { slug, label, image } (slug)}
				<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
				<a
					href="/products/{slug}"
					class="group relative overflow-hidden rounded-xl aspect-square bg-[#e8ede6] block"
				>
					<img
						src={image}
						alt={label()}
						class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
					></div>
					<div class="absolute bottom-0 left-0 right-0 p-4">
						<p class="text-white font-semibold text-sm sm:text-base leading-tight drop-shadow">
							{label()}
						</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
