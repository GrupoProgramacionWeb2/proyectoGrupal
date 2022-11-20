import ButtonCheckout from "../../Common/Button/ButtonCheckout";
import ButtonBack from "../../Common/Button/ButtonBack";
import Header from "../../Home/Header";
import CodingPage from "../../Pages/CodingPage";

const LayoutCoding = () => {
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
                <CodingPage/>
            </div>
        </div>
    )    
}

export default LayoutCoding