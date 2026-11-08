---
title: Lucidité, formules
---

import Sketch from '@site/src/components/Sketch';


# Lucidité : formules

La page [Lucidité commerciale](../coco-sells/lucidite) reprend le taux de signature officiel et ajoute des lectures qui lui sont propres. La devise est celle de la société active.

<Sketch scene="calc-lucidite" />

## Conversion par tranche

Même formule que le [taux de signature](./devis.md) : signés ÷ (signés + refusés + expirés), dans trois tranches de montant (moins de 5 000, 5 000 à 15 000, plus de 15 000). Chaque tranche annonce son effectif. Sous 5 devis clos, le conseil affiché est « Pas assez de données », même si un pourcentage est visible.

Le délai moyen de la tranche est la moyenne des jours entre l’émission (ou la création) et la signature, sur les devis gagnés de la tranche. Ce n’est pas la médiane du moteur global.

## Où les dossiers s’arrêtent

Comptage et somme des montants par étape canonique. Le commentaire d’engorgement isole les dossiers à l’étape Devis envoyé dont la dernière activité (sinon la mise à jour, sinon la création) date de plus de 14 jours, et additionne leur montant dans la devise de la société.

## Vitesse de réponse

Pour chaque dossier qui a au moins deux événements :

1. premier e-mail dont le titre contient « inbound », « client » ou « reçu » ;
2. premier événement suivant qui est un e-mail, une note ou un devis.

L’écran libelle ce délai « heures ouvrées ». Le calcul prend les **heures calendaires** entre les deux événements. On écarte ce qui est sous 0,1 heure et ce qui dépasse 30 jours. Le chiffre affiché est la médiane des délais restants, avec une décimale.

La phrase qui annonce un taux de signature 2,4 fois plus élevé pour une réponse dans l’heure est un texte fixe de l’écran. Elle n’est pas recalculée sur vos dossiers.

## Saisonnalité

Chaque dossier est rangé dans le mois de sa création. On compte les créés, les gagnés, et la valeur gagnée. S’il y a moins de 12 mois distincts, aucune saison n’est conclue. À partir de 12 mois, le mois le plus faible en dossiers gagnés est signalé, avec la suggestion de relancer deux mois plus tôt.

## Activité des collaborateurs

Mesure éteinte par défaut. Lorsqu’un administrateur l’active : on compare, par personne assignée, les actions des 30 derniers jours aux 30 jours d’avant. Une personne est signalée si elle avait au moins 3 actions sur la période précédente et si la période récente est strictement inférieure à 40 % de ce volume.

## Sources normalisées

| Texte trouvé | Source affichée |
| --- | --- |
| google, adwords, gclid | Publicité Google |
| facebook, meta, instagram | Facebook & Réseaux |
| recherche, seo, organic | Recherche naturelle |
| recommandation, ami, bouche-à-oreille | Recommandation |
| formulaire, site, web | Formulaire du site |
| e-mail, courriel, prospection | Prospection Courriel |
| cocoinbox, agent, emma, ia | Agent IA (Coco) |
| linkedin | LinkedIn & Prospection |
| vide ou inconnu | Non renseigné |
| le reste | Autre / Direct |

L’attribution d’une signature suit le dossier gagné, pas une règle de dernier clic séparée.
