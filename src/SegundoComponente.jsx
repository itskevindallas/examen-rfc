
const nombre = 'Kevin';
const arr1 = [1,2,3,4];
const obj1 = {
    nombre : "Kevin"
};

const sumar = (a,b) => {
    return a + b
}

export const SegundoComponente = () => {
  return (
    <>
    <h2>Este es el segundo componente</h2>
    <h3>Tu nombre es {nombre}</h3>
    <h3>El arreglo es {arr1}</h3>
    <h3>El objeto es {obj1.nombre}</h3>
    <h3>El objeto en json</h3>
    <code>{JSON.stringify(obj1)}</code>
    <p>
        El resultado de la suma es { sumar(8,9) }
    </p>
    <p>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Architecto ratione magnam dolores deleniti. Illo possimus, 
      pariatur delectus suscipit nobis accusantium vero provident maxime 
      aliquam itaque temporibus aliquid dolorem sit cupiditate.


    </p>
    
    </>
    
  )
}

