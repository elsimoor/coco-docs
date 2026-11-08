---
title: Clients et abonnements
---

import Sketch from '@site/src/components/Sketch';


# Clients et abonnements

## Effectifs

<Sketch scene="calc-clients" />

Hors adresses internes et hors fiches supprimées :

| Compteur | Statut |
| --- | --- |
| Prospects | prospect |
| Clients | client, ou étape de cycle « client » |
| Anciens clients | former_client |
| En contact | contacted |
| Sans suite | unqualified ou disqualified |

## Nouveaux clients

Fiches au statut client dont la **date de création** tombe dans la période. La valeur jointe est la somme des dossiers gagnés reliés à la fiche. Une fiche créée plus tôt et gagnée pendant la période n’entre pas dans ce compteur.

## Clients silencieux

Une fiche client ou ancien client dont le dernier contact (sinon la mise à jour, sinon la création) date de **plus de 180 jours**.

La carte de la Vue d’ensemble porte le sous-titre « Sans activité > 60 jours ». Le calcul appliqué est bien 180 jours. C’est ce délai qu’il faut retenir pour interpréter le nombre.

## Taux de rachat

On groupe les dossiers par nom de client.

`taux = clients ayant au moins 2 dossiers gagnés ÷ nombre de noms de clients ayant au moins un dossier`

## Part des 10 plus gros clients

Les clients sont classés par CA facturé HT de la période (EUR et MAD additionnés **seulement pour l’ordre**). Les 10 premiers sont gardés.

`concentration EUR = CA HT EUR de ces 10 ÷ CA HT EUR total`

La part affichée sur une ligne de client mélange les deux devises pour le pourcentage de ligne (`CA du client toutes devises ÷ CA total toutes devises`). La concentration officielle, elle, reste séparée par devise.

## CA et conversion par source

Les dossiers sont groupés par leur source (ou « Site Web » si elle est vide).

`conversion = dossiers gagnés de la source ÷ dossiers de la source`

Le CA est la somme des valeurs des dossiers gagnés, par devise. La Lucidité, de son côté, reclasse les libellés libres (Google, bouche-à-oreille, formulaire, agent IA, LinkedIn…) avant d’afficher la source. Les deux lectures peuvent donc regrouper différemment un même dossier.

## Effort de service

Dans la Lucidité, pour un client qui a déjà signé :

`effort = nombre d’échanges ÷ (CA signé ÷ 1 000)`

Un prospect, ou un compte à 0, a un effort forcé à 0 et n’est pas « coûteux ». Un client est coûteux si l’effort dépasse 5, ou s’il a au moins 2 factures en retard (statut en retard ou envoyée).

## MRR

Pour chaque abonnement **actif**, le hors taxe (sinon le TTC) est ramené au mois :

| Fréquence | Mensualisation |
| --- | --- |
| Mensuelle | montant |
| Trimestrielle | montant ÷ 3 |
| Semestrielle | montant ÷ 6 |
| Annuelle | montant ÷ 12 |

`MRR = somme de ces mensualités`, par devise.

Le **nouveau MRR** est la part des abonnements actifs créés pendant la période. Le **MRR perdu** (churn) est la mensualité des abonnements annulés dont la mise à jour tombe dans la période.

L’expansion et la contraction existent dans la cascade, et valent **0** : une hausse ou une baisse de tarif sur un abonnement déjà actif n’est pas encore décomposée. Le MRR net affiché est donc :

`nouveau MRR − MRR perdu`

## NRR

`MRR de début = MRR actuel − nouveau MRR + MRR perdu`

`NRR = (MRR de début − MRR perdu) ÷ MRR de début`

Si le MRR de début est nul ou négatif, le NRR affiché est 100 %.

## Taux de départ

`abonnés en début = abonnés actifs + abonnés perdus sur la période`

`churn = perdus ÷ abonnés en début`

## ARPU et LTV

`ARPU = MRR ÷ nombre d’abonnements actifs`

`LTV = ARPU ÷ taux de churn`

Si le churn est nul, la LTV affichée est `ARPU × 36`, soit trois ans de revenu moyen. C’est une convention, pas une durée de vie observée.

## Cohortes

Les clients sont groupés par le mois de leur premier dossier. La matrice montre les six derniers mois de première affaire, puis applique des taux fixes de rétention : 100 % le mois 0, 85 % le mois 1, 75 % le mois 2. Ce n’est pas une mesure de vos renouvellements.
