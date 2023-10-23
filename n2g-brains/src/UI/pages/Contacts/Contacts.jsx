import Block from "../../../Components/Block/Block";
import Card from "../../../Components/Card/Card";
import List from "../../../Components/List/List";
import Listitem from "../../../Components/Listitem/Listitem";
import classes from '../../GlobalsCss/Global.module.scss';
import contactsdata from "./ContactsData";

const Contacts = () => {
    return (
        <Card >
            <Block>
                <List className={classes['about-list']}>
                    {contactsdata.map(contacts => {
                        for (let contactItem in contacts) {
                            return (
                                <Listitem
                                    key={Math.random()}
                                    className={classes['about-list-items']}
                                >
                                    {contactItem}: {contacts[contactItem]}
                                </Listitem>
                            )
                        }

                    })}
                </List>
            </Block>

            <Block className={classes['iframe-map']}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.1060128162435!2d44.491121547876844!3d40.20670469814698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd44816dcbfb%3A0xb2313a40ba08a40f!2s33%20Vagharsh%20Vagharshyan%20St%2C%20Yerevan!5e0!3m2!1sru!2sam!4v1697730268508!5m2!1sru!2sam" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Block>



        </Card>
    )
}

export default Contacts;