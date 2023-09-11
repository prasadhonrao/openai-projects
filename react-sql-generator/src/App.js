import { useState } from 'react';
import CodeDisplay from './components/CodeDisplay';
import MessagesDisplay from './components/MessagesDisplay';

function App() {
  const [chat, setChat] = useState([]);
  const [value, setValue] = useState('');

  const getQuery = async () => {
    try {
      const response = await fetch('http://localhost:6001/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: value }),
      });
      const data = await response.json();
      console.log(data);

      const userMessage = {
        role: 'user',
        content: value,
      };

      setChat((prevChat) => [...prevChat, data, userMessage]);
    } catch (error) {
      console.error(error);
    }

    console.log(chat);
  };

  const filteredUserMessages = chat.filter(
    (message) => message.role === 'user'
  );

  const latestCode = chat
    .filter((message) => message.role === 'assistant')
    .pop();

  const clearChat = () => {
    setChat([]);
    setValue('');
  };

  return (
    <div className="app">
      <MessagesDisplay userMessages={filteredUserMessages} />
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <CodeDisplay text={latestCode?.content || ''} />
      <div className="button-container">
        <button id="get-sql" onClick={getQuery}>
          Get SQL
        </button>
        <button id="clear-chat" onClick={clearChat}>
          Clear Chat{' '}
        </button>
      </div>
    </div>
  );
}

export default App;
