import React from "react";
import { FcLike ,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
 
function Card(props){
    let CardData = props.Course;
//    console.log(CardData);
   let likedCourses = props.likedCourses;
   let setLikedCourse = props.setLikedCourse;
   function clickHandler(){
      if(likedCourses.includes(CardData.id)){
              // Pahle se Liked hua hai
              setLikedCourse((prev) => prev.filter((cid)=>(cid !== CardData.id)));   // "Cid"  is current cliked Id --> Means this cliked ID (cid) is not equal to previou id then push inn to LikedCourse.  
              toast.warning("Liked Removed");
      }
      else{
         // Phle se like ni hua hai (Like krna Hai.)
         // Insert krna hai  thsi ClikedId ko LikedCourse me
         if(likedCourses.length === 0){
              setLikedCourse([CardData.id]);
         }
         else{
              // Non-empty hai , means Insert the cliked Id with Prev ID.
            setLikedCourse((prev)=>[...prev , CardData.id]);
         }
         toast.success("Liked Added");
      }
}
   return(
    <div className="Card">
        <div className="img">
            <img className="image" alt="Main-img" src= {CardData.image.url}></img>
        </div>
           <div className="icon" onClick={clickHandler}>
              {
                   likedCourses.includes(CardData.id) ? (<FcLike className="i"/>): (<FcLikePlaceholder className="i"/>) 
              }               
           </div>
        <div className="Card-info">
            <h2 className="Card-heading">{CardData.title} </h2>
            <p className="Card-desc">
                 {
                    CardData.description.length > 100 ? (CardData.description.substr(0,100) +"..."):(CardData.description)
                 }
               </p>
        </div>
    </div>
   )  
}
export default Card;