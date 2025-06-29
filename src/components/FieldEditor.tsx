import { Plus, X } from "lucide-react";
import React from "react";
import Select from "react-select";
import {
  FieldValues,
  IReactSelectOptions,
  TemplateField,
} from "../types/template";
import {
  BackendTechnologiesItems,
  FrontechnologiesItems,
} from "../utils/constant";

interface FieldEditorProps {
  fields: TemplateField[];
  values: FieldValues;
  onChange: (values: FieldValues) => void;
}

export const FieldEditor: React.FC<FieldEditorProps> = ({
  fields,
  values,
  onChange,
}) => {
  const handleFieldChange = (key: string, value: string | string[]) => {
    onChange({
      ...values,
      [key]: value,
    });
  };

  const handleArrayAdd = (key: string) => {
    const currentArray = (values[key] as string[]) || [];
    handleFieldChange(key, [...currentArray, ""]);
  };

  const handleArrayRemove = (key: string, index: number) => {
    const currentArray = (values[key] as string[]) || [];
    const newArray = currentArray.filter((_, i) => i !== index);
    handleFieldChange(key, newArray);
  };

  const handleChange = (option: IReactSelectOptions[], key: string) => {
    handleFieldChange(
      key,
      option.map((item: IReactSelectOptions) => item.value).join(", ")
    );
  };

  const chooseTechnology = (key: string): IReactSelectOptions[] => {
    switch (key) {
      case "backendTechnologies":
        return BackendTechnologiesItems;
      case "frontendTechnology":
        return FrontechnologiesItems;
      default:
        return BackendTechnologiesItems;
    }
  };

  const handleArrayItemChange = (key: string, index: number, value: string) => {
    const currentArray = (values[key] as string[]) || [];
    const newArray = [...currentArray];
    newArray[index] = value;
    handleFieldChange(key, newArray);
  };

  const renderField = (field: TemplateField) => {
    const fieldValue = values[field.key];
    switch (field.type) {
      case "textarea":
        return (
          <textarea
            value={(fieldValue as string) || ""}
            onChange={(e) => handleFieldChange(field.key, e.target.value)}
            placeholder={field.placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical min-h-[100px]"
            rows={4}
          />
        );

      case "array":
        const arrayValue = (fieldValue as string[]) || [""];
        return (
          <div className="space-y-2">
            {arrayValue.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) =>
                    handleArrayItemChange(field.key, index, e.target.value)
                  }
                  placeholder={field.placeholder}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {arrayValue.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleArrayRemove(field.key, index)}
                    className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleArrayAdd(field.key)}
              className="flex items-center space-x-2 px-3 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add {field.label}</span>
            </button>
          </div>
        );

      case "dropdown":
        const reactSelectOptions: IReactSelectOptions[] =
          (fieldValue &&
            (fieldValue as string).split(",").map((item) => {
              return { label: item, value: item, isDisabled: true };
            })) ||
          [];

        return (
          <div className="space-y-2">
            <Select
              value={reactSelectOptions}
              onChange={(e: any) => handleChange(e, field.key)}
              options={chooseTechnology(field.key)}
              isMulti
            />
          </div>
        );

      default:
        return (
          <input
            type="text"
            value={(fieldValue as string) || ""}
            onChange={(e) => handleFieldChange(field.key, e.target.value)}
            placeholder={field.placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        );
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-800">Edit Fields</h2>
      {fields.map((field) => (
        <div key={field.key} className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          {renderField(field)}
        </div>
      ))}
    </div>
  );
};
