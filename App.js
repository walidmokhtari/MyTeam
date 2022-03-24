import React from 'react';
import { AuthContextProvider } from './src/configs/context';
import Login from './src/screens/login';
import Home from './src/screens/home';
import Routes from './src/configs/routes';

const App = (props) => {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
    
  );
}

export default App;

