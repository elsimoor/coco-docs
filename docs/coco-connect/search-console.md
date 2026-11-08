---
title: Visibilité Google
---

import Sketch from '@site/src/components/Sketch';


# Visibilité Google

Adresse : `/search-console`. Titre : **Search Console**.

<Sketch scene="gsc" />

La page lit la Search Console du site relié dans les intégrations. Tant que ce n’est pas connecté, l’écran propose de connecter le compte ou d’ouvrir les réglages. Une fois connecté, vous choisissez la propriété, la société (toutes, France ou Maroc) et la période : **7 jours**, **28 jours** (le défaut) ou **90 jours**. Quatre totaux :

| Indicateur | Calcul sur la période |
| --- | --- |
| Clics | Somme des clics jour par jour |
| Impressions | Somme des impressions jour par jour |
| CTR | Clics ÷ impressions, affiché en pourcentage avec une décimale. 0 s’il n’y a aucune impression. |
| Position | Moyenne des positions quotidiennes, pondérée par les impressions du jour |

La position n’est pas une moyenne simple des jours : un jour avec beaucoup d’impressions pèse plus. Le détail liste les requêtes (15 premières) et les pages (8 premières) renvoyées par Google, avec leurs clics, impressions, CTR et position propres.

Le panneau **Emma** commente uniquement le tableau déjà chargé. S’il n’y a pas de réponse, l’écran le dit au lieu d’inventer un chiffre.
