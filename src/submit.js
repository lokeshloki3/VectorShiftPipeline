// submit.js
import { useStore } from './store'; // Import store to get nodes and edges

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleSubmit = () => {
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
      }))
    };
    const submissionDataString = JSON.stringify(submissionData);
    console.log("Submitted Data: ", submissionDataString);
    // Send `submissionData` to an API endpoint or use it as needed.
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
