<script lang="ts">
    import { getLocale, locales, cookieName, cookieMaxAge } from '$lib/messages';
    import { ChevronDown, Check } from '@lucide/svelte';
    import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
    import { Button } from '$lib/components/ui/button';

    const localeData: Record<string, { name: string; flag: string }> = {
        de: { name: 'Deutsch', flag: '🇩🇪' },
        en: { name: 'English', flag: '🇬🇧' },
        ar: { name: 'العربية', flag: '🇸🇦' },
        tr: { name: 'Türkçe', flag: '🇹🇷' }
    };

    function selectLocale(locale: string) {
        document.cookie = `${cookieName}=${locale}; path=/; max-age=${cookieMaxAge}`;
        location.reload();
    }
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger>
        {#snippet child({ props })}
            <Button {...props} variant="ghost" size="sm" class="gap-1.5 px-2">
                <span class="text-lg leading-none">{localeData[getLocale()]?.flag ?? '🌐'}</span>
                <ChevronDown class="size-3.5 text-muted-foreground" />
            </Button>
        {/snippet}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content align="end" class="min-w-36">
        {#each locales as locale (locale)}
            <DropdownMenu.Item onclick={() => selectLocale(locale)}>
                <span class="text-lg leading-none">{localeData[locale].flag}</span>
                <span>{localeData[locale].name}</span>
                {#if getLocale() === locale}
                    <Check class="ml-auto size-3.5 text-primary" />
                {/if}
            </DropdownMenu.Item>
        {/each}
    </DropdownMenu.Content>
</DropdownMenu.Root>
