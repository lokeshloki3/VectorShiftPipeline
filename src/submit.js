import { useStore } from './store'; // Import store to get nodes and edges
import React from 'react';

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleSubmit = async () => {
    // Structure the submission data
    const submissionData = {
      nodes: nodes.map(node => ({
        id: node.id,
        type: node.type,
        position: node.position,
        data: node.data,
      })),
      edges: edges.map(edge => ({
        id: edge.id,
        source: edge.source,
        target: edge.target,
        label: edge.label,
      })),
    };
    
    const submissionDataString = JSON.stringify(submissionData);
    console.log("Submitted Data: ", submissionDataString);
    
    // Send submissionData to an API endpoint or use it as needed.
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: submissionDataString,
      });

      const data = await response.json();
      console.log(data)
      
      const { num_nodes, num_edges, is_dag } = data;
      alert(`Number of Nodes: ${num_nodes}\nNumber of Edges: ${num_edges}\nIs Directed Acyclic Graph (DAG): ${is_dag}`);
    } catch (error) {
      alert('Backend not found');
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="bg-teal-50">
      <button 
        type="submit" 
        className="border-2 border-black p-2 font-bold rounded-xl bg-pink-200"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};
