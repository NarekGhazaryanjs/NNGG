import { Fragment } from 'react';
import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import Contacts from './UI/pages/Contacts/Contacts';
import Courses from './UI/pages/Courses/Courses';
import Team from './UI/pages/Team/Team';

const App = () => {
  return (
    <Fragment>
        {/* <Contacts /> */}
        {/* <Courses /> */}
        <Team />
    </Fragment>
  )
}

export default App