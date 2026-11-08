---
title: Équipe et collaborateurs
---

import Sketch from '@site/src/components/Sketch';


# Équipe et collaborateurs

Adresse : `/workforce`. Titre : **Équipe**. L’adresse `/validation` renvoie vers l’onglet de revue.

<Sketch scene="equipe" />

Trois onglets :

| Onglet | Usage |
| --- | --- |
| Équipe | Collaborateurs, rôle, missions en cours |
| Librairie des skills | Compétences que les agents et les workflows peuvent utiliser |
| À valider | Missions d’agents en attente d’accord, à accepter ou à refuser |

Sur une personne : missions, niveau d’autonomie, et actions (déléguer, compétences, statut). L’invitation d’un collaborateur est réservée à l’administrateur et au responsable.

## Ce qui est compté

- Missions totales, réussies, échouées, en attente, refusées.
- Taux validé sans correction : missions réussies et revues ÷ missions réussies. S’il n’y a aucune réussite, le taux affiché est 100 %.
- Temps économisé : 15 minutes par mission réussie. C’est une estimation fixe, pas un chronomètre.
- Coût estimé : jetons consommés, ou 250 jetons par mission si le détail manque, puis 0,1 crédit pour 1 000 jetons.

La surveillance d’activité individuelle utilisée par la Lucidité reste désactivée tant que le consentement administrateur n’est pas donné.
