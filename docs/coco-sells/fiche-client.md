---
title: Fiche client
---

import Sketch from '@site/src/components/Sketch';


# Fiche client

Adresse : `/clients/[id]`. Elle s’ouvre depuis la liste des clients.

<Sketch scene="fiche-client" />

L’en-tête porte la raison sociale. Le cycle de la relation va de Prospect à En échange, Qualifié, Opportunité, Client, puis Inactif. Ce cycle n’est pas le pipeline des dossiers.

## Volets

| Volet | Contenu |
| --- | --- |
| Résumé | Identité, score, et les quatre indicateurs ci-dessous |
| Dossiers | Opportunités liées |
| Devis & Factures | Propositions, factures, acomptes, avoirs |
| Relances | Reçus certifiés : numéro, date, canal, destinataire, pièce, identifiant opérateur |
| Messages | Courriels, SMS et appels Connect, entrants ou sortants |
| Rendez-vous | Tâches reconnues comme rendez-vous, visio ou appel |
| Discussion interne | Notes de l’équipe, invisibles du client |
| Fichiers | Pièces du dossier |
| Campagnes | Listes d’envoi, lorsqu’elles existent |
| Historique | Journal filtré : activités, dossiers, factures, paiements, billets, tâches, fichiers, consentement |

Des volets contacts et tâches complètent la fiche lorsque le compte a plusieurs interlocuteurs.

## Indicateurs du résumé

| Indicateur | Ce qu’il additionne |
| --- | --- |
| Chiffre d’affaires réglé | TTC des factures acquittées |
| Solde impayé | TTC des factures non soldées, avec le nombre en retard |
| Pipeline en cours | Dossiers encore ouverts. La ligne **Pondéré** est valeur × probabilité |
| Devis & Relances | Devis signés sur le nombre de devis, et séquences de relance actives |

Les euros et les dirhams restent côte à côte. Le score du compte tient compte des échanges récents, du silence, des factures en retard, des dossiers ouverts et des billets ouverts.
