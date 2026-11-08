import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Documentation Coco',
  tagline: 'Coco Sells et Coco Connect, écran par écran, avec le calcul réel des indicateurs.',
  favicon: 'img/favicon.svg',
  url: 'https://docs.cocoinbox.com',
  baseUrl: '/',
  organizationName: 'cocoinbox',
  projectName: 'coco-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['fr'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
        explicitSearchResultPath: true,
        searchBarPosition: 'right',
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Coco',
      items: [
        {to: '/prise-en-main/connexion', label: 'Prise en main', position: 'left'},
        {to: '/coco-sells/vue-ensemble', label: 'Coco Sells', position: 'left'},
        {to: '/coco-connect/plateforme', label: 'Coco Connect', position: 'left'},
        {to: '/calculs/principes', label: 'Calculs', position: 'left'},
      ],
    },
    footer: {
      style: 'light',
      copyright: `Documentation utilisateur Coco Sells et Coco Connect.`,
    },
    docs: {
      sidebar: {
        hideable: false,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
