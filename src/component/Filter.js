import React from "react";
import './Filter.css'
function Filter(props){
    let filterData =props.AllfilterData;
    let catagory = props.catagory;
    let setCatagory =props.setCatagory;
  //  console.log(filterData);   --> Array of object
    function FilterHandler(title){
        setCatagory(title);

    }
     return(
           <div className="filter-container">
            {
                filterData.map((data)=> (
                    <button onClick={()=>FilterHandler(data.title)} 
                            style={{
                                    border: catagory === data.title ? ('1px solid white ') : ('none')
                            }}> 
                      {data.title}                     
                    </button>
                ))
            }
           </div>
     )
         
          
}
export default Filter;