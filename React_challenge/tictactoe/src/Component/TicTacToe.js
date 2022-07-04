import React from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
    const Cell = () =>{
        return <td>1</td>
    }
    return ( 
    <div className="container">
       <table>
           <tbody>
               <tr>
                  <Cell />
                  <Cell />
                  <Cell />
               </tr>
               <tr>
                  <Cell />
                  <Cell />
                  <Cell />
               </tr>
               <tr>
                  <Cell />
                  <Cell />
                  <Cell />
               </tr>
           </tbody>
       </table>
    </div> );
}
 
export default TicTacToe;