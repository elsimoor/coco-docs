---
title: Power BI
---

import Sketch from '@site/src/components/Sketch';


# Power BI

Adresse : `/powerbi`. L’adresse `/power-bi` renvoie ici. La comparaison de deux rapports est sur `/powerbi/compare`.

<Sketch scene="powerbi" />

Vous attachez un lien de partage Microsoft, ou un **Relais Coco** : un jeton qui alimente Power BI Desktop avec les contacts, les dossiers et les factures. Le rapport est visible pour vous seul ou pour les membres. Une adresse du type `app.powerbi.com/groups/.../reports/...` est convertie en lien d’intégration. Le jeton n’est plus affiché une fois le lien enregistré.

## Ce que Power BI montre, et ce qu’il ne recalcule pas

Les indicateurs natifs de Coco (pipeline, facturé, encaissé, taux) restent ceux du moteur unifié, y compris lorsqu’un graphique Power BI est punaisé sur la Vue d’ensemble. Les mesures DAX livrées avec le projet (`CocoKpis.Measures.dax`) sont faites pour reprendre ces mêmes définitions dans Power BI : somme par devise, avoirs en moins, devis hors du chiffre d’affaires.

Si un visuel Power BI et une carte Coco divergent, la carte Coco fait foi pour l’application. Vérifiez que le rapport Power BI filtre la même société et la même période.
