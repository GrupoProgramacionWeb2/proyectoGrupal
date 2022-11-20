import { Link } from "react-router-dom"

const ButtonCheckout = (props) =>{
    const styles = {
        button: {
            backgroundColor: 'rgb(194, 91, 233)',
            color: 'white',
            borderRadius: '5px',
            borderStyle: 'none',
            marginLeft: '30px',
            width: '125px',
            height: '30px',
            margin: '19.920px',
            cursor: 'pointer'
        }
    }
    return (
        <Link to="/notfound"><button style={styles.button} {...props}>Checkout</button></Link>
    )
}

export default ButtonCheckout