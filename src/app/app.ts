import { Component } from '@angular/core';

type NavItem = {
  label: string;
  href: string;
};

type ActionLink = {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
};

type CvDownload = {
  label: string;
  language: string;
  href: string;
};

type Metric = {
  value: string;
  label: string;
};

type Capability = {
  label: string;
  detail: string;
  level: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

type Project = {
  title: string;
  period: string;
  category: string;
  description: string;
  stack: string[];
  link?: string;
};

type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  impact: string;
  focus: string[];
  theme: 'current' | 'systems' | 'data' | 'research';
};

type Service = {
  title: string;
  description: string;
};

type ContactLink = {
  label: string;
  value: string;
  href: string;
};

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly navItems: NavItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  protected readonly heroActions: ActionLink[] = [
    { label: 'View Work', href: '#experience', variant: 'primary' },
    { label: 'Contact Me', href: '#contact', variant: 'secondary' },
  ];

  protected readonly cvDownloads: CvDownload[] = [
    { label: 'English CV', language: 'EN', href: 'nashiwa-reza-cv-en.pdf' },
    { label: 'German CV', language: 'DE', href: 'nashiwa-reza-cv-de.pdf' },
  ];

  protected readonly metrics: Metric[] = [
    { value: 'B.Sc.', label: 'Computer Engineering' },
    { value: '4', label: 'Industry environments' },
    { value: 'DE B2 / EN fluent / BN native', label: 'Multilingual collaboration' },
  ];

  protected readonly capabilities: Capability[] = [
    { label: 'Frontend', detail: 'Angular, JavaScript, responsive UI', level: '88%' },
    { label: 'Automation', detail: 'Power Apps, flows, approvals', level: '92%' },
    { label: 'Full-stack', detail: 'Python, Flask, REST APIs, SQL', level: '78%' },
    { label: 'Data', detail: 'Power BI, quality checks, reporting', level: '82%' },
  ];

  protected readonly strengths = [
    'Frontend and full-stack thinking',
    'Process automation',
    'Data-driven digital solutions',
    'Clear documentation',
  ];

  protected readonly aboutPoints = [
    'I am a software engineer with a Computer Engineering background and a practical focus on software engineering, automation, and digital workflows.',
    'My work combines structured problem solving with strong communication, whether I am shaping a Power Platform solution, supporting data quality, or building web interfaces.',
    'I enjoy turning unclear operational needs into reliable tools that are easier for teams to use, maintain, and improve.',
  ];

  protected readonly skillGroups: SkillGroup[] = [
    {
      title: 'Frontend & Web',
      items: ['Angular', 'JavaScript', 'HTML', 'CSS', 'REST APIs'],
    },
    {
      title: 'Full-Stack & Scripting',
      items: ['Python', 'Flask', 'AutoIt', 'SQL', 'Docker'],
    },
    {
      title: 'Automation & Data',
      items: ['Power Apps', 'Power Automate', 'Power BI', 'Dataverse', 'SharePoint'],
    },
    {
      title: 'Delivery Tools',
      items: ['GitHub', 'Jira', 'Confluence', 'SourceTree', 'Documentation'],
    },
  ];

  protected readonly projects: Project[] = [
    {
      title: 'Bayesian Network Evaluation Tool',
      period: 'Sep 2023 - Dec 2023',
      category: 'Algorithm engineering',
      description:
        'Built a Python-based tool for evaluating Bayesian networks more efficiently, using graph algorithms to reduce complexity and compare runtime behavior on larger networks.',
      stack: ['Python', 'Greedy Degree', 'Fill-In', 'Performance analysis'],
    },
    {
      title: 'Carshare Web Platform',
      period: 'Oct 2020 - Jan 2021',
      category: 'Full-stack university project',
      description:
        'Designed and implemented a web app for vehicle sharing, including booking flows, vehicle availability, transaction history, and a database schema to support the platform.',
      stack: ['Python', 'Flask', 'DB2', 'Bootstrap'],
      link: 'https://github.com/nashiwa/carshare',
    },
  ];

  protected readonly experiences: ExperienceItem[] = [
    {
      company: 'E.ON Energy Deutschland GmbH',
      role: 'Working Student, Data & AI Platform',
      location: 'Essen, Germany',
      period: 'Mar 2025 - Present',
      summary:
        'Designing automation and low-code solutions for internal request, approval, and collaboration workflows.',
      impact: 'Turning manual follow-up into structured request journeys with validation, approvals, and team notifications.',
      focus: ['Power Automate', 'Canvas Power Apps', 'Dataverse', 'SharePoint', 'Microsoft Teams'],
      theme: 'current',
    },
    {
      company: 'IAV GmbH',
      role: 'Intern, Infotainment Systems & Function',
      location: 'Heimsheim, Germany',
      period: 'Jan 2025 - Feb 2025',
      summary:
        'Supported infotainment validation workflows through scripting, device setup, and technical documentation.',
      impact: 'Improved technical readiness for validation work through script support, device setup, and shared documentation.',
      focus: ['ECU processes', 'Script extension', 'Smartphone setup', 'Confluence'],
      theme: 'systems',
    },
    {
      company: 'ALDI Einkauf SE & Co. oHG',
      role: 'Working Student, Data Analyst',
      location: 'Essen, Germany',
      period: 'Apr 2022 - Nov 2022',
      summary:
        'Helped digitize, structure, and validate operational datasets for cleaner reporting and transformation work.',
      impact: 'Supported digital transformation by organizing operational data into cleaner, more reliable business information.',
      focus: ['Sievo', 'Data quality', 'Excel', 'Power BI'],
      theme: 'data',
    },
    {
      company: 'Mavuno Technology GmbH',
      role: 'Intern, Data Modeling & Remote Sensing',
      location: 'Berlin, Germany',
      period: 'Apr 2021 - Jul 2021',
      summary:
        'Applied data science methods to agriculture-focused insights using satellite imagery and machine learning.',
      impact: 'Used data cleaning, feature engineering, and model support to help make agricultural insights more actionable.',
      focus: ['Python', 'Remote sensing', 'Machine learning', 'Data cleaning'],
      theme: 'research',
    },
  ];

  protected readonly services: Service[] = [
    {
      title: 'Build clear web interfaces',
      description:
        'Create responsive Angular and web experiences that present complex information in a clean, usable way.',
    },
    {
      title: 'Automate business workflows',
      description:
        'Translate repeated manual processes into practical flows, forms, approvals, and team notifications.',
    },
    {
      title: 'Connect data and decisions',
      description:
        'Organize data, improve quality, and support reporting workflows with SQL, Power BI, and structured documentation.',
    },
  ];

  protected readonly education = [
    {
      degree: 'Master of Science in Web Engineering',
      institution: 'Technical University of Chemnitz',
      location: 'Chemnitz, Germany',
      date: 'Present',
      focus: 'Software Engineering, Web Technologies, Databases, Cloud and Distributed Systems',
    },
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'University of Duisburg-Essen',
      location: 'Duisburg, Germany',
      date: 'Graduated February 2024',
      focus: 'Focus: Software Engineering',
    },
  ];

  protected readonly volunteer = {
    role: 'Volunteer Leader',
    organization: 'Red Crescent Society',
    period: 'Jan 2009 - Dec 2020',
  };

  protected readonly contactLinks: ContactLink[] = [
    { label: 'Email', value: 'nashiwa.reza@gmail.com', href: 'mailto:nashiwa.reza@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/nashiwa-reza', href: 'https://www.linkedin.com/in/nashiwa-reza/' },
    { label: 'GitHub', value: 'github.com/nashiwa', href: 'https://github.com/nashiwa' },
  ];
}
