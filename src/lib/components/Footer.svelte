<script lang="ts">
    import * as m from '$lib/messages';
    import { Phone, Mail } from '@lucide/svelte';
    import { SiInstagram, SiFacebook, SiYoutube } from '@icons-pack/svelte-simple-icons';
    import LanguageSelector from './LanguageSelector.svelte';

    const navigation = [
        { href: '/', label: () => m.nav_home() },
        { href: '/about', label: () => m.nav_about() },
        { href: '/catalog', label: () => m.nav_catalog() },
        { href: '/blog', label: () => m.nav_blog() },
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

<footer class="font-[Lato]">
    <div class="bg-[#e8ede6]">
        <div class="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            <div class="flex flex-col gap-5">
                <a href="/">
                    <img src="/gusse-gida-logo.svg" alt="Gusse Gıda" class="h-10" />
                </a>
                <p class="text-sm text-[#6b7a6b] leading-relaxed">{m.footer_tagline()}</p>
                <div class="flex gap-4 mt-1">
                    <a href="#" aria-label="Instagram" class="text-[#6b7a6b] hover:text-[#3d5c3d] transition-colors">
                        <SiInstagram size={20} />
                    </a>
                    <a href="#" aria-label="Facebook" class="text-[#6b7a6b] hover:text-[#3d5c3d] transition-colors">
                        <SiFacebook size={20} />
                    </a>
                    <a href="#" aria-label="YouTube" class="text-[#6b7a6b] hover:text-[#3d5c3d] transition-colors">
                        <SiYoutube size={20} />
                    </a>
                </div>
            </div>

            <div class="flex flex-col gap-3">
                <h3 class="font-semibold text-[#3d5c3d] uppercase tracking-wider text-xs mb-1">{m.footer_nav()}</h3>
                {#each navigation as { href, label } (href)}
                    <a {href} class="text-sm text-[#6b7a6b] hover:text-[#3d5c3d] transition-colors w-fit">
                        {label()}
                    </a>
                {/each}
            </div>

            <div class="flex flex-col gap-3">
                <h3 class="font-semibold text-[#3d5c3d] uppercase tracking-wider text-xs mb-1">{m.footer_products()}</h3>
                {#each products as product, i (i)}
                    <a href="/catalog" class="text-sm text-[#6b7a6b] hover:text-[#3d5c3d] transition-colors w-fit">
                        {product()}
                    </a>
                {/each}
            </div>

            <div class="flex flex-col gap-4">
                <h3 class="font-semibold text-[#3d5c3d] uppercase tracking-wider text-xs mb-1">{m.nav_communication()}</h3>
                <div class="flex gap-2 items-center text-sm text-[#6b7a6b]">
                    <Phone size={16} class="shrink-0 text-[#6b7a6b]" />
                    <a href="tel:+905373059528" class="hover:text-[#3d5c3d] transition-colors">
                        +90 537 305 95 28
                    </a>
                </div>
                <div class="flex gap-2 items-center text-sm text-[#6b7a6b]">
                    <Mail size={16} class="shrink-0 text-[#6b7a6b]" />
                    <a href="mailto:info@gusse-me.com" class="hover:text-[#3d5c3d] transition-colors">
                        info@gusse-me.com
                    </a>
                </div>
            </div>

        </div>
    </div>

    <div class="bg-[#dde5da]">
        <div class="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span class="text-xs text-[#6b7a6b]">{m.footer_copyright()}</span>
            <LanguageSelector />
        </div>
    </div>
</footer>
