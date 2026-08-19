export const personalInfo = {
  name: "Birva Oza",
  title: "ML Engineer & DevSecOps Specialist",
  headline: "Building Production ML Systems & Secure Cloud Infrastructure",
  tagline:
    "M.Tech in Machine Learning, currently working as an Associate Software Engineer at Infor — building automation pipelines, hardening Linux systems, and working with Python, Bash, Chef, Terraform, and Infrastructure as Code to maintain secure production infrastructure.",
  email: "birvaoza07@gmail.com",
  phone: "+91-9408274556",
  location: "Gandhinagar, Gujarat, India",
  linkedin: "https://linkedin.com/in/birvaoza01",
  github: "https://github.com/birvaoza",
};

export const about = {
  intro: `I'm a Machine Learning Engineer with production DevSecOps experience at Infor, where I build automation systems that enforce security compliance at scale. My background spans the full spectrum — from training U-Net architectures on CT scans to writing Chef recipes that harden hundreds of Linux servers against CIS benchmarks.`,
  story: `With an M.Tech in Machine Learning from Dhirubhai Ambani Institute of Information and Communication Technology (Gandhinagar, Gujarat, India) and hands-on experience building both AI systems and cloud infrastructure, I operate at the intersection of intelligent systems and production reliability. I've published research at IEEE APSCON 2025 on neuromorphic segmentation, optimized deep learning inference to real-time speeds with TensorRT, and simultaneously automated vulnerability remediation pipelines that reduced recurring CVEs by 45%.`,
  focus: `My engineering focus sits at the convergence of AI/ML systems, cloud security automation, and production infrastructure — building things that are both intelligent and dependable.`,
};

export const experience = [
  {
    company: "Infor",
    role: "Associate Software Engineer",
    location: "Ahmedabad",
    period: "Jul 2025 – Present",
    type: "Full-time",
    highlights: [
      {
        problem: "Deployment teams lacked reliable notification workflows",
        solution:
          "Automated job notification workflows using GitLab CI/CD scheduled pipelines",
        impact: "Improved communication reliability across deployment teams",
      },
      {
        problem:
          "Manual patching across multiple environments was error-prone and slow",
        solution:
          "Built scalable automation pipelines using GitLab CI/CD and AWS Systems Manager (SSM)",
        impact:
          "Consistent patching across different production environments",
      },
      {
        problem:
          "Linux servers lacked consistent CIS Level 2 hardening",
        solution:
          "Developed Chef recipes enforcing CIS Level 2 compliance across Linux servers",
        impact: "Strengthened system security posture across infrastructure",
      },
      {
        problem:
          "No visibility into software component dependencies for compliance",
        solution:
          "Implementing SBOM automation pipeline for software component tracking",
        impact: "Compliance reporting workflows for software supply chain",
      },
    ],
    technologies: [
      "GitLab CI/CD",
      "AWS SSM",
      "Chef",
      "Bash",
      "Linux",
      "SBOM",
    ],
  },
  {
    company: "Infor",
    role: "Development Intern",
    location: "Ahmedabad",
    period: "Jan 2025 – Jul 2025",
    type: "Internship",
    highlights: [
      {
        problem:
          "Production servers failed CIS Level 2 security compliance checks",
        solution:
          "Implemented CIS Level 2 security controls using Chef and Bash automation",
        impact:
          "Achieved 85% compliance improvement across 200+ production servers",
      },
      {
        problem: "Release process was manual and time-consuming",
        solution:
          "Automated GitLab CI/CD workflows with scheduled pipelines and automation scripts",
        impact: "Reduced release effort by 50%",
      },
      {
        problem: "Recurring vulnerabilities reappeared after manual patching",
        solution:
          "Integrated Qualys vulnerability scans with automated remediation pipelines",
        impact: "Reduced recurring vulnerabilities by 45%",
      },
    ],
    technologies: [
      "Chef",
      "Bash",
      "GitLab CI/CD",
      "Qualys",
      "Linux",
      "AWS",
    ],
  },
  {
    company: "Dhirubhai Ambani Institute of Information and Communication Technology",
    role: "AI/ML Software Developer (Medical Imaging)",
    location: "Gandhinagar, Gujarat, India",
    period: "Jul 2024 – Dec 2024",
    type: "Research & Development",
    highlights: [
      {
        problem:
          "Medical image segmentation required high accuracy for clinical use",
        solution:
          "Designed and trained deep learning models for image segmentation and recognition",
        impact: "Achieved Dice score of 0.95 using PyTorch",
      },
      {
        problem:
          "Raw CT scan data required complex preprocessing for model training",
        solution:
          "Built end-to-end ML pipeline including data preprocessing, augmentation, training, and evaluation",
        impact: "Processed 500+ CT scans through the pipeline",
      },
      {
        problem: "Inference was too slow for real-time clinical applications",
        solution: "Optimized inference using TensorRT",
        impact:
          "Achieved 3.5x speedup, enabling real-time processing at 30 FPS",
      },
      {
        problem: "Surgical planning accuracy needed improvement",
        solution: "Deployed production-ready AI system for surgical planning",
        impact: "Improved surgical planning accuracy by 25%",
      },
    ],
    technologies: [
      "PyTorch",
      "TensorRT",
      "Python",
      "Deep Learning",
      "Computer Vision",
    ],
  },
];

