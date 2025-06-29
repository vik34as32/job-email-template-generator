import { FieldValues } from "../types/template";

export class TemplateProcessor {
  static process(template: string, values: FieldValues): string {
    let result = template;

    // Process array fields with iteration syntax {{#field}}...{{/field}}
    result = this.processArrayFields(result, values);

    // Process simple field replacements {{field}}
    result = this.processSimpleFields(result, values);

    return result;
  }

  private static processArrayFields(
    template: string,
    values: FieldValues
  ): string {
    let result = template;

    // Match array iteration patterns like {{#skills}}...{{/skills}}
    const arrayPattern = /\{\{#(\w+)\}\}([\s\S]*?)\{\{\/\1\}\}/g;

    result = result.replace(arrayPattern, (_, fieldName, content) => {
      const fieldValue = values[fieldName];

      if (
        !fieldValue ||
        !Array.isArray(fieldValue) ||
        fieldValue.length === 0
      ) {
        return "";
      }

      // Handle nested array iteration {{#.}}...{{/.}}
      if (content.includes("{{#.}}") && content.includes("{{/.}}")) {
        const nestedPattern = /\{\{#\.\}\}([\s\S]*?)\{\{\/\.\}\}/g;
        content = content.replace(
          nestedPattern,
          (_: any, nestedContent: any) => {
            return fieldValue
              .map((item) => nestedContent.replace(/\{\{\.\}\}/g, item))
              .join("\n");
          }
        );
        return content;
      }

      // Simple array iteration
      return fieldValue
        .map((item) => content.replace(/\{\{\.\}\}/g, item))
        .join("");
    });

    return result;
  }

  private static processSimpleFields(
    template: string,
    values: FieldValues
  ): string {
    let result = template;

    // Replace simple field placeholders {{field}}
    const simplePattern = /\{\{(\w+)\}\}/g;

    result = result.replace(simplePattern, (match, fieldName) => {
      const fieldValue = values[fieldName];

      if (fieldValue === undefined || fieldValue === null) {
        return match; // Keep placeholder if no value
      }

      if (Array.isArray(fieldValue)) {
        return fieldValue.join(", ");
      }

      return String(fieldValue);
    });

    return result;
  }
}
