import Imager from "../../../Components/Imager/Imager";
import List from "../../../Components/List/List";
import Listitem from "../../../Components/Listitem/Listitem";
import teamMembers from './TeamData';
import classes from '../../GlobalsCss/Global.module.scss';
import UniqueKeys from "../../../Helpers/UniqueKeys/UniqueKeys";

const Team = () => {
    return (
            <List className={classes['team-list']}>
               {teamMembers.map(teamMember => {
                return (
                    <Listitem className={classes['team-list-items']} key={teamMember.id}>
                        <Imager className={classes['team-member-image']} src={teamMember.src} />
                        {Object.keys(teamMember).map((key, index) => {
                            const uniqueKey = UniqueKeys()
                            return (
                                key === 'src'  || key === "id" || teamMember[key] === '' ?  null : <span style={{marginTop: '5px'}} key={uniqueKey}> {key}: {teamMember[key]} </span>
                            )
                        })}
                    </Listitem>
                )
               })}
            </List>
    )
}


export default Team