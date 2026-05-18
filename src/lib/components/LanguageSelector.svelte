<script lang="ts">
	import { getLocale, locales, cookieName, cookieMaxAge } from '$lib/messages';
	import { ChevronDown } from '@lucide/svelte';

	let open = $state(false);

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

<div class="relative z-50">
	<button
		onclick={() => (open = !open)}
		class="flex items-center gap-2 px-4 py-2 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
		aria-expanded={open}
		aria-haspopup="listbox"
		aria-label="Sprache wählen"
	>
		<span class="text-xl">{localeData[getLocale()]?.flag ?? '🌐'}</span>
		<ChevronDown class="w-4 h-4 transition-transform duration-200 {open ? 'rotate-180' : ''}" />
	</button>

	{#if open}
		<button
			class="fixed inset-0 z-40 cursor-default"
			onclick={() => (open = false)}
			tabindex="-1"
			aria-hidden="true"
		></button>
		<ul
			class="absolute top-full right-0 mt-1 bg-white border border-slate-200 rounded-md shadow-lg min-w-40 py-1 z-50"
			role="listbox"
		>
			{#each locales as locale (locale)}
				<li>
					<button
						onclick={() => selectLocale(locale)}
						class="w-full text-left px-4 py-2 hover:bg-slate-100 transition-colors cursor-pointer flex items-center gap-3 {getLocale() === locale ? 'bg-slate-100 font-semibold' : ''}"
						role="option"
						aria-selected={getLocale() === locale}
					>
						<span class="text-xl">{localeData[locale].flag}</span>
						<span>{localeData[locale].name}</span>
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
