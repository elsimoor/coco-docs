---
title: Indicateurs clés
---

import Sketch from '@site/src/components/Sketch';


# Indicateurs clés (KPIs)

Adresse : `/kpis`.

<Sketch scene="indicateurs" />

Cet écran est un constructeur de tableaux. Il ne remplace pas les indicateurs officiels de la Vue d’ensemble : il vous laisse composer des widgets sur quatre sources.

| Source | Ce que vous pouvez grouper | Champs chiffrés |
| --- | --- | --- |
| Clients | Statut, source, pays, ville, type, mois de création | Score, valeur estimée |
| Dossiers | Étape, pays, ville, risque, mois | Valeur, probabilité, santé |
| Factures | Statut, type, mois | Total, sous-total |
| Tâches | Statut, priorité, assignation, mois | — |

Mesures : **nombre**, **somme**, **moyenne**. Graphiques : chiffre, barres, courbe, aire, répartition, carte.

Deux jointures existent :

- dossiers vers clients (pays, ville, statut, source du client) ;
- factures vers dossiers (étape, pays, ville, risque), rapprochées par le nom du client.

## Modèles fournis

- Pipeline par étape : somme de la valeur des dossiers, groupée par étape.
- Sources des clients : nombre par source.
- Revenu mensuel : somme du total des factures, filtrée sur le type facture.
- Score par pays : score moyen, pays normalisé.
- Dossiers par risque : nombre par niveau.
- Carte des clients, et carte de la valeur des dossiers par pays du client.

Un pourcentage est reconnu si le champ est une probabilité ou si le titre parle d’un taux. Un montant est formaté avec une devise. Ces widgets somment le champ choisi : ils n’appliquent pas à eux seuls la déduction des avoirs ni la séparation devis / factures du moteur officiel. Pour un chiffre de pilotage, préférez la [Vue d’ensemble](./vue-ensemble.md) ou les [Rapports](./rapports.md).
