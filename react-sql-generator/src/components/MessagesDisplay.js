import MessageDisplay from './MessageDisplay';

const MessagesDisplay = ({ userMessages }) => {
  return (
    <div className="messages-display">
      {userMessages.map((message, index) => (
        <MessageDisplay key={index} message={message} />
      ))}
    </div>
  );
};

export default MessagesDisplay;
