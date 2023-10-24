import { useRef, useState } from "react"
import Block from "../../../Components/Block/Block"
import Imager from "../../../Components/Imager/Imager"
import List from "../../../Components/List/List"
import Listitem from "../../../Components/Listitem/Listitem"
import classes from '../../GlobalsCss/Global.module.scss'
import Wrapper from "../../uiComponents/Wrapper/Wrapper"
import coursesArray from "./CoursesData"
import UniqueKeys from "../../../Helpers/UniqueKeys/UniqueKeys"

const Courses = () => {
    const [searchName, setSearchName] = useState('');

    const changeSearchName = (event) => {
        setSearchName(event.target.value)
    }

    const filterCoursesByCourseOrLanguageNameHandler = (item) => {
        return item.name.toLowerCase().includes(searchName.toLowerCase()) || item.details.toLowerCase().includes(searchName.toLowerCase())
    }

   
    return (
        <Wrapper>
            <Block className={classes['courses-search-container']}>
                <form>
                    <label htmlFor="search"> search courses by name or languages </label>
                    <br />
                    <input id="search" onChange={changeSearchName} type="text" />
                </form>

            </Block>

            <Block className={classes['courses-container']}>
                <List className={classes['courses-container-list']}>
                    {coursesArray.filter(filterCoursesByCourseOrLanguageNameHandler).map(course => {
                        return (
                            <Listitem className={classes['courses-container-list-item']} key={course.id}>
                                <Imager width='311px' height='auto' className={classes['courses-image']} src={course.src} />
                                {Object.keys(course).map((el) => {
                                    const uniqueKey = UniqueKeys()
                                    return (
                                        el === 'src' || el === 'id' || course[el] === '' ? null : <span key={uniqueKey}> {el}: {course[el]} </span>
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