<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import { Separator } from '$lib/components/ui/separator';
    import * as m from '$lib/messages';

    const features = [
        {
            title: () => m.feature_syrups_title(),
            text: () => m.feature_syrups_text(),
            image: '/hero.jpg',
            href: '/products/syrups',
            reverse: false
        },
        {
            title: () => m.feature_lemonade_title(),
            text: () => m.feature_lemonade_text(),
            image: '/hero.jpg',
            href: '/products/frozen',
            reverse: true
        },
        {
            title: () => m.feature_coffee_title(),
            text: () => m.feature_coffee_text(),
            image: '/hero.jpg',
            href: '/products/powder-drinks',
            reverse: false
        }
    ];
</script>

{#each features as { title, text, image, href, reverse }, i}
    {#if i > 0}
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <Separator />
        </div>
    {/if}
    <section class="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div class="flex flex-col {reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16">
            <div class="flex-1 w-full">
                <img src={image} alt={title()} class="w-full rounded-xl shadow-sm object-cover aspect-[4/3]" />
            </div>
            <div class="flex-1 flex flex-col gap-5">
                <h2 class="text-2xl sm:text-3xl font-bold text-foreground font-[Caudex]">{title()}</h2>
                <p class="text-muted-foreground leading-relaxed">{text()}</p>
                <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
                <Button {href} variant="outline" class="w-fit">
                    {m.hero_cta_products()}
                </Button>
            </div>
        </div>
    </section>
{/each}
