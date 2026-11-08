---
title: Export comptable
---

import Sketch from '@site/src/components/Sketch';


# Export comptable

Adresse : `/accounting-export`. Titre : **Export Comptable & Déclarations TVA**.

<Sketch scene="fec" />

Trois onglets, filtrables par exercice (2024, 2025, 2026) et par société (Toutes, France, Maroc) :

| Onglet | Contenu |
| --- | --- |
| Journaux Ventes & Achats | Écritures de ventes et d’achats, paginées |
| France : Export FEC légal | Fichier des écritures comptables pour la liasse française |
| Maroc : Déclaration TVA DGI | État de TVA et tableau des déductions |

Le journal de ventes reprend les factures émises, les acomptes et les avoirs. Il ne reprend pas les devis. Les montants restent dans la devise du document. L’export ne recalcule pas le taux de signature ni le pipeline : il fige les pièces comptables de l’exercice choisi.