export const featuredProjects = [
  {
    title: "AI Clinical Assistant",
    subtitle: "LLM + RAG + LangGraph",
    category: "AI/ML",
    problem:
      "Clinicians needed an intelligent system to summarize complex clinical reports with multi-step reasoning capabilities.",
    approach:
      "Built a conversational AI system using LLMs with Retrieval-Augmented Generation for clinical report summarization.",
    architecture:
      "LangChain orchestration → Semantic retrieval via FAISS → Multi-step reasoning with LangGraph → HuggingFace model serving → Accuracy and relevance evaluation pipeline.",
    technologies: [
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "HuggingFace",
      "FAISS",
      "Semantic Search",
    ],
    challenges:
      "Ensuring factual accuracy in generated summaries while maintaining low latency for clinical workflows. Designing multi-step reasoning chains that produced coherent, medically relevant outputs.",
    result:
      "Functional clinical assistant with semantic retrieval and multi-step reasoning, evaluated for accuracy and relevance.",
    learning:
      "Production RAG systems require careful prompt engineering and retrieval tuning to avoid hallucination in high-stakes domains like healthcare.",
    featured: true,
  },
  {
    title: "Neuromorphic Retinal Segmentation",
    subtitle: "Lightweight U-Net on AWS",
    category: "Computer Vision",
    problem:
      "Standard segmentation architectures like Attention U-Net were computationally expensive for retinal imaging, limiting deployment options.",
    approach:
      "Designed a lightweight U-Net architecture that maintained segmentation quality while drastically reducing computational requirements.",
    architecture:
      "Custom lightweight U-Net → 40% compute reduction vs Attention U-Net → AWS deployment → Neuromorphic retina dataset processing.",
    technologies: ["PyTorch", "U-Net", "AWS", "Deep Learning", "Medical Imaging"],
    challenges:
      "Balancing model size reduction against segmentation accuracy. Achieving competitive Dice scores with significantly fewer parameters.",
    result:
      "Dice score of 0.86 with 40% reduced compute compared to Attention U-Net. Published at IEEE APSCON 2025.",
    learning:
      "Architectural efficiency matters more than raw parameter count — structured pruning and skip connection redesign yielded better tradeoffs than naive compression.",
    featured: true,
    publication: "IEEE APSCON 2025",
  },
  {
    title: "Production Haze Removal Pipeline",
    subtitle: "End-to-End Deep Learning",
    category: "Computer Vision",
    problem:
      "Downstream object detection suffered significantly in hazy/foggy conditions, reducing mAP across detection systems.",
    approach:
      "Developed an end-to-end deep learning pipeline for image dehazing that improved downstream detection performance.",
    architecture:
      "Dehazing model → 10K+ image processing → Docker containerization → Automated retraining pipeline → Object detection integration.",
    technologies: ["Deep Learning", "Docker", "Python", "Object Detection"],
    challenges:
      "Processing 10K+ images efficiently while maintaining model quality. Building automated retraining that kept the model current with new data distributions.",
    result:
      "Improved downstream object detection mAP by 25%. Deployed using Docker with automated retraining.",
    learning:
      "Preprocessing pipelines that improve upstream data quality can have outsized impact on downstream model performance.",
    featured: true,
  },
  {
    title: "GNN for Peer Review Analysis",
    subtitle: "Graph Neural Networks on arXiv",
    category: "AI/ML",
    problem:
      "Detecting contradictions in peer review comments was difficult at scale, leading to inconsistent review quality.",
    approach:
      "Built a contradiction detection system using graph neural networks trained on large-scale arXiv data.",
    architecture:
      "Graph construction from review data → GNN training on multi-GPU setup → Contradiction classification → Large-scale arXiv dataset processing.",
    technologies: [
      "GNNs",
      "PyTorch",
      "Multi-GPU",
      "NLP",
      "Graph Neural Networks",
    ],
    challenges:
      "Modeling complex relationships between review comments as graph structures. Training efficiently on large-scale data with multi-GPU parallelism.",
    result: "Improved classification accuracy by 18% on large-scale arXiv dataset.",
    learning:
      "Graph representations capture relational information that sequential models miss — especially valuable for document-level reasoning tasks.",
    featured: true,
  },
];

