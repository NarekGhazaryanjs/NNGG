import Block from "../../../Components/Block/Block"
import Imager from "../../../Components/Imager/Imager"
import List from "../../../Components/List/List"
import Listitem from "../../../Components/Listitem/Listitem"
import classes from '../../GlobalsCss/Global.module.scss'
import Wrapper from "../../uiComponents/Wrapper/Wrapper"
import coursesArray from "./CoursesData"

const Courses = () => {
    return (
        <Wrapper>
            <Block className={classes['courses-container']}>
                <List className={classes['courses-container-list']}>
                    {coursesArray.map(course => {
                        return (
                            <Listitem className={classes['courses-container-list-item']} key={course.id}>
                                <Imager className={classes['courses-image']} src={course.src} />
                                <span> name: {course.name} </span>
                                {course.details ? <span> {course.details} </span> : null }
                                <span> days: {course.days} </span>
                                <span> level: {course.level} </span>
                                <span> price: {course.price} </span>
                                <span> duration: {course.duration} </span>
                            </Listitem>
                        )
                    })}
                </List>
            </Block>
        </Wrapper>
    )
}

export default Courses