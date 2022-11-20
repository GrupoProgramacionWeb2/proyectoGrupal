import cpuImage from "../../assets/productos/cpu.jpg";
import ramImage from "../../assets/productos/ram.png";
import gpuImage from "../../assets/productos/gpu.jpg";
import fuenteImage from "../../assets/productos/fuente.jpg";
import caseImage from "../../assets/productos/case.jpg";
import mbImage from "../../assets/productos/mb.jpg";
import soImage from "../../assets/productos/so.png";
import refrigeracionImage from "../../assets/productos/refrigeracion.jpg";
import CasePC from "../../assets/productos/CasePCOffice.jpg";

const OfficePage = () => {
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
                    <p>Components price: $505</p>
                    <p>Build price: $99</p>
                    </div>
                </div>
                <div style={styles.containerRight}>
                <div style={styles.box}>
                    <img style={styles.img} src={cpuImage}/>
                    <p>AMD Ryzen 2400g</p>
                    <p>$50</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={ramImage}/>
                    <p>Gigabyte 8gb x1 2500hz</p>
                    <p>$25</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={gpuImage}/>
                    <p>Nvidia gtx980 4vram</p>
                    <p>$250</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={fuenteImage}/>
                    <p>Gigabyte 250hd</p>
                    <p>$45</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={caseImage}/>
                    <p>Office Case</p>
                    <p>$25</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={mbImage}/>
                    <p>ASUS x270 AM4</p>
                    <p>$50</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={soImage}/>
                    <p>Windows XP</p>
                    <p>$10</p>
                </div>
                <div style={styles.box}>
                    <img style={styles.img} src={refrigeracionImage}/>
                    <p>AirGeneric</p>
                    <p>$50</p>
                </div>
                </div>
            </div>
        )
    
}

export default OfficePage