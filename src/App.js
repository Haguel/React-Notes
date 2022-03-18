import Header from './Components/Header'
import Menu from './Components/Menu'
import Main from './Components/Main'


import './Styles/app.css'

function App() {
  return (
    <>
      <Header />
      <div className='App'>
        <Menu/>
        <Main />
      </div>
    </>
  );
}

export default App;
