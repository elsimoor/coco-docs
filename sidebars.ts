import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Prise en main',
      collapsed: false,
      items: ['prise-en-main/connexion', 'prise-en-main/navigation', 'prise-en-main/roles-et-societes'],
    },
    {
      type: 'category',
      label: 'Coco Sells',
      items: [
        'coco-sells/vue-ensemble',
        'coco-sells/diagnostic',
        'coco-sells/lucidite',
        'coco-sells/rapports',
        'coco-sells/power-bi',
        'coco-sells/indicateurs',
        'coco-sells/radar',
        'coco-sells/relances',
        'coco-sells/dossiers',
        'coco-sells/clients',
        'coco-sells/fiche-client',
        'coco-sells/devis-factures',
        'coco-sells/achats',
        'coco-sells/tresorerie',
        'coco-sells/export-comptable',
        'coco-sells/produits',
        'coco-sells/equipe',
        'coco-sells/workflows',
        'coco-sells/recherche',
        'coco-sells/domaines',
        'coco-sells/warmup',
        'coco-sells/parametres',
        'coco-sells/corbeille',
        'coco-sells/administration',
        'coco-sells/pages-publiques',
      ],
    },
    {
      type: 'category',
      label: 'Coco Connect',
      items: [
        'coco-connect/plateforme',
        'coco-connect/boite',
        'coco-connect/discussion',
        'coco-connect/projets',
        'coco-connect/taches',
        'coco-connect/tickets',
        'coco-connect/search-console',
        'coco-connect/documents',
      ],
    },
    {
      type: 'category',
      label: 'Comment les chiffres sont calculés',
      items: [
        'calculs/principes',
        'calculs/pipeline',
        'calculs/devis',
        'calculs/facturation',
        'calculs/tresorerie',
        'calculs/clients',
        'calculs/lucidite',
        'calculs/connect',
      ],
    },
  ],
};

export default sidebars;
