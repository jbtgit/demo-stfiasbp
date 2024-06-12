import React from 'react';
import ReactDOM from 'react-dom';
import MasterScreen from './components/MasterScreen';
import './styles.css';

const App: React.FC = () => {
    return <MasterScreen />;
};

ReactDOM.render(<App />, document.getElementById('root'));