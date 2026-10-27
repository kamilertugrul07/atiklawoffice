import type { Content } from './tr';

export const en: Content = {
  home: {
    practiceTitle: 'Practice areas',
    practiceLead: 'Alongside mediation, we provide legal representation and advice to companies and individuals.',
    practiceLink: 'All practice areas',
    teamTitle: 'Our lawyers',
    teamLink: 'About us',
    contactTitle: 'Let’s schedule a meeting.',
    contactLead: 'Send us your request and we will agree on a time that suits you, at our office or online.',
  },

  mediation: {
    title: 'Mediation',
    lead: 'A confidential and flexible process in which the parties, with the help of an impartial mediator, resolve their dispute on their own terms.',
    whyTitle: 'Why parties choose mediation',
    why: [
      {
        title: 'The parties set the schedule',
        body: 'In voluntary mediation, the timing, place and frequency of meetings are planned together with the parties. The process can conclude far sooner than litigation that may take years.',
      },
      {
        title: 'Confidentiality',
        body: 'What is said and the documents shared in mediation are confidential and cannot be used as evidence in a later lawsuit if no agreement is reached.',
      },
      {
        title: 'Preserving the relationship',
        body: 'The parties sit at the same table rather than on opposite sides. This often allows a business, family or neighbourly relationship to continue.',
      },
      {
        title: 'The parties decide',
        body: 'The outcome is decided by the parties, not a judge. If no agreement is reached, the route to court remains open.',
      },
    ],
    voluntaryTitle: 'Voluntary mediation',
    voluntaryLead:
      'Mediation is not limited to cases where the law makes it mandatory. Parties may voluntarily turn to a mediator in any dispute over matters they can freely dispose of.',
    voluntary: [
      {
        title: 'The parties choose the mediator',
        body: 'In mandatory mediation the mediator is appointed from a list; in voluntary mediation the parties choose the mediator together.',
      },
      {
        title: 'Possible during litigation',
        body: 'Even after a lawsuit has been filed, the parties may agree to mediation at any stage of the proceedings, and the court may encourage them to do so.',
      },
      {
        title: 'Flexible and online',
        body: 'Meetings can be held at our office or, where the parties agree, by video conference, so parties in other cities or countries can take part.',
      },
      {
        title: 'Enforceable settlement',
        body: 'A settlement signed by the parties, their lawyers and the mediator is treated as equivalent to a court judgment; otherwise an enforceability annotation can be obtained from the court.',
      },
    ],
    scopeTitle: 'Which disputes can be mediated?',
    scope: [
      'Commercial relationships and contracts between companies',
      'Disputes between shareholders',
      'Construction and construction-for-share agreements',
      'Real estate, tenancy and neighbour relations',
      'Distribution of estates and partition of co-owned property',
      'Financial consequences of divorce and division of property',
      'Disputes involving foreign companies and investors',
      'Relations between employers and employees',
    ],
    scopeNote: 'Disputes involving allegations of domestic violence, and matters the parties cannot freely dispose of, are not suitable for mediation.',
    processTitle: 'How the process works',
    process: [
      {
        title: 'Application',
        body: 'One or both parties apply to our office. The process begins once the other party accepts the invitation to mediation.',
      },
      {
        title: 'Preliminary meeting',
        body: 'The mediator explains how the process works, the confidentiality rules and the fee, and the meeting schedule is agreed with the parties.',
      },
      {
        title: 'Negotiation',
        body: 'Joint and separate sessions explore the parties’ interests and options. The mediator does not decide or impose a solution, but facilitates communication.',
      },
      {
        title: 'Settlement agreement',
        body: 'The process ends with or without agreement, and a final report is drawn up. A signed settlement agreement is binding on the parties.',
      },
    ],
    mandatoryTitle: 'Mandatory mediation',
    mandatoryLead: 'For the disputes below, applying to a mediator before filing a lawsuit is required by law. We assist in these proceedings as mediator and as counsel.',
    mandatory: [
      { title: 'Commercial receivables and compensation claims', basis: 'Commercial Code Art. 5/A', duration: '6 weeks + up to 2 weeks' },
      { title: 'Employee and employer claims, reinstatement', basis: 'Law No. 7036 Art. 3', duration: '3 weeks + up to 1 week' },
      { title: 'Consumer disputes', basis: 'Consumer Protection Law Art. 73/A', duration: '3 weeks + up to 1 week' },
      { title: 'Tenancy, partition, condominium and neighbour disputes', basis: 'Mediation Law Art. 18/B', duration: '3 weeks + up to 1 week' },
    ],
    durationLabel: 'Duration',
    mediatorTitle: 'Mediator',
    mediatorNote: 'Registered with the Ministry of Justice Mediator Registry',
  },

  practice: {
    title: 'Practice areas',
    lead: 'Alongside mediation, we provide legal representation and advice to companies and individuals in the following areas. Select an area for details.',
    more: 'Details',
    scopeLabel: 'Scope',
    factsLabel: 'Good to know',
    close: 'Close',
    note: 'Time limits and amounts are for general information and may vary depending on the case and legislative changes.',
    areas: [
      {
        id: 'corporate',
        title: 'Commercial and corporate law',
        summary: 'Legal matters of companies, from formation to disputes between shareholders.',
        items: [
          'Formation of joint-stock and limited companies',
          'Amendments to articles, capital increases, share transfers',
          'General assembly and board resolutions',
          'Shareholder disputes and exit from the company',
        ],
        facts: [
          { label: 'Minimum capital, limited company', value: 'TRY 50,000' },
          { label: 'Minimum capital, joint-stock company', value: 'TRY 250,000' },
          { label: 'Action to annul general assembly resolutions', value: '3 months from the resolution' },
        ],
      },
      {
        id: 'contracts',
        title: 'Contract law',
        summary: 'Drafting, reviewing and negotiating commercial and private contracts.',
        items: [
          'Sale, supply, distribution and service agreements',
          'Confidentiality and non-compete agreements',
          'Contract risk analysis and negotiation support',
          'Breach of contract and damages claims',
        ],
        facts: [
          { label: 'General limitation period', value: '10 years' },
          { label: 'Periodic claims such as rent, interest, wages', value: '5 years' },
          { label: 'Before suing on commercial receivables', value: 'Mandatory mediation' },
        ],
      },
      {
        id: 'enforcement',
        title: 'Enforcement and bankruptcy',
        summary: 'Debt collection, enforcement proceedings and defence against them.',
        items: [
          'Enforcement with and without a court judgment',
          'Proceedings based on bills of exchange and cheques',
          'Actions to set aside or remove objections',
          'Attachment, sale and bankruptcy proceedings',
        ],
        facts: [
          { label: 'Objection to a payment order', value: '7 days' },
          { label: 'Objection in bill-based proceedings', value: '5 days' },
          { label: 'Action to set aside an objection', value: '1 year from notification' },
          { label: 'Request to remove an objection', value: '6 months from notification' },
        ],
      },
      {
        id: 'employment',
        title: 'Employment and social security',
        summary: 'Advice and representation for employers and employees, from hiring to termination.',
        items: [
          'Employment contracts and workplace policies',
          'Termination, severance and notice pay',
          'Reinstatement claims',
          'Social security and service determination cases',
        ],
        facts: [
          { label: 'Mediation application for reinstatement', value: '1 month from notice of termination' },
          { label: 'Reinstatement lawsuit if no agreement', value: '2 weeks from the final report' },
          { label: 'Severance and wage claims', value: '5-year limitation period' },
        ],
      },
      {
        id: 'realestate',
        title: 'Real estate and tenancy',
        summary: 'Transactions and disputes concerning title deeds, leases and construction agreements.',
        items: [
          'Title deed cancellation and registration',
          'Rent determination, rent increases and eviction',
          'Construction-for-share agreements',
          'Legal due diligence in property purchases',
        ],
        facts: [
          { label: 'Rent increase, residential and roofed commercial', value: 'Capped at 12-month average CPI' },
          { label: 'Construction-for-share agreement', value: 'Must be executed before a notary' },
          { label: 'Before suing in tenancy disputes', value: 'Mandatory mediation' },
        ],
      },
      {
        id: 'immigration',
        title: 'Immigration law',
        summary: 'Residence and work permit procedures for foreign nationals living and working in Türkiye.',
        items: [
          'Short-term, family and student residence permits',
          'Work permit applications',
          'Appeals against refusal or cancellation of permits',
          'Challenges to deportation orders and entry bans',
        ],
        facts: [
          { label: 'Short-term residence permit', value: 'Up to 2 years at a time' },
          { label: 'First work permit', value: 'Up to 1 year' },
          { label: 'Residence application', value: 'Before the visa or visa-free period expires' },
        ],
      },
      {
        id: 'citizenship',
        title: 'Citizenship law',
        summary: 'Applications for Turkish citizenship by investment and other routes.',
        items: [
          'Citizenship through real estate investment',
          'Citizenship through capital or deposit investment',
          'Citizenship through marriage',
          'Preparing and following up the application file',
        ],
        facts: [
          { label: 'Real estate investment', value: 'At least USD 400,000' },
          { label: 'Commitment not to sell', value: '3 years' },
          { label: 'Application through marriage', value: 'At least 3 years of marriage' },
        ],
      },
      {
        id: 'family',
        title: 'Family law',
        summary: 'Divorce and its consequences, including family disputes with an international element.',
        items: [
          'Uncontested and contested divorce',
          'Custody, visitation and alimony',
          'Liquidation of the matrimonial property regime',
          'Recognition of foreign divorce judgments',
        ],
        facts: [
          { label: 'Marriage duration for uncontested divorce', value: 'At least 1 year' },
          { label: 'Liquidation of matrimonial property', value: '10 years from the final divorce' },
        ],
      },
      {
        id: 'inheritance',
        title: 'Inheritance law',
        summary: 'Distribution of estates, certificates of inheritance and disputes between heirs.',
        items: [
          'Certificate of inheritance',
          'Drafting wills',
          'Reduction and collusive transfer claims',
          'Partition of co-owned property',
        ],
        facts: [
          { label: 'Renunciation of inheritance', value: '3 months' },
          { label: 'Action for reduction', value: '1 year from learning, 10 years at most' },
          { label: 'Before suing for partition', value: 'Mandatory mediation' },
        ],
      },
      {
        id: 'criminal',
        title: 'Criminal law',
        summary: 'Defence and victim representation during investigation and prosecution.',
        items: [
          'Statements and interrogation during investigation',
          'Defence at trial',
          'Criminal complaints and victim representation',
          'Victim–offender reconciliation',
        ],
        facts: [
          { label: 'Complaint period for complaint-based offences', value: '6 months from learning of the act and offender' },
          { label: 'Offences subject to reconciliation', value: 'Reconciliation is attempted first' },
        ],
      },
      {
        id: 'consumer',
        title: 'Consumer law',
        summary: 'Disputes between sellers, providers and consumers.',
        items: [
          'Defective goods and services',
          'Distance and subscription contracts',
          'Consumer rights in residential sales',
          'Applications to consumer arbitration committees',
        ],
        facts: [
          { label: 'Right of withdrawal, distance contracts', value: '14 days' },
          { label: 'Liability for defective goods', value: '2 years from delivery' },
          { label: 'Disputes above the committee threshold', value: 'Mandatory mediation' },
        ],
      },
      {
        id: 'international',
        title: 'International trade and arbitration',
        summary: 'Cross-border commercial relationships, contracts and enforcement of foreign decisions in Türkiye.',
        items: [
          'International sale and distribution agreements',
          'Drafting arbitration clauses',
          'Recognition and enforcement of foreign judgments and awards',
          'Company formation in Türkiye for foreign investors',
        ],
        facts: [
          { label: 'Foreign arbitral awards', value: 'Enforceable under the New York Convention' },
          { label: 'International disputes', value: 'Voluntary mediation is available' },
        ],
      },
    ],
  },

  about: {
    title: 'About us',
    lead: 'Atik Law Office provides legal practice and mediation under one roof in Alanya.',
    firmTitle: 'Our office',
    firm: [
      'Our office operates in Alanya with attorneys registered with the Antalya Bar Association. We advise companies and individuals and represent them in litigation and enforcement proceedings.',
      'We believe not every dispute needs to be resolved in court. That is why, alongside legal practice, we offer mediation to help parties reach a shared solution.',
      'Reflecting Alanya’s international character, we also work with foreign nationals and companies, and hold meetings at our office or online.',
    ],
    principlesTitle: 'How we work',
    principles: [
      { title: 'Clarity', body: 'We explain from the outset how the process works, its possible outcomes and its cost.' },
      { title: 'Confidentiality', body: 'Everything you share is protected by professional secrecy.' },
      { title: 'Accessibility', body: 'We meet at our office or online, at a time that suits you.' },
    ],
    lawyersTitle: 'Our lawyers',
    more: 'Profile',
    cvTitle: 'Profile',
    areasTitle: 'Areas of practice',
    education: 'Education',
    bar: 'Bar',
    email: 'Email',
    phone: 'Phone',
    close: 'Close',
  },

  articles: {
    title: 'Articles',
    lead: 'Informative articles on mediation and changes in Turkish legislation.',
    empty: 'No articles have been published in this language yet.',
    back: 'All articles',
    note: 'This article is for general information only and does not constitute legal advice.',
  },

  contact: {
    title: 'Contact',
    lead: 'Send us your meeting request and we will agree on a time that suits you, at our office or online.',
    formTitle: 'Meeting request',
    fields: {
      name: 'Full name',
      company: 'Company (if any)',
      email: 'Email',
      phone: 'Phone',
      topic: 'Subject',
      lawyer: 'Lawyer',
      date: 'Preferred date',
      time: 'Preferred time',
      mode: 'Meeting format',
      message: 'Briefly describe your matter',
      consent:
        'I give explicit consent, under the privacy notice, to the processing of my personal data to evaluate my meeting request and to the form being sent via an email delivery service located abroad.',
      consentLink: 'Read the privacy notice',
    },
    mediationTopics: [
      { id: 'mediation-voluntary', label: 'Voluntary mediation' },
      { id: 'mediation-mandatory', label: 'Mandatory mediation (commercial, employment, consumer, tenancy)' },
    ],
    topicGroups: { mediation: 'Mediation', practice: 'Legal practice and advice' },
    lawyerAny: 'Let the office assign a lawyer',
    lawyerHint: 'Suggested based on your subject; you can change it.',
    times: ['09:00 – 12:00', '12:00 – 15:00', '15:00 – 18:00'],
    modes: ['At the office', 'Online'],
    optional: 'optional',
    submit: 'Send request',
    sending: 'Sending…',
    success: 'Your request has been received. We will contact you shortly.',
    error: 'The request could not be sent. Please try again or call us.',
    infoTitle: 'Office',
    phone: 'Phone',
    email: 'Email',
    kep: 'Registered email (KEP)',
    mapTitle: 'Location',
    mapNote: 'The map is loaded from Google Maps and connects to Google.',
    mapButton: 'Show map',
    mapLink: 'Open in Google Maps',
  },

  privacy: {
    title: 'Privacy notice',
    lead: 'Information under the Turkish Personal Data Protection Law No. 6698 (KVKK).',
    sections: [
      {
        title: 'Data controller',
        body: ['Your personal data is processed by Atik Law Office as data controller, within the scope described below.'],
      },
      {
        title: 'Personal data processed',
        body: [
          'Through the meeting request form we process your full name, company name, email address, phone number, preferred meeting time and the description of your request.',
          'Please do not include special categories of personal data (such as health data or criminal records) in the description field.',
        ],
      },
      {
        title: 'Purposes and legal grounds',
        body: [
          'Your data is processed to evaluate your meeting request, contact you and schedule the meeting, on the legal grounds of KVKK Art. 5/2-c (directly related to establishing a contract) and Art. 5/2-f (legitimate interest).',
        ],
      },
      {
        title: 'Transfers',
        body: [
          'The form is sent via the Web3Forms service, which forwards messages to the office email address. As its servers are located abroad, this transfer is based on the explicit consent you give in the form (KVKK Art. 9).',
          'Otherwise, your data is not shared with third parties, subject to legal obligations.',
        ],
      },
      {
        title: 'Cookies and third-party services',
        body: [
          'This site does not use cookies. Fonts are served from the site itself. The map on the contact page is loaded from Google Maps only when you press “Show map”.',
        ],
      },
      {
        title: 'Your rights',
        body: [
          'Under KVKK Art. 11 you have the right to learn whether your data is processed, to request information, to request correction, deletion or destruction, and to object to processing. You may send your requests in writing to the office address or to our registered email (KEP) address.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Page not found',
    lead: 'The page you are looking for may have been moved or removed.',
    home: 'Return to the home page',
  },

  footer: {
    privacy: 'Privacy notice',
  },
};
