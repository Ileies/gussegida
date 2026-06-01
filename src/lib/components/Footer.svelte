<script lang="ts">
    import * as m from '$lib/messages';
    import { Phone, Mail } from '@lucide/svelte';
    import { SiInstagram, SiFacebook, SiYoutube } from '@icons-pack/svelte-simple-icons';
    import { Separator } from '$lib/components/ui/separator';
    import LanguageSelector from './LanguageSelector.svelte';

    const navigation = [
        { href: '/', label: () => m.nav_home() },
        { href: '/about', label: () => m.nav_about() },
        { href: '/katalog.pdf', label: () => m.nav_catalog() },
        { href: '/contact', label: () => m.nav_communication() }
    ];

    const products = [
        () => m.product_syrups(),
        () => m.product_topping(),
        () => m.product_fruit_sauces(),
        () => m.product_deco_sauces(),
        () => m.product_bar_sauces(),
        () => m.product_powder_drinks(),
        () => m.product_ice_cream_paste(),
        () => m.product_herbal_teas()
    ];
</script>

<footer class="bg-muted font-[Lato]">
    <div class="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div class="flex flex-col gap-5">
            <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
            <a href="/">
                <img src="/gusse-gida-logo.svg" alt="Gusse Gıda" class="h-10" />
            </a>
            <p class="text-sm text-muted-foreground leading-relaxed">{m.footer_tagline()}</p>
            <div class="flex gap-4 mt-1">
                <a href="#" aria-label="Instagram" class="text-muted-foreground hover:text-primary transition-colors">
                    <SiInstagram size={20} />
                </a>
                <a href="#" aria-label="Facebook" class="text-muted-foreground hover:text-primary transition-colors">
                    <SiFacebook size={20} />
                </a>
                <a href="#" aria-label="YouTube" class="text-muted-foreground hover:text-primary transition-colors">
                    <SiYoutube size={20} />
                </a>
            </div>
        </div>

        <div class="flex flex-col gap-3">
            <h3 class="font-semibold text-primary uppercase tracking-wider text-xs mb-1">{m.footer_nav()}</h3>
            {#each navigation as { href, label } (href)}
                <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
                <a {href} class="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">
                    {label()}
                </a>
            {/each}
        </div>

        <div class="flex flex-col gap-3">
            <h3 class="font-semibold text-primary uppercase tracking-wider text-xs mb-1">{m.footer_products()}</h3>
            {#each products as product, i (i)}
                <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
                <a href="/products" class="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">
                    {product()}
                </a>
            {/each}
        </div>

        <div class="flex flex-col gap-4">
            <h3 class="font-semibold text-primary uppercase tracking-wider text-xs mb-1">{m.nav_communication()}</h3>
            <div class="flex gap-2 items-center text-sm text-muted-foreground">
                <Phone size={16} class="shrink-0" />
                <a href="tel:+905373059528" class="hover:text-primary transition-colors">
                    +90 537 305 95 28
                </a>
            </div>
            <div class="flex gap-2 items-center text-sm text-muted-foreground">
                <Mail size={16} class="shrink-0" />
                <a href="mailto:info@gussegida.com.tr" class="hover:text-primary transition-colors">
                    info@gussegida.com.tr
                </a>
            </div>
        </div>
    </div>

    <Separator />

    <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-xs text-muted-foreground">{m.footer_copyright()}</span>
        <LanguageSelector />
    </div>
</footer>
