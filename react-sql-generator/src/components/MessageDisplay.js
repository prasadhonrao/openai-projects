import React from 'react';

const MessageDisplay = ({ message }) => {
  return (
    <div className="message-display">
      <p id="icon">⦿</p>
      {/* <p>{message.role}</p> */}
      <p>{message.content}</p>
    </div>
  );
};

export default MessageDisplay;
