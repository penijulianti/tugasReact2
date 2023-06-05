
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Login from './components/Login'

const isLogged = true
function App() {
 
  return (
    // <div style={{
    //   width: "100vw",
      
    // }}>
    <>
    <Header/>
      {/* <Login/>       */}
      {/* Kondisi */}
      {isLogged ? <Dashboard/> : <Login/>}
    </>
      
    // </div>
      
    
  )
}

export default App
