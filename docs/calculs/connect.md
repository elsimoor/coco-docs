---
title: Connect et activité
---

import Sketch from '@site/src/components/Sketch';


# Connect et activité

Ces indicateurs relient la boîte, les tâches, les appels et les agents aux chiffres de Coco Sells.

<Sketch scene="calc-connect" />

## Rendez-vous

Une tâche est un rendez-vous si son titre ou sa description contient « rendez-vous », « meeting », « rdv », « visio » ou « appel ».

- Tenue : la tâche est faite.
- Délai demande → premier rendez-vous : jours entre la création du contact lié et l’échéance de la tâche. Médiane.
- Conversion rendez-vous → devis : rendez-vous tenus qui ont un devis sur le même dossier, divisés par les rendez-vous tenus.

Fiable à partir de 3 rendez-vous tenus. Une tâche sans lien vers un contact n’entre pas dans le délai.

## Relances

Pour chaque couple canal + étape (`Relance 1`, `Relance 2`…) :

`taux de réponse = fils répondus ÷ relances envoyées`

Un fil répond s’il vient de l’adresse du destinataire et s’il est arrivé **après** l’envoi de la relance. Le moteur ne vérifie pas que le fil cite le numéro du devis : l’adresse et la date suffisent.

## Nora

`précision = prospects Nora conservés ÷ prospects Nora`

Un prospect Nora a le drapeau de qualification IA ou la source `ai_nora`. Il est conservé s’il est prospect, client, ou porté par une étape gagnée.

Demandes manquées : fils de la boîte dont le sujet ou l’extrait contient un mot commercial (devis, tarif, rendez-vous, projet, mandat…), dont l’expéditeur n’est pas déjà un contact, et qui ne sont pas marqués comme bruit.

Corrections humaines : fils reclassés à la main, ou réassignés par quelqu’un d’autre que Nora.

## Agents

| Indicateur | Règle |
| --- | --- |
| Missions | Nombre de journaux d’activité IA |
| Réussies, échouées, en attente, refusées | Selon le statut SUCCESS, FAILED, WAITING_APPROVAL, REJECTED |
| Validées sans correction | Réussies et revues ÷ réussies. 100 % s’il n’y a aucune réussite. |
| Temps économisé | 15 minutes × missions réussies |
| Crédits estimés | jetons ÷ 1 000 × 0,1. 250 jetons sont pris si le journal n’en donne pas. |
| Encaissé attribué | TTC des factures payées pour lesquelles un reçu de relance porte le même document |

Le temps économisé est une estimation fixe. L’encaissé attribué compte la facture entière dès qu’une relance d’agent la cite, sans répartir le mérite avec un commercial.

## Tâches

Ouvertes = à faire + en cours + en revue. Terminées = fait. En retard = ouvertes avec une échéance passée. Les tâches supprimées sont ignorées.

## Search Console

Sur 28 jours par défaut :

`CTR = clics ÷ impressions`

`position = Σ (position du jour × impressions du jour) ÷ impressions`

Voir [Visibilité Google](../coco-connect/search-console).

## Chauffe de la boîte d’envoi

`pourcentage = min(100, envoyés aujourd’hui ÷ capacité du jour)`

Capacité par défaut : 250. Voir [Chauffe d’adresses](../coco-sells/warmup).
