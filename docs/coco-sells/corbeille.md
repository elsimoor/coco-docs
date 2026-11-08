---
title: Corbeille
---

import Sketch from '@site/src/components/Sketch';


# Corbeille

Adresse : `/trash`. Titre : **Corbeille & Rétention 30 jours**.

<Sketch scene="corbeille" />

Un élément supprimé (contact, dossier, facture, tâche) reste restaurable 30 jours. Passé ce délai, il est purgé. La page permet d’actualiser la liste, de restaurer une pièce ou de vider ce qui est affiché.

Tant qu’une pièce est en corbeille, elle est marquée supprimée et **sortie de tous les indicateurs** : pipeline, facturé, taux, tâches. La restaurer la fait revenir dans le prochain calcul.
