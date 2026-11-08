---
title: Rapports d'activité
---

import Sketch from '@site/src/components/Sketch';


# Rapports d’activité

Adresse : `/reports`. Titre : **Rapports & Pilotage Stratégique**.

<Sketch scene="rapports" />

Six onglets lisent le même calcul que la Vue d’ensemble. Rien n’est reconverti : en vue **Toutes**, un montant s’écrit `450 107,5 € · 324 190 MAD`. La France n’affiche que les euros, le Maroc que les dirhams. Si l’une des deux devises vaut 0, elle disparaît de la ligne (un MRR seulement en euros s’écrit `5 000 €`).

Les pourcentages qui n’existent qu’une fois (atteinte de l’objectif, couverture, vélocité, NRR, DSO) utilisent la **devise active** : l’euro en vue Toutes ou France, le dirham en vue Maroc.

Filtres : **Toutes (Consolidé)**, **France (EUR)**, **Maroc (MAD)** ; **Ce mois-ci**, **Ce trimestre**, **Cette année**, **Tout**.

Actions : **Espace Power BI**, **Comparer** (deux périodes), **Export Excel**, **PDF**.

## Vue 360° (Synthèse)

Quatre cartes, puis deux graphiques, puis deux blocs.

| Carte | Grand chiffre | Ligne du dessous | Ouvre |
| --- | --- | --- | --- |
| Valeur du Pipeline | Somme HT des dossiers ni gagnés ni perdus | `N opportunités ouvertes` | Dossiers |
| CA Facturé (HT) | Factures et acomptes émis, moins les avoirs, hors brouillon et annulé | `N factures émises` | Factures |
| Encaissé Réel | Somme des règlements dont la date tombe dans la période | `N règlements reçus` | Factures payées |
| Taux de Signature | Devis signés ÷ (signés + refusés + expirés). Les devis encore ouverts ne comptent pas | `N signés sur N clos` | Lucidité |

**Trajectoire de facturation.** Histogramme des six derniers mois. Barre indigo : hors taxe facturé en euros. Barre verte : hors taxe facturé en dirhams. Les avoirs sont déjà retirés. Ce n’est pas l’encaissé.

**Progression du Pipeline.** Les cinq premières étapes (Nouveau 10 %, Qualifié 25 %, Devis envoyé 50 %, En négociation 75 %, Gagné 100 %), avec le nombre de dossiers et le montant. Perdu n’est pas dans ce bloc. Chaque ligne ouvre les dossiers de l’étape.

**Trésorerie Prévisionnelle (30 jours).** Trois scénarios autour du solde projeté à 30 jours (solde bancaire + factures clients à encaisser − factures fournisseurs à payer) :

| Scénario | Calcul |
| --- | --- |
| Bas | projeté × 0,85 |
| Médian | projeté |
| Haut | projeté × 1,15 |

Le badge **Modèle 90 %** et la phrase « précision historique mesurée à 94,2 % » sont des textes fixes. Ils ne sont pas mesurés sur vos mois.

**Scorecard Qualité & Intégrité.**

| Case | Ce qui est affiché |
| --- | --- |
| Reçus Scellés | Part des actions sensibles qui ont une preuve. À défaut de calcul : 99,4 % |
| Cohérence | Toujours **100 %**. Ce n’est pas un contrôle recalculé |
| Taux Doublons | Toujours **&lt; 0,2 %**. Ce n’est pas le nombre de doublons trouvés |

## Direction & Cockpit

Huit cartes. Voici comment lire une ligne comme celle de l’écran.

### Valeur du Pipeline

Exemple : `450 107,5 € · 324 190 MAD`, puis `115 dossier(s) en cours`.

Somme des montants HT des dossiers ouverts, euros d’un côté et dirhams de l’autre. Le 115 compte tous les dossiers ouverts, les deux devises confondues, y compris un dossier à 0. Gagné et Perdu sont dehors. La carte ouvre les dossiers.

### CA Facturé (HT)

Exemple : `110 000 € · 360 000 MAD`, puis `24 facture(s) émises`.

Hors taxe des factures et acomptes de la période, moins les avoirs. Un brouillon ou une facture annulée ne compte pas. Un devis ne compte pas. Le 24 est le nombre de factures émises, pas le nombre d’avoirs. La carte ouvre les factures.

