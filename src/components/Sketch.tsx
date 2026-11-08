import React from 'react';

type Card = { k: string; v: string; h?: string; tone?: 'good' | 'warn' | 'accent' };
type Stage = { name: string; p: string; kind?: 'won' | 'lost' };
type Step = { t: string; d?: string };
type Row = { k: string; w: number; v: string; green?: boolean };
type Msg = { t: string; d: string; pill?: string; tone?: 'green' | 'amber' };

type Scene =
  | { kind: 'app'; title: string; brand: string; connect?: boolean; nav: string[]; active: number; cards?: Card[]; note?: string }
  | { kind: 'cards'; title: string; tabs?: string[]; activeTab?: number; cards: Card[]; note?: string }
  | { kind: 'rail'; title: string; stages: Stage[]; note?: string }
  | { kind: 'steps'; title: string; steps: Step[]; note?: string }
  | { kind: 'split'; title: string; leftK: string; leftV: string; leftH?: string; op: string; rightK: string; rightV: string; rightH?: string; note?: string }
  | { kind: 'bars'; title: string; rows: Row[]; note?: string }
  | { kind: 'inbox'; title: string; messages: Msg[]; note?: string };

const SCENES: Record<string, Scene> = {
  home: {
    kind: 'cards',
    title: 'Deux produits, un seul espace',
    cards: [
      { k: 'Coco Sells', v: 'Ventes', h: 'Pipeline, devis, projets', tone: 'accent' },
      { k: 'Coco Connect', v: 'Échanges', h: 'Boîte, tâches, assistance', tone: 'good' },
      { k: 'Devises', v: 'EUR · MAD', h: 'Jamais additionnées' },
    ],
  },
  connexion: {
    kind: 'cards',
    title: 'Connexion',
    cards: [
      { k: 'Espace', v: 'votre-société', h: 'Slug du portail' },
      { k: 'Arrivée', v: 'Vue d’ensemble', h: 'Après connexion' },
      { k: 'Invitation', v: 'Rôle fixé', h: 'Mot de passe à choisir' },
    ],
  },
  navigation: {
    kind: 'app',
    title: 'Menu',
    brand: 'Coco Sells',
    nav: ['Pilotage', 'Ventes', 'Travail', 'Outils'],
    active: 0,
    note: 'Le bas du menu reste dans l’application. Le sélecteur de produit ouvre la boîte externe.',
  },
  roles: {
    kind: 'split',
    title: 'Société France et société Maroc',
    leftK: 'France',
    leftV: 'EUR',
    leftH: 'Filtre société FR',
    op: '≠',
    rightK: 'Maroc',
    rightV: 'MAD',
    rightH: 'Filtre société MA',
    note: 'La vue Toutes montre les deux colonnes côte à côte.',
  },
  overview: {
    kind: 'cards',
    title: 'Vue d’ensemble',
    cards: [
      { k: 'Encaissé du mois', v: '118 000 €', h: '22 règlements', tone: 'good' },
      { k: 'Facturé & reste dû', v: '110 000 €', h: 'Reste + retard', tone: 'warn' },
      { k: 'Pipeline ouvert', v: '450 107 €', h: '115 dossiers', tone: 'accent' },
    ],
  },
  diagnostic: {
    kind: 'cards',
    title: 'Revenus dormants · 6 mois',
    cards: [
      { k: 'Devis en attente', v: 'HT', h: 'Jours sans réponse', tone: 'accent' },
      { k: 'Pièces manquantes', v: 'Docs', h: 'Déjà compté devis ?', tone: 'warn' },
      { k: 'Clients silencieux', v: 'Jours', h: 'Inactifs', },
    ],
  },
  lucidite: {
    kind: 'cards',
    title: 'Conversion par tranche',
    cards: [
      { k: 'Petite', v: '< 5 000', h: 'Signés ÷ clos', tone: 'accent' },
      { k: 'Moyenne', v: '5 à 15 000', h: 'Seuil : 5 clos' },
      { k: 'Grande', v: '> 15 000', h: 'Même formule' },
    ],
  },
  rapports: {
    kind: 'cards',
    title: 'Direction & Cockpit',
    tabs: ['360°', 'Direction', 'Ventes', 'Finance', 'Clients', 'Workforce'],
    activeTab: 1,
    cards: [
      { k: 'Valeur du Pipeline', v: '450 107 €', h: '115 dossiers en cours', tone: 'accent' },
      { k: 'CA Facturé (HT)', v: '110 000 €', h: '24 factures émises' },
      { k: 'Encaissé Réel', v: '118 000 €', h: '22 règlements', tone: 'good' },
      { k: 'Demande → Encaissement', v: '19 j', h: '10 dossiers, médiane' },
      { k: 'Reste dû', v: '27 600 €', h: '1 échu · Relancer', tone: 'warn' },
      { k: 'MRR', v: '5 000 €', h: '5 abonnements' },
      { k: 'Prévision fin de mois', v: '390 216 €', h: '780 % objectif', tone: 'accent' },
      { k: 'Couverture', v: '1.0x', h: 'EUR atteint · MAD 2,32x' },
    ],
    note: 'Les montants réels de l’écran remplacent cet exemple. Le 1.0x s’affiche quand l’objectif euro est déjà atteint.',
  },
  powerbi: {
    kind: 'app',
    title: 'Power BI',
    brand: 'Coco Sells',
    nav: ['Rapport A', 'Rapport B', 'Relais'],
    active: 0,
    note: 'Le cadre embarque le rapport. Les cartes Coco restent le chiffre de référence.',
  },
  indicateurs: {
    kind: 'cards',
    title: 'Tableau personnalisé',
    cards: [
      { k: 'Nombre', v: 'Clients', h: 'Par source' },
      { k: 'Somme', v: 'Dossiers', h: 'Par étape', tone: 'accent' },
      { k: 'Moyenne', v: 'Score', h: 'Par pays' },
      { k: 'Carte', v: 'Pays', h: 'ISO' },
    ],
  },
  radar: {
    kind: 'cards',
    title: 'Le Radar',
    cards: [
      { k: 'Devis sans réponse', v: 'HT', h: 'Envoyés, ouverts', tone: 'accent' },
      { k: 'Factures impayées', v: 'Solde', h: 'Échues', tone: 'warn' },
      { k: 'Docs non reçus', v: 'Pièces', h: 'À relancer' },
      { k: 'Clients silencieux', v: '6 mois', h: 'Sans contact' },
      { k: 'Promesses', v: 'Retard', h: 'Non tenues' },
    ],
  },
  relances: {
    kind: 'steps',
    title: 'File d’approbation',
    steps: [
      { t: 'J+3', d: 'Premier suivi' },
      { t: 'J+10', d: 'Relance ferme' },
      { t: 'J+21', d: 'Dernier rappel' },
    ],
    note: 'Rien ne part sans validation. Une réponse arrête la séquence.',
  },
  dossiers: {
    kind: 'rail',
    title: 'Dossiers d’affaires',
    stages: [
      { name: 'Nouveau', p: '10 %' },
      { name: 'Qualifié', p: '25 %' },
      { name: 'Devis envoyé', p: '50 %' },
      { name: 'Négociation', p: '75 %' },
      { name: 'Gagné', p: '100 %', kind: 'won' },
      { name: 'Perdu', p: '0 %', kind: 'lost' },
    ],
  },
  clients: {
    kind: 'bars',
    title: 'Clients & contacts',
    rows: [
      { k: 'Prospect', w: 70, v: 'Nouveau' },
      { k: 'En contact', w: 48, v: 'Échange' },
      { k: 'Client', w: 36, v: 'CA signé', green: true },
      { k: 'Ancien', w: 18, v: 'Sans suite' },
    ],
  },
  'fiche-client': {
    kind: 'cards',
    title: 'Fiche client',
    tabs: ['Résumé', 'Dossiers', 'Devis', 'Relances', 'Messages'],
    activeTab: 0,
    cards: [
      { k: 'CA réglé', v: 'TTC', h: 'Factures payées', tone: 'good' },
      { k: 'Solde impayé', v: 'TTC', h: 'Dont retard', tone: 'warn' },
      { k: 'Pipeline', v: 'HT', h: '× probabilité', tone: 'accent' },
      { k: 'Relances', v: 'Reçus', h: 'Séquences actives' },
    ],
  },
  billing: {
    kind: 'split',
    title: 'Devis et facture restent séparés',
    leftK: 'Devis',
    leftV: 'Promesse',
    leftH: 'N’entre pas dans le CA',
    op: '≠',
    rightK: 'Facture',
    rightV: 'Créance',
    rightH: 'HT − avoirs',
    note: 'Acompte et avoir sont des factures. Le brouillon n’entame pas la numérotation.',
  },
  achats: {
    kind: 'cards',
    title: 'Achats',
    tabs: ['Échéancier', 'Factures', 'Commandes', 'Fournisseurs'],
    activeTab: 0,
    cards: [
      { k: 'À payer', v: 'Solde', h: 'Échéance proche', tone: 'warn' },
      { k: 'Payé', v: 'Réglé', h: 'Hors prévision', tone: 'good' },
    ],
  },
  tresorerie: {
    kind: 'steps',
    title: 'Solde projeté',
    steps: [
      { t: 'Banque', d: 'Entrées − sorties' },
      { t: '+ 30 j', d: 'Clients dus' },
      { t: '− 30 j', d: 'Fournisseurs' },
      { t: 'Net', d: 'Puis 60 et 90' },
    ],
  },
  fec: {
    kind: 'split',
    title: 'Export comptable',
    leftK: 'France',
    leftV: 'FEC',
    leftH: 'Journal légal',
    op: '|',
    rightK: 'Maroc',
    rightV: 'TVA DGI',
    rightH: '20 · 14 · 10 · 7 · 0',
  },
  produits: {
    kind: 'split',
    title: 'Deux prix, une offre',
    leftK: 'Tarif France',
    leftV: '€ HT',
    leftH: 'TVA 20 % à 0 %',
    op: '+',
    rightK: 'Tarif Maroc',
    rightV: 'MAD HT',
    rightH: 'TVA 20 % à 0 %',
  },
  equipe: {
    kind: 'cards',
    title: 'Équipe',
    tabs: ['Équipe', 'Skills', 'À valider'],
    activeTab: 2,
    cards: [
      { k: 'Humains', v: 'Sièges', h: 'Comptés au forfait' },
      { k: 'Agents', v: 'Missions', h: 'Validation humaine', tone: 'accent' },
      { k: 'Refus', v: 'File', h: 'Rien n’est envoyé seul', tone: 'warn' },
    ],
  },
  workflows: {
    kind: 'steps',
    title: 'Flux',
    steps: [
      { t: 'Événement', d: 'Courriel, client…' },
      { t: 'Condition', d: 'Si / sinon' },
      { t: 'Action', d: 'Tâche, e-mail' },
    ],
    note: 'La simulation ne modifie aucune fiche.',
  },
  recherche: {
    kind: 'inbox',
    title: 'Recherche unifiée',
    messages: [
      { t: 'Contacts', d: 'Nom, société, e-mail', pill: '3' },
      { t: 'Dossiers', d: 'Étape et montant', pill: '2', tone: 'green' },
      { t: 'Devis', d: 'Sans réponse', pill: '1', tone: 'amber' },
    ],
  },
  domaines: {
    kind: 'split',
    title: 'Envoi',
    leftK: 'Principal',
    leftV: 'votre.fr',
    leftH: 'DNS vérifié',
    op: '→',
    rightK: 'Secours',
    rightV: 'Pool Coco',
    rightH: 'Si le principal tombe',
  },
  warmup: {
    kind: 'bars',
    title: 'Chauffe du jour',
    rows: [
      { k: 'Envoyés', w: 74, v: '185 / 250', green: true },
      { k: 'Capacité', w: 100, v: 'Plafond 100 %' },
    ],
    note: '74 % = envoyés aujourd’hui ÷ capacité. Ce n’est pas un taux d’ouverture.',
  },
  parametres: {
    kind: 'app',
    title: 'Configuration',
    brand: 'Coco Sells',
    nav: ['Sociétés', 'Rôles', 'Pipeline', 'Conformité'],
    active: 2,
    note: 'L’objectif saisi ici remplace 50 000 € et 500 000 MAD.',
  },
  corbeille: {
    kind: 'bars',
    title: 'Rétention 30 jours',
    rows: [
      { k: 'Jour 1', w: 100, v: 'Restaurable' },
      { k: 'Jour 30', w: 8, v: 'Puis purge', green: false },
    ],
    note: 'Tant que la pièce est ici, elle sort de tous les indicateurs.',
  },
  administration: {
    kind: 'cards',
    title: 'Espaces',
    cards: [
      { k: 'Espace A', v: 'Base dédiée', h: 'Ouvre /overview' },
      { k: 'Espace B', v: 'Base dédiée', h: 'Chiffres isolés' },
      { k: 'Domaines', v: 'Marge', h: 'Prix en dollars', tone: 'accent' },
    ],
  },
  public: {
    kind: 'steps',
    title: 'Lien client',
    steps: [
      { t: 'Reçu', d: 'Le devis' },
      { t: 'Consulté', d: 'viewedAt' },
      { t: 'Signé', d: 'signedAt' },
    ],
    note: 'Ces deux dates alimentent les délais de signature.',
  },
  plateforme: {
    kind: 'split',
    title: 'Deux portes',
    leftK: 'Dans l’app',
    leftV: '/boite',
    leftH: 'Qualification CRM',
    op: 'ou',
    rightK: 'Plein écran',
    rightV: '/emails',
    rightH: 'Connexion unique',
  },
  boite: {
    kind: 'inbox',
    title: 'Boîte Connect',
    messages: [
      { t: 'Nouveau client', d: 'Demande de devis extraite', pill: 'Valider', tone: 'green' },
      { t: 'Déjà connu', d: 'Dossier lié', pill: 'Ouvrir', tone: 'amber' },
      { t: 'Spam', d: 'Aucune fiche créée', pill: 'Ignorer' },
    ],
  },
  discussion: {
    kind: 'inbox',
    title: 'Discussion interne',
    messages: [
      { t: 'Équipe', d: 'Message sur le dossier, invisible du client', pill: 'Confidentiel' },
      { t: '@Nora', d: 'Mention dans le fil de la fiche', pill: 'Agent', tone: 'green' },
    ],
    note: 'La page Chat ouvre la plateforme. Le fil utile est sur la fiche.',
  },
  projets: {
    kind: 'steps',
    title: 'Projet, sites, formulaires',
    steps: [
      { t: 'Projet', d: 'Autant de sites' },
      { t: 'Site', d: 'Origines autorisées' },
      { t: 'Formulaire', d: 'Embed ou API signée' },
    ],
    note: 'Le secret API ne s’affiche qu’une fois. L’embed refuse toute autre origine.',
  },
  taches: {
    kind: 'cards',
    title: 'Écran du matin',
    tabs: ['Aujourd’hui', 'Retard', 'À venir', 'Faites'],
    activeTab: 0,
    cards: [
      { k: 'Due', v: 'Relance', h: 'Promesse du jour', tone: 'accent' },
      { k: 'Retard', v: '+1 j', h: 'Reporter', tone: 'warn' },
      { k: 'iCal', v: 'Jeton', h: 'Agenda externe' },
    ],
  },
  tickets: {
    kind: 'cards',
    title: 'SLA',
    cards: [
      { k: 'Urgente', v: '< 4 h', h: '1re réponse < 1 h', tone: 'warn' },
      { k: 'Haute', v: '< 24 h', h: '1re réponse < 4 h' },
      { k: 'Conformité', v: '≥ 90 %', h: 'Badge Conforme', tone: 'good' },
    ],
  },
  gsc: {
    kind: 'bars',
    title: 'Search Console · 28 jours',
    rows: [
      { k: 'Clics', w: 42, v: 'Somme des jours' },
      { k: 'Impressions', w: 88, v: 'Somme des jours', green: true },
      { k: 'Position', w: 30, v: 'Pondérée' },
    ],
    note: 'CTR = clics ÷ impressions.',
  },
  documents: {
    kind: 'inbox',
    title: 'Classeur',
    messages: [
      { t: 'contrat.pdf', d: 'Rattaché au dossier', pill: 'Tous' },
      { t: 'devis-signe.pdf', d: 'Pièce jointe reçue', pill: 'Commercial', tone: 'green' },
    ],
  },
  principes: {
    kind: 'split',
    title: 'Règle de devise',
    leftK: 'Euros',
    leftV: '450 107 €',
    leftH: 'Colonne EUR',
    op: '≠',
    rightK: 'Dirhams',
    rightV: '324 190',
    rightH: 'Colonne MAD',
    note: 'Aucun total unique ne mélange les deux.',
  },
  'calc-pipeline': {
    kind: 'steps',
    title: 'Prévision',
    steps: [
      { t: 'Ouvert', d: 'Hors gagné / perdu' },
      { t: '× %', d: 'Probabilité du dossier' },
      { t: 'Somme', d: 'Par devise' },
    ],
    note: 'Sans probabilité saisie, le calcul prend 50 %.',
  },
  'calc-devis': {
    kind: 'split',
    title: 'Taux de signature',
    leftK: 'Signés',
    leftV: 'Numérateur',
    leftH: 'Acceptés inclus',
    op: '÷',
    rightK: 'Clos',
    rightV: 'Signés + refus + expirés',
    rightH: 'Les ouverts sont exclus',
  },
  'calc-facturation': {
    kind: 'steps',
    title: 'Chiffre d’affaires HT',
    steps: [
      { t: 'Factures', d: 'Période' },
      { t: '− Avoirs', d: 'Même période' },
      { t: 'CA HT', d: 'Par devise' },
    ],
  },
  'calc-tresorerie': {
    kind: 'cards',
    title: 'Fenêtres cumulées',
    cards: [
      { k: '30 jours', v: 'Net', h: 'Inclus dans 60', tone: 'accent' },
      { k: '60 jours', v: 'Net', h: 'Inclus dans 90' },
      { k: '90 jours', v: 'Net', h: 'Solde + flux' },
      { k: 'Bas / haut', v: '± 15 %', h: 'Autour du 30 j', tone: 'warn' },
    ],
  },
  'calc-clients': {
    kind: 'steps',
    title: 'MRR',
    steps: [
      { t: 'Actif', d: 'Montant HT' },
      { t: '÷ période', d: '3, 6 ou 12' },
      { t: 'MRR', d: 'Par devise' },
    ],
    note: 'Clients silencieux : 180 jours dans le calcul, même si une carte dit 60.',
  },
  'calc-lucidite': {
    kind: 'bars',
    title: 'Où les dossiers s’arrêtent',
    rows: [
      { k: 'Nouveau', w: 90, v: 'Entrée' },
      { k: 'Devis', w: 55, v: '> 14 j = blocage', green: true },
      { k: 'Gagné', w: 28, v: 'Signés' },
    ],
  },
  'calc-connect': {
    kind: 'steps',
    title: 'Une réponse de relance',
    steps: [
      { t: 'Envoi', d: 'Reçu daté' },
      { t: 'Fil', d: 'Même adresse' },
      { t: 'Après', d: 'Compte comme réponse' },
    ],
  },
};

