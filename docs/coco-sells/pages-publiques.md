---
title: Pages publiques
---

import Sketch from '@site/src/components/Sketch';


# Pages publiques

Deux pages sont accessibles sans le menu, par un lien envoyé au client.

<Sketch scene="public" />

## Devis à signer

Adresse : `/quote/[token]`.

Le client voit le devis, le consulte, et peut le signer. La première consultation enregistre `viewedAt`. La signature enregistre `signedAt`. Ces deux dates alimentent :

- le délai d’envoi → signature ;
- le délai de consultation → signature ;
- le taux de signature, une fois le devis signé, refusé ou expiré.

Un jeton ne donne accès qu’à ce document.

## Formulaire

Adresse : `/form/[slug]`.

Formulaire hébergé par Coco, à l’adresse de l’espace. Une réponse peut créer un contact ou déclencher le flux **Webhook entrant**. Le contact arrive dans Clients & Contacts, avec la source du formulaire.

Les formulaires posés sur les sites du client sont ailleurs : [Projets, sites et formulaires](./projets). Chacun s’intègre par un embed limité aux origines du site, ou par une API signée.
