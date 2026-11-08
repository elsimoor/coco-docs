---
title: Tâches du jour
---

import Sketch from '@site/src/components/Sketch';


# Tâches du jour

Adresse : `/projects`. Titre : **Écran du matin — Ce qui est dû aujourd’hui**.

<Sketch scene="taches" />

La page rassemble ce qui est dû, à partir des promesses détectées et des relances planifiées. Les filtres :

| Filtre | Contenu |
| --- | --- |
| Dû aujourd’hui | Échéance aujourd’hui, pas encore faite |
| En retard | Échéance avant aujourd’hui, pas faite. Un bandeau propose de traiter le retard |
| À venir | Échéance après aujourd’hui, pas faite |
| Toutes | Tout, y compris le fait |
| Terminées | Statut fait seulement |

Les priorités sont Urgente, Haute, Moyenne et Basse. Les statuts visibles sont À faire, En cours, Relecture, Terminée, et, pour un agent, L’agent travaille, En attente de vous, À valider, Échouée.

Vous créez une tâche, vous la cochez, vous la reportez d’un jour ou d’une semaine, et vous pouvez **nettoyer les doublons**. Une sélection groupée permet de terminer ou de reporter plusieurs lignes. Une tâche supprimée va en corbeille.

**Flux iCal sécurisé** donne une adresse à coller dans Google Calendar, Apple Calendar ou Outlook. Le jeton est personnel et peut être régénéré, ce qui révoque l’ancien.

## Comment les tâches sont comptées dans les indicateurs

| Compteur | Règle |
| --- | --- |
| Ouvertes | À faire, en cours ou en revue, non supprimées |
| Terminées | Statut fait |
| En retard | Ouvertes dont l’échéance est déjà passée |

Une tâche dont le titre ou la description parle d’un rendez-vous, d’une visio, d’un meeting ou d’un appel, et qui est terminée, compte comme un rendez-vous tenu. S’il existe un devis sur le même dossier, le rendez-vous compte aussi dans la conversion rendez-vous → devis. Voir [Connect et activité](../calculs/connect).
