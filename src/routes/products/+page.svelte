<script lang="ts">
	import * as m from '$lib/messages';
	import { Badge } from '$lib/components/ui/badge';

	let { data } = $props();
</script>

<div class="bg-muted py-16 text-center">
	<h1 class="font-[Caudex] text-4xl font-bold text-primary">{m.nav_products()}</h1>
</div>

<div class="mx-auto max-w-6xl px-6 py-12">
	{#if data.categories.length === 0}
		<p class="py-16 text-center text-muted-foreground">-</p>
	{:else}
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
			{#each data.categories as cat (cat.slug)}
				<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
				<a
					href="/products/{cat.slug}"
					class="group relative block aspect-square overflow-hidden rounded-xl bg-muted"
				>
					{#if cat.image_path}
						<img
							src={cat.image_path}
							alt={cat.name}
							class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					{/if}
					<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
					<div class="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4">
						<p class="text-sm font-semibold leading-tight text-white drop-shadow sm:text-base">
							{cat.name}
						</p>
						{#if cat.productCount > 0}
							<Badge variant="secondary" class="shrink-0 text-xs">{cat.productCount}</Badge>
						{/if}
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>
