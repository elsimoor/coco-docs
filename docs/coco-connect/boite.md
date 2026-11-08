---
title: Boîte de réception
---

import Sketch from '@site/src/components/Sketch';


# Boîte de réception

Adresse : `/boite`. Titre : **Boîte de réception (Connect)**. Sous-titre : boîte principale, 30 derniers jours.

<Sketch scene="boite" />

C’est la boîte de travail dans l’application : Gmail, ou une boîte de démonstration, puis une qualification vers les contacts du CRM. L’adresse `/shared-inbox` affiche un message puis vous envoie ici au bout d’un peu plus d’une seconde. Un lien arrivé avec une recherche (`?search=`) perd ce filtre au passage : la boîte s’ouvre sans recherche préremplie.

## Connexion

États : **Gmail connecté**, **Reconnexion requise**, **Déconnecté**. La date de dernière synchro est affichée. Une session Google expirée demande une reconnexion. **Ouvrir dans Connect** quitte l’application pour la boîte externe, avec la même connexion unique que le sélecteur de produit.

Sur un espace de démonstration, vous pouvez basculer entre Gmail en direct et une boîte simulée (scénarios Avocat ou Expert-comptable) et rejouer le scénario. Rejouer retire les fiches créées pendant la démonstration.

## Ce qui est partagé

Seuls les courriels professionnels qualifiés, ou déjà liés à un dossier, sont partagés avec l’équipe. Le compteur indique le nombre de messages synchronisés. Les images distantes restent masquées tant que vous ne demandez pas à les afficher.

## Filtres

Tous, Nouveaux clients, Déjà connus, Spam, À ignorer. Chaque filtre a son effectif. La recherche porte sur le contact et le sujet. Avec Gmail, vous pouvez traiter plusieurs pages puis **Valider les suggestions**. Les spams et les notifications sont écartés avant cette suggestion.

**Nettoyer indésirables** envoie en corbeille les contacts, devis et produits créés par erreur à partir d’infolettres.

## Qualification

Le panneau de droite lit le message choisi.

| Cas | Ce que vous voyez | Effet de Valider |
| --- | --- | --- |
| Nouveau client | Nom, courriel, téléphone, poste, entreprise, demande, pièces, et un indice de confiance | Crée le contact et ouvre son dossier |
| Déjà connu | Le contact, et le dossier lié s’il existe (étape et montant) | Rattache l’échange au dossier |
| Spam | Certitude en pourcentage | Aucune fiche. Vous pouvez forcer la création |
| Hors cible | Notification automatique | Aucune fiche, sauf si vous forcez |

Après validation : **Voir le contact** ou **Ouvrir les dossiers**. Ignorer ne crée rien.

## Ce que la boîte alimente

La précision de Nora, les demandes commerciales sans fiche, et la vitesse de réponse de la Lucidité. Les formules sont dans [Connect et activité](../calculs/connect). Les reçus de relance, eux, se lisent sur la fiche client dans Coco Sells, pas dans cette liste.
