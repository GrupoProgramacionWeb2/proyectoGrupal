import { Link } from "react-router-dom"

const ButtonBack = (props) => {
    const styles = {
        button: {
            backgroundColor: 'whitesmoke',
            color: 'black',
            border: 'solid',
            borderRadius: '1px',
            borderStyle: 'none',
            marginLeft: '30px',
            width: '125px',
            height: '30px',
            margin: '19.920px',
            cursor: 'pointer'
        }
    }
    return (
        <Link to="/opciones"><button style={styles.button} {...props}>Back</button></Link>
    )
}

export default ButtonBack