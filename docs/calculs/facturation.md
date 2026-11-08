---
title: Facturation et encaissement
---

import Sketch from '@site/src/components/Sketch';


# Facturation et encaissement

## Chiffre d’affaires facturé HT

<Sketch scene="calc-facturation" />

Sur la période, pour les documents qui ne sont pas des devis, hors brouillon :

`CA HT = factures et acomptes émis − avoirs`

Le TTC suit la même règle avec le total du document. Une facture annulée est ignorée. La date retenue est la date d’émission, sinon la date de création.

Le même CA est ventilé, sans mélanger les devises, par mois, par client, par produit (désignation de ligne) et par commercial (commercial assigné, sinon auteur).

## Encaissé

Somme des paiements dont la date de règlement (sinon la date de création) tombe dans la période. Un paiement n’est pas une facture : une facture émise non encore réglée augmente le facturé et le reste dû, pas l’encaissé.

## Reste dû

Pour chaque facture non avoir, non brouillon, de la période :

`solde = reste dû saisi, ou 0 si la facture est payée, sinon le TTC`

Les soldes positifs sont additionnés par devise.

## Factures en retard et balance âgée

Une facture entre dans le retard si son statut est « en retard » ou si sa date d’échéance est passée, et qu’il reste un solde. Le montant du retard est le solde, pas le HT.

| Tranche | Jours depuis l’échéance |
| --- | --- |
| 0 à 30 jours | 0 à 30 |
| 31 à 60 | 31 à 60 |
| 61 à 90 | 61 à 90 |
| Plus de 90 | 91 et au-delà |

La carte « > 30 j » additionne les trois dernières tranches. Une facture échue sans date d’échéance est rangée dans 0–30 jours.

## Croissance

La croissance compare toujours le **mois civil en cours** aux références, quelle que soit la période choisie dans le filtre.

`croissance M-1 = (CA HT de ce mois − CA HT du mois précédent) ÷ CA HT du mois précédent`

`croissance N-1 = (CA HT de ce mois − CA HT du même mois l’an dernier) ÷ CA HT du même mois l’an dernier`

Si la référence est nulle, le taux n’est pas affiché. Les avoirs diminuent les deux côtés.

## Historique 6 mois

De M-5 au mois en cours : facturé HT (factures moins avoirs) et encaissé, par devise. Le mois en cours est libellé « Mois en cours ».

## Demande → encaissement

Pour un dossier dont **toutes** les factures (hors brouillon et annulé) sont payées ou soldées :

- fin = date du dernier paiement de ces factures ;
- début = date du premier message (e-mail, SMS, WhatsApp, chat) du dossier, sinon du contact, sinon la création du contact, sinon la création du dossier.

Le délai est la médiane des jours entre ces deux dates. Le dossier est retenu si la date de solde tombe dans la période. Fiable à partir de 3 dossiers.

## DSO

Délai moyen de recouvrement, par devise :

`DSO = (reste dû TTC ÷ CA facturé TTC) × nombre de jours de la période`

Sans période, le nombre de jours pris est 30. Si le CA TTC est nul, le DSO n’est pas calculé.

## Taux de recouvrement

`dû de la période = encaissé + montant des factures en retard`

`taux = encaissé ÷ dû de la période`

## Promesses de paiement

Une promesse portée par une facture est tenue, rompue ou en attente.

`taux de promesses tenues = tenues ÷ (tenues + rompues)`

Les promesses encore en attente ne sont pas dans le dénominateur.
