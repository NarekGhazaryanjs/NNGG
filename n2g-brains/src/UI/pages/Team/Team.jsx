import Block from "../../../Components/Block/Block";
import Imager from "../../../Components/Imager/Imager";
import List from "../../../Components/List/List";
import Listitem from "../../../Components/Listitem/Listitem";
import members from './Members'

const Team = ({

}) => {


    return (
        <Block>
            <List>
               {members.map(member => {
                return (
                    <Listitem key={member.id}>
                        <Imager src={member.src} />
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
        </Block>
    )
}


export default Team