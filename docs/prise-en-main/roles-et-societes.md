---
sidebar_position: 3
title: Rôles, sociétés et devises
---

import Sketch from '@site/src/components/Sketch';


# Rôles, sociétés et devises

## Rôles

<Sketch scene="roles" />

| Rôle affiché | Qui | Droits visibles |
| --- | --- | --- |
| Administrateur | Propriétaire, admin ou super-admin | Société, équipe, produits, paramètres, espaces |
| Responsable | Manager ou finance | Équipe et catalogue produits |
| Commercial | Rôle par défaut | Travail commercial quotidien : clients, dossiers, devis, tâches |

Le libellé du rôle est affiché dans l’en-tête. Un commercial ne gère ni le catalogue produits ni les invitations d’équipe.

## Sélecteur de société

L’en-tête permet de travailler pour la société française, la société marocaine, ou les deux ensemble.

| Filtre | Effet |
| --- | --- |
| Toutes | Les totaux EUR et MAD restent côte à côte. Ils ne sont pas convertis ni additionnés. |
| France | Les indicateurs se limitent au périmètre FR / EUR. |
| Maroc | Les indicateurs se limitent au périmètre MA / MAD. |

Un dossier sans devise explicite prend le dirham si son pays est le Maroc, sinon l’euro.

## Ce qui est exclu des chiffres clients

Le moteur retire de la base clients les adresses de l’entreprise elle-même : e-mail de la société, domaine du site, ainsi que `cocoinbox.com`, `byteforce.ma` et `byteforce.fr`. Les fiches marquées supprimées sont aussi ignorées. Un devis n’entre jamais dans le chiffre d’affaires facturé : une promesse commerciale et une créance restent deux comptes distincts.

## Périodes

La Vue d’ensemble, les rapports et le moteur d’indicateurs acceptent :

- ce mois-ci, du 1er au dernier jour du mois calendaire ;
- ce trimestre ;
- cette année ;
- tout l’historique ;
- une période personnalisée lorsque l’écran le propose.

Les dossiers ouverts (pipeline, prévision pondérée, dossiers à risque) décrivent la situation actuelle. Le facturé, l’encaissé et le taux de signature respectent la période choisie.
