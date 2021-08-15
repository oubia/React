import './App.css';
import Info from "./info.js"
function App() {
  return (
    <div className="App">
      <p>Hello world !!!</p>
      <Info></Info> 
      {/* if you want to call the funct component Info <Info />*/}
      {/* <Info /> */}
      <Additem />
    </div>
  );//component(1 st way to create a component(jsx))
}



function Additem(){
  const value ="I'm a hero"
  return (
    <div>
      
        <label for='text-form'> Type your shits right here</label>
        <form>
        <input type='text' value={value} id='text-form' />
      </form>
    </div>
  )
}
export default App;
