import React from 'react';
import AbstractNode from './abstractNode';
import { Position } from '@xyflow/react';

const VariableNode = ({ id, data }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-output` },
  ];

  return (
    <AbstractNode
      id={id}
      nodeType="Variable"
      handles={handles}
      title="Variable"
      inputFields={[]}
      outputFields={[]}
    >
      <div className='text-center flex flex-col'>
        <label>
          {/* Display the dynamic label and initially Text*/}
          {data.label || "Text"}: 
          <input
            type="text"
            className='text-center'
          />
        </label>
      </div>
    </AbstractNode>
  );
};

export default VariableNode;
