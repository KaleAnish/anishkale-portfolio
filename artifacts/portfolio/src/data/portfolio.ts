// =============================================================================
// PORTFOLIO CONTENT — Edit this file to update any section of the site.
//
// Deployment: save → push to GitHub → Vercel auto-deploys to anishkale.dev
// Sections in order: personalInfo → about → education → skills → experience
//                    → projects → publications → certifications → beyondWork → contact
// =============================================================================

export const PORTFOLIO = {

  // ---------------------------------------------------------------------------
  // PERSONAL INFO
  // Drives: Hero section name, title, tagline, social links, resume buttons.
  // Resume links should be Google Drive "Anyone with link" share URLs.
  // ---------------------------------------------------------------------------
  personalInfo: {
    name: "Anish A. Kale",
    title: "Building Data Science & Machine Learning Systems | Data Analytics | Geospatial & Multimodal AI",
    location: "California, USA",
    tagline:
      "Designing and deploying applied machine learning solutions across multimodal search, geospatial analytics, responsible AI, and data-driven decision support.",
    github: "https://github.com/KaleAnish",
    linkedin: "https://www.linkedin.com/in/kaleanish",
    instagram: "https://www.instagram.com/pnq.spotter/",
    email: "akale014@ucr.edu",
    // Update these Google Drive URLs when uploading a new resume version:
    resumeDataML: "https://drive.google.com/drive/folders/1KFO11ExDKDi0CpZFjkRjUWpnAIyjjJ99?usp=drive_link",
    resumeFinConsulting: "https://drive.google.com/drive/folders/1Cb8DaImUwOVRDdIEPg44VOyIum-kl9fH?usp=drive_link",
  },

  // ---------------------------------------------------------------------------
  // ABOUT
  // Array of paragraph strings shown in the About section.
  // Add, remove, or reorder paragraphs freely.
  // ---------------------------------------------------------------------------
  about: [
  "I hold an M.S. in Computational Data Science from the University of California, Riverside, building on an applied background at the intersection of Electrical Engineering, machine learning, and quantitative analytics. I currently work as a Staff Research Associate at UCR's Centre for Laboratory AI Research (CLAIR), on a joint research collaboration with Cornell University.",

  "I build end-to-end systems across supervised and reinforcement learning, computer vision, multimodal retrieval, retrieval-augmented generation, and financial risk modeling, with a focus on responsible AI and real-world applications.",

  "I apply statistical rigor and systems-level thinking to complex datasets, particularly in contexts that require both technical depth and business understanding. My interests span domains such as finance, energy systems, and geospatial intelligence, with a focus on building multidisciplinary data-driven systems that create meaningful and practical impact.",
],
  
  // ---------------------------------------------------------------------------
  // EDUCATION
  // Shown inside the Experience section (03), above work history.
  // Fields: degree, school, period ("MM/YYYY – MM/YYYY")
  // ---------------------------------------------------------------------------
  education: [
    {
      degree: "M.S. Computational Data Science",
      school: "University of California, Riverside",
      period: "09/2024 – 06/2026",
    },
    {
      degree: "B.Tech. Electrical Engineering, Minor in Financial Engineering",
      school: "College of Engineering Pune",
      period: "06/2020 – 05/2024",
    },
  ],

  // ---------------------------------------------------------------------------
  // SKILLS
  // Object where each key is a category heading and value is an array of skills.
  // Add a new category by adding a new key. Skills render as pill badges.
  // ---------------------------------------------------------------------------
  skills: {
    "Programming": ["Python", "SQL", "C++", "R", "MATLAB"],
    "ML / AI": [
      "PyTorch", "Scikit-learn", "NumPy", "Pandas", "LoRA",
      "Computer Vision", "Reinforcement Learning", "SHAP", "LIME",
      "Hyperparameter Tuning",
    ],
    "Data Systems": [
      "PostGIS", "FAISS", "Apache Spark", "Spark SQL", "NoSQL",
      "MapReduce", "ETL Pipelines", "Database Management",
      "Large-Scale Distributed Data Processing", "Feature Engineering",
    ],
    "Analytics / Business Tools": [
      "Tableau", "Power BI", "Excel", "SAP ERP",
      "Business Finance", "Statistical Modelling",
    ],
    "Languages": ["English", "German", "Hindi", "Marathi"],
  },

  // ---------------------------------------------------------------------------
  // EXPERIENCE
  // Array of work experience entries shown in section 03.
  // logo: path relative to /public (e.g. "/logos/company.png")
  // logoDark: set true if the logo image has a dark/opaque background
  //           (wraps it in a dark container so it looks correct on white)
  // bullets: array of achievement strings (keep concise, metric-driven)
  // ---------------------------------------------------------------------------
  experience: [
    {
      role: "Staff Research Associate",
      company: "UCR Centre for Liberatory AI Research (CLAIR) Lab",
      logo: "/logos/ucr.png",
      logoAlt: "University of California, Riverside",
      logoDark: false,
      period: "01/2026 – Present",
      bullets: [
        "Built and testing privacy-aware Instagram and YouTube data-donation workflows, improving participant guidance, validation, and extractor reliability across heterogeneous platform exports",

        "Engineering reproducible pipelines to clean, merge, de-identify, relabel, and validate messy longitudinal research datasets",

        "Aligning survey observations with intervention timelines to enable longitudinal analysis of behavioral and digital-platform outcomes",
      ],
    },
    {
      role: "Project Trainee",
      company: "Mercedes-Benz India",
      logo: "/logos/mercedes.png",
      logoAlt: "Mercedes-Benz",
      logoDark: true, // mercedes.png has a dark background — keep logoDark: true
      period: "05/2023 – 07/2023",
      bullets: [
        "SAP ERP-based database management across 10+ vehicle models",
        "Automated validation and analysis of INR 10 million worth of international claims using Excel, Power BI, Tableau/SQL",
        "Supplier audit and procurement workflow support with KPI dashboards and INCOTERMS documentation",
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // PROJECTS
  // Array shown in section 04. Most recent / most impressive first.
  // links.github: full GitHub URL, or null if the repo is private
  // tech: array of technology/tool strings shown as badges
  // impact: one-line quantified outcome or key result
  // ---------------------------------------------------------------------------
  projects: [
    {
      title: "Fine-Grained Multimodal Search with LoRA-Tuned CLIP & OOD Detection",
      description:
        "Built a CLIP-based image-text retrieval system using LoRA fine-tuning, segmentation, OOD detection, and FAISS indexing.",
      tech: ["Python", "PyTorch", "CLIP", "LoRA", "FAISS", "Hugging Face"],
      impact: "~27% Top-1 retrieval precision on Flickr8k and sub-100ms query latency.",
      links: { github: "https://github.com/KaleAnish/clip-multimodal-search-engine" },
    },
    {
      title: "GeoQuery: Natural-Language-Driven Geospatial Analytics Platform",
      description:
        "Built a Streamlit system that translates natural language questions into PostGIS spatial SQL with interactive map visualizations.",
      tech: ["Python", "Streamlit", "PostGIS", "SQL", "LLM Orchestration", "Groq"],
      impact: "Enabled multi-state spatial operations with hybrid LLM + rule-based fallback logic.",
      links: { github: "https://github.com/KaleAnish/geoquery-chat-with-the-map-nl2sql" },
    },
    {
      title: "Data Bias Mitigation in Financial Credit Scoring",
      description:
        "Applied fairness-aware preprocessing and postprocessing methods on credit scoring models using age as a protected attribute.",
      tech: ["Python", "Scikit-learn", "SMOTE", "Logistic Regression", "SVM", "Decision Trees", "Random Forest"],
      impact:
        "Random Forest achieved 90.1% recall while reducing age-based outcome disparity by 23 percentage points.",
      links: { github: null }, // repo is private — set to a URL string when public
    },
    {
      title: "Low-Light Enhancement for Urban Surveillance using Zero-DCE",
      description:
        "Replicated and adapted the CVPR 2020 Zero-DCE model for unsupervised low-light image enhancement.",
      tech: ["Python", "PyTorch", "Computer Vision", "Zero-DCE"],
      impact: "Achieved 27.9 dB PSNR on low-light and DarkFace datasets.",
      links: { github: "https://github.com/KaleAnish/zero-dce-lowlight-enhancement" },
    },
    {
      title: "Reinforcement Learning–Based Trading Strategy",
      description:
        "Built a quantitative trading pipeline with market data, custom Gymnasium portfolio simulation, and transaction-cost modeling.",
      tech: ["Python", "Reinforcement Learning", "Gymnasium", "Financial Data", "Backtesting"],
      impact:
        "Benchmarked learned policies against Buy-and-Hold and volatility-targeted strategies using CAGR, Sharpe, Sortino, max drawdown, and turnover.",
      links: { github: "https://github.com/KaleAnish/finance-rl-agentx-newframework" },
    },
    {
      title: "Real-Time Wildfire Resilience Digital Twin",
      description:
        "Designed a scalable wildfire decision-support architecture using streaming fire/weather data and geospatial risk computation.",
      tech: ["Kafka", "Spark Structured Streaming", "Apache Sedona", "Geospatial Analytics", "Dashboarding"],
      impact:
        "Demonstrates real-time risk mapping and simulation-mode architecture for emergency response workflows.",
      links: { github: "https://github.com/KaleAnish/geospatial-streaming-wildfire-digital-twin" },
    },
  ],

  // ---------------------------------------------------------------------------
  // PUBLICATIONS
  // Array shown in section 05.
  // links: { paper: "URL" } for journal/conference papers
  //        { article: "URL" } for web articles / blog posts
  //        { doi: "URL" } for DOI links (can coexist with paper)
  // ---------------------------------------------------------------------------
  publications: [
    {
      title: "Solar Energy Prognostication: A Machine Learning based Approach",
      authors: "A. Gurjar, A. Kale, P. Randive, R. Basu, R. Kulkarni, et al.",
      venue:
        "IEEE UPCON — 10th IEEE Uttar Pradesh Section International Conference on Electrical, Electronics & Computer Engineering",
      year: "2023",
      links: { paper: "https://ieeexplore.ieee.org/document/10434922", doi: "https://ieeexplore.ieee.org/document/10434922" },
    },
    {
      title: "The Role of Renewable Energy in Africa's Development",
      authors: "Anish A. Kale",
      venue: "BRICS Youth Energy Agency (YEA)",
      year: "2025",
      links: {
        article:
          "https://yeabrics.org/en/commentaries-en/the-role-of-renewable-energy-in-africas-development/",
      },
    },
  ],

  // ---------------------------------------------------------------------------
  // CERTIFICATIONS
  // Array shown in section 06.
  // expiry: set to null if the certification does not expire
  // credentialId: set to null if not applicable
  // link: set to null if there is no verification URL
  // ---------------------------------------------------------------------------
  certifications: [
    {
      title: "Social and Behavioral Research",
      issuer: "CITI Program",
      issued: "03/2026",
      expiry: "03/2029",
      credentialId: "75687925",
      link: null,
    },
    {
      title: "Biomedical Data or Specimens Only Research",
      issuer: "CITI Program",
      issued: "02/2026",
      expiry: "02/2029",
      credentialId: "75537353",
      link: null,
    },
    {
      title: "EY CAFTA Finance and Treasury Bootcamp 2024",
      issuer: "EY",
      issued: "03/2024",
      expiry: null,
      credentialId: null,
      link: null,
    },
  ],

  // ---------------------------------------------------------------------------
  // BEYOND WORK
  // Section 07. Single description paragraph + Instagram link.
  // ---------------------------------------------------------------------------
  beyondWork: {
    description:
      "Beyond my technical work, I am an avid traveller and aviation enthusiast with a strong interest in plane spotting and documenting aircraft and airline operations. Through my Instagram platform @pnq.spotter, I share aviation photography, flight reviews, and insights on developments across India and the United States. My work has been recognised and featured by airlines, airports, and government officials, reflecting both the reach and credibility of my contributions to the aviation community.",
    instagram: "https://www.instagram.com/pnq.spotter/",
  },

  // ---------------------------------------------------------------------------
  // CONTACT
  // tagline: the opportunity / availability statement shown in "Let's Connect".
  // Update this whenever your job search status or target roles change.
  // ---------------------------------------------------------------------------
  contact: {
    tagline:
      "I am open to opportunities in Data Science, Machine Learning, Data Analysis, Business Analytics, Business Operations, Applied AI, Geospatial Data Systems and similar allied domains. I am authorized to work in the United States and open to relocation across the U.S.",
  },
};
