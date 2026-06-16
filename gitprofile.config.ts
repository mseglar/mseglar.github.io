// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mseglar', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['mseglar/mseglar.github.io'], // These projects will not be displayed. 
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. Format is ['mseglar/tileX', 'mseglar/tilepy']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'VERT adventures',
          description:
            'Profesional mountain guide company passionate about nature, adventure, and safety. We accompany individuals and groups to discover unique landscapes, always with the utmost dedication and experience.',
          imageUrl:
            'https://vert-adventures.com/wp-content/uploads/2025/10/logo-negro-.png',
          link: 'https://vert-adventures.com/',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Monica Seglar-Arroyo', description: '', imageURL: '' },
  social: {
    linkedin: 'monica-seglar-arroyo',
    x: '',
    mastodon: '',
    researchGate: 'Monica-Seglar-Arroyo',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'monica.seglar@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'JupyterLab',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'scikit-learn',
    'LaTeX',
    'Git',
    'PyTorch',
    'TensorFlow',
    'C/C++', 
    'LaTeX', 
    'Bash',
  ],
  experiences: [
    {
      company: 'IFAE',
      position: 'Senior Postdoctoral Researcher',
      from: 'November 2022',
      to: 'January 2026',
      companyLink: 'https://www.ifae.es/ca/',
    },
    {
      company: 'CNRS/LAPP',
      position: 'Postdoctoral Researcher',
      from: 'November 2019',
      to: 'October 2022',
      companyLink: 'https://www.lapp.in2p3.fr/en/lapp',
    },
  ],
  certifications: [
    {
      name: 'Generative AI with LLMs',
      body: 'DeepLearning.AI',
      year: 'in progress',
      link: 'https://www.coursera.org/learn/generative-ai-with-llms',
    },
    {
      name: 'Investment Management Specialization',
      body: 'University of Geneva & UBS',
      year: 'in progress',
      link: 'https://www.coursera.org/specializations/investment-management',
    },
    {
      name: 'From Science to Business',
      body: 'ESADE Business School',
      year: '2024',
      link: 'https://bist.eu/events/event/course-from-science-to-business-2/',
    },
  ],
  educations: [
    {
      institution: 'Université Paris-Saclay',
      degree: 'PhD in High Energy Physics',
      from: '2016',
      to: '2019',
    },
    {
      institution: 'Université Grenoble-Alpes',
      degree: 'MSc in Fundamental Physics',
      from: '2015',
      to: '2016',
    },
    {
      institution: 'BSc in Physics',
      degree: 'Degree',
      from: '2010',
      to: '2015',
    },
  ],
  publications: [
    {
      title: 'GRB 221009A: Observations with LST-1 of CTAO and Implications for Structured Jets in Long Gamma-Ray Bursts',
      conferenceName: '',
      journalName: 'The Astrophysical Journal Letters',
      authors: 'CTAO-LST Collaboration',
      link: 'https://arxiv.org/abs/2507.03077',
      description:
        'GRB 221009A is the brightest gamma-ray burst (GRB) observed to date. Extensive observations of its afterglow emission across the electromagnetic spectrum were performed, providing the first strong evidence of a jet with a nontrivial angular structure in a long GRB. ',
    },
    {
      title: 'Cross-Observatory Coordination with tilepy: A Novel Tool for Observations of Multi-Messenger Transient Events',
      conferenceName: '',
      journalName: '',
      authors: 'Monica Seglar-Arroyo, Halim Ashkar, Mathieu de Bony de Lavergne, Fabian Schüssler',
      link: 'https://arxiv.org/abs/2407.18076',
      description:
        'Python package for the automatic scheduling of follow-up observations of poorly localized transient events. It is ideally suited to tackle the challenge of complex follow-up in mid and small-FoV telescope campaigns, with or without human intervention',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
