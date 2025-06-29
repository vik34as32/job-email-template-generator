import { Template } from "../types/template";

export const defaultTemplates: Template[] = [
  //   {
  //     id: 'cover-letter',
  //     name: 'Cover Letter',
  //     content: `Dear Hiring Manager,

  // My name is {{name}} and I am writing to express my interest in the {{position}} role at {{company}}. With {{experience}} years of experience in {{field}}, I believe I would be a valuable addition to your team.

  // My key skills include:
  // {{#skills}}
  // • {{.}}
  // {{/skills}}

  // I am particularly excited about this opportunity because {{reason}}. My background in {{background}} has prepared me well for the challenges of this role.

  // {{#achievements}}
  // - {{.}}
  // {{/achievements}}

  // I would welcome the opportunity to discuss how my experience and passion for {{field}} can contribute to {{company}}'s continued success.

  // Thank you for your consideration.

  // Sincerely,
  // {{name}}`,
  //     fields: [
  //       { key: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'John Doe' },
  //       { key: 'position', label: 'Position', type: 'text', required: true, placeholder: 'Software Developer' },
  //       { key: 'company', label: 'Company Name', type: 'text', required: true, placeholder: 'Tech Corp' },
  //       { key: 'experience', label: 'Years of Experience', type: 'text', required: true, placeholder: '5' },
  //       { key: 'field', label: 'Field/Industry', type: 'text', required: true, placeholder: 'Software Development' },
  //       { key: 'skills', label: 'Skills', type: 'array', placeholder: 'JavaScript, React, Node.js' },
  //       { key: 'reason', label: 'Reason for Interest', type: 'textarea', placeholder: 'the company\'s innovative approach to technology...' },
  //       { key: 'background', label: 'Background', type: 'text', placeholder: 'full-stack development' },
  //       { key: 'achievements', label: 'Key Achievements', type: 'array', placeholder: 'Led a team of 5 developers, Increased performance by 40%' }
  //     ]
  //   },
  {
    id: "email-template",
    name: "Professional Email",
    content: `Subject: {{subject}}

Dear {{recipient}},

I hope this email finds you well. I am reaching out regarding position for {{jobPosition}} at {{companyName}}. With over 3 years of experience in {{backendTechnologies}}  {{frontendTechnology}}, I believe I can contribute effectively to your team. 

Please find my attached resume for your reference. I’d be glad to connect for further discussion.

{{message}}

Best regards,
{{senderName}}
{{email}}
{{phone}}`,
    fields: [
      {
        key: "subject",
        label: "Email Subject",
        type: "text",
        required: true,
        placeholder: "Email Subject",
      },
      {
        key: "recipient",
        label: "Recipient Name",
        type: "text",
        required: true,
        placeholder: "Mr. Smith",
      },
      {
        key: "jobPosition",
        label: "Postion Applying",
        type: "text",
        required: true,
        placeholder: "Postion Applying",
      },
      {
        key: "companyName",
        label: "Company Name",
        type: "text",
        required: true,
        placeholder: "Company Name",
      },
      {
        key: "backendTechnologies",
        label: "Backend Technology",
        type: "dropdown",
        required: false,
        placeholder: "Backend Technology",
      },
      {
        key: "frontendTechnology",
        label: "Frontend Technology",
        type: "dropdown",
        required: false,
        placeholder: "Frontend Technology",
      },
      {
        key: "message",
        label: "Additional Info",
        type: "textarea",
        required: false,
        placeholder: "Your additional message content...",
      },
      // {
      //   key: "nextSteps",
      //   label: "Next Steps",
      //   type: "array",
      //   placeholder: "Schedule follow-up meeting, Review documents",
      // },
      {
        key: "senderName",
        label: "Your Name",
        type: "text",
        required: true,
        placeholder: "Jane Doe",
      },
      {
        key: "email",
        label: "Email",
        type: "text",
        placeholder: "jane.doe@company.com",
      },
      {
        key: "phone",
        label: "Phone",
        type: "text",
        placeholder: "+1 (555) 123-4567",
      },
    ],
  },
  //   {
  //     id: 'resume-summary',
  //     name: 'Resume Summary',
  //     content: `{{name}}
  // {{title}} | {{location}}
  // {{email}} | {{phone}} | {{linkedin}}

  // PROFESSIONAL SUMMARY
  // {{summary}}

  // CORE COMPETENCIES
  // {{#skills}}
  // • {{.}}
  // {{/skills}}

  // PROFESSIONAL EXPERIENCE
  // {{#experience}}
  // {{position}} at {{company}} ({{duration}})
  // {{description}}

  // {{/experience}}

  // EDUCATION
  // {{education}}

  // {{#certifications}}
  // CERTIFICATIONS
  // {{#.}}
  // • {{.}}
  // {{/.}}
  // {{/certifications}}`,
  //     fields: [
  //       { key: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'John Smith' },
  //       { key: 'title', label: 'Professional Title', type: 'text', required: true, placeholder: 'Senior Software Engineer' },
  //       { key: 'location', label: 'Location', type: 'text', placeholder: 'New York, NY' },
  //       { key: 'email', label: 'Email', type: 'text', required: true, placeholder: 'john.smith@email.com' },
  //       { key: 'phone', label: 'Phone', type: 'text', placeholder: '+1 (555) 123-4567' },
  //       { key: 'linkedin', label: 'LinkedIn', type: 'text', placeholder: 'linkedin.com/in/johnsmith' },
  //       { key: 'summary', label: 'Professional Summary', type: 'textarea', required: true, placeholder: 'Experienced software engineer with 8+ years...' },
  //       { key: 'skills', label: 'Skills', type: 'array', placeholder: 'JavaScript, Python, React, AWS' },
  //       { key: 'experience', label: 'Work Experience', type: 'textarea', placeholder: 'Senior Developer at Tech Corp (2020-Present)\nLed development of...' },
  //       { key: 'education', label: 'Education', type: 'text', placeholder: 'Bachelor of Science in Computer Science, University of Technology' },
  //       { key: 'certifications', label: 'Certifications', type: 'array', placeholder: 'AWS Certified Solutions Architect, Google Cloud Professional' }
  //     ]
  //   }
];
