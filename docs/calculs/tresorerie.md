---
title: Trésorerie et recouvrement
---

import Sketch from '@site/src/components/Sketch';


# Trésorerie et recouvrement

## Solde bancaire

<Sketch scene="calc-tresorerie" />

Pour chaque devise :

`solde = somme des entrées − somme des autres mouvements`

## Prévision à 30, 60 et 90 jours

On regarde les échéances jusqu’à J+30, J+60 et J+90. Les fenêtres sont cumulatives : le 60 jours inclut le 30 jours.

Encaissements prévus : solde restant des factures clients au statut émise, envoyée, partiellement payée ou en retard, dont l’échéance tombe dans la fenêtre. Sans date d’échéance, l’échéance est considérée comme aujourd’hui, donc dans les 30 jours.

Décaissements prévus : reste à payer des factures fournisseurs en attente, partielles ou en retard, même règle de date.

`solde projeté = solde bancaire + encaissements prévus − décaissements prévus`

La carte de la Vue d’ensemble affiche le projeté à 30 jours, et rappelle 60 et 90.

## Scénarios

Autour du projeté à 30 jours, trois scénarios :

| Scénario | Formule |
| --- | --- |
| Bas | projeté × 0,85 |
| Médian | projeté |
| Haut | projeté × 1,15 |

La fourchette est présentée comme un encadrement de ±15 %. Ce n’est pas une simulation statistique de chaque facture.

## Écart réalisé / prévu

`écart = solde réel des lignes − projeté à 30 jours`

`écart % = écart ÷ valeur absolue du projeté`

## DPO

Délai fournisseurs, par devise :

`DPO = (dettes fournisseurs non payées ÷ montant des achats) × jours de la période`

Le montant d’achat d’une facture fournisseur est son hors taxe (`subtotal`), sinon son total. La dette est le total moins le déjà payé, pour tout statut autre que payé. Sans période, le nombre de jours est 30.

## Rapprochement

`taux = lignes marquées rapprochées ÷ nombre de lignes de trésorerie`

Une ligne est rapprochée si elle porte le drapeau de rapprochement ou le statut « reconciled ».

## Risque de retard d’une facture

Pour une facture ni devis, ni brouillon, ni payée, ni annulée :

| Retard déjà constaté | Niveau |
| --- | --- |
| Plus de 30 jours | Élevé |
| Plus de 7 jours | Modéré |
| Pas encore échu, ou 7 jours et moins | Faible |

Le « retard prévu » affiché reprend les jours de retard réels, ou 5 jours si la facture n’est pas encore échue. Le moteur regarde au plus 15 factures ouvertes pour cette liste.

## Risque de départ d’un abonnement

Sur un abonnement actif, les jours depuis le dernier renouvellement (ou la dernière mise à jour) :

| Inactivité | Niveau |
| --- | --- |
| Plus de 60 jours | Élevé |
| Plus de 30 jours | Modéré |
| 30 jours et moins | Faible |

La liste montre au plus 10 abonnements.
