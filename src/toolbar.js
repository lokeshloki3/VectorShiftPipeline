// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }} className="bg-pink-200">
            <h1 className='text-center font-extrabold text-2xl text-pink-950 '>Design PipelineUI</h1>
            <div className='flex'>
                <div className='mt-8 mr-6 font-bold text-pink-950 text-xl'>Drag Nodes -</div>
                <div style={{ marginTop: '15px', display: 'flex', flexWrap: 'wrap', gap: '10px' }} >
                    <DraggableNode type='customInput' label='Input' />
                    <DraggableNode type='llm' label='LLM' />
                    <DraggableNode type='customOutput' label='Output' />
                    <DraggableNode type='text' label='Text' />
                    <DraggableNode type='notification' label='Notification' />
                    <DraggableNode type='decision' label='Decision' />
                    <DraggableNode type='processing' label='Processing' />
                    <DraggableNode type='merge' label='Merge' />
                    <DraggableNode type='default' label='Default' />
                </div>
            </div>
        </div>
    );
};
