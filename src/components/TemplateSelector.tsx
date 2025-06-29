import React from 'react';
import { Template } from '../types/template';
import { FileText } from 'lucide-react';

interface TemplateSelectorProps {
  templates: Template[];
  selectedTemplate: Template | null;
  onTemplateSelect: (template: Template) => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  templates,
  selectedTemplate,
  onTemplateSelect,
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Select Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onTemplateSelect(template)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-md ${
              selectedTemplate?.id === template.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-800">{template.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};