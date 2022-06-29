import { useState } from 'react';
import './App.css';
//import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
*/
function App() {

  const [alert,setAlert]=useState(null);
  const [mode,setmode]=useState('light');//whther dark mode is enabled or not


  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const sbackground=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#a350a3';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
    }

  }
  const background=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#036a03';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
    }

  }
  const toggleMode=()=>{
      if(mode === 'light'){
        setmode('dark');
        document.body.style.backgroundColor='#09094e';
        showAlert('dark mode is enebled','success')
        document.title='HOUSING-darkmode'
        /*setInterval(() => {
          document.title='UTILITIES-great'   
        }, 2000);
        setInterval(() => {
          document.title='UTILITIES-amazing '   
        }, 1500);*/
      }
      else{
        setmode('light');
        document.body.style.backgroundColor='white';
        showAlert('light mode is enebled','success')
        document.title='HOUSING-light mode'
        
      }
    }


  return (
    <>
    {/*<Router>*/}
    <Navbar title='housing' abouttext='about-us' /*2*/mode={mode} toggleMode={toggleMode}  background={background} sbackground={sbackground} />
    <Alert alert={alert}/>
    <div className='container my-3'>
      <TextForm heading='text here for analyse' showAlert={showAlert} mode={mode}/>
    {/*<Switch>
          <Route exact path="/about">
            <About />          
          </Route>

  <Route exact path="/">
  </Switch>*/}
    </div>
    {/*</Router>*/}
    </>

  );
}


export default App;
