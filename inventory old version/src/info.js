// class base components
import React from "react";
//props type
import { PropTypes } from "prop-types";
class Info extends React.Component {
  // to make a defualt values to props inside the class base we have to
  //create a constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    //bind is for definding the function into you class for using it after that
    //and to hava access to this keyword !!!!
    this.funcBottonPressed = this.funcBottonPressed.bind(this);
  }
  funcBottonPressed() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    //-----state============
    return (
      <div>
        <p>Coount :{this.state.count}</p>
        <button onClick={this.funcBottonPressed}>click me !</button>
      </div>
    );

    // const title = this.props.text;
    // const showTitle = true;
    // if (showTitle) {
    //   return (
    //     <div>
    //       {/* if you want to print a js variable */}
    //       <h1> {showTitle ? title : "no title"} inside the class base</h1>
    //       {/* check if title is true else show no title */}
    //       <p>paragraf</p>
    //     </div>
    //   );
    // } else {
    //   return <p>emty</p>;
    // }
  }
}
//default props

Info.defaultProps = {
  title: "Default",
};

//props type
Info.propTypes = {
  title: PropTypes.string,
};

// //component 1

// function Info(){
//     const title = "this is my title";
//     const showTitle = false;
//     return(
//       // JSX way
//       <div>
//         {/* if you want to print a js variable */}
//         <h1> {showTitle ? title :'no title'} </h1>
//         {/* check if title is true else show no title */}
//         <p>paragraf</p>
//       </div>
//     )

//     // js simple way
//       if (showTitle ){
//         return(
//           <div>
//           {/* if you want to print a js variable */}
//           <h1> {showTitle ? title :'no title'} </h1>
//           {/* check if title is true else show no title */}
//           <p>paragraf</p>
//         </div>
//         )
//       }else{
//         return(<p>emty</p>)
//       }

//   }

//   to use this function in deferent files we use:
export default Info;
