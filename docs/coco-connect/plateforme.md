---
title: Plateforme Coco Connect
---

import Sketch from '@site/src/components/Sketch';


# Plateforme Coco Connect

Adresse : `/connect`.

<Sketch scene="plateforme" />

Coco Connect est l’espace des échanges. Depuis cette page vous avez deux portes :

- **Ouvrir la Boîte Connect intégrée** reste dans l’application, sur `/boite`.
- **Ouvrir en plein écran** lance l’application autonome par connexion unique et atterrit sur sa boîte `/emails`. Le lien n’est suivi que s’il est en HTTPS (HTTP seulement en local) et qu’il porte le jeton et l’espace.

L’adresse `/shared-inbox` affiche un court message puis vous envoie vers la boîte, sans conserver une recherche passée dans l’adresse. L’adresse `/chat` explique où vit la discussion et ouvre le chat externe dans un autre onglet, sans la connexion unique.

## Ce que Connect partage avec Coco Sells

| Donnée | Où elle vit |
| --- | --- |
| Contact et organisation | Clients & Contacts, repris dans les fils de la boîte |
| Devis et facture | Coco Sells. Les reçus de relance se lisent sur la fiche client |
| Dossier gagné | Reste un dossier Coco Sells. Les sites et formulaires se créent dans [Projets](../coco-sells/projets) |
| Événement e-mail, SMS, WhatsApp ou chat | Sert aux délais « demande → encaissement » et « vitesse de réponse » |

La bascule de produit est décrite dans [Navigation](../prise-en-main/navigation).
