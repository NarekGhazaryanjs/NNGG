import { Fragment } from 'react';
import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import Contacts from './UI/pages/Contacts/Contacts';
import Courses from './UI/pages/Courses/Courses';

const App = () => {
  return (
    <Fragment>
        {/* <Contacts /> */}
        <Courses />
    </Fragment>
  )
}

export default App