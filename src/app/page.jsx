
import Quadrado from "../../components/Quadrado";
import styles from "../../styles/Quebra.module.css"

export default function Home() {

  const constador = [];
    for (let i = 1; i < 9; i++) {
      constador.push(i);
    } 
  
  return (
    <>
    <h1 className={styles.quebra2}> Tabuleiro De Xadrez</h1>
    <div>
      {
        constador.map((item, index) => (
          <div key={index}>
            { item % 2 === 0 ? 
                <div className={styles.quebra} >
                {
                constador.map((item, index) => (
                <div key={index}>
                  { item % 2 === 0 ? 
                      <Quadrado />
                  :   <Quadrado color/>
                  }
                  </div>       
                ))}
              </div>
            :   <div className={styles.quebra} >
            {
            constador.map((item, index) => (
            <div key={index}>
              { item % 2 === 0 ? 
                  <Quadrado color/>
              :   <Quadrado />
              }
              </div>       
            ))}
          </div>
            }
            </div>       
          ))
      }
      </div>
    </>
  );
}