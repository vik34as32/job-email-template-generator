import { useState, useEffect } from 'react';
import { Template, FieldValues } from './types/template';
import { defaultTemplates } from './data/templates';
import { TemplateProcessor } from './utils/templateProcessor';
import { TemplateSelector } from './components/TemplateSelector';
import { FieldEditor } from './components/FieldEditor';
import { TemplatePreview } from './components/TemplatePreview';
import { FileText } from 'lucide-react';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [fieldValues, setFieldValues] = useState<FieldValues>({});
  const [processedContent, setProcessedContent] = useState<string>('');

  useEffect(() => {
    if (selectedTemplate) {
      // Initialize field values with empty values
      const initialValues: FieldValues = {};
      selectedTemplate.fields.forEach(field => {
        if (field.type === 'array') {
          initialValues[field.key] = [''];
        } else {
          initialValues[field.key] = '';
        }
      });
      setFieldValues(initialValues);
    }
  }, [selectedTemplate]);

  useEffect(() => {
    if (selectedTemplate) {
      const processed = TemplateProcessor.process(selectedTemplate.content, fieldValues);
      setProcessedContent(processed);
    }
  }, [selectedTemplate, fieldValues]);

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
  };

  const handleFieldValuesChange = (values: FieldValues) => {
    setFieldValues(values);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Template Editor</h1>
          </div>
          <p className="text-gray-600">
            Select a template, fill in the fields, and generate your customized content.
          </p>
        </div>

        <TemplateSelector
          templates={defaultTemplates}
          selectedTemplate={selectedTemplate}
          onTemplateSelect={handleTemplateSelect}
        />

        {selectedTemplate && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <FieldEditor
                fields={selectedTemplate.fields}
                values={fieldValues}
                onChange={handleFieldValuesChange}
              />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <TemplatePreview
                content={processedContent}
                templateName={selectedTemplate.name}
              />
            </div>
          </div>
        )}

        {!selectedTemplate && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              Select a template to get started
            </h3>
            <p className="text-gray-500">
              Choose from one of the available templates above to begin editing.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;