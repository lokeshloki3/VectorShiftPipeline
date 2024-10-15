// textNode.js
import { useState } from 'react';
import AbstractNode from './abstractNode';
import { Position } from '@xyflow/react';
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  addEdge: state.addEdge,
});

export const TextNode = ({ id, data, position }) => {
  const {
    nodes,
    addNode,
    addEdge,
  } = useStore(selector, shallow);
  
  const [currText, setCurrText] = useState(data?.value?.currText || '{{input}}');

  const handleInputChange = (event) => {
    setCurrText(event.target.value); 
  };

  const handleCreateNewNode = () => {
    const variablePattern = /\{\{(.*?)\}\}/g;
    const matches = currText.match(variablePattern);

    if (matches) {
      matches.forEach((match) => {
        const variableName = match.slice(2, -2).trim();
        const newNodeId = `variableNode-${variableName}--${id}`;

        const alreadyExistingNode = nodes.some(node => node.id === newNodeId);
        if (!alreadyExistingNode) {
          addNode({
            id: newNodeId,
            type: 'variable',
            position: { x: data.position.x - 300, y: data.position.y },
            data: {
              type: "variable",
              label: variableName, // Pass the variable name as label
              value: { currText: variableName }, 
            },
          });

          addEdge({
            id: 'e' + newNodeId + "-" + id,
            source: newNodeId,
            target: id
          });
        }
      });
    } else {
      alert('Enter inside {{...}} to create variables.');
    }
  };

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-output` },
    { type: 'target', position: Position.Left, id: `${id}-input` },
  ];

  return (
    <AbstractNode
      id={id}
      nodeType="Text"
      handles={handles}
      title="Text"
      inputFields={[]}
      outputFields={[]}
    >
      <div className='text-center flex flex-col'>
        <label>
          Text:
          <input
            type="text"
            value={currText}
            onChange={handleInputChange}
            className='text-center'
            onBlur={handleCreateNewNode}
          />
        </label>
      </div>
    </AbstractNode>
  );
};
