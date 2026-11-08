---
title: Configuration
---

import Sketch from '@site/src/components/Sketch';


# Configuration générale

Adresse : `/settings`. Titre : **Configuration & Gouvernance d'Entreprise**.

<Sketch scene="parametres" />

| Section | À quoi elle sert |
| --- | --- |
| Sociétés | Raison sociale, pays, devise, e-mail, site, objectif mensuel de vente |
| Utilisateurs & Rôles | Invitations et rôles administrateur, responsable, commercial |
| Intégrations | Boîte, Power BI, Search Console, webhooks |
| Pipeline commercial | Libellés et probabilités des étapes |
| Données & Conformité | Conservation, consentement de la mesure d’activité, exclusions |
| Abonnement | Offre Coco de l’espace |
| Observabilité & Diagnostics | Santé des connexions et des files |

L’objectif mensuel saisi sur la société remplace l’objectif par défaut du moteur : 50 000 EUR et 500 000 MAD. Tant qu’aucun objectif n’est saisi, la prévision de fin de mois et la couverture du pipeline comparent vos chiffres à ces deux valeurs. L’objectif est rangé dans la devise de la société.

Le pipeline modifié ici change la probabilité proposée à la création d’un dossier. Un dossier déjà enregistré garde la probabilité qu’il porte, jusqu’à ce que vous la changiez.
