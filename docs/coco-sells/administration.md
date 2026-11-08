---
title: Administration
---

import Sketch from '@site/src/components/Sketch';


# Administration

Ces deux écrans n’apparaissent que pour un super-administrateur.

<Sketch scene="administration" />

## Multi-entreprises

Adresse : `/dashboard`. Titre : **Cocoinbox SuperAdmin Manager**.

Liste des espaces entreprise. En choisir un dans l’en-tête recharge l’application avec `?tenant=` suivi du slug. Les chiffres, la boîte et les documents affichés ensuite sont ceux de cet espace seulement.

## Tarifs domaines

Adresse : `/superadmin-domains`. Titre : **Gestion & Marge des Noms de Domaine**.

Grille des extensions, prix d’achat et marge. Elle ne change pas les indicateurs de vente. Elle fixe ce que les espaces peuvent proposer lorsqu’ils commandent un domaine.
