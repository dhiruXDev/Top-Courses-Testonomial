import React, { useState } from "react";
import './Testinomial.css';
import TestonomialCard from "./TestonomialCard";

function Testonomial(props){
   let reviews =  props.reviews;
//    console.log("testonoimial");
//    console.log(reviews);

//    const[index , setIndex] = useState(0);         
//    function leftShiftHandler(){
//        if(index-1 < 0 ){
//           setIndex(reviews.length-1);
//           console.log(index);
//        }
//        else{
//            setIndex(index-1);
//        }
//    }
//    function rightShiftHandler(){
//         if (index+1 >= reviews.length) {
//                  setIndex(0);
//         }
//         else{
//            setIndex(index+1);  
//         }
//    }
//also i can send the index from this module,for handling Left,right button.But 
//i have to  add all button here and then send the index by using these uoper wala Function logic.

    return(
        <div className="testonomial-container">
                <div className="testonomial-container-heading" >
                    <h1 >Our Testonomial</h1>
                    <div className="div-underline"></div>
                </div>
                <div>
                    <TestonomialCard reviews={reviews} />
                </div>
        </div>
    )
}
export default Testonomial;