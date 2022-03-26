import Header from './Components/Header'
import Menu from './Components/Menu'
import Editor from './Components/Editor'
import EmptyEditor from './Components/EmptyEditor'

import './Styles/app.css'

import {useSelector} from 'react-redux'

function App() {
  const {items} = useSelector((state) => state)

  return (
    <>
      <Header />
      <main className='app'>
        <Menu items = {items}/>
        {
          items.length >= 1 
          ? <Editor items = {items}/>
          : <EmptyEditor />
        }
      </main>
    </>
  );
}

export default App;
