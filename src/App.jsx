import React from 'react';
// Aquí agregamos la extensión .jsx al final de la ruta
import STVDashboard from './components/STVDashboard.jsx';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <STVDashboard />
    </div>
  );
}

export default App;