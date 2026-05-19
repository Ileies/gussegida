<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import * as m from '$lib/messages';
</script>

<section class="relative h-[75vh] min-h-[520px] overflow-hidden">
    <img
        src="/hero.jpg"
        alt="Gusse Gıda"
        class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/65"></div>

    <div class="relative flex flex-col items-center justify-center h-full text-center px-4">
        <h1
            class="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight drop-shadow-lg font-[Caudex]"
        >
            {m.hero()}
        </h1>
        <div class="flex gap-4 flex-wrap justify-center">
            <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
            <Button href="/products" size="lg" class="rounded-full shadow-lg px-8">
                {m.hero_cta_products()}
            </Button>
            <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
            <Button
                href="/catalog"
                variant="outline"
                size="lg"
                class="rounded-full shadow-lg px-8 bg-white/15 text-white border-white/50 hover:bg-white/25 backdrop-blur-sm"
            >
                {m.hero_cta_catalog()}
            </Button>
        </div>
    </div>
</section>
