---
title: Devis et signature
---

import Sketch from '@site/src/components/Sketch';


# Devis et signature

Un devis n’entre jamais dans le chiffre d’affaires. Il a son propre bloc.

<Sketch scene="calc-devis" />

## Devis en attente

Un devis est en attente lorsqu’il est **envoyé** ou **consulté**, qu’il n’est pas expiré, pas signé, pas accepté, pas refusé et pas remplacé.

`montant en attente = somme des HT de ces devis`

Le brouillon n’est pas dans cette somme. Il n’est pas non plus dans le taux de signature.

## Taux de signature

Sur la période, en nombre de devis :

`taux = signés ÷ (signés + refusés + expirés)`

Signé et accepté comptent comme signés. Les devis encore ouverts (brouillon, envoyé, consulté) sont **exclus du dénominateur**. C’est voulu : un devis en négociation n’est pas un échec.

Le taux est fiable à partir de 5 devis clos. En dessous, l’écran affiche l’effectif et « Pas assez de données ».

## Tranches de la Lucidité

La même formule est rejouée dans trois tranches, sur le montant du devis, dans la devise de la société active :

| Tranche | Montant |
| --- | --- |
| Petite | strictement moins de 5 000 |
| Moyenne | de 5 000 à 15 000 inclus |
| Grande | strictement plus de 15 000 |

Chaque tranche a son propre seuil de 5 devis clos.

## Délai d’envoi → signature

Pour chaque devis signé de la période : jours calendaires entre la date d’envoi (ou la création si l’envoi n’est pas daté) et la date de signature (ou la dernière mise à jour). Le chiffre retenu est la médiane. Les durées négatives sont ramenées à zéro.

## Délai consultation → signature

Même médiane, mais le point de départ est la première consultation (`viewedAt`, ou la première entrée de l’historique de vues). Les devis signés sans consultation datée ne comptent pas. Fiable à partir de 5.

## Remise moyenne

Sur les devis signés de la période, ligne par ligne :

`brut de ligne = prix unitaire × quantité`

`remise de ligne = montant de remise, ou brut × pourcentage ÷ 100`

`remise pondérée d’une devise = somme des remises ÷ somme des bruts`

C’est ce pourcentage, arrondi au dixième, qui est le chiffre officiel. Une moyenne simple des pourcentages de devis est aussi calculée, mais la pondérée reflète mieux un gros devis très remisé. Fiable à partir de 5 devis signés.

## Zéro

Un devis à zéro peut exister, mais il n’augmente ni le pipeline ni le HT en attente. Il peut toutefois compter dans le taux de signature s’il est clos.
