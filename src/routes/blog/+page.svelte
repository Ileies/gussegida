<script lang="ts">
	import * as m from '$lib/messages';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="bg-muted py-16 text-center">
	<h1 class="font-[Caudex] text-4xl font-bold text-primary">{m.nav_blog()}</h1>
</div>

<div class="mx-auto max-w-4xl px-6 py-20 text-center">
	<p class="text-lg text-muted-foreground">
		Rezepte, Tipps und Neuigkeiten rund um Gusse Gida - bald verfugbar.
	</p>
	<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
	<Button href="/contact" variant="outline" class="mt-8">Kontakt aufnehmen</Button>
</div>
