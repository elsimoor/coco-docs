---
title: Relances
---

import Sketch from '@site/src/components/Sketch';


# Relances

Adresse : `/relances`. Titre : **File d'approbation — Relances pré-rédigées**.

<Sketch scene="relances" />

Rien ne part sans vous. La séquence par défaut est de trois étapes, et elle s’arrête dès que le client répond.

| Étape | Délai | Rôle |
| --- | --- | --- |
| Étape 1 | J+3 | Premier suivi |
| Étape 2 | J+10 | Relance ferme |
| Étape 3 | J+21 | Dernier rappel |

## Onglets

- **File d'attente (À valider)** : brouillons à relire, modifier, puis **Valider et expédier**, un par un ou en lot.
- **Envoyées (Reçus d'envoi certifiés)** : chaque envoi a une référence de reçu.
- **Séquences automatiques** : statut **Active**, **Arrêtée** ou **Terminée**. Une réponse date l’arrêt.
- **Rentabilité & ROI des Relances** : nombre d’envois, et pour chaque étape le nombre envoyé, le nombre de réponses et le taux.

Le ton par défaut est **Courtois**, réglé dans la configuration. **Rafraîchir les brouillons** demande confirmation avant d’écraser une correction manuelle.

Canaux : **Courriel**, **WhatsApp**, **SMS**. WhatsApp et SMS restent inactifs tant que l’intégration n’est pas connectée.

Les reçus réapparaissent sur la [fiche client](./fiche-client.md), onglet Relances. Le taux de réponse utilisé dans les rapports est `réponses ÷ relances envoyées` : une réponse est un fil de la boîte dont l’expéditeur est le destinataire, arrivé après l’envoi. Voir [Connect et activité](../calculs/connect).
