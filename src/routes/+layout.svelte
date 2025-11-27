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

<Navbar/>
{@render children()}
<Footer/>
