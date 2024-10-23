import React, { useState } from "react";
import './Testinomial.css';
import { FaQuoteLeft , FaQuoteRight , FaChevronLeft ,FaChevronRight} from "react-icons/fa";
function TestonomialCard(props){
         let reviews = props.reviews;
         const[index , setIndex] = useState(0);
          
function leftShiftHandler(){
    if(index-1 < 0 ){
       setIndex(reviews.length-1);
       console.log(index);
    }
    else{
        setIndex(index-1);
    }
}
function rightShiftHandler(){
     if (index+1 >= reviews.length) {
              setIndex(0);
     }
     else{
        setIndex(index+1);  
     }
}

function submitHandler(){
     let randomIndex =  Math.floor(Math.random() * reviews.length);
     setIndex(randomIndex);
}
        console.log(reviews); 
       return(
        <div className="testinomial-card-container">
                        <div  className="testinomial-image">
                            <img src={reviews[index].image} className="testo-img"/> 
                        </div>
                        <div className="testinomial-info" >
                            <p className="name">{reviews[index].name}</p>
                            <p className="job">{reviews[index].job}</p>
                        </div>
                        <div className="quote-icon">
                            <FaQuoteLeft   className="testonomial-icon"/>
                            <p className="testinomial-desc"> {reviews[index].text}</p>
                            <FaQuoteRight  className="testonomial-icon" />
                        </div>
                        <div className="chevron-btn">
                            < FaChevronLeft onClick={leftShiftHandler} className="left-btn"/>
                            <FaChevronRight onClick={rightShiftHandler} className="left-btn"/>
                        </div>
                        <div>
                             <button onClick={submitHandler} className="last-btn">Surprice me</button>
                        </div>
                       
        </div>
       ) 
}
export default TestonomialCard;