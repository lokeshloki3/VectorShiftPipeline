// import { useState } from 'react';
// import AbstractNode from './abstractNode';
// import { Position } from '@xyflow/react';

// export const NotificationNode = ({ id, data }) => {
//   const [notificationTitle, setNotificationTitle] = useState(data?.title || 'Notification Title');
//   const [notificationMessage, setNotificationMessage] = useState(data?.message || 'This is a notification message.');
  
//   const handleTitleChange = (e) => {
//     setNotificationTitle(e.target.value);
//   };

//   const handleMessageChange = (e) => {
//     setNotificationMessage(e.target.value);
//   };

//   const handles = [
//     { type: 'source', position: Position.Right, id: `${id}-notify` },
//   ];

//   return (
//     <AbstractNode
//       customClasses='h-36'
//       id={id}
//       nodeType="Notification"
//       handles={handles}
//       title="Notification"
//       inputFields={[
//         { label: 'Title', type: 'text', value: notificationTitle, onChange: handleTitleChange },
//       ]}
//       outputFields={[
//         { label: 'Message', type: 'text', value: notificationMessage, onChange: handleMessageChange },
//       ]}
//     >
//       <div>
//         <label>
//           Notification Message:
//           <input className='text-center border-b-2' type="text" value={notificationMessage} onChange={handleMessageChange} />
//         </label>
//       </div>
//     </AbstractNode>
//   );
// };

import { Position } from '@xyflow/react';
import AbstractNode from './abstractNode';

export const NotificationNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-input1` },
    { type: 'target', position: Position.Left, id: `${id}-input2` },
    { type: 'source', position: Position.Right, id: `${id}-merged` },
  ];

  return (
    <AbstractNode
      id={id}
      nodeType="Notification"
      handles={handles}
      title="Notification"
      inputFields={[]}
      outputFields={[]}
    >
      <div className='text-center bg-slate-50'>This node is Notification.</div>
    </AbstractNode>
  );
};
