import { IReactSelectOptions } from "../types/template";

export const BackendTechnologiesItems: IReactSelectOptions[] = [
  { label: "Please Select", value: "-", isDisabled: true },

  // Microsoft stack
  { label: ".NET", value: ".NET", isDisabled: false },
  { label: ".NET Core", value: ".NET Core", isDisabled: false },
  { label: "Web API", value: "Web API", isDisabled: false },
  { label: "C#", value: "C#", isDisabled: false },
  { label: "Entity Framework Core", value: "Entity Framework Core", isDisabled: false },
  { label: "ASP.NET MVC", value: "ASP.NET MVC", isDisabled: false },
  { label: "ASP.NET", value: "ASP.NET", isDisabled: false },

  // PHP stack
  { label: "PHP", value: "PHP", isDisabled: false },
  { label: "Laravel", value: "Laravel", isDisabled: false },
  { label: "CodeIgniter", value: "CodeIgniter", isDisabled: false },
  { label: "Symfony", value: "Symfony", isDisabled: false },

  // Node.js stack
  { label: "Node.js", value: "Node.js", isDisabled: false },
  { label: "Express.js", value: "Express.js", isDisabled: false },
  { label: "NestJS", value: "NestJS", isDisabled: false },
  { label: "Fastify", value: "Fastify", isDisabled: false },

  // Java stack
  { label: "Java", value: "Java", isDisabled: false },
  { label: "Spring Boot", value: "Spring Boot", isDisabled: false },
  { label: "Hibernate", value: "Hibernate", isDisabled: false },
  { label: "JSP/Servlets", value: "JSP/Servlets", isDisabled: false },

  // Python stack
  { label: "Python", value: "Python", isDisabled: false },
  { label: "Django", value: "Django", isDisabled: false },
  { label: "Flask", value: "Flask", isDisabled: false },
  { label: "FastAPI", value: "FastAPI", isDisabled: false },

  // Ruby stack
  { label: "Ruby", value: "Ruby", isDisabled: false },
  { label: "Ruby on Rails", value: "Ruby on Rails", isDisabled: false },

  // Go stack
  { label: "Go", value: "Go", isDisabled: false },
  { label: "Gin", value: "Gin", isDisabled: false },
  { label: "Echo", value: "Echo", isDisabled: false },

  // Databases
  { label: "SQL Server", value: "SQL Server", isDisabled: false },
  { label: "PostgreSQL", value: "PostgreSQL", isDisabled: false },
  { label: "MySQL", value: "MySQL", isDisabled: false },
  { label: "MongoDB", value: "MongoDB", isDisabled: false },
  { label: "Oracle DB", value: "Oracle DB", isDisabled: false },
  { label: "SQLite", value: "SQLite", isDisabled: false },
  { label: "Firebase", value: "Firebase", isDisabled: false },

  // API & Tools
  { label: "REST APIs", value: "REST APIs", isDisabled: false },
  { label: "GraphQL", value: "GraphQL", isDisabled: false },
  { label: "gRPC", value: "gRPC", isDisabled: false },
  { label: "GIT", value: "GIT", isDisabled: false },
];


export const FrontechnologiesItems: IReactSelectOptions[] = [
  { label: "Please Select", value: "-", isDisabled: true },
  { label: "HTML5", value: "HTML5", isDisabled: false },
  { label: "CSS3", value: "CSS3", isDisabled: false },
  { label: "JAVASCRIPT", value: "JAVASCRIPT", isDisabled: false },
  { label: "REACT", value: "REACT", isDisabled: false },
  { label: "Angular 2+", value: "Angular 2+", isDisabled: false },
  { label: "Bootstrap", value: "Bootstrap", isDisabled: false },
  { label: "Tailwind CSS", value: "Tailwind CSS", isDisabled: false },
  { label: "Responsive Design", value: "Responsive Design", isDisabled: false },
];
