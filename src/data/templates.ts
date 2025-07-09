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
    content: `Subject:  Application for {{subject}} Position

Dear {{recipient}},

I hope this email finds you well.

I am writing to express my interest in the {{jobPosition}}  position at {{companyName}}. With over {{experience}} years of hands-on experience in {{frontendTechnology}} {{backendTechnologies}},  I have built a strong foundation in developing responsive, high-performance, and user-friendly web applications.. 

Throughout my career, I have worked on multiple full-stack projects, implemented component-based architecture, optimized code for performance, and collaborated with cross-functional teams in Agile environments. I am confident that my technical skills and dedication make me a strong fit for your development team.

Please find my resume attached for your review. I would appreciate the opportunity to further discuss how my background aligns with your team's goals.


Looking forward to hearing from you.

{{message}}

Best regards,
{{senderName}}
{{email}}
{{phone}}
{{linkedIn}}`,
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
        key: "experience",
        label: "Experience",
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
      {
  key: "linkedIn",
  label: "LinkedIn",
  type: "text",
  placeholder: "https://www.linkedin.com/in/your-profile/",
  required: false
}
    ],
  },
];
