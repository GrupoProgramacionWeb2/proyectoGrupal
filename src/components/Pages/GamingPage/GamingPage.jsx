import cpuImage from "../../../assets/productos/cpu.jpg";
import ramImage from "../../../assets/productos/ram.png";
import gpuImage from "../../../assets/productos/gpu.jpg";
import fuenteImage from "../../../assets/productos/fuente.jpg";
import caseImage from "../../../assets/productos/case.jpg";
import mbImage from "../../../assets/productos/mb.jpg";
import soImage from "../../../assets/productos/so.png";
import refrigeracionImage from "../../../assets/productos/refrigeracion.jpg";
import CasePC from "../../../assets/productos/CasePC.jpg";

const GamingPage = () => {
    const styles = {
        containerUp: {
            display: 'flex',
            justifyContent: 'space-between',
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
                    <p>Components price: $2322</p>
                    <p>Build price: $99</p>
                    </div>
                </div>
                <div style={styles.containerRight}>
                <div style={styles.box}>
                    <img style={styles.img} src={cpuImage}/>
                    <p>INTEL CORE I7-12700F</p>
                    <p>$359</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={ramImage}/>
                    <p>Corsair RAM 16GB x2 3600hz</p>
                    <p>$160</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={gpuImage}/>
                    <p>Nvidia RTX 4070 msi 12vram</p>
                    <p>$999</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={fuenteImage}/>
                    <p>Gigabyte HW-750 GOLD</p>
                    <p>$125</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={caseImage}/>
                    <p>NZTX GamingCase A2931 RGB</p>
                    <p>$99</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={mbImage}/>
                    <p>Aorus z690 master model</p>
                    <p>$450</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={soImage}/>
                    <p>Windows 10 home</p>
                    <p>$30</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={refrigeracionImage}/>
                    <p>NZTX liquid refrigeration RGB</p>
                    <p>$100</p>
                </div>
                </div>
            </div>
        )
}

export default GamingPage