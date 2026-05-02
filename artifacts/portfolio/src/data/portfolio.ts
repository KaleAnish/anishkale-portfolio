export const PORTFOLIO = {
  personalInfo: {
    name: "Anish A. Kale",
    badge: "M.S. Computational Data Science @ UC Riverside",
    title: "Data Scientist | Machine Learning Engineer | Geospatial & Multimodal AI",
    location: "California, USA",
    tagline:
      "Building applied machine learning systems across multimodal search, geospatial analytics, responsible AI, and data-driven decision support.",
    github: "https://github.com/KaleAnish",
    linkedin: "https://www.linkedin.com/in/kaleanish",
    instagram: "https://www.instagram.com/pnq.spotter/",
    email: "akale014@ucr.edu",
    resume: "/resume.pdf",
  },
  about:
    "Anish A. Kale is a Master's student in Computational Data Science at the University of California, Riverside, with experience in machine learning, geospatial analytics, multimodal retrieval, fairness-aware modeling, and applied data systems. His work spans CLIP-based search, natural-language-driven spatial analytics, responsible AI for credit scoring, and computer vision systems.",
  skills: {
    Programming: ["Python", "SQL", "C++", "R", "MATLAB"],
    "ML/AI": [
      "PyTorch",
      "Scikit-learn",
      "LoRA",
      "Computer Vision",
      "Reinforcement Learning",
      "SHAP",
      "LIME",
    ],
    "Data Systems": [
      "PostGIS",
      "FAISS",
      "Apache Spark",
      "Spark SQL",
      "ETL Pipelines",
      "Database Management",
    ],
    "Analytics Tools": ["Tableau", "Power BI", "Excel", "SAP ERP"],
  },
  experience: [
    {
      role: "Graduate Student Research Assistant",
      company: "UCR CLAIR Lab",
      bullets: [
        "Privacy-aware data pipelines for Instagram and YouTube-extracted datasets",
        "Feature engineering workflows and secure data governance for sensitive research environments",
      ],
    },
    {
      role: "Project Trainee",
      company: "Mercedes-Benz India",
      bullets: [
        "SAP ERP-based database management across 10+ vehicle models",
        "Automated validation and analysis of INR 10 million worth of international claims using Excel, Power BI, Tableau/SQL",
        "Supplier audit and procurement workflow support with KPI dashboards and INCOTERMS documentation",
      ],
    },
  ],
  projects: [
    {
      title: "Fine-Grained Multimodal Search with LoRA-Tuned CLIP & OOD Detection",
      description:
        "Built a CLIP-based image-text retrieval system using LoRA fine-tuning, segmentation, OOD detection, and FAISS indexing.",
      tech: ["Python", "PyTorch", "CLIP", "LoRA", "FAISS", "Hugging Face"],
      impact: "~27% Top-1 retrieval precision on Flickr8k and sub-100ms query latency.",
      links: { github: "#" },
    },
    {
      title: "GeoQuery: Natural-Language-Driven Geospatial Analytics Platform",
      description:
        "Built a Streamlit system that translates natural language questions into PostGIS spatial SQL with interactive map visualizations.",
      tech: ["Python", "Streamlit", "PostGIS", "SQL", "LLM Orchestration", "Groq"],
      impact: "Enabled multi-state spatial operations with hybrid LLM + rule-based fallback logic.",
      links: { github: "#" },
    },
    {
      title: "Data Bias Mitigation in Financial Credit Scoring",
      description:
        "Applied fairness-aware preprocessing and postprocessing methods on credit scoring models using age as a protected attribute.",
      tech: [
        "Python",
        "Scikit-learn",
        "SMOTE",
        "Logistic Regression",
        "SVM",
        "Decision Trees",
        "Random Forest",
      ],
      impact:
        "Random Forest achieved 90.1% recall while reducing age-based outcome disparity by 23 percentage points.",
      links: { github: "#", report: "#" },
    },
    {
      title: "Low-Light Enhancement for Urban Surveillance using Zero-DCE",
      description:
        "Replicated and adapted the CVPR 2020 Zero-DCE model for unsupervised low-light image enhancement.",
      tech: ["Python", "PyTorch", "Computer Vision", "Zero-DCE"],
      impact: "Achieved 27.9 dB PSNR on low-light and DarkFace datasets.",
      links: { github: "#", report: "#" },
    },
    {
      title: "Reinforcement Learning–Based Trading Strategy",
      description:
        "Built a quantitative trading pipeline with market data, custom Gymnasium portfolio simulation, and transaction-cost modeling.",
      tech: ["Python", "Reinforcement Learning", "Gymnasium", "Financial Data", "Backtesting"],
      impact:
        "Benchmarked learned policies against Buy-and-Hold and volatility-targeted strategies using CAGR, Sharpe, Sortino, max drawdown, and turnover.",
      links: { github: "#" },
    },
    {
      title: "Real-Time Wildfire Resilience Digital Twin",
      description:
        "Designed a scalable wildfire decision-support architecture using streaming fire/weather data and geospatial risk computation.",
      tech: [
        "Kafka",
        "Spark Structured Streaming",
        "Apache Sedona",
        "Geospatial Analytics",
        "Dashboarding",
      ],
      impact:
        "Demonstrates real-time risk mapping and simulation-mode architecture for emergency response workflows.",
      links: { github: "#" },
    },
  ],
  publications: [
    {
      title: "Solar Energy Prognostication: A Machine Learning based Approach",
      authors: "A. Gurjar, A. Kale, P. Randive, R. Basu, R. Kulkarni, et al.",
      venue: "IEEE UPCON — 10th IEEE Uttar Pradesh Section International Conference on Electrical, Electronics & Computer Engineering",
      year: "2023",
      links: { paper: "#", doi: "#", citation: "#" },
    },
    {
      title: "Coming Soon",
      authors: "Anish A. Kale",
      venue: "Manuscript / Project Report",
      year: "2026",
      links: {},
      placeholder: true,
    },
  ],
  beyondWork: {
    description:
      "Outside technical work, Anish is an aviation enthusiast and plane spotter, documenting aircraft movements and airline operations through @pnq.spotter.",
    instagram: "https://www.instagram.com/pnq.spotter/",
  },
  contact: {
    tagline:
      "Open to opportunities in Data Science, Machine Learning, Analytics, Applied AI, and Geospatial Data Systems. Feel free to reach out for roles, collaborations, or research discussions.",
  },
};
