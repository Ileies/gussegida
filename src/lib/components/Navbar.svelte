<script lang="ts">
    import { page } from '$app/state';
    import { Menu } from '@lucide/svelte';
    import * as Nav from '$lib/components/ui/navigation-menu';
    import * as Sheet from '$lib/components/ui/sheet';
    import { Button } from '$lib/components/ui/button';
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
        { href: '/catalog', label: () => m.nav_catalog() },
        { href: '/blog', label: () => m.nav_blog() },
        { href: '/contact', label: () => m.nav_communication() }
    ];

    function isActive(href: string, exact = false) {
        if (exact) return page.url.pathname === href;
        return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
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
                <Nav.Root viewport={false}>
                    <Nav.List>
                        <Nav.Item>
                            <Nav.Trigger class={page.url.pathname.startsWith('/products') ? 'bg-accent! text-accent-foreground!' : ''}>
                                {m.nav_products()}
                            </Nav.Trigger>
                            <Nav.Content class="w-52">
                                <div class="flex flex-col p-1">
                                    <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
                                    <a
                                        href="/products"
                                        class="px-3 py-2 text-sm font-semibold text-primary hover:bg-accent rounded-md transition-colors border-b border-border mb-1 pb-3"
                                    >
                                        {m.nav_products()} →
                                    </a>
                                    {#each categories as { slug, label } (slug)}
                                        <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
                                        <Nav.Link href="/products/{slug}" class="rounded-md">
                                            {label()}
                                        </Nav.Link>
                                    {/each}
                                </div>
                            </Nav.Content>
                        </Nav.Item>

                        {#each navigation as { href, label, exact } (href)}
                            <Nav.Item>
                                <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
                                <Nav.Link {href} active={isActive(href, exact)}>
                                    {label()}
                                </Nav.Link>
                            </Nav.Item>
                        {/each}
                    </Nav.List>
                </Nav.Root>
                <LanguageSelector />
            </div>

            <!-- Mobile -->
            <div class="flex md:hidden items-center gap-1">
                <LanguageSelector />
                <Sheet.Root>
                    <Sheet.Trigger>
                        {#snippet child({ props })}
                            <Button {...props} variant="ghost" size="icon" aria-label="Menü öffnen">
                                <Menu />
                            </Button>
                        {/snippet}
                    </Sheet.Trigger>
                    <Sheet.Content side="right">
                        <Sheet.Header>
                            <Sheet.Title>
                                <img src="/gusse-gida-logo.svg" class="h-8" alt="Gusse Gıda" />
                            </Sheet.Title>
                        </Sheet.Header>
                        <nav class="flex flex-col gap-0.5 mt-4 px-2 font-[Lato]">
                            {#each navigation as { href, label, exact } (href)}
                                <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
                                <a
                                    {href}
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
                                    class="block px-3 py-2 text-sm font-medium text-primary hover:bg-accent rounded-md transition-colors"
                                >
                                    {m.nav_products()} (alle)
                                </a>
                                {#each categories as { slug, label } (slug)}
                                    <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
                                    <a
                                        href="/products/{slug}"
                                        class="block px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                                    >
                                        {label()}
                                    </a>
                                {/each}
                            </div>
                        </nav>
                    </Sheet.Content>
                </Sheet.Root>
            </div>
        </div>
    </div>
</header>
