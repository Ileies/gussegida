<script lang="ts">
	import './layout.css';
	import favicon from '/favicon.svg?url';
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Gusse Gida - Kaffee- &amp; Cocktail-Sirupe</title>
	<meta
		name="description"
		content="Gusse Gida bietet uber 166 Produkte: Sirupe, Topping-Saucen, Fruchtsaucen und mehr fur Cafes und Bars. Produktion in Cerkezkoy, Turkei."
	/>
	<meta property="og:title" content="Gusse Gida - Kaffee- &amp; Cocktail-Sirupe" />
	<meta
		property="og:description"
		content="Uber 166 Produkte fur Cafes und Bars: Sirupe, Saucen, Krautertees und Tiefkühlprodukte."
	/>
	<meta property="og:image" content="/assets-original/general/Untitled-1-1024x512.jpg" />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="min-h-[100dvh] flex flex-col">
    <Navbar/>
    {@render children()}
</div>

<Footer/>

<!--
    <header class="border-b bg-white">
        <div class="mx-auto max-w-6xl px-4 py-3">
            <nav class="flex items-center justify-between">
                <a href="#" class="font-semibold">Brand</a>
                <div class="flex gap-4">
                    <a href="#" class="text-sm hover:underline">Link</a>
                    <a href="#" class="text-sm hover:underline">Link</a>
                </div>
            </nav>
        </div>
    </header>

    <main class="flex-1">
        <div class="mx-auto max-w-6xl px-4 py-8">
            <div class="h-px"></div>
        </div>
    </main>
-->

