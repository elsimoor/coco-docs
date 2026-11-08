---
title: Lucidité commerciale
---

import Sketch from '@site/src/components/Sketch';


# Lucidité commerciale

Adresse : `/lucidity`. Titre à l’écran : **Analyses de Lucidité**.

<Sketch scene="lucidite" />

La page annonce des mesures calculées sur les dossiers, devis et échanges réels. La devise affichée est celle de la société active. Le bouton **Actualiser les métriques** relance le calcul.

## Ce que la page mesure

| Bloc | Question | Règle |
| --- | --- | --- |
| Conversion par tranche de devis | Les petits, moyens et gros devis se signent-ils pareil ? | Moins de 5 000, de 5 000 à 15 000, plus de 15 000, dans la devise active. Signés ÷ (signés + refusés + expirés). Fiable à partir de 5 devis clos dans la tranche. |
| Où meurent les dossiers | Quelle étape bloque ? | Étapes canoniques. Un devis envoyé sans échange depuis plus de 14 jours est signalé, avec son montant. |
| Vitesse de réponse | Combien de temps avant la première réponse ? | Médiane en heures calendaires entre le premier e-mail entrant du dossier et la réponse suivante (e-mail, note ou devis). Les délais sous 0,1 h et au-delà de 30 jours sont écartés. |
| Saisonnalité | Quel mois est le plus creux ? | Aucune conclusion avant 12 mois d’historique. Ensuite, le mois le plus faible en dossiers gagnés est indiqué, avec la suggestion de relancer deux mois avant. |
| Activité des collaborateurs | Un ralentissement est-il visible ? | Désactivé tant que l’administrateur n’a pas donné le consentement (RGPD / CNDP). Lorsqu’il est actif : un collaborateur qui avait au moins 3 actions le mois précédent et qui est passé sous 40 % de ce volume est signalé. |
| Qualité réelle du client | Quels comptes coûtent trop d’effort ? | Effort = échanges ÷ (CA signé / 1 000). Un prospect à 0 n’est pas marqué coûteux. Un client l’est si l’effort dépasse 5 ou s’il a au moins 2 factures en retard. |
| Sources | D’où viennent les signatures ? | Sources normalisées : site, Google, réseaux, recommandation, prospection, agent IA, LinkedIn, autre. |
| Déséquilibre des savoirs | Quels dossiers ne sont assignés à personne ? | Montants séparés par devise, avec une action d’assignation. |

Le détail arithmétique est dans [Lucidité : formules](../calculs/lucidite).
