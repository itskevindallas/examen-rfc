import React from 'react';
import ReactDOM from 'react-dom/client';
import RFCForm from './rfc.jsx';  
import './style.css';  

const datosUsuario = {
  paterno: 'Ortega ',
  materno: 'Rico',
  nombre: 'Kevin',
  fechaNacimiento: '2002-11-05'
};

console.log("Objeto datosUsuario:", datosUsuario); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RFCForm 
      paterno={datosUsuario.paterno}
      materno={datosUsuario.materno}
      nombre={datosUsuario.nombre}
      fechaNacimiento={datosUsuario.fechaNacimiento}
    />
  </React.StrictMode>
);




  
  




