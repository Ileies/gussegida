<script lang="ts">
    import { getLocale, locales, cookieName, cookieMaxAge } from '$lib/messages';
    import { ChevronDown, Check } from '@lucide/svelte';

    const localeData: Record<string, { name: string; flag: string }> = {
        de: { name: 'Deutsch', flag: '🇩🇪' },
        en: { name: 'English', flag: '🇬🇧' },
        ar: { name: 'العربية', flag: '🇸🇦' },
        tr: { name: 'Türkçe', flag: '🇹🇷' }
    };

    let open = $state(false);

    function selectLocale(locale: string) {
        open = false;
        document.cookie = `${cookieName}=${locale}; path=/; max-age=${cookieMaxAge}`;
        location.reload();
    }

    function toggle() {
        open = !open;
    }

    function close() {
        open = false;
    }
</script>

<div class="relative">
    <button
        onclick={toggle}
        class="inline-flex items-center gap-1.5 px-2 h-7 rounded-lg text-sm font-medium hover:bg-muted hover:text-foreground transition-all focus-visible:outline-none cursor-pointer {open ? 'bg-muted text-foreground' : ''}"
        aria-haspopup="listbox"
        aria-expanded={open}
    >
        <span class="text-lg leading-none">{localeData[getLocale()]?.flag ?? '🌐'}</span>
        <ChevronDown class="size-3.5 text-muted-foreground transition-transform {open ? 'rotate-180' : ''}" />
    </button>

    {#if open}
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <div
            role="listbox"
            class="absolute right-0 top-full mt-1 z-50 min-w-36 rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 p-1"
            onkeydown={(e) => e.key === 'Escape' && close()}
        >
            {#each locales as locale (locale)}
                <button
                    role="option"
                    aria-selected={getLocale() === locale}
                    onclick={() => selectLocale(locale)}
                    class="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted cursor-pointer"
                >
                    <span class="text-lg leading-none">{localeData[locale].flag}</span>
                    <span>{localeData[locale].name}</span>
                    {#if getLocale() === locale}
                        <Check class="ml-auto size-3.5 text-primary" />
                    {/if}
                </button>
            {/each}
        </div>

        <!-- Click outside to close -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="fixed inset-0 z-40" onclick={close}></div>
    {/if}
</div>
