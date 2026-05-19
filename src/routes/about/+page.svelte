<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import { Separator } from '$lib/components/ui/separator';
    import { Badge } from '$lib/components/ui/badge';
    import { Button } from '$lib/components/ui/button';
</script>

<div class="bg-muted py-16 text-center">
    <h1 class="text-4xl font-bold text-primary font-[Caudex]">Über uns</h1>
</div>

<div class="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-12">
    <p class="text-lg text-muted-foreground leading-relaxed text-center">
        Mit Cocktail- und Kaffeesirupen sowie Fruchtpürees haben wir unsere Produktion begonnen und
        bieten heute insgesamt 209 verschiedene Produkte an, darunter 101 Sirupsorten und 38 Püreesorten.
        In der Produktionsphase bringen wir unser Team aus erfahrenen Lebensmittelingenieuren mit den
        Informationen zusammen, die unser F&amp;E-Team von Barpersonal aus allen Regionen der Türkei gesammelt hat.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {#each [
            { value: '209', label: 'Produkte' },
            { value: '8', label: 'Kategorien' },
            { value: 'Çerkezköy', label: 'Produktionsstandort' }
        ] as stat}
            <Card.Root class="text-center">
                <Card.Content class="py-8">
                    <p class="text-3xl font-bold text-primary font-[Caudex]">{stat.value}</p>
                    <p class="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </Card.Content>
            </Card.Root>
        {/each}
    </div>

    <Separator />

    <div class="flex flex-col gap-4">
        <Badge variant="outline" class="w-fit text-primary border-primary/40">Unsere Philosophie</Badge>
        <h2 class="text-2xl font-bold text-foreground font-[Caudex]">Innovation trifft Tradition</h2>
        <p class="text-muted-foreground leading-relaxed">
            Mit unserem innovativen Stil bieten wir unseren Geschäftspartnern alle Produkte, die sie suchen,
            und verbinden mit unseren einzigartigen Produkten die Fantasie des Barpersonals, um eine völlig
            neue Welt in unserem Bereich zu schaffen.
        </p>
        <!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
        <Button href="/catalog" variant="outline" class="w-fit mt-2">Katalog ansehen</Button>
    </div>
</div>
