<script lang="ts">
	import * as m from '$lib/messages';
	import { Button } from '$lib/components/ui/button';
	import { Download } from '@lucide/svelte';
</script>

<div class="bg-muted py-16 text-center">
	<h1 class="font-[Caudex] text-4xl font-bold text-primary">{m.nav_catalog()}</h1>
</div>

<div class="mx-auto max-w-3xl px-6 py-20 flex flex-col items-center gap-6 text-center">
	<p class="text-lg text-muted-foreground leading-relaxed">
		Laden Sie unseren vollstandigen Produktkatalog herunter und entdecken Sie alle 166 Produkte aus
		8 Kategorien.
	</p>
	<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
	<Button href="/contact" class="gap-2">
		<Download class="size-4" />
		Katalog anfordern
	</Button>
	<p class="text-sm text-muted-foreground">
		Fur den Katalog-Download kontaktieren Sie uns bitte direkt.
	</p>
</div>
