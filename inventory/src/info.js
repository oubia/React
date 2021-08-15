// class base components
import React from "react"

class Info extends React.Component{
    
    render(){
        const title = "this is my title";
        const showTitle = true;
        if (showTitle ){
            return(
            <div>
            {/* if you want to print a js variable */}
            <h1> {showTitle ? title :'no title'} inside the class base</h1>
            {/* check if title is true else show no title */}
            <p>paragraf</p>
            </div>
            )
        }else{
            return(<p>emty</p>)
        }
        }
}


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
//       // if (showTitle ){
//       //   return(
//       //     <div>
//       //     {/* if you want to print a js variable */}
//       //     <h1> {showTitle ? title :'no title'} </h1>
//       //     {/* check if title is true else show no title */}
//       //     <p>paragraf</p>
//       //   </div>
//       //   )
//       // }else{
//       //   return(<p>emty</p>)
//       // }
    
//   }

//   to use this function in deferent files we use:
export default  Info 
