import "./App.css";
import Info from "./info.js";
//props types
import { PropTypes } from "prop-types";

// -------------use state
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <p>Hello world !!!</p>
      <Info text="Inventory" />
      {/* if you want to call the funct component Info <Info />*/}
      {/* <Info /> */}
      {/* <Additem /> */}
      {/* <Additem text="first props" number={2} />
      <Additem text="second props" /> */}

      {/* --------- states-------- */}
      <ButtonState />
    </div>
  ); //component(1 st way to create a component(jsx))
}

function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  const updatetitleclicked = () => {
    setTitle("now we have the title");
  };
  const updatecounterclicked = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <Data title={title} count={count} />
      <button onClick={updatetitleclicked}>Update title</button>
      <button onClick={updatecounterclicked}>Update counte</button>
    </div>
  );
}

function Data(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Count: {props.count}</p>
    </div>
  );
}

// //we accesse to props like a object
// function Additem(props) {
//   return (
//     <div>
//       <form>
//         <label for="text-form"> Type your shits right here</label>
//         <input type="text" value={props.text} id="text-form" />
//         <p>{props.number}</p>
//       </form>
//     </div>
//   );
// }
// //default props
// Additem.defaultProps = {
//   number: 0,
//   text: "default",
// };

// //props types
// Additem.propTypes = {
//   number: PropTypes.number,
//   text: PropTypes.string,
// };
export default App;
