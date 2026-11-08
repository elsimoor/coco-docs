---
title: Chauffe d'adresses
---

import Sketch from '@site/src/components/Sketch';


# Chauffe d’adresses

Adresse : `/cocoinbox`. Le menu l’appelle **Chauffe d’adresses (Warmup)**.

<Sketch scene="warmup" />

L’écran suit la réputation des adresses d’envoi. Quatre onglets : **Chauffe & Délivrabilité**, **Campagnes de Prospection**, **Boîtes Connectées**, **Journal des Événements**. La chauffe se met en pause. Une boîte est en chauffe, prête, ou déconnectée. **Ouvrir CocoInbox** utilise la même connexion unique que le sélecteur de produit.

## Le pourcentage affiché

`chauffe réelle = e-mails envoyés aujourd’hui ÷ capacité quotidienne`

Le résultat est plafonné à 100 %. Si aucune capacité n’est enregistrée, la capacité prise pour ce calcul est 250. Exemple : 185 envois sur 250 donnent 74 %.

Ce pourcentage décrit le volume du jour. Il ne dit pas qu’un e-mail a été ouvert, ni qu’un devis a été signé.
