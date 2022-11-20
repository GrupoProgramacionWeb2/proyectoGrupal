import gaming from '../../assets/categorias/codigo.JPG';
import desing from '../../assets/categorias/diseno.JPG';
import coding from '../../assets/categorias/codigo.JPG';
import rendering from '../../assets/categorias/renderizacion.JPG';
import office from '../../assets/categorias/personas.JPG';
import other from '../../assets/categorias/otros.JPG';


const Opciones = () => {
    const styles = {
        container: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            justifyContent: 'space-between'
        },
        box: {
            backgroundColor: 'rgb(90, 105, 120)',
            padding: '10px',
            textAlign: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            margin: '15px 30px 15px 30px',
            height: '120px'
        },
        img: {
            width: '100px',
            height: '75px'
        },
        a: {
            textDecoration: 'none',
            color: 'white'
        }
    }
    const datos = {
        categorias: [
            { id: 1, name: "Gaming", path: 'opciones/gaming', img: gaming },
            { id: 2, name: "Design", path: 'opciones/design', img: desing },
            { id: 3, name: "Coding", path: 'opciones/coding', img: coding },
            { id: 4, name: "Rendering", path: 'opciones/rendering', img: rendering },
            { id: 5, name: "Office", path: 'opciones/office', img: office },
            { id: 6, name: "Other", path: 'opciones/other', img: other },
        ]
    }
    return (
        <div style={styles.container}>
            { datos.categorias.map((item) => (
                <div style={styles.box}>
                <img style={styles.img} alt={item.name} src={item.img}/>
                <h3><a style={styles.a} href={item.path}>{item.name}</a></h3>
            </div>
            ))}
        </div>
    )

}

export default Opciones