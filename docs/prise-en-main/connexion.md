---
sidebar_position: 1
title: Connexion et premiers gestes
---

import Sketch from '@site/src/components/Sketch';


# Connexion et premiers gestes

## Créer un portail

<Sketch scene="connexion" />

La page **Créer un portail** (`/register`) ouvre un espace entreprise. Chaque espace a son propre jeu de clients, dossiers, devis et messages. Le nom court de l’espace (le slug) sert ensuite à retrouver le portail, y compris sous la forme `votre-espace.cocoinbox.com`.

## Se connecter

La page **Connexion** (`/login`) ouvre l’espace déjà créé. Après connexion, Coco Sells s’ouvre sur la **Vue d’ensemble**.

## Accepter une invitation

**Finaliser votre inscription** (`/accept-invitation`) sert à un collaborateur invité. Il choisit son mot de passe et rejoint l’espace avec le rôle qui lui a été attribué.

## Visite guidée

Le bouton **Visite guidée** dans l’en-tête relance le parcours d’accueil. Il met en évidence la recherche, le sélecteur de société et les groupes du menu.

## Recherche rapide

Le champ de l’en-tête, ou le raccourci `Ctrl+K` (ou `Cmd+K` sur Mac), ouvre la palette de commandes. Vous y cherchez un contact, un dossier ou un devis sans quitter l’écran en cours. La page **Recherche globale** du menu va plus loin : elle interroge tout l’espace et peut rouvrir une vue enregistrée.

## Quitter

**Déconnexion** efface la session locale et renvoie vers la page de connexion.
