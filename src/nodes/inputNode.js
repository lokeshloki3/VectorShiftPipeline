import { useState, useEffect, useRef } from 'react';
import AbstractNode from './abstractNode';
import { Position } from '@xyflow/react';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-value` },
  ];

  const textareaRef = useRef(null);

  // Adjust height of the textarea based on its content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scrollHeight
    }
  }, [currName]);

  return (
    <AbstractNode
      onVariableNodeAddition={data.onVariableNodeAddition}
      id={id}
      title='Input'
      nodeType="Input"
      handles={handles}
      inputFields={[]}
      outputFields={[]}
    >
      <div className="p-1 pt-0 space-y-1">
        {/* Name Input */}
        <div>
          <label className="block text-sm text-gray-700">
            Name
            <textarea
              ref={textareaRef}
              value={currName}
              onChange={handleNameChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2 resize-none"
              placeholder="Enter input name"
              rows={1}
            />
          </label>
        </div>

        <div>
          <label className="block text-sm text-gray-700">
            Type
            <select
              value={inputType}
              onChange={handleTypeChange}
              className=" block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
            >
              {[
                { value: 'Text', label: 'Text' },
                { value: 'File', label: 'File' },
              ].map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </AbstractNode>
  );
};