### Encaissé Réel

Exemple : `118 000 € · 420 000 MAD`, puis `22 règlement(s) reçu(s)`.

Somme des paiements enregistrés sur la période. Ce n’est pas le montant des factures marquées payées : c’est le journal des règlements. Il peut donc dépasser le facturé du mois si des factures plus anciennes sont réglées maintenant. La carte ouvre les factures payées.

### Demande → Encaissement

Exemple : `19 j`, puis `10 dossier(s) encaissé(s) (médiane : 19 j)`.

Médiane des jours entre le premier message du dossier (sinon la création du contact) et le paiement qui solde toutes ses factures. Le dossier n’entre dans le calcul que si chaque facture est payée ou à solde nul, et si ce solde tombe dans la période.

Le nombre de jours n’apparaît qu’à partir de **3 dossiers** encaissés. En dessous, la carte affiche **Données en cours**. La ligne du dessous est le commentaire d’échantillon, pas un second délai.

### Reste Dû (&gt; 30j)

Exemple : `27 600 € · 12 000 MAD`, puis `1 échu(s)` et le lien **Relancer →**.

Le titre parle des retards de plus de 30 jours. Le montant affiché est le **reste dû de toutes les factures non soldées** de la période (`balanceDueTotal`), pas seulement la tranche de plus de 30 jours. La ligne `1 échu(s)` est le nombre de factures en retard ou dont l’échéance est passée. La carte ouvre les factures impayées échues, où la relance se prépare.

La tranche réellement supérieure à 30 jours est celle de la Vue d’ensemble, carte Facturé & Reste dû, pastille **&gt; 30 j**.

### MRR Abonnements

Exemple : `5 000 €`, puis `5 abonnement(s) en cours`.

Revenu récurrent mensuel des abonnements **actifs**. Un trimestriel est divisé par 3, un semestriel par 6, un annuel par 12. Le dirham n’apparaît que s’il est supérieur à 0. Le 5 compte les abonnements actifs, pas ceux annulés dans la période. La carte ouvre les abonnements.

### Prévision Fin de Mois

Exemple : `390 216,75 € · 554 293 MAD`, puis `780 % objectif`.

`prévision = CA HT facturé du mois civil en cours + (montant × probabilité) des dossiers ouverts dont la clôture tombe ce mois, ou qui n’ont pas de date de clôture`

Les deux devises sont dans le grand chiffre. Le pourcentage, lui, ne concerne que la devise active. En vue Toutes, `780 %` veut dire `prévision EUR ÷ objectif EUR`. L’objectif est celui saisi sur la société, sinon **50 000 EUR** et **500 000 MAD**. Un pourcentage au-dessus de 100 signifie que la prévision dépasse l’objectif. S’il n’y a pas d’objectif utile, la ligne dit **Objectif en cours**.

### Couverture Pipeline

Exemple : `1.0x`, puis `Couverture pipeline EUR : Objectif atteint · MAD : 2.32x`.

`couverture = pipeline ouvert ÷ (objectif − CA HT déjà facturé ce mois)`

Le grand chiffre n’utilise que la devise active.

- S’il reste un objectif, vous voyez le multiple (`2.32x` : le pipeline vaut 2,32 fois ce qu’il reste à faire).
- Si l’objectif de cette devise est déjà atteint, le ratio n’existe pas et la carte écrit **1.0x**. Ce 1.0x n’est pas une couverture mesurée.

La phrase en dessous est la lecture complète : elle dit **Objectif atteint** pour une devise soldée, et le multiple pour l’autre. Dans l’exemple, l’euro a atteint l’objectif (d’où le 1.0x affiché) et le dirham couvre 2,32 fois le reste à faire.

## Ventes & Pipeline

Six indicateurs, puis l’entonnoir complet, puis les devis.

