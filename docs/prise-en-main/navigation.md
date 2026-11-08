---
sidebar_position: 2
title: Navigation et bascule de produit
---

import Sketch from '@site/src/components/Sketch';


# Navigation et bascule de produit

Le sélecteur en haut du menu porte le nom du produit ouvert.

<Sketch scene="navigation" />

| Produit | Sous-titre | Usage |
| --- | --- | --- |
| Coco Sells | Ventes & Facturation | Pipeline, devis, factures, achats, trésorerie, pilotage |
| Coco Connect | Boîte & Échanges | Messagerie, équipe, projets, tâches, assistance |

Changer de produit enregistre la page en cours. Au retour, Coco rouvre la dernière page de ce produit. La page d’accueil de Coco Sells est la Vue d’ensemble. Celle de Coco Connect est la plateforme Connect.

## Groupes du menu

Le menu est le même cadre pour les deux produits. Un champ **Rechercher un écran** filtre les entrées. Les six dernières pages visitées restent dans **Récents**.

### Pilotage

| Écran | Adresse |
| --- | --- |
| Vue d’ensemble | `/overview` |
| Diagnostic | `/audit` |
| Lucidité Commerciale | `/lucidity` |
| Rapports d’activité | `/reports` |
| Power BI | `/powerbi` |
| Indicateurs clés (KPIs) | `/kpis` |

### Ventes

| Écran | Adresse |
| --- | --- |
| Le Radar | `/radar` |
| Relances | `/relances` |
| Dossiers d’affaires | `/deals` |
| Clients & Contacts | `/leads` |
| Devis & Factures | `/billing` |
| Achats & Fournisseurs | `/purchases` |
| Trésorerie & Banque | `/treasury` |
| Export Comptable (FEC) | `/accounting-export` |
| Produits & Services | `/products` |

### Travail

| Écran | Adresse | Produit |
| --- | --- | --- |
| Équipe & Collaborateurs | `/workforce` | Coco Sells |
| Flux de travail (Workflows) | `/workflows` | Coco Sells |
| Projets & Formulaires | `/projets` | Coco Connect |
| Tâches du jour (Matin) | `/projects` | Coco Connect |
| Visibilité Google (Search Console) | `/search-console` | Coco Connect |
| Documents & Dossiers | `/documents` | Coco Connect |
| Assistance & Billetterie | `/tickets` | Coco Connect |
| Plateforme Coco Connect | `/connect` | Coco Connect |
| Boîte de réception (Connect) | `/boite` | Coco Connect |

### Outils

| Écran | Adresse |
| --- | --- |
| Recherche globale | `/search` |
| Noms de domaine | `/domains` |
| Chauffe d’adresses (Warmup) | `/cocoinbox` |
| Configuration générale | `/settings` |
| Corbeille (30j) | `/trash` |

### Administration

Visible pour un super-administrateur : **Multi-entreprises** (`/dashboard`) et **Tarifs domaines** (`/superadmin-domains`).

### Vues

Si vous enregistrez des vues, elles apparaissent dans un groupe **Vues**. Chacune rouvre la recherche avec le filtre de la vue (étape ou statut).

## Deux portes vers Coco Connect

- **Ouvrir Coco Connect**, en bas du menu, reste dans cette application et rouvre la dernière page Connect. S’il n’y en a pas, ou si la dernière était la boîte, l’arrivée est `/connect`.
- Le sélecteur de produit, lui, quitte l’application. Il demande une adresse de connexion unique et ouvre la boîte externe sur `/emails`. L’adresse n’est suivie que si elle est en HTTPS (HTTP seulement en local) et qu’elle porte le jeton et l’espace.
- **Discussion d'équipe** (`/chat`) n’utilise pas cette connexion unique. Le bouton ouvre l’adresse de chat de la plateforme dans un nouvel onglet.
