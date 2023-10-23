import Imager from "../../../Components/Imager/Imager";
import List from "../../../Components/List/List";
import Listitem from "../../../Components/Listitem/Listitem";
import teamMembers from './TeamData';
import classes from '../../GlobalsCss/Global.module.scss'

const Team = () => {
    return (
            <List className={classes['team-list']}>
               {teamMembers.map(teamMember => {
                return (
                    <Listitem className={classes['team-list-items']} key={teamMember.id}>
                        <Imager className={classes['team-member-image']} src={teamMember.src} />
                        <br />
                        <span> name: {teamMember.name} </span>
                        <br />
                        <span> surname: {teamMember.surname} </span>
                        <br />
                        <span> name: {teamMember.position} </span>
                    </Listitem>
                )
               })}
            </List>
    )
}


export default Team