// Source of truth: https://argix.net (audited 1 Oct 2026). Do not add claims that are not on the live site.
export const EMAIL = 'info@argix.net';
export const WHATSAPP = { label: '+92 331 4009939', url: 'https://wa.me/923314009939' };
export const LINKEDIN = 'https://www.linkedin.com/company/argix-net';
export const INSTAGRAM = 'https://www.instagram.com/argix_net/';
export const SITE = 'https://argix.net';

export const nav = [['Services', '/services/'], ['Industries', '/industries/'], ['Certifications', '/certifications/'], ['About', '/about/'], ['Blog', '/blog/'], ['Contact', '/contact/']];

export const solutions = [
  { id: 'build', title: 'Build', text: 'Custom software, mobile apps and AI features on .NET, Angular and Python.', items: ['Custom software', 'Web apps', 'Mobile apps', 'APIs', 'Websites and e-commerce', 'AI solutions'], to: '/custom-software/', cta: 'Explore custom software' },
  { id: 'run', title: 'Run', text: 'DevOps and cloud on Azure and AWS, with security built into every release.', items: ['Azure', 'AWS', 'CI/CD', 'Infrastructure as code'], to: '/devops-cloud/', cta: 'Explore DevOps and cloud' },
  { id: 'secure', title: 'Secure', text: 'Penetration testing, SOC 2 and ISO 27001 readiness, SOC monitoring and vCISO.', items: ['Penetration testing', 'SOC 2 and ISO 27001', 'SOC monitoring', 'vCISO'], to: '/cybersecurity/', cta: 'Explore cybersecurity' },
];

export const services = [
  { group: 'Build and run', slug: 'custom-software', title: 'Custom software development', summary: 'Software designed around how your business works, from first design to launch and support.', bullets: ['Web, mobile and API development', 'Legacy modernization', 'Project, team or support options'] },
  { group: 'Build and run', slug: 'web-app-development', title: 'Web application development', summary: 'Customer portals, internal systems and dashboards on ASP.NET Core and Angular.', bullets: ['Portals and admin systems', 'Real-time dashboards', 'Step-by-step modernization'] },
  { group: 'Build and run', slug: 'mobile-app-development', title: 'Mobile app development', summary: 'iOS and Android apps with secure login, encrypted data and store publishing.', bullets: ['iOS and Android', 'Secure login and encrypted storage', 'App Store and Google Play publishing'] },
  { group: 'Build and run', slug: 'api-integration', title: 'APIs and integrations', summary: 'REST and GraphQL APIs, and secure connections to the systems you already use.', bullets: ['Payments, CRM and ERP', 'Healthcare and financial systems', 'Documentation and API testing'] },
  { group: 'Build and run', slug: 'websites-ecommerce', title: 'Websites and e-commerce', summary: 'Company websites and online stores that load fast and stay secure.', bullets: ['WordPress and WooCommerce', 'Firewall, backups and monitoring', 'Payment and shipping integrations'] },
  { group: 'Build and run', slug: 'custom-software', hash: 'qa', title: 'QA and performance testing', summary: 'Manual and automated testing, load testing, cross-browser and accessibility checks, and a security test before launch.', bullets: ['Manual and automated QA', 'Load and performance testing', 'Accessibility checks'], hubOnly: true },
  { group: 'Build and run', slug: 'devops-cloud', title: 'DevOps and cloud', summary: 'Secure delivery pipelines and cloud environments on Azure and AWS.', bullets: ['CI/CD and DevSecOps', 'Docker and Kubernetes', 'Cloud security reviews'] },
  { group: 'Build and run', slug: 'ai-solutions', title: 'AI solutions', summary: 'AI features for your products, plus testing and governance for the AI you use.', bullets: ['Assistants and document AI', 'AI security testing', 'AI governance'] },
  { group: 'Secure and comply', slug: 'cybersecurity', title: 'Cybersecurity services', summary: 'Security audits, secure engineering, digital forensics and incident response.', bullets: ['Audits and risk assessments', 'Secure engineering', 'Forensics and incident response'] },
  { group: 'Secure and comply', slug: 'penetration-testing', title: 'Penetration testing (VAPT)', summary: 'Manual testing of apps, APIs, networks and cloud, with an audit-ready report.', bullets: ['Web, API and mobile testing', 'Network and cloud testing', 'Audit-ready report and retest'] },
  { group: 'Secure and comply', slug: 'grc-compliance', title: 'GRC and compliance', summary: 'Readiness for SOC 2, ISO 27001, HIPAA and PCI DSS, from gap assessment to audit.', bullets: ['Gap and risk assessments', 'Policies and controls', 'Evidence and audit support'] },
  { group: 'Secure and comply', slug: 'soc-monitoring', title: 'SOC monitoring', summary: 'Level 1 monitoring and triage on LogRhythm, QRadar, Sentinel, Elastic or Wazuh.', bullets: ['Alert triage', 'Escalation by playbook', 'Regular reporting'] },
  { group: 'Secure and comply', slug: 'vciso', title: 'vCISO and outsourced security', summary: 'A virtual CISO, a managed security program or a full outsourced security department.', bullets: ['Virtual CISO', 'Security program management', 'Outsourced security department'] },
];
export const servicePath = (s) => `/${s.slug}/${s.hash ? '#' + s.hash : ''}`;

