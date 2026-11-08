---
title: Devis et factures
---

import Sketch from '@site/src/components/Sketch';


# Devis et factures

Adresse : `/billing`. Titre : **Devis & Factures**.

<Sketch scene="billing" />

Trois onglets séparent les documents :

- **Devis commerciaux**
- **Factures clients**, avec les sous-listes Factures, Factures d’acompte et Avoirs
- **Abonnements & Récurrences**

Des compteurs résument les devis signés, les factures en retard et les abonnements actifs. Des vues rapides isolent les **factures impayées échues** et les **devis sans réponse**.

## Actions

- Créer un devis ou émettre une facture.
- Dupliquer un document : la copie reçoit une référence provisoire.
- Marquer un devis comme envoyé.
- Enregistrer une consultation, une signature, un refus ou une expiration.
- Émettre un avoir, qui diminue le chiffre d’affaires.
- Passer une facture en acompte, en partiel, en échue ou en payée.
- Poser une promesse de paiement (tenue, rompue ou en attente).
- Le client peut consulter et signer via le lien public décrit dans [Pages publiques](./pages-publiques.md).

## Statuts utiles

Devis : brouillon, envoyé, consulté, signé ou accepté, refusé, expiré, remplacé.

Facture : brouillon, émise, envoyée, partiellement payée, en retard, payée, annulée. Le brouillon et l’annulé ne comptent pas dans le CA.

## Numérotation et TVA

Chaque société a sa séquence. Un avoir et une facture d’acompte ont leur propre nature, visible sur le document et dans l’export comptable. Si le hors taxe n’est pas stocké, le moteur l’estime en divisant le TTC par 1,2, soit une TVA de 20 %. Dès que le HT est saisi sur le document, c’est cette valeur qui est utilisée.

Le détail des taux et du MRR est dans [Devis et signature](../calculs/devis) et [Facturation et encaissement](../calculs/facturation).
