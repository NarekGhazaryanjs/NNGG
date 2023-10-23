import Block from "../../../Components/Block/Block";
import Imager from "../../../Components/Imager/Imager";
import List from "../../../Components/List/List";
import Listitem from "../../../Components/Listitem/Listitem";
import members from './Members';
import classes from '../../GlobalsCss/Global.module.scss'

const Team = ({

}) => {
    return (
            <List className={classes['team-list']}>
               {members.map(member => {
                return (
                    <Listitem className={classes['team-list-items']} key={member.id}>
                        <Imager className={classes['team-member-image']} src={member.src} />
                        <br />
                        <span> name: {member.name} </span>
                        <br />
                        <span> surname: {member.surname} </span>
                        <br />
                        <span> name: {member.position} </span>
                    </Listitem>
                )
               })}
            </List>
    )
}


export default Team