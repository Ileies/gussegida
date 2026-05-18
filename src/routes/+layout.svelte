<script lang="ts">
	import './layout.css';
	import favicon from '/favicon.svg?url';
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
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

