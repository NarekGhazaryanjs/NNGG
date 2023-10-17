import Block from "../../../Components/Block/Block";
import Card from "../../../Components/Card/Card";
import List from "../../../Components/List/List";
import Listitem from "../../../Components/Listitem/Listitem";
import classes from '../../GlobalsCss/Global.module.scss';

const About = () => {

   const aboutList = [
    {Address: 'Vagharshyan 21/33'},
    {Phone: '096691949'},
    {email: 'n2g-brains@gmail.com'}
   ]
   
   return (
      <Card >
          <Block>
             <List className={classes['about-list']}>
                {aboutList.map(aboutListItems => {
                  for(let aboutListItem in aboutListItems) {
                    return (
                        <Listitem 
                           className={classes['about-list-items']}
                        >
                           {aboutListItem}: {aboutListItems[aboutListItem]} 
                        </Listitem>
                      )
                  }
                  
                })}
             </List>

             <Block className={classes['about-main-block']}>

             </Block>
          </Block>

      </Card>
   )
}

export default About;