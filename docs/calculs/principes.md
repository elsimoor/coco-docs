---
title: Principes communs
---

import Sketch from '@site/src/components/Sketch';


# Principes communs à tous les chiffres

Tous les écrans de pilotage lisent un seul calcul : la Vue d’ensemble, la Lucidité, le Diagnostic, les rapports, l’en-tête du pipeline et l’assistant. Il n’y a pas un total « maison » par page.

<Sketch scene="principes" />

## Devises

Les euros et les dirhams sont deux colonnes. Aucun écran ne les convertit ni ne les additionne pour fabriquer un total unique. Lorsque le filtre société est « Toutes », vous voyez les deux. Lorsque vous choisissez France ou Maroc, vous ne voyez que la colonne correspondante.

Un dossier sans devise prend MAD si son pays est le Maroc, sinon EUR. Une facture sans devise est comptée en EUR.

## Période

| Période | Bornes |
| --- | --- |
| Ce mois-ci | Du 1er à 00:00 au dernier jour à 23:59:59 |
| Ce trimestre | Le trimestre calendaire en cours |
| Cette année | Du 1er janvier au 31 décembre |
| Tout | Aucune borne |

Le pipeline ouvert, la prévision pondérée et les dossiers à risque décrivent **maintenant**. Le facturé, l’encaissé, le taux de signature et les nouveaux clients respectent la période.

## Ce qui sort du calcul

- Les fiches marquées supprimées (elles sont en [corbeille](../coco-sells/corbeille) pendant 30 jours).
- Les adresses de l’entreprise : e-mail de la société, domaine du site, `cocoinbox.com`, `byteforce.ma`, `byteforce.fr`.
- Les brouillons et les documents annulés, pour le chiffre d’affaires.
- Les devis, pour le chiffre d’affaires. Un devis est une proposition. Une facture est une créance.

## Hors taxe de repli

Le moteur préfère le hors taxe saisi (`subtotalHT`, sinon `subtotal`). S’il manque, il estime `TTC ÷ 1,2`. Dès que le document a un HT, cette estimation n’est plus utilisée.

## Médiane

Les délais (signature, cycle, demande → encaissement, réponse) utilisent la médiane : on trie les durées et on prend celle du milieu. S’il y a un nombre pair de valeurs, on prend la moyenne des deux du milieu, arrondie au dixième. La moyenne arithmétique est affichée à côté, lorsqu’elle existe, mais ce n’est pas le chiffre principal.

## Échantillon minimum

En dessous du seuil, le taux peut être calculé, mais l’écran dit **Pas assez de données** et refuse d’en tirer une tendance.

| Indicateur | Minimum |
| --- | --- |
| Taux de signature des devis | 5 devis clos (signés + refusés + expirés) |
| Délai consultation → signature | 5 devis signés avec une consultation datée |
| Remise moyenne | 5 devis signés |
| Taux de gain des dossiers | 3 dossiers clos (gagnés + perdus) |
| Cycle de vente | 3 dossiers gagnés |
| Demande → encaissement | 3 dossiers entièrement payés |
| Rendez-vous → devis | 3 rendez-vous tenus |
| Appels manqués rappelés | 3 appels manqués |
| Abonnements (commentaire MRR) | 3 abonnements actifs |
| Saisonnalité | 12 mois d’historique |

## Objectif mensuel

Tant que la société n’a pas d’objectif dans la [configuration](../coco-sells/parametres), la comparaison se fait à **50 000 EUR** et **500 000 MAD**. Un objectif saisi sur la société remplace la valeur de sa devise.

## Chiffres qui ne bougent pas avec vos données

Quelques pastilles de qualité sont des constantes du produit, pas des mesures de votre activité : cohérence entre écrans affichée à 100 %, taux de doublons affiché à 0,2 %, score de suite de tests affiché à 98,5 %. Le temps passé par étape du pipeline est aussi une grille fixe (3, 5, 8 et 12 jours) et non une durée mesurée. La matrice de rétention par cohorte applique 100 %, puis 85 %, puis 75 % : ce n’est pas le taux réel de retour de vos clients. Les indicateurs décrits dans les pages suivantes, eux, sont calculés sur vos dossiers, devis, factures et paiements.

## Arrondis

Les montants sont arrondis au centime. Les taux sont arrondis à l’entier le plus proche, sauf la croissance, le NRR, la remise pondérée et la concentration, arrondis au dixième.
