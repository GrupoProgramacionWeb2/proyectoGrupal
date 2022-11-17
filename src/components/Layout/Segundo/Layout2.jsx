import ButtonBackHome from "../../Common/Button/Back/ButtonBackHome";
import ButtonNext from "../../Common/Button/Next/ButtonNext";
import Header from "../../Home/Header";
import Opciones from "../../Pages/Opciones/Opciones";

const Layout2 = () =>{
    const styles = {
        layout: {
            backgroundColor: '#fff',
            color: '#0A283E',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
        },
        container: {
            width: '1100px'
        },
        div: {
            display: 'flex',
            flexDirection: 'row'        
        },
        box: {
            padding: '1px 100px 1px 100px'
        }
    }
    return (
        <div style={ styles.layout }>
            <Header/>
            <div style={ styles.div }>
                <div style={ styles.box }>
                    <h2>What do you need?</h2>
                </div>
                <div style={ styles.box }>
                    <ButtonBackHome/>
                    <ButtonNext/>
                </div>
            </div>
            <div style={ styles.container }>
                <Opciones/>
            </div>
        </div>
    )
}

export default Layout2