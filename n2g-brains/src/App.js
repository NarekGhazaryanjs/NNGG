import { Fragment } from 'react';
import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import Contacts from './UI/pages/Contacts/Contacts';

const App = () => {
  return (
    <Fragment>
        <Contacts />
    </Fragment>
  )
}

export default App