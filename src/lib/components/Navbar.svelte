<script lang="ts">
    import { page } from '$app/state';
    import { ChevronDown, Menu, X } from '@lucide/svelte';
    import LanguageSelector from './LanguageSelector.svelte';
    import * as m from '$lib/messages';

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
        { href: '/katalog.pdf', label: () => m.nav_catalog(), external: true },
        { href: '/contact', label: () => m.nav_communication() }
    ];

    let productsOpen = $state(false);
    let mobileOpen = $state(false);

    function isActive(href: string, exact = false) {
        if (exact) return page.url.pathname === href;
        return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
    }

    function closeProducts() {
        productsOpen = false;
    }

    function closeMobile() {
        mobileOpen = false;
    }
</script>

<header class="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border font-[Lato]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16 sm:h-20">
            <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
            <a href="/" class="flex-shrink-0">
                <img src="/gusse-gida-logo.svg" class="h-9 sm:h-11" alt="Gusse Gıda" />
            </a>

            <!-- Desktop nav -->
            <div class="hidden md:flex items-center gap-1">
                <nav class="flex items-center gap-1">
                    <!-- Products dropdown -->
                    <div class="relative">
                        <button
                            onclick={() => productsOpen = !productsOpen}
                            class="hover:bg-muted focus:bg-muted rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none inline-flex h-9 items-center gap-1 cursor-pointer {page.url.pathname.startsWith('/products') || productsOpen ? 'bg-accent text-accent-foreground' : ''}"
                        >
                            {m.nav_products()}
                            <ChevronDown class="size-3.5 text-muted-foreground ml-1 transition-transform {productsOpen ? 'rotate-180' : ''}" />
                        </button>

                        {#if productsOpen}
                            <div class="absolute top-full left-0 mt-1.5 z-50 w-52 rounded-lg bg-popover text-popover-foreground shadow ring-1 ring-foreground/10 p-1">
                                <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
                                <a
                                    href="/products"
                                    onclick={closeProducts}
                                    class="block px-3 py-2 text-sm font-semibold text-primary hover:bg-accent rounded-md transition-colors border-b border-border mb-1 pb-3"
                                >
                                    {m.nav_products()} →
                                </a>
                                {#each categories as { slug, label } (slug)}
                                    <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
                                    <a
                                        href="/products/{slug}"
                                        onclick={closeProducts}
                                        class="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                                    >
                                        {label()}
                                    </a>
                                {/each}
                            </div>
                            <!-- Click outside to close -->
                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                            <!-- svelte-ignore a11y_no_static_element_interactions -->
                            <div class="fixed inset-0 z-40" onclick={closeProducts}></div>
                        {/if}
                    </div>

                    <!-- Other nav links -->
                    {#each navigation as { href, label, exact, external } (href)}
                        <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
                        <a
                            {href}
                            target={external ? '_blank' : undefined}
                            rel={external ? 'noopener' : undefined}
                            class="hover:bg-muted focus:bg-muted rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none inline-flex h-9 items-center {isActive(href, exact) ? 'bg-accent text-accent-foreground font-semibold' : ''}"
                        >
                            {label()}
                        </a>
                    {/each}
                </nav>
                <LanguageSelector />
            </div>

            <!-- Mobile -->
            <div class="flex md:hidden items-center gap-1">
                <LanguageSelector />
                <button
                    onclick={() => mobileOpen = !mobileOpen}
                    class="hover:bg-muted hover:text-foreground inline-flex size-8 shrink-0 items-center justify-center rounded-lg transition-all focus-visible:outline-none"
                    aria-label="Menü öffnen"
                    aria-expanded={mobileOpen}
                >
                    {#if mobileOpen}
                        <X class="size-4" />
                    {:else}
                        <Menu class="size-4" />
                    {/if}
                </button>
            </div>
        </div>
    </div>
</header>

<!-- Mobile menu -->
{#if mobileOpen}
    <div class="md:hidden fixed inset-x-0 top-[4rem] z-30 bg-background border-b border-border shadow-lg font-[Lato]">
        <nav class="flex flex-col gap-0.5 p-3">
            {#each navigation as { href, label, exact, external } (href)}
                <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
                <a
                    {href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener' : undefined}
                    onclick={closeMobile}
                    class="px-3 py-2.5 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground {isActive(href, exact) ? 'bg-accent text-accent-foreground font-semibold' : 'text-muted-foreground'}"
                >
                    {label()}
                </a>
            {/each}
            <div class="pt-2 mt-1 border-t border-border">
                <p class="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {m.nav_products()}
                </p>
                <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
                <a
                    href="/products"
                    onclick={closeMobile}
                    class="block px-3 py-2 text-sm font-medium text-primary hover:bg-accent rounded-md transition-colors"
                >
                    {m.nav_products()} (alle)
                </a>
                {#each categories as { slug, label } (slug)}
                    <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
                    <a
                        href="/products/{slug}"
                        onclick={closeMobile}
                        class="block px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                    >
                        {label()}
                    </a>
                {/each}
            </div>
        </nav>
    </div>
    <!-- Backdrop -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="md:hidden fixed inset-0 z-20 bg-black/20" onclick={closeMobile}></div>
{/if}
