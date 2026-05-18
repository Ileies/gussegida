<script lang="ts">
	import * as m from '$lib/messages';
</script>

<section class="relative h-[75vh] min-h-[520px] overflow-hidden">
	<img
		src="/hero.jpg"
		alt="Gusse Gıda"
		class="absolute inset-0 w-full h-full object-cover"
	/>
	<div class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/65"></div>

	<div class="relative flex flex-col items-center justify-center h-full text-center px-4">
		<h1
			class="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight drop-shadow-lg font-[Caudex]"
		>
			{m.hero()}
		</h1>
		<div class="flex gap-4 flex-wrap justify-center">
			<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
			<a
				href="/products"
				class="bg-[#3d5c3d] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#2d4a2d] transition-colors shadow-lg"
			>
				{m.hero_cta_products()}
			</a>
			<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
			<a
				href="/catalog"
				class="bg-white/15 text-white border border-white/50 px-8 py-3 rounded-full text-sm font-semibold hover:bg-white/25 transition-colors backdrop-blur-sm shadow-lg"
			>
				{m.hero_cta_catalog()}
			</a>
		</div>
	</div>
</section>
