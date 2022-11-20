const NotFound = () => {
    const styles = {
        error: {
            textAlign: 'center',
            AlignItems: 'center'
        },
        box: {
            backgroundColor: 'whitesmoke'
        }
    }
    
    return (
        <div style={styles.box}>
            <h1 style={styles.error}>Página no encontrada 404</h1>
        </div>
    )
}

export default NotFound