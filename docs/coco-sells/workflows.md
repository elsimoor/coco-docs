---
title: Flux de travail
---

import Sketch from '@site/src/components/Sketch';


# Flux de travail

Adresse : `/workflows`.

<Sketch scene="workflows" />

Un flux part d’un événement, passe par des conditions, et exécute des actions. Vous le dessinez étape par étape.

## Déclencheurs

| Événement | Champs disponibles |
| --- | --- |
| Nouveau courriel | expéditeur, nom, objet, message, société |
| Nouveau client | nom, courriel, téléphone, société, pays, ville, besoin, projet |
| Nouvelle tâche | titre, description, projet |
| Étape de dossier | dossier, client, étape, montant |
| Webhook entrant | corps JSON, courriel, nom, événement, données |
| Planification | note |

## Actions

Créer un projet, créer une tâche, ajouter une note, ajouter un tag, mettre à jour le client, changer l’étape, préparer un brouillon de courriel, envoyer un courriel, assigner le client.

Le canevas accepte aussi une condition, une boucle (pour chaque, séquentielle, 50 tours maximum), une exécution parallèle, une attente en heures, une approbation, et un bloc de code JavaScript. Le code reçoit `input`, `trigger` et `nodes`.

Un flux qui envoie un e-mail ou change une étape laisse une trace dans l’historique du dossier. Il ne modifie pas les formules : il produit les événements que les délais et les relances lisent ensuite.