function Shell({ title, children, note }: { title: string; children: React.ReactNode; note?: string }) {
  return (
    <figure className="sk" aria-label={title}>
      <div className="sk-bar">
        <span className="sk-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="sk-title">{title}</span>
      </div>
      <div className="sk-body">
        {children}
        {note ? <p className="sk-note">{note}</p> : null}
      </div>
    </figure>
  );
}

function Cards({ cards }: { cards: Card[] }) {
  return (
    <div className="sk-cards">
      {cards.map((card) => (
        <div className={`sk-card ${card.tone || ''}`} key={card.k}>
          <span className="k">{card.k}</span>
          <span className="v">{card.v}</span>
          {card.h ? <span className="h">{card.h}</span> : null}
        </div>
      ))}
    </div>
  );
}

export default function Sketch({ scene }: { scene: string }) {
  const data = SCENES[scene];
  if (!data) return null;

  if (data.kind === 'cards') {
    return (
      <Shell title={data.title} note={data.note}>
        {data.tabs ? (
          <div className="sk-tabs">
            {data.tabs.map((tab, index) => (
              <b className={index === data.activeTab ? 'on' : ''} key={tab}>{tab}</b>
            ))}
          </div>
        ) : null}
        <Cards cards={data.cards} />
      </Shell>
    );
  }

  if (data.kind === 'rail') {
    return (
      <Shell title={data.title} note={data.note}>
        <div className="sk-rail">
          {data.stages.map((stage) => (
            <div className={`sk-stage ${stage.kind || ''}`} key={stage.name}>
              <b>{stage.name}</b>
              <em>{stage.p}</em>
            </div>
          ))}
        </div>
      </Shell>
    );
  }

  if (data.kind === 'steps') {
    return (
      <Shell title={data.title} note={data.note}>
        <div className="sk-steps">
          {data.steps.map((step, index) => (
            <React.Fragment key={step.t}>
              {index > 0 ? <span className="sk-arrow" aria-hidden="true">→</span> : null}
              <div className="sk-step">
                <b>{step.t}</b>
                {step.d ? <span>{step.d}</span> : null}
              </div>
            </React.Fragment>
          ))}
        </div>
      </Shell>
    );
  }

  if (data.kind === 'split') {
    return (
      <Shell title={data.title} note={data.note}>
        <div className="sk-split">
          <div className="sk-pane">
            <div className="k">{data.leftK}</div>
            <div className="v">{data.leftV}</div>
            {data.leftH ? <div className="h">{data.leftH}</div> : null}
          </div>
          <div className="sk-op">{data.op}</div>
          <div className="sk-pane">
            <div className="k">{data.rightK}</div>
            <div className="v">{data.rightV}</div>
            {data.rightH ? <div className="h">{data.rightH}</div> : null}
          </div>
        </div>
      </Shell>
    );
  }

  if (data.kind === 'bars') {
    return (
      <Shell title={data.title} note={data.note}>
        <div className="sk-rows">
          {data.rows.map((row) => (
            <div className="sk-row" key={row.k}>
              <b>{row.k}</b>
              <span className="sk-track"><i className={row.green ? 'green' : ''} style={{ width: `${row.w}%` }} /></span>
              <em>{row.v}</em>
            </div>
          ))}
        </div>
      </Shell>
    );
  }

  if (data.kind === 'inbox') {
    return (
      <Shell title={data.title} note={data.note}>
        {data.messages.map((message) => (
          <div className="sk-msg" key={message.t}>
            <b>{message.t}</b>
            <span>{message.d}</span>
            {message.pill ? <span className={`sk-pill ${message.tone || ''}`}>{message.pill}</span> : null}
          </div>
        ))}
      </Shell>
    );
  }

  return (
    <Shell title={data.title} note={data.note}>
      <div className="sk-app">
        <div className="sk-nav">
          <div className={`sk-brand ${data.connect ? 'connect' : ''}`}>{data.brand}</div>
          {data.nav.map((item, index) => (
            <span className={index === data.active ? `on ${data.connect ? 'connect' : ''}` : ''} key={item}>{item}</span>
          ))}
        </div>
        <div className="sk-main">
          {data.cards ? <Cards cards={data.cards} /> : <div className="sk-pane"><div className="k">Rapport</div><div className="v">Intégré</div><div className="h">Le chiffre Coco reste à côté</div></div>}
        </div>
      </div>
    </Shell>
  );
}