export const industries = [
  { slug: 'healthcare', title: 'Healthcare', summary: 'EHR, interoperability, healthcare AI and virtual care, with HIPAA-aligned security.', bullets: ['HL7 and FHIR', 'Healthcare AI', 'Telehealth and patient portals'] },
  { slug: 'enterprise-saas', title: 'Enterprise and SaaS', summary: 'Multi-tenant SaaS products and enterprise features, ready for SOC 2 reviews.', bullets: ['Multi-tenant architecture', 'Single sign-on and audit logs', 'SOC 2 and ISO 27001 readiness'] },
  { slug: 'ecommerce-retail', title: 'E-commerce and retail', summary: 'Online stores that are fast, secure and ready for card payments.', bullets: ['WooCommerce and custom stores', 'PCI DSS readiness', 'Checkout penetration testing'] },
  { slug: 'startups', title: 'Startups and MVPs', summary: 'Secure first versions of your product, built quickly and ready for customers and investors.', bullets: ['Product scoping and MVPs', 'Security from day one', 'SOC 2 readiness as you grow'] },
  { slug: 'fintech', title: 'Fintech and financial services', summary: 'Payments, lending, onboarding and digital banking software built to pass partner and regulator reviews.', bullets: ['Payments and wallets', 'KYC and AML onboarding', 'Core banking integration'] },
];
export const otherIndustries = [
  { slug: 'logistics', title: 'Logistics and transport', summary: 'Dispatch systems, shipment tracking portals and driver apps.', bullets: ['Dispatch and route planning', 'Tracking portals', 'Driver and field apps'] },
  { slug: 'real-estate', title: 'Real estate and property tech', summary: 'Listing portals, tenant and owner portals, and CRMs for agents.', bullets: ['Listing portals', 'Tenant and owner portals', 'Agent CRMs'] },
];

