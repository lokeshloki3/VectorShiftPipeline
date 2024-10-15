import { Position } from '@xyflow/react';
import AbstractNode from './abstractNode';

export const ProcessingNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-input` },
    { type: 'source', position: Position.Right, id: `${id}-output` },
  ];

  return (
    <AbstractNode
      id={id}
      nodeType="Processing"
      handles={handles}
      title="Processing"
      inputFields={[]}
      outputFields={[
        { label: 'Output Type', type: 'select', value: 'Processed', onChange: () => {}, options: [{ value: 'Processed', label: 'Processed' }] },
      ]}
    >
      <div className='text-center'>Processing node logic goes here.</div>
    </AbstractNode>
  );
};
