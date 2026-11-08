---
title: Vue d'ensemble
---

import Sketch from '@site/src/components/Sketch';


# Vue d’ensemble

Adresse : `/overview`. Groupe **Pilotage**.

<Sketch scene="overview" />

C’est le tableau de bord de Coco Sells. Il lit le même moteur de chiffres que les rapports, la lucidité, les dossiers et l’assistant. Vous filtrez par société (Toutes, France, Maroc) et par période (ce mois-ci par défaut, ce trimestre, cette année, tout).

Trois cartes sont affichées au départ : **Encaissé du mois**, **Facturé & Reste dû**, **Pipeline ouvert**. Vous pouvez en ajouter d’autres et choisir les graphiques. Chaque carte ouvre le détail (factures, dossiers, trésorerie ou lucidité).

## Cartes

| Carte | Ce qu’elle montre | Détail |
| --- | --- | --- |
| Encaissé du mois | Somme des règlements de la période | Nombre de règlements, lien vers les factures payées |
| Facturé & Reste dû | CA facturé HT | Reste à encaisser, et le montant en retard de plus de 30 jours |
| Pipeline ouvert | Montant HT des dossiers ni gagnés ni perdus | Nombre de dossiers actifs |
| Prévision fin de mois | CA du mois + dossiers clôturables pondérés | Objectif et pourcentage atteint |
| Couverture pipeline | Pipeline ouvert ÷ objectif restant | Affiché en multiple (`2,4x`). Si l’objectif est déjà couvert : « Objectif atteint » |
| Trésorerie à 30 / 60 / 90 j | Solde projeté à 30 jours | Les soldes à 60 et 90 jours sont en dessous |
| MRR Abonnements | Revenu récurrent mensuel des abonnements actifs | Nombre d’actifs et variation nette |
| Demande → Encaissement | Médiane en jours | Masquée tant que moins de 3 dossiers sont entièrement encaissés |
| Taux de signature | Devis signés ÷ devis tranchés | Lien vers la Lucidité |
| Nouveaux clients | Clients créés sur la période | Le bas de carte rappelle le nombre d’organisations clientes |
| Devis en attente | HT des devis envoyés ou consultés, sans réponse | Nombre de propositions |
| Dossiers à risque | Dossiers ouverts trop silencieux ou en retard de clôture | Le nombre de critiques est mis en avant |
| Clients silencieux | Clients sans contact récent | Voir le [calcul exact](../calculs/clients) : le moteur utilise 180 jours |

## Graphiques

- **Trajectoire de facturation & encaissements** : six derniers mois, facturé HT et encaissé, devise par devise. Les avoirs diminuent le facturé.
- **Entonnoir de conversion commercial** : dossiers par étape, avec les probabilités d’étape.
- **Histogramme des encaissements mensuels** : règlements réels mois par mois.
- Graphiques **Power BI** si un rapport est configuré.

## Actions

Depuis cette page vous pouvez créer un contact, un dossier ou une facture, actualiser les chiffres, et réorganiser les cartes. La date `data_as_of` indique l’instant du dernier calcul.

Les formules sont détaillées dans [Principes](../calculs/principes), [Pipeline](../calculs/pipeline) et [Facturation](../calculs/facturation).