| Carte | Grand chiffre | Ligne du dessous |
| --- | --- | --- |
| Taux de Gain | Dossiers gagnés ÷ (gagnés + perdus), en nombre | `N gagnés / N clos`. Fiable à partir de 3 dossiers clos. Ce n’est pas le taux de signature des devis |
| Panier Moyen | Valeur HT des dossiers gagnés ÷ leur nombre, par devise | `Dossiers gagnés` |
| Cycle de Vente | Médiane des jours entre la création du dossier et le passage en Gagné | `Création → Accord`. Fiable à partir de 3 gagnés |
| Vélocité Ventes | `(dossiers ouverts de la devise × panier moyen × taux de gain en valeur) ÷ cycle médian`, en montant par jour | `Flux généré net`. Si le cycle est vide, le diviseur est 30 jours |
| Dossiers Stagnants | Nombre de dossiers ouverts à risque | `&gt; 14j sans action`. Élevé au-delà de 14 jours de silence, ou clôture dépassée avec plus de 7 jours de silence |
| Clôtures Reportées | Dossiers ouverts dont la date de clôture est dépassée, ou déjà reportés | `Échéances déplacées` |

**Progression du Pipeline par Étape.** Les six étapes, Perdu compris, avec la probabilité, le nombre et le montant. Le compteur d’en-tête `N opportunités actives` ne compte que les dossiers encore ouverts. Cliquer une étape filtre les dossiers.

**Devis & Propositions Commerciales.**

| Carte | Grand chiffre | Ligne du dessous |
| --- | --- | --- |
| Devis en Attente | Nombre de devis envoyés ou consultés, non expirés, non signés, non refusés | Leur hors taxe, par devise |
| Taux Signature | Signés ÷ (signés + refusés + expirés) | `Signés sur clos`. Seuil : 5 devis clos |
| Délai Signature | Médiane des jours entre l’envoi et la signature | `Médiane Envoi → Accord` |
| Ouverture → Accord | Médiane des jours entre la première consultation et la signature | `1re consultation`. Seuil : 5 devis signés avec une date de consultation |
| Remise Moyenne | Remises ÷ brut des lignes, sur les devis signés, dans la devise active | `Sur devis signés`. Seuil : 5 devis signés. Affiche 0 % s’il n’y a pas de remise |
| Devis Expirés | Nombre de devis au statut expiré dans la période | `Sans réponse` |

## Finance & Trésorerie

**Abonnements Récurrents & Rétention (MRR).** Lien vers les abonnements.

| Carte | Grand chiffre | Ligne du dessous |
| --- | --- | --- |
| MRR Consolidé | Mensualisation des abonnements actifs | `Normalisé mensuel` |
| Net Retention (NRR) | `(MRR de début − MRR perdu) ÷ MRR de début`, devise active. L’expansion et la contraction valent 0 aujourd’hui | `Base existante`. Affiche 100 % si le MRR de début est nul |
| Taux de Churn | Abonnés annulés sur la période ÷ (actifs + annulés) | `N désabonné(s)` |
| Revenu Moyen (ARPU) | MRR ÷ nombre d’abonnements actifs | `Par abonné actif` |
| Valeur Vie (LTV) | ARPU ÷ taux de churn. Si le churn est nul : ARPU × 36 | `Projection globale` |

**Recouvrement & Trésorerie.** Lien vers la trésorerie.

| Carte | Grand chiffre | Ligne du dessous |
| --- | --- | --- |
| DSO (Délai crédit) | `(reste dû TTC ÷ CA facturé TTC) × jours de la période` | `Créances / Facturé`. Sans période, 30 jours |
| Taux Recouvrement | Encaissé ÷ (encaissé + montant en retard), devise active | `Encaissé sur exigible`. Affiche 100 % s’il n’y a rien à recouvrer |
| Promesses Tenues | Promesses tenues ÷ (tenues + rompues). Celles encore en attente sont dehors | `N respectées`. Affiche 100 % s’il n’y a aucune promesse tranchée |
| DPO Fournisseurs | `(dettes fournisseurs non payées ÷ achats) × jours de la période` | `Délai moyen règlement`. Affiche 30 j si le calcul n’a pas de base |
| Rapprochement Auto | Lignes bancaires rapprochées ÷ toutes les lignes | `Écritures bancaires`. Affiche 100 % s’il n’y a pas de ligne |
| Écart Trésorerie | `(solde réel − solde projeté à 30 jours) ÷ valeur absolue du projeté` | `Prévu vs Solde réel` |

## Clients & Nora IA

**Intelligence Clients & Conversion.**