export const frameworksStrip = ['ISO/IEC 27001', 'SOC 2', 'HIPAA', 'PCI DSS', 'NIST CSF', 'OWASP Top 10', 'GDPR'];
export const frameworks = [
  ['ISO/IEC 27001:2022', 'Information security management system implementation, internal audit and certification readiness.', '/grc-compliance/'],
  ['SOC 2', 'Type I and Type II readiness across the trust services criteria.', '/grc-compliance/'],
  ['HIPAA', 'Security Rule safeguards, risk analysis and policies for healthcare organizations.', '/grc-compliance/'],
  ['PCI DSS', 'Scoping, gap analysis and remediation for organizations that handle card data.', '/grc-compliance/'],
  ['NIST Cybersecurity Framework', 'A common language for assessing and improving security programs.', '/cybersecurity/'],
  ['OWASP Top 10 and ASVS', 'The basis for secure coding and application penetration testing.', '/penetration-testing/'],
  ['GDPR', 'Data protection reviews and privacy-by-design for software handling personal data.', '/grc-compliance/'],
];
// Certifications are held by individual team members, not by Argix as a company.
export const certGroups = [
  ['Governance, risk and audit', [['CISSP', 'Certified Information Systems Security Professional', 'ISC2'], ['CISM', 'Certified Information Security Manager', 'ISACA'], ['CISA', 'Certified Information Systems Auditor', 'ISACA'], ['ISO 27001 LA', 'ISO/IEC 27001 Lead Auditor', 'ISO/IEC 27001']]],
  ['Offensive security and penetration testing', [['OSCP', 'OffSec Certified Professional', 'OffSec'], ['OSEP', 'OffSec Experienced Penetration Tester', 'OffSec'], ['OSWE', 'OffSec Web Expert', 'OffSec'], ['OSED', 'OffSec Exploit Developer', 'OffSec'], ['OSCE³', 'OffSec Certified Expert 3', 'OffSec'], ['CRTP', 'Certified Red Team Professional', 'Altered Security'], ['CREST CPSA', 'CREST Practitioner Security Analyst', 'CREST'], ['CREST CRT', 'CREST Registered Tester', 'CREST'], ['eWPTX', 'Web Application Penetration Tester eXtreme', 'INE Security'], ['eCPPT', 'Certified Professional Penetration Tester', 'INE Security'], ['CEH', 'Certified Ethical Hacker', 'EC-Council'], ['CEH Practical', 'Certified Ethical Hacker (Practical)', 'EC-Council'], ['CBBH', 'Certified Bug Bounty Hunter', 'Hack The Box']]],
  ['Incident response and forensics', [['eCIR', 'Certified Incident Responder', 'INE Security'], ['eCTHP', 'Certified Threat Hunting Professional', 'INE Security'], ['CHFI', 'Computer Hacking Forensic Investigator', 'EC-Council']]],
];
export const certNames = certGroups.flatMap(([, l]) => l.map((c) => c[0]));

export const tech = ['.NET', 'ASP.NET Core', 'Angular', 'Python', 'WordPress', 'WooCommerce', 'Azure', 'AWS', 'LogRhythm', 'QRadar', 'Microsoft Sentinel', 'Elastic', 'Wazuh'];

export const process = [
  ['Discovery and consultation', 'Workshops with your team to define goals, users, scope and how success will be measured.', 'Map the data you hold, who can reach it and what a breach would cost.'],
  ['Strategy and architecture', 'A scalable architecture and a roadmap aligned with your business.', 'Threat-model the design and set security requirements before code is written.'],
  ['Secure development', 'Short sprints with a working demo at the end of each one.', 'OWASP secure coding practices, with automated code, dependency and secret scanning on every change.'],
  ['Security integration', 'Automated builds and deployments through a CI/CD pipeline.', 'Security checks built into the pipeline, with least-privilege access to every environment.'],
  ['Testing and penetration test', 'Automated and manual QA, load testing and acceptance testing with your team.', 'A penetration test by security engineers who did not write the code, with every serious finding fixed and retested.'],
  ['Launch and monitoring', 'Staged release, documentation and training for your staff.', 'Monitoring, patching and an incident response plan that has been rehearsed.'],
];
export const lifecycle = ['Plan', 'Design', 'Build', 'Test', 'Deploy', 'Monitor'];
export const codingList = ['OWASP secure coding practices on every project', 'Threat modeling at the design stage', 'Automated scanning for security flaws', 'Least-privilege access and security-integrated CI/CD'];
export const reportList = ['Executive summary for management', 'Findings ranked by severity, with evidence', 'Step-by-step fixes and a retest', 'Mapped to the framework you are working toward'];
export const reportNote = 'A penetration test report is evidence for your auditor. It supports compliance work but does not by itself make a system compliant or certified.';

export const securityDept = [
  ['Virtual CISO (vCISO)', 'A senior security leader for a set number of hours each month: strategy, risk, board reporting and vendor reviews.', '/vciso/'],
  ['Security program management', 'Policies, risk register, awareness training, vendor risk, incident response planning and compliance tracking, run for you.'],
  ['Full outsourced security team', 'A complete information security function for companies that do not have one, including GRC, testing and monitoring.'],
  ['SOC monitoring', 'Level 1 monitoring and triage on the SIEM platform you already run or choose to adopt.', '/soc-monitoring/'],
];

