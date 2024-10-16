// abstractNode.js

import React from 'react';
import { Handle } from 'reactflow';

const AbstractNode = ({
  id,
  nodeType,
  handles,
  title,
  children,
  inputFields,
  outputFields,
  customClasses,
}) => {
  

  return (
    <div className={'rounded-xl border-2 border-black min-h-20 min-w-64 bg-slate-50 ' + customClasses}>
      {handles?.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}
      <div className='text-center rounded-t-xl border-b-2 border-solid border-black bg-blue-100 '>
        <span className=' font-bold '>{title}</span>
      </div>
      <div className='p-1 text-blue-700 text-center'>
        {inputFields.map((inputField, index) => (
          <div key={`input-${index}`}>
            <label>
              {inputField.label}:
              <input
                className='text-center text-pink-700 rounded-md p-1 mt-1'
                type={inputField.type}
                value={inputField.value}
                onChange={(e) => {
                  inputField.onChange(e)
                }}
              />
            </label>
          </div>
        ))}
      </div>
      <div className='text-blue-700 text-center'>
        {outputFields.map((outputField, index) => (
          <div key={`output-${index}`} >
            <label>
              {outputField.label}:
              <select value={outputField.value} onChange={outputField.onChange} className='text-center text-pink-700 border border-gray-300 rounded-md p-1 mt-1'>
                {outputField.options?.map((option) => (
                  <option key={option.value} value={option.value} className='text-center text-pink-700'>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default AbstractNode;
