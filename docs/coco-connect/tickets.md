---
title: Assistance et billetterie
---

import Sketch from '@site/src/components/Sketch';


# Assistance et billetterie

Adresse : `/tickets`. Titre : **Assistance & Billetterie**.

<Sketch scene="tickets" />

Deux circuits :

- **Support Clients (Entreprise)** : demandes de vos clients ;
- **Support Plateforme Coco** : demandes sur le produit lui-même.

## Statuts

Ouvert, En cours, En attente du client, Résolu, Fermé.

## Priorités et délais annoncés

| Priorité | Résolution | Première réponse |
| --- | --- | --- |
| Urgente | moins de 4 h | moins de 1 h |
| Haute | moins de 24 h | moins de 4 h |
| Moyenne | moins de 48 h | moins de 8 h |
| Basse | moins de 72 h | moins de 24 h |

**Paramètres SLA** permet de remplacer ces heures (de 1 à 720) pour l’espace, et de suspendre le chronomètre quand le billet est **En attente du client**.

## Ce que les compteurs montrent

| Compteur | Lecture |
| --- | --- |
| Taux de conformité SLA | Pourcentage de billets tenus dans le délai. À partir de 90 %, le badge est **Conforme**, sinon **Attention**. Sans mesure : **Non mesuré** |
| Dans les délais garantis | Billets encore dans leur échéance |
| Échéance proche | Moins de 2 heures avant l’échéance |
| Hors délai | Échéance dépassée |

Chaque billet affiche son échéance et un badge : dans les délais, échéance proche, dépassé, suspendu, résolu dans les délais ou résolu hors délai. Créer un billet démarre le chronomètre. Changer le statut prévient le client.

Ces délais ne modifient ni le pipeline ni le chiffre d’affaires.
