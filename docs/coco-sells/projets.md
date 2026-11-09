---
title: Projets et formulaires
---

import Sketch from '@site/src/components/Sketch';


# Projets, sites et formulaires

Le menu dit **Projets & Formulaires**. Le titre de la liste est **Projets, sites et formulaires**. Chaque niveau a sa propre adresse. Le fil d’Ariane reprend **Projets & Formulaires**, puis **Projet**, **Site** et **Formulaire**.

| Écran | Adresse |
| --- | --- |
| Liste des projets | `/projets` |
| Sites d’un projet | `/projets/{projet}` |
| Formulaires d’un site | `/projets/{projet}/sites/{site}` |
| Un formulaire | `/projets/{projet}/sites/{site}/formulaires/frm_…` |

`{projet}` et `{site}` sont les identifiants internes. `frm_…` est la clé publique du formulaire.

<Sketch scene="projets" />

Un projet est un conteneur. Vous le créez à la main, avec un nom et, si vous voulez, une phrase qui dit à quoi il sert. Il reçoit une référence du type `PRJ-2026-0001`. La liste ne montre que ces projets-là.

Dans un projet, vous ajoutez autant de **sites** que nécessaire. Chaque site porte une adresse (`https://client.com`) et la liste des origines autorisées. L’adresse saisie autorise aussi la variante `www`. Vous pouvez ajouter d’autres origines, séparées par des virgules, par exemple `http://localhost:3000`.

Chaque site contient ses **formulaires**. Un formulaire a une clé publique `frm_…` et deux portes d’entrée : l’embed dans la page, et l’API signée depuis le serveur du site. Les champs se règlent sur la fiche du formulaire.

La discussion interne de l’équipe reste sur la fiche du projet. Le bandeau dit **Confidentiel**.

## Sites

Un site est **Actif** ou **En pause**. En pause, ni l’embed ni l’API n’acceptent de demande. Retirer un site retire aussi ses formulaires. Retirer le projet retire ses sites et ses formulaires.

## Champs du formulaire

Sur `/projets/{projet}/sites/{site}/formulaires/frm_…`, la fiche est rangée en quatre onglets : **Settings** (les champs), **Entries** (les demandes reçues, dans un tableau qui défile sur le côté), **Embed**, et **API**.

Vous pouvez renommer le formulaire, écrire la phrase sous le titre, ajouter un champ, le retirer, le monter ou le descendre. Chaque champ a un libellé, un identifiant, un type, un texte d’exemple et une case **Obligatoire**.

| Type affiché | Valeur envoyée |
| --- | --- |
| Texte | `text` |
| Courriel | `email` |
| Téléphone | `tel` |
| Nombre | `number` |
| Texte long | `textarea` |
| Liste | `select` |

Une liste prend une option par ligne. L’**Aperçu** montre l’embed. Il n’envoie rien. **Enregistrer les champs** écrit le formulaire.

Un formulaire nouveau commence avec prénom, nom, courriel, téléphone, entreprise, budget et message. Vous pouvez tout changer, dans la limite de **24 champs**. Un champ **Courriel** reste obligatoire : une demande sans courriel est refusée.

Les identifiants reconnus remplissent la fiche client : `email`, `firstName`, `lastName`, `phone`, `company`, `budget`, `message`. Le libellé **Courriel** propose `email`, **Téléphone** propose `phone`. Un autre identifiant est conservé dans la note du contact, sous la forme `Libellé : valeur`.

## Studio MCP

Un modèle peut brancher le studio sur `POST /api/mcp/forms`. L’en-tête est la clé d’entreprise `x-cocoinbox-api-key`, ou un jeton Bearer. Le protocole est MCP : `initialize`, puis `tools/list`, puis `tools/call`.

Deux outils. `studio_next` ne écrit rien : il pose une seule question, d’abord le projet (le même, un nouveau, ou un existant), puis le site, puis le formulaire, puis les champs copiés du site. `studio_apply` n’enregistre qu’après un oui, avec `confirmed: true`.

Les identifiants et les types restent ceux du site. `text (default)` reste du texte. Une liste sans options est gardée. Un honeypot devient un leurre invisible.

## Le Petit Coco

Sur ces adresses, Le Petit Coco affiche **Ajouter @page**. Le jeton montre la route ouverte, par exemple `/projets/{projet}/sites/{site}/formulaires/frm_…`. Le message emporte le contenu de la page : le projet, le site, et les formulaires ou les champs.

Sur la page d’un site, vous pouvez demander de créer un formulaire ou d’en modifier un déjà listé. Sur la fiche d’un formulaire, la demande met à jour celui-là, et l’éditeur se recharge.

Un tableau collé est appliqué tel quel. Les colonnes lues sont le libellé, l’identifiant, le type HTML (`text`, `text (default)`, `email`, `textarea`, `select`, `tel`, `number`) et `Yes` ou `No`. Les identifiants et les libellés ne sont pas réécrits : `name` reste `name`, et `text (default)` reste du texte même si le libellé est Téléphone. Le lien de la fiche, par exemple `https://crm.cocoinbox.com/projets/…/formulaires/frm_…`, désigne le formulaire même si la phrase ne dit pas « modifie ». Une liste sans options est quand même enregistrée. Un champ dont le libellé ou l’identifiant contient « honeypot » devient un leurre invisible : le visiteur ne le voit pas, et une demande qui le remplit n’est pas créée. Dans la zone de message, Entrée envoie et Maj+Entrée passe à la ligne.

Exemple : « ajoute un téléphone obligatoire et une liste Service avec Conseil, Intégration, Support ».

Le secret API n’est pas écrit dans la réponse. Il s’affiche une seule fois sur la fiche du formulaire, comme à la création. Une question qui ne change pas le formulaire reçoit seulement la page comme contexte.

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

Une demande acceptée crée un contact, source **Formulaire du site**, rattaché au projet et à la clé du formulaire. Le courriel est obligatoire. Les champs dont l’identifiant n’est pas reconnu sont recopiés dans la note du contact. Le flux **Nouveau client** peut alors partir, comme pour une fiche créée dans le CRM.

Le formulaire hébergé `/form/[slug]`, celui de la configuration, est une autre porte. Il est décrit dans [Pages publiques](./pages-publiques).
