---
title: Diagnostic
---

import Sketch from '@site/src/components/Sketch';


# Diagnostic

Adresse : `/audit`. Le menu l’appelle **Diagnostic**. L’adresse `/diagnostic` ouvre le même écran.

<Sketch scene="diagnostic" />

Titre : **Diagnostic & Rapport de Revenus Dormants**. La fenêtre annoncée est les **6 derniers mois** d’échanges, de devis et de dossiers. Le badge indique un calcul unifié sans compter deux fois la même pièce.

## Ce que l’écran montre

Un total de revenus dormants, puis trois cartes :

| Carte | Contenu |
| --- | --- |
| Devis en attente | Propositions sans réponse, avec la référence et le nombre de jours |
| Pièces manquantes | Documents demandés et non reçus. Une pièce déjà comptée dans un devis est marquée « compté devis » |
| Clients silencieux | Comptes inactifs, avec le nombre de jours |

Chaque carte affiche son nombre de cas et son montant. Vous pouvez actualiser, générer un **rapport PDF**, et ouvrir un dossier détecté.

Le montant d’un devis sans réponse reste un hors taxe de proposition. Il n’est pas une facture impayée. Les devises ne sont pas additionnées. Voir [Devis et signature](../calculs/devis).
