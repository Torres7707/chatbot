import React from 'react';
import Chatbot from 'react-chatbot-kit';
import './App.css';

import ActionProvider from './components/widgets/ActionProvider';
import MessageParser from './components/widgets/MessageParser';
import config from './components/config';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Chatbot
					config={config}
					actionProvider={ActionProvider}
					messageParser={MessageParser}
				/>
			</header>
		</div>
	);
}

export default App;
