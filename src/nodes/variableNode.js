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
      nodeType="Variable" // Update the node type if needed
      handles={handles}
      title="Variable"// Set the title to the dynamic label
      inputFields={[]}
      outputFields={[]}
    >
      <div className='text-center flex flex-col'>
        <label>
          {data.label || "Text"}: {/* Display the dynamic label */}
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
