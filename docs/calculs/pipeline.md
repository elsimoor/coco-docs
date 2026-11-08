---
title: Pipeline et prévisions
---

import Sketch from '@site/src/components/Sketch';


# Pipeline et prévisions

Les étapes officielles sont Nouveau, Qualifié, Devis envoyé, En négociation, Gagné, Perdu. Leurs probabilités par défaut sont 10 %, 25 %, 50 %, 75 %, 100 % et 0 %.

<Sketch scene="calc-pipeline" />

## Valeur du pipeline ouvert

Somme des montants HT des dossiers dont l’étape n’est ni Gagné ni Perdu.

`pipeline EUR = Σ valeur des dossiers ouverts en EUR`

Même formule en MAD, dans une autre colonne. Le nombre de dossiers ouverts compte aussi les montants à zéro.

## Prévision pondérée

Pour chaque dossier ouvert :

`montant × probabilité du dossier`

Si le dossier n’a pas de probabilité, le calcul prend **50 %**, et non la probabilité par défaut de l’étape. La somme est faite par devise.

## Prévision de fin de mois

`prévision = CA facturé HT du mois civil en cours + dossiers ouverts clôturables ce mois, pondérés`

Un dossier est clôturable ce mois s’il n’a pas de date de clôture, ou si cette date tombe dans le mois. Sa contribution est `valeur × probabilité` (50 % si la probabilité manque).

`taux d’atteinte = prévision ÷ objectif mensuel`

`écart = prévision − objectif`

Le CA du mois ne prend que les factures (pas les devis), hors brouillon et hors annulé. Les avoirs sont soustraits.

## Couverture du pipeline

`reste à faire = max(0, objectif − CA HT du mois)`

`couverture = pipeline ouvert ÷ reste à faire`

Le résultat s’affiche en multiple (`1,5x` signifie que le pipeline vaut une fois et demie le reste à faire). Si le reste est nul, l’objectif du mois est déjà atteint et le ratio n’est pas divisé.

## Taux de gain

Deux taux, qui ne sont pas le taux de signature des devis.

`taux en nombre = dossiers gagnés ÷ (gagnés + perdus)`

`taux en valeur EUR = valeur HT gagnée en EUR ÷ (valeur gagnée EUR + valeur perdue EUR)`

Même formule en MAD. Les dossiers encore ouverts ne sont ni au numérateur ni au dénominateur. Le taux est considéré fiable à partir de 3 dossiers clos.

## Panier moyen

`panier EUR = valeur des dossiers gagnés en EUR ÷ nombre de dossiers gagnés en EUR`

Il est calculé sur les gagnés seulement.

## Cycle de vente

Pour chaque dossier gagné : nombre de jours entre sa création et sa date de gain (ou, à défaut, sa dernière mise à jour). Le chiffre affiché est la **médiane**. Fiable à partir de 3 dossiers gagnés.

## Vélocité

Montant HT que le rythme actuel produirait par jour :

`vélocité = (nombre de dossiers ouverts × panier moyen × taux de gain en valeur) ÷ cycle médian`

Si la médiane de cycle est vide ou nulle, le diviseur est 30 jours. Le nombre de dossiers ouverts est celui de la devise. Le panier et le taux sont ceux des dossiers déjà gagnés ou perdus, pas une moyenne des dossiers en cours.

## Conversion d’une étape à la suivante

Entre deux étapes voisines (par exemple Qualifié → Devis envoyé) :

`taux = effectif de l’étape d’arrivée ÷ (effectif de départ + effectif d’arrivée)`

C’est une photo des dossiers **actuellement** dans ces deux étapes. Ce n’est pas le pourcentage de dossiers qui sont historiquement passés de l’une à l’autre.

## Précision des prévisions

`précision = prévision pondérée actuelle ÷ CA HT réalisé sur le mois en cours`

Ce ratio compare le stock pondéré d’aujourd’hui au facturé du mois. Ce n’est pas l’écart entre une prévision figée en début de mois et le réalisé.

## Dates de clôture repoussées

Un dossier ouvert est compté si sa date de clôture prévue est dépassée, ou si un compteur de report est déjà supérieur à zéro.

## Motifs de perte

Chaque dossier perdu est rangé sous son motif, ou sous « Non spécifié ». Le pourcentage d’un motif est son nombre de dossiers divisé par le nombre total de dossiers perdus. La valeur HT est sommée par devise.
