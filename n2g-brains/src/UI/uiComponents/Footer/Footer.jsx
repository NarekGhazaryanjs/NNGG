import Block from "../../../Components/Block/Block";
import classes from '../../GlobalsCss/Global.module.scss'

const Footer = ()  => {
    return (
        <Block className={classes['footer']}>
           <p> 
              created by N2G Brains
           </p>
        </Block>
    )
}

export default Footer