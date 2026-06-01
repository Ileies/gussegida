<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex min-h-[60dvh] flex-col items-center justify-center gap-6 px-6 text-center">
	<p class="font-[Caudex] text-8xl font-bold text-primary/20">{$page.status}</p>
	<div class="flex flex-col gap-2">
		<h1 class="font-[Caudex] text-2xl font-bold text-foreground">
			{#if $page.status === 404}
				Seite nicht gefunden
			{:else}
				Ein Fehler ist aufgetreten
			{/if}
		</h1>
		<p class="text-muted-foreground">
			{$page.error?.message ?? 'Bitte versuchen Sie es spater erneut.'}
		</p>
	</div>
	<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
	<Button href="/" variant="outline">Zur Startseite</Button>
</div>
