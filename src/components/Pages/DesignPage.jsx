import cpuImage from "../../assets/productos/cpu.jpg";
import ramImage from "../../assets/productos/ram.png";
import gpuImage from "../../assets/productos/gpu.jpg";
import fuenteImage from "../../assets/productos/fuente.jpg";
import caseImage from "../../assets/productos/case.jpg";
import mbImage from "../../assets/productos/mb.jpg";
import soImage from "../../assets/productos/so.png";
import refrigeracionImage from "../../assets/productos/refrigeracion.jpg";
import CasePC from "../../assets/productos/CasePCDesign.jpg";

const DesignPage = () => {
    const styles = {
        containerUp: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        containerLeft: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        containerRight: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            justifyContent: 'space-between'
        },
        box: {
            backgroundColor: 'rgb(90, 105, 120)',
            justifyContent: 'space-between',
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            padding: '5px',
            textAlign: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            margin: '15px 10px 15px 10px',
            height: '50px'
        },
        img: {
            width: '50px',
            height: '50px'
        },
        imgCase: {
            width: '300px',
            height: '300px',
            padding: '20px'
        },
        detalles: {
            backgroundColor: 'rgb(90, 105, 120)',
            borderRadius: '5px',
            color: 'white',
            padding: '10px'
        }
    }
        return (
            <div style={styles.containerUp}>
                <div style={styles.containerLeft}>
                    <img style={styles.imgCase} src={CasePC} />
                    <div style={styles.detalles}>
                    <p>Components price: $2755.50</p>
                    <p>Build price: $99</p>
                    </div>
                </div>
                <div style={styles.containerRight}>
                <div style={styles.box}>
                    <img style={styles.img} src={cpuImage}/>
                    <p>AMD Ryzen 7950x</p>
                    <p>$599</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={ramImage}/>
                    <p>Gigabyte 32gb x4 3600hz</p>
                    <p>$280</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={gpuImage}/>
                    <p>Nvidia Quadro</p>
                    <p>$800</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={fuenteImage}/>
                    <p>Corsair CX1200w</p>
                    <p>$450</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={caseImage}/>
                    <p>Desing PC case</p>
                    <p>$50</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={mbImage}/>
                    <p>ASUS x570 AM5</p>
                    <p>$450</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={soImage}/>
                    <p>Windows 11 pro</p>
                    <p>$29.5</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={refrigeracionImage}/>
                    <p>Desing refrigeration</p>
                    <p>$97</p>
                </div>
                </div>
            </div>
        )
}

export default DesignPage