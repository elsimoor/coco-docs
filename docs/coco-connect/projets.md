---
title: Projets et formulaires
---

import Sketch from '@site/src/components/Sketch';


# Projets, sites et formulaires

Adresse : `/projets`. Le menu dit **Projets & Formulaires**. Le titre de la page est **Projets, sites et formulaires**.

<Sketch scene="projets" />

Un projet est un conteneur. Vous le créez à la main, avec un nom et, si vous voulez, une phrase qui dit à quoi il sert. Il reçoit une référence du type `PRJ-2026-0001`. La liste ne montre que ces projets-là.

Dans un projet, vous ajoutez autant de **sites** que nécessaire. Chaque site porte une adresse (`https://client.com`) et la liste des origines autorisées. L’adresse saisie autorise aussi la variante `www`. Vous pouvez ajouter d’autres origines, séparées par des virgules, par exemple `http://localhost:3000`.

Chaque site contient ses **formulaires**. Un formulaire a une clé publique `frm_…`, des champs (prénom, nom, courriel, téléphone, entreprise, budget, message), et deux portes d’entrée : l’embed dans la page, et l’API signée depuis le serveur du site.

La discussion interne de l’équipe reste sur la fiche du projet. Le bandeau dit **Confidentiel**.

## Sites

Un site est **Actif** ou **En pause**. En pause, ni l’embed ni l’API n’acceptent de demande. Retirer un site retire aussi ses formulaires. Retirer le projet retire ses sites et ses formulaires.

## Embed

Le bloc à copier est un conteneur et un script :

```html
<div data-coco-form="frm_…"></div>
<script src="https://…/api/public/forms/frm_…/embed.js?tenant=espace" async></script>
```

Le script demande un jeton à `GET /api/public/forms/frm_…/embed-handshake?tenant=espace`. Le navigateur envoie son origine. L’origine doit être exactement l’une des origines du site, schéma compris (`https://client.com` n’est pas `http://client.com`). Le jeton dure **2 minutes** et ne sert **qu’une fois**. L’envoi se fait avec l’en-tête `X-Coco-Token`. L’origine est revérifiée au moment de l’envoi.

Un appel direct à `GET /api/public/forms/frm_…` ne renvoie pas les champs : la réponse est un refus, et le navigateur doit passer par le handshake.

Vous pouvez désactiver l’embed sans toucher à l’API.

## API signée

À la création, l’écran montre une fois le secret `cos_…`. Il est ensuite stocké chiffré. Seuls restent visibles l’identifiant public `coco_…` et les quatre derniers caractères du secret. **Renouveler le secret** invalide l’ancien tout de suite et réaffiche le nouveau, une seule fois.

Le serveur du site ne met jamais ce secret dans la page. L’échange se fait en deux temps.

**1. Handshake.** `POST /api/public/forms/frm_…/handshake?tenant=espace`

| En-tête | Contenu |
| --- | --- |
| `X-Coco-Key` | Identifiant public `coco_…` |
| `X-Coco-Timestamp` | Heure Unix, en secondes. Écart accepté : 5 minutes |
| `X-Coco-Nonce` | Valeur aléatoire d’au moins 16 caractères, utilisable une seule fois |
| `X-Coco-Signature` | HMAC-SHA256, en hexadécimal, du texte `timestamp.nonce.handshake.formKey`, signé avec le secret |

La réponse contient un jeton Bearer, valable **2 minutes**, à usage unique.

**2. Envoi.** `POST /api/public/forms/frm_…?tenant=espace`

| En-tête | Contenu |
| --- | --- |
| `Authorization` | `Bearer` suivi du jeton |
| `X-Coco-Signature` | HMAC-SHA256, en hexadécimal, du texte `jeton.` suivi du JSON canonique du corps |

Le JSON canonique trie les clés par ordre alphabétique, à chaque niveau. Un corps différent de celui qui a été signé est refusé. Une mauvaise clé, une mauvaise signature, un nonce déjà vu ou un jeton expiré reçoivent la même réponse : authentification refusée. Le détail n’est pas donné.

Vous pouvez désactiver l’API sans retirer l’embed.

Les appels publics sont limités : 30 handshakes embed par minute, 60 handshakes API par minute, 20 envois par minute, pour une même clé et une même adresse IP.

## Ce que devient une demande

Une demande acceptée crée un contact, source **Formulaire du site**, rattaché au projet et à la clé du formulaire. Le courriel est obligatoire. Le flux **Nouveau client** peut alors partir, comme pour une fiche créée dans le CRM.

Le formulaire hébergé `/form/[slug]`, celui de la configuration, est une autre porte. Il est décrit dans [Pages publiques](../coco-sells/pages-publiques).
