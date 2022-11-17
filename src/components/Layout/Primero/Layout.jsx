import ButtonCheckout from "../../Common/Button/Checkout/ButtonCheckout";
import Elementos from "../../Home/Elementos";
import Header from "../../Home/Header";

const Layout = () =>{
    const styles = {
        layout: {
            backgroundColor: '#fff',
            color: '#0A283E',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
        },
        container: {
            width: '100%'
        },
        div: {
            display: 'flex',
            flexDirection: 'row'        
        },
        box: {
            padding: '1px 150px 1px 150px'
        }
    }
    return (
        <div style={ styles.layout }>
            <Header/>
            <div style={ styles.div }>
                <div style={ styles.box }>
                    <h2>Shopping car items</h2>
                </div>
                <div style={ styles.box }>
                    <ButtonCheckout/>
                </div>
            </div>
            <div style={ styles.container }>
                <Elementos/>
            </div>
        </div>
    )
}

export default Layout