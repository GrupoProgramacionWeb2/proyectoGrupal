import teclado from "../../assets/productos/teclado.jpg";
import cpu from "../../assets/productos/cpu.jpg";
import rtx3070 from "../../assets/productos/rtx3070.png";
import nvmem2 from "../../assets/productos/nvmem2.jpg";
import gabinete from "../../assets/productos/gabinete.jpg";
import servicio from "../../assets/productos/servicio.jpg";
import React, { useState } from "react";


const Elementos = () =>{
    const styles = {
        container: {
            textAlign: 'center',
            padding: '15px'
        },
        producto: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            border: 'solid 1px #eee',
            boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
            width: '850px',
            padding: '20px 25px',
            margin: '0px auto',
            borderRadius: '5px',
        },
        img: {
            width: '70px',
            height: '70px'
        }
    }

    const [ elementos, setElementos  ] = useState([
        { id: 1, name: "Keyboard & mouse bundle", price: 39, img: teclado },
        { id: 2, name: "INTEL CORE I7-12700F 12-CORE", price: 359, img: cpu },
        { id: 3, name: "NVIDIA GEFORCE RTX 3070 8GB (VR READY)", price: 679, img: rtx3070 },
        { id: 4, name: "1TB NVME M.2", price: 99, img: nvmem2 },
        { id: 5, name: "COOLER MASTER TD500 RGB", price: 99, img: gabinete },
        { id: 6, name: "BUILD + SETUP + TESTING + WARRANTY", price: 99, img: servicio },
    ])

    const eliminarProducto = (id) => {
        const nuevosElementos = elementos.filter((item) => item.id !== id )
        setElementos(nuevosElementos)
        console.log(nuevosElementos)
    }

    return (
        <div style={styles.container}>
            { elementos.map((item) => (
                <div style={styles.producto} key={item.id}>
                    <img style={styles.img} alt={item.name} src={item.img}/>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    )
}

export default Elementos