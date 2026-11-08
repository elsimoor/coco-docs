---
title: Achats et fournisseurs
---

import Sketch from '@site/src/components/Sketch';


# Achats et fournisseurs

Adresse : `/purchases`.

<Sketch scene="achats" />

Quatre onglets :

| Onglet | Usage |
| --- | --- |
| Échéancier | Dettes à payer, classées par date |
| Factures | Factures fournisseurs, statut et reste à payer |
| Commandes | Bons de commande |
| Fournisseurs | Fiches fournisseurs |

Vous créez un fournisseur, une commande ou une facture d’achat selon l’onglet ouvert. Une facture fournisseur non payée entre dans le **DPO** et dans les décaissements prévus à 30, 60 et 90 jours. Le montant retenu est le total moins le déjà payé. Les statuts pris en compte pour la prévision de sortie sont : en attente, partiellement payée, en retard.

Voir [Trésorerie et recouvrement](../calculs/tresorerie).
