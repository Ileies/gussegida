<script lang="ts">
	import LanguageSelector from './LanguageSelector.svelte';
	import * as m from '$lib/messages';
	import { page } from '$app/state';
	import { Menu, X, ChevronDown } from '@lucide/svelte';

	let mobileOpen = $state(false);
	let productsOpen = $state(false);

	const categories = [
		{ slug: 'syrups', label: () => m.product_syrups() },
		{ slug: 'topping', label: () => m.product_topping() },
		{ slug: 'fruit-sauces', label: () => m.product_fruit_sauces() },
		{ slug: 'bar-sauces', label: () => m.product_bar_sauces() },
		{ slug: 'deco-sauces', label: () => m.product_deco_sauces() },
		{ slug: 'powder-drinks', label: () => m.product_powder_drinks() },
		{ slug: 'herbal-teas', label: () => m.product_herbal_teas() },
		{ slug: 'frozen', label: () => m.product_frozen() }
	];

	const navigation = [
		{ href: '/', label: () => m.nav_home(), exact: true },
		{ href: '/about', label: () => m.nav_about() },
		{ href: '/catalog', label: () => m.nav_catalog() },
		{ href: '/blog', label: () => m.nav_blog() },
		{ href: '/contact', label: () => m.nav_communication() }
	];

	function isActive(href: string, exact = false) {
		if (exact) return page.url.pathname === href;
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}

	function closeAll() {
		mobileOpen = false;
		productsOpen = false;
	}
</script>

<header
	class="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm font-[Lato]"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<div class="flex items-center justify-between h-16 sm:h-20">
			<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
			<a href="/" class="flex-shrink-0">
				<img src="/gusse-gida-logo.svg" class="h-9 sm:h-11" alt="Gusse Gıda" />
			</a>

			<!-- Desktop nav -->
			<nav class="hidden md:flex items-center gap-1">
				<!-- Produkte dropdown -->
				<div class="relative">
					<button
						onclick={() => (productsOpen = !productsOpen)}
						class="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors {page.url.pathname.startsWith('/products') ? 'bg-[#e8ede6] text-[#3d5c3d]' : 'text-slate-700 hover:bg-slate-100'}"
						aria-expanded={productsOpen}
					>
						{m.nav_products()}
						<ChevronDown
							class="w-4 h-4 transition-transform duration-200 {productsOpen ? 'rotate-180' : ''}"
						/>
					</button>

					{#if productsOpen}
						<button
							class="fixed inset-0 z-10 cursor-default"
							onclick={() => (productsOpen = false)}
							tabindex="-1"
							aria-hidden="true"
						></button>
						<div
							class="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-52 z-20"
						>
							<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
							<a
								href="/products"
								onclick={() => (productsOpen = false)}
								class="block px-4 py-2 text-sm font-semibold text-[#3d5c3d] hover:bg-[#e8ede6] transition-colors border-b border-slate-100"
							>
								{m.nav_products()} →
							</a>
							{#each categories as { slug, label } (slug)}
								<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
								<a
									href="/products/{slug}"
									onclick={() => (productsOpen = false)}
									class="block px-4 py-2 text-sm text-slate-700 hover:bg-[#e8ede6] hover:text-[#3d5c3d] transition-colors"
								>
									{label()}
								</a>
							{/each}
						</div>
					{/if}
				</div>

				{#each navigation as { href, label, exact } (href)}
					<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
					<a
						{href}
						class="px-4 py-2 rounded-md text-sm font-medium transition-colors {isActive(href, exact) ? 'bg-[#e8ede6] text-[#3d5c3d]' : 'text-slate-700 hover:bg-slate-100'}"
					>
						{label()}
					</a>
				{/each}
			</nav>

			<div class="flex items-center gap-1">
				<div class="hidden md:block">
					<LanguageSelector />
				</div>
				<button
					class="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
					onclick={() => (mobileOpen = !mobileOpen)}
					aria-expanded={mobileOpen}
					aria-label="Menü"
				>
					{#if mobileOpen}
						<X class="w-5 h-5" />
					{:else}
						<Menu class="w-5 h-5" />
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="md:hidden border-t border-slate-100 bg-white pb-2">
			<div class="px-4 py-2 space-y-0.5">
				{#each navigation as { href, label, exact } (href)}
					<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
					<a
						{href}
						onclick={closeAll}
						class="block px-3 py-2.5 rounded-md text-sm font-medium transition-colors {isActive(href, exact) ? 'bg-[#e8ede6] text-[#3d5c3d]' : 'text-slate-700 hover:bg-slate-100'}"
					>
						{label()}
					</a>
				{/each}

				<div class="pt-2 border-t border-slate-100 mt-1">
					<p class="px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
						{m.nav_products()}
					</p>
					<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
					<a
						href="/products"
						onclick={closeAll}
						class="block px-3 py-2 rounded-md text-sm font-medium text-[#3d5c3d] hover:bg-[#e8ede6] transition-colors"
					>
						{m.nav_products()} (alle)
					</a>
					{#each categories as { slug, label } (slug)}
						<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
						<a
							href="/products/{slug}"
							onclick={closeAll}
							class="block px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-[#e8ede6] hover:text-[#3d5c3d] transition-colors"
						>
							{label()}
						</a>
					{/each}
				</div>
			</div>

			<div class="px-4 pt-2 border-t border-slate-100 mt-1">
				<LanguageSelector />
			</div>
		</div>
	{/if}
</header>
