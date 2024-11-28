import React, { useState, useEffect } from 'react';

const RFCForm = ({ paterno, materno, nombre, fechaNacimiento }) => {
  console.log("Props recibidos en RFCForm:", { paterno, materno, nombre, fechaNacimiento }); 

  const [rfc, setRfc] = useState('');

 
  const buscaVocal = (cadena) => {
    for (let i = 0; i < cadena.length; i++) {
      if ('AEIOU'.includes(cadena[i])) {
        return cadena[i];
      }
    }
    return '';  
  };


  const calcularRfc = () => {
    let paternoUpper = paterno.toUpperCase();
    let maternoUpper = materno.toUpperCase();
    let nombreUpper = nombre.toUpperCase();
    let fechaNacimientoArray = fechaNacimiento.split('-');

    let anio = fechaNacimientoArray[0].substring(2, 4);
    let mes = fechaNacimientoArray[1];
    let dia = fechaNacimientoArray[2];

    let letra1 = paternoUpper[0];
    let letra2 = buscaVocal(paternoUpper);
    let letra3 = maternoUpper[0];
    let letra4 = nombreUpper[0];
    let fechaRfc = anio + mes + dia;
    let nuevoRfc = letra1 + letra2 + letra3 + letra4 + fechaRfc;

    setRfc(nuevoRfc);
  };

  useEffect(() => {
    calcularRfc();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Generador de RFC</h1>
      <form onSubmit={(e) => { e.preventDefault(); calcularRfc(); }}>
        <div className="mb-3">
          <label className="form-label">Apellido Paterno:</label>
          <input type="text" className="form-control" value={paterno} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido Materno:</label>
          <input type="text" className="form-control" value={materno} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input type="text" className="form-control" value={nombre} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de Nacimiento:</label>
          <input type="date" className="form-control" value={fechaNacimiento} readOnly />
        </div>
        <button type="submit" className="btn btn-primary w-100">Generar RFC</button>
      </form>

      {rfc && (
        <div className="mt-3">
          <h3>RFC Generado:</h3>
          <input type="text" className="form-control" value={rfc} readOnly />
        </div>
      )}
    </div>
  );
};

export default RFCForm;

