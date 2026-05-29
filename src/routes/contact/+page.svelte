<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import { Input } from '$lib/components/ui/input';
    import { Textarea } from '$lib/components/ui/textarea';
    import { Label } from '$lib/components/ui/label';
    import * as Card from '$lib/components/ui/card';
    import { Phone, Mail, MapPin } from '@lucide/svelte';
    import * as m from '$lib/messages';

    let name = $state('');
    let email = $state('');
    let phone = $state('');
    let message = $state('');
</script>

<div class="bg-muted py-16 text-center">
    <h1 class="text-4xl font-bold text-primary font-[Caudex]">{m.nav_communication()}</h1>
</div>

<div class="max-w-6xl mx-auto px-6 py-16">
    <div class="grid md:grid-cols-2 gap-12">
        <div class="flex flex-col gap-8">
            <div>
                <h2 class="text-2xl font-bold text-foreground mb-1 font-[Caudex]">Gusse Gıda</h2>
                <p class="text-muted-foreground text-sm">Çerkezköy, Tekirdağ - Türkiye</p>
            </div>
            <div class="flex flex-col gap-5">
                <div class="flex items-start gap-3 text-muted-foreground">
                    <MapPin class="size-5 mt-0.5 shrink-0 text-primary" />
                    <p class="text-sm leading-relaxed">
                        Mimarsinan Mahallesi, 253. Sokak No:8<br />
                        Çerkezköy / Tekirdağ, Türkiye
                    </p>
                </div>
                <div class="flex items-start gap-3 text-muted-foreground">
                    <Phone class="size-5 mt-0.5 shrink-0 text-primary" />
                    <div class="flex flex-col gap-1 text-sm">
                        <a href="tel:+902125901595" class="hover:text-primary transition-colors">+90 212 590 15 95</a>
                        <a href="tel:+905375947278" class="hover:text-primary transition-colors">+90 537 594 72 78</a>
                        <a href="tel:+905373059528" class="hover:text-primary transition-colors font-medium">
                            +90 537 305 95 28 (Bestellungen)
                        </a>
                    </div>
                </div>
                <div class="flex items-center gap-3 text-muted-foreground">
                    <Mail class="size-5 shrink-0 text-primary" />
                    <a href="mailto:info@gussegida.com.tr" class="text-sm hover:text-primary transition-colors">
                        info@gussegida.com.tr
                    </a>
                </div>
            </div>
        </div>

        <Card.Root>
            <Card.Header>
                <Card.Title>Nachricht senden</Card.Title>
                <Card.Description>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</Card.Description>
            </Card.Header>
            <Card.Content class="flex flex-col gap-4">
                <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col gap-2">
                        <Label for="name">Name *</Label>
                        <Input id="name" bind:value={name} placeholder="Max Mustermann" required />
                    </div>
                    <div class="flex flex-col gap-2">
                        <Label for="phone">Telefon</Label>
                        <Input id="phone" bind:value={phone} type="tel" placeholder="+49 …" />
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <Label for="email">E-Mail *</Label>
                    <Input id="email" bind:value={email} type="email" placeholder="max@beispiel.de" required />
                </div>
                <div class="flex flex-col gap-2">
                    <Label for="message">Nachricht *</Label>
                    <Textarea id="message" bind:value={message} placeholder="Ihre Nachricht …" class="min-h-32" />
                </div>
                <Button type="submit" class="w-full">Absenden</Button>
            </Card.Content>
        </Card.Root>
    </div>
</div>
