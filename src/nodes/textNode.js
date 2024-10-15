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
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
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
      matches.forEach((match, index) => {
        
        const variableName = match.slice(2, -2).trim();
        const newNodeId = `newNode-${match}--${id}`;

        let alreadyExistingNode = false;
        nodes.map(node => {
          if(node.id == newNodeId){
            alreadyExistingNode=true
          }
        })
        if(!alreadyExistingNode){
        addNode({
          id: newNodeId,
          type: 'text',
          position: { x: data.position.x-300, y: data.position.y },
          data: {
            type: "text",
            value: { currText: variableName }, 
            // onVariableNodeAddition: data.onVariableNodeAddition,
            // position: { x: data.position.x-300, y: data.position.y }
          },
        });

        addEdge({
          id: 'e'+newNodeId+"-"+id,
          source: newNodeId,
          target: id
        })
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
        {/* <button onClick={handleCreateNewNode} className='ml-16 mt-2 px-1 py-1 bg-blue-100 border-b-2 border-black rounded-xl w-32'>
          Create Variables
        </button> */}
      </div>
    </AbstractNode>
  );
};
