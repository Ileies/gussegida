<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import * as m from '$lib/messages';

    const categories = [
        { slug: 'syrups', label: () => m.product_syrups() },
        { slug: 'topping', label: () => m.product_topping() },
        { slug: 'fruit-sauces', label: () => m.product_fruit_sauces() },
        { slug: 'bar-sauces', label: () => m.product_bar_sauces() },
        { slug: 'deco-sauces', label: () => m.product_deco_sauces() },
        { slug: 'powder-drinks', label: () => m.product_powder_drinks() },
        { slug: 'herbal-teas', label: () => m.product_herbal_teas() },
        { slug: 'frozen', label: () => m.product_frozen() }
    ];
</script>

<section class="max-w-7xl mx-auto px-4 sm:px-6 py-16">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {#each categories as { slug, label } (slug)}
            <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
            <a href="/products/{slug}" class="group">
                <Card.Root class="overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                    <div class="aspect-square bg-muted flex items-center justify-center p-6">
                        <span class="text-4xl">🫙</span>
                    </div>
                    <Card.Header class="py-3 px-4">
                        <Card.Title class="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors">
                            {label()}
                        </Card.Title>
                    </Card.Header>
                </Card.Root>
            </a>
        {/each}
    </div>
</section>
