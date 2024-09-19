import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Singlepage from './component/singlepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Singlepage />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
};

export default App;