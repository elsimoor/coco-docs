---
title: Projets et formulaires
---

import Sketch from '@site/src/components/Sketch';


# Projets et formulaires

Adresse : `/projets`. Le menu dit **Projets & Formulaires**. Le titre de la page est **Projets de réalisation**.

<Sketch scene="projets" />

Un projet est le travail d’après-vente. Il est créé automatiquement lorsqu’un dossier passe **Gagné**, ou à la main. La liste annonce le total, le nombre en cours, le nombre terminés, et le **volume budgétaire HT** (devises séparées s’il y en a plusieurs).

Les formulaires publics ne se règlent pas ici. L’écran renvoie vers **Configuration** pour les formulaires de contact et de demande de devis. Le lien public reste `/form/[slug]`, décrit dans [Pages publiques](../coco-sells/pages-publiques).

## Liste

Filtres : Tous, Nouveaux, En cours, En attente, Terminés, Annulés. Recherche sur le projet, la référence ou le client.

Chaque carte montre une référence du type `PRJ-2026-0001`, la progression en pourcentage, le client, et le budget **HT** ou la mention **Sur devis**.

Vous pouvez créer un projet, nettoyer les doublons, et ouvrir la fiche.

## Fiche

- Statut : Nouveau, En cours, En attente, Terminé, Annulé.
- Priorité : Basse, Moyenne, Haute, Urgente.
- Badge **Dossier commercial signé lié** lorsque le projet vient d’un dossier gagné. Le montant signé du dossier est repris comme budget, sauf si vous avez saisi un budget à la main.
- Progression globale, avec des paliers 25 %, 50 %, 75 % et 100 %.
- Échéance de livraison, responsable, date de création.
- **Jalons** : chaque jalon est **À faire** ou **Validé**. Valider un jalon met à jour la progression.
- **Tâches** du projet : **À faire** ou **Terminée**.
- **Documents & Livrables** : nom et lien.
- **Discussion interne d'équipe**, confidentielle, réservée à l’équipe.

Le budget affiché n’entre pas une seconde fois dans le chiffre d’affaires. Le CA reste celui des factures du dossier.
