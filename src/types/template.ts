export interface TemplateField {
  key: string;
  label: string;
  type: "text" | "textarea" | "array" | "dropdown";
  placeholder?: string;
  required?: boolean;
}

export interface Template {
  id: string;
  name: string;
  content: string;
  fields: TemplateField[];
}

export interface FieldValues {
  [key: string]: string | string[];
}

export interface IReactSelectOptions {
  value: string;
  label: string;
  isDisabled: boolean;
}
