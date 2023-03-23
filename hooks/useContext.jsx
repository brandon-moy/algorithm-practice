// Context - share data without passing props
import { React, createContext, useContext } from 'react';

const moods = {
  happy: '^u^',
  sad: 'TnT'
};

const MoodContext = createContext();

// eslint-disable-next-line
function App(props) {
  return (
    // scopes the happy mood from the object
    // children can inherit the context without passing through props
    <MoodContext.Provider value={moods.happy}>
      <MoodEmoji />
    </MoodContext.Provider>
  );
}

// allows us to access/consume the context from the provider
// easier to read through provider rather than passing props
function MoodEmoji() {
  const mood = useContext(MoodContext);

  return <p>{ mood }</p>;
}
