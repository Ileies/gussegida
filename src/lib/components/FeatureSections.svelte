<script lang="ts">
	import * as m from '$lib/messages';

	const sections = [
		{
			title: () => m.feature_syrups_title(),
			text: () => m.feature_syrups_text(),
			image: '/assets-original/general/gorsel2.jpg',
			reverse: false
		},
		{
			title: () => m.feature_lemonade_title(),
			text: () => m.feature_lemonade_text(),
			image: '/assets-original/general/gorsel3-1.jpg',
			reverse: true
		},
		{
			title: () => m.feature_coffee_title(),
			text: () => m.feature_coffee_text(),
			image: '/assets-original/general/Gorselv2.jpg',
			reverse: false
		}
	];
</script>

<div class="bg-[#f5f8f4]">
	{#each sections as { title, text, image, reverse }, i (i)}
		<section class="max-w-6xl mx-auto px-4 py-16 flex flex-col {reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16">
			<div class="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-md">
				<img
					src={image}
					alt={title()}
					class="w-full h-72 md:h-96 object-cover"
				/>
			</div>
			<div class="w-full md:w-1/2 flex flex-col gap-4">
				<h2 class="text-2xl sm:text-3xl font-bold text-[#1c4e2a] font-[Caudex]">
					{title()}
				</h2>
				<p class="text-[#6b7a6b] leading-relaxed text-base sm:text-lg">
					{text()}
				</p>
				<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
				<a
					href="/products"
					class="mt-2 self-start text-[#3d5c3d] font-semibold hover:underline text-sm"
				>
					{m.hero_cta_products()} →
				</a>
			</div>
		</section>
	{/each}
</div>
