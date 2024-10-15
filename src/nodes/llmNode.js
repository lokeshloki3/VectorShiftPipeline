// llmNode.js

import { Position } from '@xyflow/react';
import AbstractNode from './abstractNode';

export const LLMNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: '33%' } },
    { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: '66%' } },
    { type: 'source', position: Position.Right, id: `${id}-response` },
  ];

  return (
    <AbstractNode
      id={id}
      nodeType="LLM"
      handles={handles}
      title="LLM"
      inputFields={[]}
      outputFields={[]}
    >
      <div className='text-center'>This is a LLM.</div>
    </AbstractNode>
  );
};
