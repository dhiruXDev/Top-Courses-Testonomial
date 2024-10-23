import React, { useState } from "react";
import Card from './Card'
function Cardcontainer(props){
    let courses = props.courses;
    let catagory =props.catagory;
    //  console.log("in container");
    //  console.log(courses);
const[likedCourses , setLikedCourse] = useState([]);  // Here initialy  likedCourses[] is empty Array . It will contain the courseId  for tracking
    // I have to convert the objectt of Array into single array; 
    function getCourses() {
        let allCourses = []; // Creating an empty array to store all courses
        if (catagory === "All") {  // By default  All  Catagory wale data dikhane hai
            // Iterating over each value (array) in the courses object
            Object.values(courses).forEach(array => {
                // Check if the value is an array
                if (Array.isArray(array)) {
                    // Iterating over each courseData object in the array
                    array.forEach(courseData => {
                        // Pushing each courseData object into the allCourses array
                        allCourses.push(courseData);
                    });
                } else {
                    console.error('Invalid data: Value is not an array');
                }
            });
            console.log(allCourses);   // Now we have array for each course data.
            // Returning the array containing all courses
            return allCourses; 
        }
        else{   // If Catagory != "All" means any specific button is clicked , and i have to show only these ctagory data
           return courses[catagory];
        }
    
    }
    
 return(
    <div className="Card-container">
        {
             getCourses().map((Course)=>  {
                return (<Card key={Course.id} Course={Course}  likedCourses={likedCourses} setLikedCourse={setLikedCourse} />)
             }
            )
        }
    </div>
 )
}
export default Cardcontainer;