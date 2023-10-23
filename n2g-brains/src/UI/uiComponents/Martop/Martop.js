import Block from "../../../Components/Block/Block";
import classes from '../../GlobalsCss/Global.module.scss'

const Martop = ({
    children,
}) => {
   return (
     <Block className={classes['martop-container']}>
          {children}
     </Block>
   )
}

export default Martop