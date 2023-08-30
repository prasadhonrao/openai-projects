import { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState('');
  const [value, setValue] = useState('');
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);

  const createNewChat = () => {
    setCurrentTitle(null);
    setMessage(null);
    setValue('');
  };

  const getMessages = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(
        'http://localhost:6001/completions',
        options
      );
      const data = await response.json();
      setMessage(data?.choices[0].message);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }

    if (currentTitle && value && message) {
      setPreviousChats((previousChats) => [
        ...previousChats,
        {
          title: currentTitle,
          role: 'user',
          content: value,
        },
        {
          title: currentTitle,
          role: message.role,
          content: message.content,
        },
      ]);
      setCurrentTitle(value);
      setValue('');
    }
  }, [message, currentTitle]);

  const currentChat = previousChats.filter(
    (chat) => chat.title === currentTitle
  );

  const uniqueTitles = Array.from(
    new Set(previousChats.map((previousChats) => previousChats.title))
  );

  const handleClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle);
    setMessage(null);
    setValue('');
  };

  console.log(previousChats);

  return (
    <div className="app">
      <section className="sidebar">
        <button onClick={createNewChat}>+ New Chat</button>
        <ul className="history">
          {uniqueTitles?.map((uniqueTitle, index) => (
            <li key={index} onClick={() => handleClick(uniqueTitle)}>
              {uniqueTitle}
            </li>
          ))}
        </ul>
        <nav>
          <p>Made by Prasad</p>
        </nav>
      </section>
      <section className="main">
        {!currentTitle && <h1>React ChatGPT</h1>}
        <ul className="feed">
          {currentChat?.map((chat, index) => (
            <li key={index} className={chat.role}>
              <p className="role">{chat.role}</p>
              <p>{chat.content}</p>
            </li>
          ))}
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <div id="submit" onClick={getMessages}>
              ➢
            </div>
          </div>
          <p className="info">ChatGPT built using React and Node</p>
        </div>
      </section>
    </div>
  );
};

export default App;
