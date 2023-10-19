import Block from "../../../Components/Block/Block"
import List from "../../../Components/List/List"

const Courses = ({
  className,
}) => {

    const coursesArray = [
        {name: 'Frontend', days: 2, level: "beginner", price: 35_000},
        {name: 'Frontend', days: 3, level: "beginner", price: 50_000},
    ]
    return (
        <Block>
            <List>
             
            </List>
        </Block>
    )
}

export default Courses