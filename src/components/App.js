import React from 'react';
import AppRouter from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <AppRouter />;
}

export default App;
