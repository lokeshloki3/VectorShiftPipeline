import { useState } from 'react';
import AbstractNode from './abstractNode';
import { Position } from '@xyflow/react';

export const DecisionNode = ({ id, data }) => {
  const [decisionType, setDecisionType] = useState(data?.decisionType || 'If');

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-condition` },
    { type: 'source', position: Position.Right, id: `${id}-true` },
    { type: 'source', position: Position.Right, id: `${id}-false` },
  ];

  const handleTypeChange = (e) => {
    setDecisionType(e.target.value);
  };

  return (
    <AbstractNode
      id={id}
      nodeType="Decision"
      handles={handles}
      title="Decision"
      inputFields={[
        { label: 'Type', type: 'select', value: decisionType, onChange: handleTypeChange, options: [{ value: 'If', label: 'If' }, { value: 'Switch', label: 'Switch' }] },
      ]}
      outputFields={[]}
    />
  );
};