| Carte | Grand chiffre | Ligne du dessous |
| --- | --- | --- |
| Taux de Réachat | Clients avec au moins 2 dossiers gagnés ÷ clients qui ont au moins un dossier | `≥ 2 commandes`. Affiche 100 % s’il n’y a aucun client |
| Part Top 10 | CA HT des 10 plus gros clients ÷ CA HT total, devise active | `Concentration CA` |
| Canal Principal | Première source renvoyée par le calcul, ou **Site Web** si la liste est vide | `Meilleur canal`. Ce n’est pas un classement par chiffre d’affaires : c’est la première source de la liste |
| Rendez-vous Tenus | Tâches terminées dont le titre ou la description parle d’un rendez-vous, d’une visio, d’un meeting ou d’un appel | `Planifiés & honorés` |
| Délai 1er RDV | Médiane des jours entre la création du contact et l’échéance de cette tâche | `Prise de contact` |
| RDV → Devis | Rendez-vous tenus qui ont un devis sur le même dossier ÷ rendez-vous tenus | `Taux concrétisation`. Affiche 100 % s’il n’y a aucun rendez-vous. Fiable à partir de 3 |

**Coco Connect & Tri Intelligent Nora.** Le lien ouvre la billetterie.

| Carte | Grand chiffre | À retenir |
| --- | --- | --- |
| 1re Réponse | Toujours **&lt; 15 min** | Texte fixe. Ce n’est pas la médiane de la Lucidité |
| Sans réponse &gt; 24h | Toujours **0 alerte** | Texte fixe |
| Rappels &lt; 1h | Rappels dans l’heure ÷ appels manqués | Affiche 100 % s’il n’y a pas d’appel manqué. Un appel manqué est un appel terminé sans durée ou sans participant |
| SLA Billetterie | Toujours **98 %** | Texte fixe. Le taux réel des billets est sur Assistance & Billetterie |
| Précision Nora | Prospects Nora conservés (prospect, client, ou dossier gagné) ÷ prospects qualifiés par Nora | Affiche 99 % s’il n’y a aucun prospect Nora |
| Prospects Manqués | Fils commerciaux dont l’expéditeur n’est pas déjà un contact et qui ne sont pas classés comme bruit | `Audit messages` |

## Workforce & Intégrité

**Performance de la Workforce IA.** Lien vers l’équipe.

| Carte | Grand chiffre | Ligne du dessous |
| --- | --- | --- |
| Missions Exécutées | Nombre de missions d’agents | `N succès` : statut réussi |
| Sans Correction | Missions réussies et revues ÷ missions réussies | `Acceptées directement`. 100 % s’il n’y a aucune réussite |
| Temps Économisé | Heures = (missions réussies × 15 minutes) ÷ 60 | `15 min / mission`. Estimation fixe, pas un chronomètre |
| Banc d'Essai | Score de la suite de tests | Vaut **98,5 / 100** tant qu’aucune autre valeur n’est fournie. Ce n’est pas le résultat de vos dossiers |
| Consommation | Jetons, affichés en milliers | Crédits estimés : jetons ÷ 1 000 × 0,1. 250 jetons sont pris si la mission n’en donne pas |
| Encaissé Post-Action | TTC des factures payées citées par un reçu de relance | `Relances automatisées`. La facture entière est comptée |

**Scorecard Qualité & Intégrité des Données.**

| Case | Grand chiffre | Ligne du dessous |
| --- | --- | --- |
| Actions avec Reçu | Preuves ÷ actions sensibles (factures, devis signés, relances). Plafonné à 100 %. À défaut : 99,4 % | `Preuve scellée` |
| Cohérence Calculs | Toujours **100 %** | `Zéro divergence`. Texte fixe |
| Fiches Complètes | Contacts qui ont un e-mail et un nom ou un téléphone ÷ tous les contacts. À défaut : 98 % | `Coordonnées valides` |
| Taux de Doublons | Toujours **&lt; 0,2 %** | `Cible &lt; 1%`. Texte fixe, pas un comptage |
| À Confirmer | Nombre de contacts sans société et sans organisation | `Données incertaines` |

## Comparer

`/reports/compare` place deux référentiels côte à côte. Chacun a sa période (ce mois-ci, ce trimestre, cette année, historique complet) et son entité (toutes, France, Maroc). Les cinq lignes comparées sont la valeur du pipeline, la prévision pondérée, le CA facturé HT, le taux de signature et les dossiers ouverts.
