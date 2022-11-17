import ButtonCheckout from "../../Common/Button/Checkout/ButtonCheckout";
import ButtonBack from "../../Common/Button/Back/ButtonBack";
import Header from "../../Home/Header";
import GamingPage from "../../Pages/GamingPage";

const LayoutGaming = () => {
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
                    <h2>Your optimized build!</h2>
                </div>
                <div style={ styles.box }>
                    <ButtonBack/>
                    <ButtonCheckout/>
                </div>
            </div>
            <div style={ styles.container }>
                <GamingPage/>
            </div>
        </div>
    )    
}

export default LayoutGaming