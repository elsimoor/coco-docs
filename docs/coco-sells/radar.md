---
title: Le Radar
---

import Sketch from '@site/src/components/Sketch';


# Le Radar

Adresse : `/radar`. Titre : **Le Radar — Trésorerie dormante & Relances**.

<Sketch scene="radar" />

Le Radar liste ce qui attend une action. Il se met à jour tout seul. Cinq vues :

| Carte | Ce qu’elle contient |
| --- | --- |
| Devis sans réponse | Propositions envoyées ou consultées, non signées, non refusées, non expirées |
| Factures impayées | Factures échues, avec le solde restant |
| Docs non reçus | Pièces demandées et non reçues |
| Clients silencieux | Comptes sans contact depuis plus de 6 mois |
| Promesses | Promesses et engagements en retard |

Chaque liste est paginée. Vous pouvez chercher dans les fiches déjà enregistrées. **Réactiver les clients silencieux** prépare une campagne : rien n’est envoyé tout seul. **File d'approbation des relances** ouvre l’écran Relances.

Le montant d’un devis sans réponse est le hors taxe. Le montant d’une facture en souffrance est le solde TTC restant dû. Les deux ne s’additionnent pas. Voir [Devis](../calculs/devis) et [Trésorerie](../calculs/tresorerie).
