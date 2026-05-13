<script lang="ts">
    import LanguageSelector from './LanguageSelector.svelte';
    import * as m from '$lib/messages';

    const navigation = [
        { href: "/", label: () => m.nav_home() },
        { href: "/about", label: () => m.nav_about() },
        { href: "/catalog", label: () => m.nav_catalog() },
        { href: "/blog", label: () => m.nav_blog() },
        { href: "/contact", label: () => m.nav_communication() }
    ];
</script>

<div class="w-full h-20 flex justify-between items-center font-[Lato]">
    <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
    <a href="/" class="p-5 h-full"><img src="/gusse-gida-logo.svg" class="h-full" alt="Logo"></a>
    <div class="flex items-center h-full">
        <ul class="flex h-full">
            {#each navigation as { href, label } (href)}
                <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
                <a {href} class="flex items-center px-7 cursor-pointer hover:bg-slate-200 {typeof location !== 'undefined' && location.pathname.startsWith(href) ? 'bg-slate-200' : ''}"><span>{label()}</span></a>
            {/each}
        </ul>
        <LanguageSelector />
    </div>
</div>
