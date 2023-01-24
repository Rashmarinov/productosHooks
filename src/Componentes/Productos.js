import React, { useState, useEffect } from 'react';

function Productos(props) {

    const [contador, setCount] = useState(props.initialNumber);
    const [productos, setProductos] = useState([]);
    const [contadorImagen, setCountImagen] = useState(props.initialNumberImagen);

    const siguiente= ()=>{
        console.log(contador);
        if(contador === productos.length-1) {
            setCount(0);
            setCountImagen(0);
        }else{
            setCount(contador+1);
            setCountImagen(0);
        }
    }

    const anterior= ()=>{
        if(contador === 0){
            setCount(productos.length-1);
            setCountImagen(0);
        }else{
            setCount(contador-1);
            setCountImagen(0);
        }
    }
    
    const cambiarImagen= ()=>{
        if(contadorImagen === productos[contador]?.images.length-1) {
            setCountImagen(0);
        }else{
            setCountImagen(contadorImagen+1);
        }
        
    }

    const fetchApi = ()=>{
        console.log("llamar");
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data =>  {
            setProductos( data.products)})
    }

    useEffect (()=>{
        fetchApi();
    }, [contador]);

    return (<div>
        {
        /* El interrogante mira si existe la variable que queremos recuperar, 
        de esta manera evitamos que salte la excepción */
        }
        {productos[contador]?.title}<br/>
        <img src={productos[contador]?.images[contadorImagen]}></img><br/>
        {productos[contador]?.description}<br/>
        <button onClick={anterior}>Anterior</button>
        <button onClick={siguiente}>Siguiente</button><br></br>
        <button onClick={cambiarImagen}>Cambiar Imagen</button>
    </div>);
}
export default Productos;