// Real, public figures shown on argix.net.
export const stats = [
  { value: 50, suffix: '+', label: 'Secure deployments' },
  { value: 20, suffix: '+', label: 'Certifications across the team' },
  { value: 5, suffix: '', label: 'Industries served' },
  { value: 17, suffix: '+', label: 'Years of combined leadership experience' },
];
export const clients = ['American TelePhysicians', 'Cura4U', 'SmartClinix', 'Bizauras', 'UDHC'];
export const caseStudies = []; // none published on argix.net; section stays hidden

export const faq = [
  ['How much does a project cost?', 'It depends on scope. Most projects start with a short paid discovery phase, after which we give you a fixed-scope quote or a monthly rate for ongoing work. The first consultation call is free.'],
  ['Can you secure software that someone else built?', 'Yes. Many clients come to us with an existing application. We assess it, report what we find in plain language, and either fix the issues or hand your developers a prioritized list.'],
  ['Can you make us SOC 2 or ISO 27001 certified?', 'Certification is issued by an independent body: an accredited certification body for ISO 27001, and a licensed CPA firm for SOC 2 reports. We prepare you for it. We assess gaps, fix the technical ones and help you produce the policies and evidence your auditor will ask for.'],
  ['Do you only work in these five industries?', 'Healthcare, enterprise and SaaS, e-commerce and retail, startups, and fintech and financial services are where we focus. We also build software for logistics and real estate companies, and for other teams that need secure software and compliance support.'],
  ['What happens after launch?', 'You choose. Some clients take the software and run it themselves. Others keep us on a support plan for updates, monitoring and security patching.'],
];
export const demoAnswers = [
  { q: 'What services does Argix offer?', a: 'Build and run: custom software, web and mobile apps, APIs, websites and e-commerce, DevOps and cloud, and AI solutions. Secure and comply: penetration testing, GRC and compliance, SOC monitoring, vCISO, and digital forensics and incident response.' },
  { q: 'Can you build an AI application?', a: 'Argix offers AI solutions: AI features for your products, plus security testing and governance for AI. Book a free consultation to talk through your use case.' },
  { q: 'How can you help my startup?', a: 'We build secure first versions of your product, quickly, and make them ready for customers and investors.' },
  { q: 'What is your development process?', a: 'Six stages, each with a build task and a security task: discovery, architecture, secure development, security integration, testing with an independent penetration test, then launch and monitoring.' },
];
export const needs = ['A custom software project', 'A mobile app or website', 'AI features or an AI project', 'Penetration testing', 'SOC 2, ISO 27001 or HIPAA readiness', 'SOC monitoring', 'vCISO or outsourced security', 'Not sure yet'];

const D = 'Argix builds custom software and AI, and secures it with penetration testing, compliance, SOC monitoring and vCISO services for regulated industries.';
// Titles and descriptions copied from argix.net. Detail-page meta comes from src/content/*.json.
export const staticMeta = {
  '/': ['Argix | Custom Software, AI and Cybersecurity Services', D],
  '/about/': ['About Argix | Software and Security, Built as One Team', 'Argix is one team for software and security, with offices in Islamabad, Pakistan and Ottawa, Canada.'],
  '/contact/': ['Contact Argix | Book a Free Consultation', 'Book a free 30-minute consultation with an Argix engineer about custom software, AI or cybersecurity.'],
  '/certifications/': ['Team Certifications: CISSP, OSCP, CREST and More | Argix', 'Certifications held by the Argix team, including CISSP, CISM, CISA, OSCP, OSEP, OSWE, OSCE3 and CREST, and the frameworks we work to.'],
  '/services/': ['Software Development and Cybersecurity Services | Argix', 'All Argix services: custom software, web and mobile apps, APIs, DevOps, AI, penetration testing, GRC, SOC monitoring and vCISO.'],
  '/industries/': ['Software and Security for Regulated Industries | Argix', 'Software development and cybersecurity for healthcare, SaaS, e-commerce, startups and fintech, plus logistics and real estate.'],
  '/blog/': ['Blog: Security and Software Insights | Argix', 'Practical guides from Argix on penetration testing, SOC 2, HIPAA, secure development and software for regulated industries.'],
};
export const notFoundMeta = ['Page not found | Argix', 'The page you were looking for could not be found.'];
