// outputNode.js

import { useState } from 'react';
import AbstractNode from './abstractNode';
import { Position } from '@xyflow/react';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-value` },
  ];

  return (
    <AbstractNode
      id={id}
      nodeType="Output"
      handles={handles}
      title="Output"
      inputFields={[
        { label: 'Name', type: 'text', value: currName, onChange: handleNameChange },
      ]}
      outputFields={[
        { label: 'Type', type: 'select', value: outputType, onChange: handleTypeChange, options: [{ value: 'Text', label: 'Text' }, { value: 'File', label: 'Image' }] },
      ]}
    />
  );
};
