---
title: Clients et contacts
---

import Sketch from '@site/src/components/Sketch';


# Clients et contacts

Adresse : `/leads`. Titre : **Clients & Contacts**.

<Sketch scene="clients" />

La liste est le répertoire commercial. Colonnes : client ou contact, organisation, lieu, besoin, source et date d’arrivée, score d’opportunité, CA signé, pipeline en cours, statut, rôle de partie prenante, actions.

## Statuts

| Statut | Libellé |
| --- | --- |
| prospect, ou nouveau | Prospect |
| contacted | En contact |
| client, ou converted | Client |
| former_client | Ancien client |
| unqualified | Sans suite |

Le score peut être proposé par l’assistant, puis corrigé par un commercial ou un responsable. La correction humaine est conservée avec son motif : l’assistant ne change pas seul le cycle de vie.

## Chiffres de la ligne

- **CA signé** : dossiers gagnés du contact, dans leur devise.
- **Pipeline en cours** : dossiers encore ouverts, hors gagné et perdu.
- **Nouveaux clients**, sur la Vue d’ensemble : fiches au statut client dont la date de création tombe dans la période. Leur valeur affichée additionne les dossiers gagnés liés.

Les adresses internes de l’entreprise sont retirées de ces comptes. Voir [Clients, rachat et abonnements](../calculs/clients).
