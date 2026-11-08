---
title: Trésorerie et banque
---

import Sketch from '@site/src/components/Sketch';


# Trésorerie et banque

Adresse : `/treasury`.

<Sketch scene="tresorerie" />

Le journal de banque de la société active. Chaque ligne a un sens :

- **entrée** (`inflow`) : elle augmente le solde ;
- tout autre sens : elle diminue le solde.

Le solde est tenu à part en euros et en dirhams. Une ligne peut être rapprochée d’une facture client ou d’un achat. Le **taux de rapprochement** est le nombre de lignes rapprochées divisé par le nombre de lignes.

La prévision 30 / 60 / 90 jours part de ce solde, ajoute les factures clients encore dues dont l’échéance tombe dans la fenêtre, et retire les factures fournisseurs encore dues. Le détail est dans [Trésorerie et recouvrement](../calculs/tresorerie).

L’écart de trésorerie compare le solde réel des lignes au solde projeté à 30 jours :

`écart = solde réel − solde projeté à 30 jours`

`écart en % = écart ÷ valeur absolue du projeté`
