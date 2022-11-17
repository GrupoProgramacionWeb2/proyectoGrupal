import logo from '../../../assets/imgnav/logo.jpg';
import lupa from '../../../assets/imgnav/lupa.png';
import perfil from '../../../assets/imgnav/perfil.png';
import carrito from '../../../assets/imgnav/carrito.png';

const Header = () =>{
const styles = {
    header: {
        backgroundColor: 'rgb(52, 63, 75)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        weight: '100%',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 100%',
        boxShadow: '0 2px 3px rgb(0, 0, 0, 0.1)'
    },
    div: {
        display: 'flex',
    },
    img: {
        width: '50px',
        height: '50px'
    },
    ul: {
        textAlign: 'center',
        liststylestype: 'none',
    },
    li: {
        display: 'inline',
        padding: '10px 15px 10px 15px'
    },
    a:{
        textDecoration: 'none',
        color: 'white'
    }
}
    return (
        <header style={ styles.header }>
            <div>
                <img style={ styles.img } src={ logo }/>
            </div>
            <nav>
                <ul style={ styles.ul }>
                    <li style={ styles.li }><a style={ styles.a } href="/home">Home</a></li>
                    <li style={ styles.li }><a style={ styles.a } href="/about">About</a></li>
                    <li style={ styles.li }><a style={ styles.a } href="/suport">Suport</a></li>
                    <li style={ styles.li }><a style={ styles.a } href="/reviews">Reviews</a></li>
                    <li style={ styles.li }><a style={ styles.a } href="/ranking">Ranking</a></li>
                </ul>
            </nav>
            <div style={ styles.div }>
                <img style={ styles.img } src={ lupa }/>
                <img style={ styles.img } src={ perfil }/>
                <img style={ styles.img } src={ carrito }/>
            </div>
        </header>
    )
    
}

export default Header