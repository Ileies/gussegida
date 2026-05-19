<script lang="ts">
	import * as m from '$lib/messages';
	import * as Card from '$lib/components/ui/card';
	import { ChevronRight } from '@lucide/svelte';

	let { data } = $props();
</script>

<div class="border-b">
	<div class="mx-auto flex max-w-6xl items-center gap-2 px-6 py-3 text-sm text-muted-foreground">
		<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
		<a href="/products" class="transition-colors hover:text-primary">{m.nav_products()}</a>
		<ChevronRight class="size-3.5" />
		<span class="text-foreground">{data.category.name}</span>
	</div>
</div>

<div class="bg-muted py-16 text-center">
	<h1 class="font-[Caudex] text-4xl font-bold text-primary">{data.category.name}</h1>
	{#if data.products.length > 0}
		<p class="mt-2 text-sm text-muted-foreground">
			{m.products_count({ count: data.products.length })}
		</p>
	{/if}
</div>

<div class="mx-auto max-w-6xl px-6 py-12">
	{#if data.products.length === 0}
		<p class="py-16 text-center text-muted-foreground">—</p>
	{:else}
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
			{#each data.products as product (product.slug)}
				<Card.Root class="group overflow-hidden">
					<div class="aspect-[3/4] overflow-hidden bg-muted">
						{#if product.image_path}
							<img
								src={product.image_path}
								alt={product.name}
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						{:else}
							<div class="flex h-full w-full items-center justify-center text-4xl text-muted-foreground">
								🫙
							</div>
						{/if}
					</div>
					<Card.Content class="p-3">
						<p class="text-center text-xs font-medium leading-snug text-foreground">
							{product.name}
						</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	{/if}
</div>
