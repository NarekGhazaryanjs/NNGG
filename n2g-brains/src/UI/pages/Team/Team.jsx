import Imager from "../../../Components/Imager/Imager";
import List from "../../../Components/List/List";
import Listitem from "../../../Components/Listitem/Listitem";
import teamMembers from './TeamData';
import classes from '../../GlobalsCss/Global.module.scss'

const Team = () => {
    let index = 0;
    return (
            <List className={classes['team-list']}>
               {teamMembers.map(teamMember => {
                return (
                    <Listitem className={classes['team-list-items']} key={teamMember.id}>
                        <Imager className={classes['team-member-image']} src={teamMember.src} />
                        {Object.keys(teamMember).map(key => {
                            index++
                            return (
                                key === 'src'  || key === "id" || teamMember[key] === '' ?  null : <span style={{marginTop: '5px'}} key={teamMember['name'] + index}> {key}: {teamMember[key]} </span>
                                
                            )
                        })}
                    </Listitem>
                )
               })}
            </List>
    )
}


export default Team