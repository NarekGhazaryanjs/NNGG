import Block from "../../../Components/Block/Block"
import Imager from "../../../Components/Imager/Imager"
import List from "../../../Components/List/List"
import Listitem from "../../../Components/Listitem/Listitem"
import classes from '../../GlobalsCss/Global.module.scss'
import Footer from "../../uiComponents/Footer/Footer"
import Wrapper from "../../uiComponents/Wrapper/Wrapper"

const Courses = ({
    className,
}) => {

    const coursesArray = [
        {src: `/CoursesImages/frontend.jpg`, name: 'Frontend', details: 'JS, React.js', days: 2, level: "beginner", price: 35_000, duration: "8 months", id: 1 },
        {src: `/CoursesImages/frontend.jpg`, name: 'Frontend', details: 'JS, React.js', days: 3, level: "beginner", price: 50_000, duration: "6 months", id: 2 },
        {src: `/CoursesImages/frontend.jpg`, name: 'SMM', days: 2, level: "beginner", price: 45_000, duration: "2 months", id: 3 },
        {src: `/CoursesImages/frontend.jpg`, name: 'Graphic Design', days: 2, level: "beginner", price: 35_000, duration: "2 months", id: 4 },
        {src: `/CoursesImages/frontend.jpg`, name: 'Backend', details: 'Node.js, Express.js', days: 3, level: "beginner", price: 45_000, duration: "4 months", id: 5 },
        {src: `/CoursesImages/frontend.jpg`, name: 'Full Stack', details:  'React, Node.js / Express.js', days: 3, level: "beginner", price: 55_000, duration: "8 months", id: 6 },
    ]

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