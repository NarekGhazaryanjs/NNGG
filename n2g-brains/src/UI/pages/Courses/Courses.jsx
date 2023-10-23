import { useRef, useState } from "react"
import Block from "../../../Components/Block/Block"
import Imager from "../../../Components/Imager/Imager"
import List from "../../../Components/List/List"
import Listitem from "../../../Components/Listitem/Listitem"
import classes from '../../GlobalsCss/Global.module.scss'
import Wrapper from "../../uiComponents/Wrapper/Wrapper"
import coursesArray from "./CoursesData"

const Courses = () => {
    const [searchName, setSearchName] = useState('');

    const changeSearchName = (event) => {
        setSearchName(event.target.value)
    }

    const filterCoursesByCourseOrLanguageNameHandler = (item) => {
        return item.name.toLowerCase().includes(searchName.toLowerCase()) || item.details.toLowerCase().includes(searchName.toLowerCase())  
    }

    let index = 0

    return (
        <Wrapper>
            <Block className={classes['courses-search-container']}>
                <label> search courses by name or languages </label>
                <input onChange={changeSearchName}  type="text" />
            </Block>
           
            <Block className={classes['courses-container']}>
                <List className={classes['courses-container-list']}>
                    {coursesArray.filter(filterCoursesByCourseOrLanguageNameHandler).map(course => {
                        return (
                            <Listitem className={classes['courses-container-list-item']} key={course.id}>
                                <Imager className={classes['courses-image']} src={course.src} />
                                {Object.keys(course).map(el => {
                                   index++
                                   return (
                                     el === 'src'  || el === 'id' || course[el] === '' ?  null : <span key={course['name'] + index}> {el}: {course[el]} </span>
                                   )
                                })}
                            </Listitem>
                        )
                    })}
                </List>
            </Block>
        </Wrapper>
    )
}

export default Courses