export const impactMetrics = [
  { value: "200+", label: "Production Servers Hardened", icon: "server" },
  { value: "85%", label: "Compliance Improvement", icon: "shield" },
  { value: "45%", label: "Vulnerability Reduction", icon: "bug" },
  { value: "50%", label: "Release Effort Reduced", icon: "rocket" },
  { value: "0.95", label: "Dice Score (Segmentation)", icon: "brain" },
  { value: "30 FPS", label: "Real-time Inference", icon: "zap" },
  { value: "10K+", label: "Images Processed", icon: "image" },
  { value: "3.5x", label: "Inference Speedup", icon: "gauge" },
];

export const technicalSkills = {
  "Programming": ["Python", "SQL", "C++", "Java", "Bash"],
  "AI / ML": [
    "Deep Learning",
    "CNNs",
    "Transformers",
    "Supervised Learning",
    "Unsupervised Learning",
  ],
  "LLMs & NLP": [
    "LLMs",
    "RAG",
    "LangChain",
    "LangGraph",
    "Prompt Engineering",
    "Embeddings",
    "Semantic Search",
    "Conversational AI",
  ],
  "Computer Vision": [
    "Image Segmentation",
    "Object Detection",
    "Image Processing",
    "OpenCV",
    "U-Net",
    "GNNs",
  ],
  "MLOps & Cloud": [
    "MLflow",
    "FastAPI",
    "Docker",
    "AWS SageMaker",
    "AWS EC2",
    "AWS S3",
    "AWS SSM",
    "CI/CD",
    "TensorRT",
  ],
  "DevSecOps & Infrastructure": [
    "GitLab CI/CD",
    "Chef",
    "CIS Benchmarking",
    "Qualys",
    "SBOM",
    "Linux",
    "Vulnerability Remediation",
  ],
};

export const publications = [
  {
    title:
      "Retina Vessel Segmentation Using Lightweight U-net Like Model Optimized for Neuromorphic Crossbar Array",
    venue: "IEEE APSCON 2025",
    year: "2025",
    status: "Published",
    link: "https://ieeexplore.ieee.org/document/11144381",
    problem:
      "Standard segmentation architectures are computationally prohibitive for resource-constrained neuromorphic retinal imaging applications.",
    contribution:
      "Proposed a lightweight U-Net variant achieving competitive Dice scores (0.86) with 40% reduced compute compared to Attention U-Net.",
    technologies: ["PyTorch", "U-Net", "Medical Imaging", "Deep Learning"],
  },
  {
    title:
      "Multiple Smaller ArUco Markers based Marker Design for Optical Camera-based Surgical Navigation System",
    venue: "IEEE APSCON 2025",
    year: "2025",
    status: "Published",
    link: "https://ieeexplore.ieee.org/document/11144111",
    problem:
      "Surgical navigation requires precise real-time marker detection for instrument tracking.",
    contribution:
      "Developed ArUco marker-based navigation system improving surgical planning accuracy by 25%.",
    technologies: [
      "Computer Vision",
      "OpenCV",
      "Real-time Systems",
      "Medical Imaging",
    ],
  },
];

export const education = [
  {
    degree: "Master of Technology in Machine Learning",
    institution: "Dhirubhai Ambani Institute of Information and Communication Technology, Gandhinagar, Gujarat, India",
    period: "Jul 2023 – Jul 2025",
    cgpa: "7.85/10.0",
    coursework: [
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Statistical Learning",
      "MLOps",
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "Atmiya University, Rajkot, Gujarat, India",
    period: "Jul 2019 – Jul 2023",
    cgpa: "8.49/10.0",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Machine Learning",
      "Database Systems",
    ],
  },
];

export const recognition = [
  "AI Committee Representative at Infor — Leading AI/ML initiatives and innovation strategies",
  "Google Girl Hackathon 2024 Participant",
  "Data Science Certification (Internshala)",
];

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];
