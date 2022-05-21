import React from 'react'
import {useSelector} from 'react-redux'

import Header from './Components/Header'
import Menu from './Components/Menu'
import Editor from './Components/Editor'
import EmptyEditor from './Components/EmptyEditor'
import NotSelectedEditor from './Components/NotSelectedEditor'


import './Styles/app.css'

function App() {
  const {items, isSelectedItem} = useSelector((state) => state)

  return (
    <>
      <Header />
      <main className='app'>
        <Menu items = {items}/>
        {
          items.length >= 1 
          ? (
            isSelectedItem 
            ? <Editor items = {items}/>
            : <NotSelectedEditor />
          ) 
          : <EmptyEditor />
        }
      </main>
    </>
  );
}

export default App;
