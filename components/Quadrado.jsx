import styles from "../styles/Quadrado.module.css"

export default function Quadrado(prop){
    return(
        <div 
        className={styles.quadrado}
        style={{
            backgroundColor: prop.color ? "#000" : "#fff" 
        }}
        > 
        </div>
    )
}