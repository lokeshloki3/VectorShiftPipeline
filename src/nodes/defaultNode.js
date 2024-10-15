import React from 'react';
import AbstractNode from './abstractNode';

const DefaultNode = () => {
  const handles = [
    { id: 'input1', type: 'target', position: 'left', style: { background: '#555' } },
    { id: 'output1', type: 'source', position: 'right', style: { background: '#555' } },
  ];

  const inputFields = [
    { label: 'Input 1', value: '', onChange: (value) => console.log('Input changed:', value) },
  ];

  const outputFields = [
    { label: 'Output 1', value: '', onChange: (value) => console.log('Output changed:', value), options: [] },
  ];

  return (
    <AbstractNode
      id="1"
      title="Default Node"
      handles={handles}
      inputFields={inputFields}
      outputFields={outputFields}
      customClasses="additional-classes"
    />
  );
};

export default DefaultNode;
