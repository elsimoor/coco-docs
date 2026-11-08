---
title: Produits et services
---

import Sketch from '@site/src/components/Sketch';


# Produits et services

Adresse : `/products`.

<Sketch scene="produits" />

Le catalogue alimente les lignes de devis et de factures : désignation, prix unitaire, devise, taux de TVA, éventuelle récurrence. Seuls l’administrateur et le responsable peuvent modifier le catalogue.

Lorsqu’une facture est ventilée **par produit**, chaque ligne est rangée sous sa désignation. Le hors taxe de la ligne est ajouté, ou retiré s’il s’agit d’un avoir. C’est ce classement qui produit le graphique « facturé par produit » des rapports.

Un produit récurrent, une fois placé dans un abonnement, entre dans le [MRR](../calculs/clients) selon la fréquence : mensuel tel quel, trimestriel ÷ 3, semestriel ÷ 6, annuel ÷ 12.

## TVA proposée à la saisie

France : 20 %, 10 %, 8,5 % (DOM), 5,5 %, 2,1 %, ou 0 %. Maroc : 20 %, 14 %, 10 %, 7 %, ou 0 %. Le taux choisi sur la ligne est celui du document. Le repli `TTC ÷ 1,2` du moteur ne s’applique que lorsqu’aucun hors taxe n’est enregistré.
