---
title: Dossiers d'affaires
---

import Sketch from '@site/src/components/Sketch';


# Dossiers d’affaires

Adresse : `/deals`.

<Sketch scene="dossiers" />

Un dossier est une opportunité : un client, un montant HT, une devise, une étape, une probabilité, une date de clôture prévue, et éventuellement un motif de perte.

## Étapes

| Étape | Probabilité par défaut | Dans le pipeline ouvert |
| --- | --- | --- |
| Nouveau | 10 % | Oui |
| Qualifié | 25 % | Oui |
| Devis envoyé | 50 % | Oui |
| En négociation | 75 % | Oui |
| Gagné | 100 % | Non |
| Perdu | 0 % | Non |

Les anciens libellés (`devis_envoye`, `gagné`, `won`, `perdu`…) sont ramenés à ces six étapes. Vous pouvez ajuster les probabilités dans **Configuration → Pipeline commercial**. La prévision pondérée utilise la probabilité enregistrée sur le dossier. Si elle est absente, le calcul prend 50 %.

## Actions

Le tableau de bord du pipeline a deux vues : **Kanban** et tableau. Des vues enregistrées isolent tous les dossiers, les signaux du Radar, vos dossiers chauds, les affaires à relancer depuis plus de 7 jours, les affaires de plus de 10 000, la négociation, et les dossiers à risque.

- Créer un dossier et le faire glisser d’une étape à l’autre. L’étape suit les événements ; une correction manuelle verrouille le champ.
- Filtrer par étape, devise (EUR ou MAD), responsable, montant minimum et signal (devis sans réponse, pièces manquantes, promesses non tenues, silence de plus de 14 jours).
- Changer l’étape en lot, fusionner des doublons, relancer, créer un devis, poser une note interne.
- Marquer **Dossier Gagné** ou **Dossier Perdu**. Un perdu exige un motif : prix, concurrent, budget, sans réponse, mauvais moment, ou autre.
- Les gagnés et les perdus de plus de 30 jours sont masqués tant que vous n’affichez pas les **Archives (> 30j)**.

Un dossier ne peut pas quitter **Nouveau** avec un montant à 0, sauf pour le passer en Perdu. L’écran demande alors une valeur estimée. L’en-tête du pipeline reprend la valeur ouverte et la prévision pondérée décrites dans [Pipeline et prévisions](../calculs/pipeline).

## Risque

Sur un dossier encore ouvert :

- **Risque élevé** si le dernier échange date de plus de 14 jours, ou si la date de clôture est passée et que le silence dépasse 7 jours.
- **Risque moyen** si le silence dépasse 7 jours, ou si la date de clôture est passée.

Le dernier échange est le dernier événement du dossier, sinon la date de mise à jour.

Un dossier à 0 n’entre pas dans les totaux, mais il compte dans le nombre de dossiers ouverts. Le détail des taux est dans [Pipeline et prévisions](../calculs/pipeline).
