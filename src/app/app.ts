import { Component } from '@angular/core';

type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  achievements: string[];
};

type SkillGroup = {
  title: string;
  items: string[];
};

type QuickFact = {
  value: string;
  label: string;
  detail: string;
};

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly navItems = [
    { label: 'Work', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Profile', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  protected readonly quickFacts: QuickFact[] = [
    {
      value: '4+',
      label: 'industry roles',
      detail: 'Hands-on work across energy, automotive, retail, and agritech.',
    },
    {
      value: '2025',
      label: 'current focus',
      detail: 'Building automation and internal workflow solutions on a data and AI platform.',
    },
    {
      value: 'B.Sc.',
      label: 'software-focused',
      detail: 'Computer Engineering graduate with a software engineering concentration.',
    },
  ];

  protected readonly capabilityPills = [
    'Angular',
    'Python',
    'REST APIs',
    'Power Apps',
    'Power Automate',
    'SQL',
    'Power BI',
    'Docker',
    'GitHub',
    'Jira',
    'Confluence',
    'Agile delivery',
  ];

  protected readonly experiences: ExperienceItem[] = [
    {
      company: 'E.ON Energy Deutschland GmbH',
      role: 'Working Student, Data & AI Platform',
      location: 'Essen, Germany',
      period: 'Mar 2025 - Present',
      summary:
        'Designing internal automation and low-code solutions that reduce manual follow-up and improve request handling.',
      achievements: [
        'Designed Power Automate flows for request and approval processes.',
        'Built a Canvas Power App with validation and backend handoff to Dataverse and SharePoint.',
        'Integrated Microsoft Teams notifications and approval experiences for faster collaboration.',
        'Worked closely with colleagues on requirements, debugging, and iterative product improvements.',
      ],
    },
    {
      company: 'IAV GmbH',
      role: 'Intern, Infotainment Systems & Function',
      location: 'Heimsheim, Germany',
      period: 'Jan 2025 - Feb 2025',
      summary:
        'Supported infotainment and validation workflows with scripting, device setup, and technical documentation.',
      achievements: [
        'Extended existing scripts for ECU and control-unit related processes.',
        'Supported setup and commissioning of smartphones for test vehicles.',
        'Maintained and expanded technical knowledge in Confluence.',
      ],
    },
    {
      company: 'ALDI Einkauf SE & Co. oHG',
      role: 'Working Student, Data Analyst',
      location: 'Essen, Germany',
      period: 'Apr 2022 - Nov 2022',
      summary:
        'Helped digitize and organize operational data while improving data quality and reporting readiness.',
      achievements: [
        'Supported digital transformation initiatives through structured data handling in Sievo.',
        'Improved accuracy through careful data entry, categorization, and validation.',
        'Worked with Excel, Word, and Power BI to manage business-critical datasets.',
      ],
    },
    {
      company: 'Mavuno Technology GmbH',
      role: 'Intern, Data Modeling & Remote Sensing',
      location: 'Berlin, Germany',
      period: 'Apr 2021 - Jul 2021',
      summary:
        'Applied data science and machine learning techniques to agriculture-focused products and insights.',
      achievements: [
        'Used satellite imagery and machine learning to support feature engineering and model training.',
        'Cleaned and analyzed datasets with Python for better agricultural decision-making.',
        'Contributed to data-driven tools aimed at improving outcomes for smallholder farmers.',
      ],
    },
  ];

  protected readonly skillGroups: SkillGroup[] = [
    {
      title: 'Engineering',
      items: ['Angular', 'JavaScript', 'HTML/CSS', 'Python (Flask)', 'AutoIt', 'REST APIs'],
    },
    {
      title: 'Automation & Data',
      items: [
        'Power Platform',
        'Power Apps (Canvas)',
        'Power Automate',
        'Power BI',
        'SQL',
        'Dataverse',
        'SharePoint',
      ],
    },
    {
      title: 'Delivery Stack',
      items: ['GitHub', 'Docker', 'Jira', 'Confluence', 'SourceTree', 'Documentation'],
    },
  ];

  protected readonly profilePoints = [
    'Computer Engineering graduate with a focus on software engineering.',
    'Strong blend of structured problem solving, communication, and cross-team collaboration.',
    'Experience delivering automation, data analysis, documentation, and internal digital products.',
    'Comfortable in agile environments with a quality-first and team-oriented mindset.',
  ];

  protected readonly education = {
    institution: 'University of Duisburg-Essen',
    location: 'Duisburg, Germany',
    degree: 'Bachelor of Science in Computer Engineering',
    focus: 'Focus: Software Engineering',
    date: 'Graduated Feb 2024',
    coursework:
      'Data Structures and Algorithms, Software Engineering, Database Management Systems, Logic Design, Digital Systems, Mathematics, and Physics.',
  };

  protected readonly languages = [
    'German (B2, professional communication)',
    'English (fluent)',
    'Bengali (native)',
  ];

  protected readonly volunteer = {
    organization: 'Red Crescent Society',
    role: 'Volunteer Leader',
    location: 'Bogra, Bangladesh',
    period: 'Jan 2009 - Dec 2020',
    items: [
      'Blood donation management',
      'School friendship initiatives',
      'Event planning and coordination for community projects',
    ],
  };

  protected readonly contactLinks = [
    { label: 'Email', value: 'nashiwa.reza@gmail.com', href: 'mailto:nashiwa.reza@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/nashiwa-reza', href: 'https://www.linkedin.com/in/nashiwa-reza/' },
    { label: 'GitHub', value: 'github.com/nashiwa', href: 'https://github.com/nashiwa' },
  ];
}
