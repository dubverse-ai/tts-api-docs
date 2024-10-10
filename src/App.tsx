import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SpeakerGrid from './components/SpeakerGrid';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Dubverse TTS Models</h1>
        <SpeakerGrid />
      </div>
    </Provider>
  );
};

export default App;