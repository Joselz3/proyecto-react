import { ProductContext } from "./ProductCard"
import styles from "../styles/styles.module.css";
import { useCallback, useContext } from "react";

export interface Props{
  className?:string;
  style?:React.CSSProperties; 
}

export const ProductButtons = ({className,style}:Props) => {

  //TODO:maxCount 
  const {increaseBy,counter,maxCount} = useContext(ProductContext)

   //TODO:isMaxReached = useCallback, dependencias [count, maxCount] 
   // True si count == maxCount
   // False si no lo es

   const isMaxReach = useCallback(
     () =>!!maxCount &&counter==maxCount,
     [counter, maxCount],
   )
   

  return (
    <div 
      style={style} 
      className={`${styles.buttonsContainer} ${className}`}
    >
      <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={`${styles.buttonAdd} ${isMaxReach() && styles.disabled}`} onClick={()=>increaseBy(+1)} >+</button>
    </div>
  )
}
