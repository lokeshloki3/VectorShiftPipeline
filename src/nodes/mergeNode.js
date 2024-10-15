import { Position } from '@xyflow/react';
import AbstractNode from './abstractNode';

export const MergeNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-input1` },
    { type: 'target', position: Position.Left, id: `${id}-input2` },
    { type: 'source', position: Position.Right, id: `${id}-merged` },
  ];

  return (
    <AbstractNode
      id={id}
      nodeType="Merge"
      handles={handles}
      title="Merge"
      inputFields={[]}
      outputFields={[]}
    >
      <div className='text-center bg-slate-50'>This node merges inputs.</div>
    </AbstractNode>
  );
};
