 
import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import Cardcontainer from './component/Cardcontainer';
import Filter from './component/Filter';
import Spinner from './component/Spinner.js'
import {filterData , apiUrl} from './Data.js';
import {toast} from 'react-toastify';
 import Testonomial from './component/Testonomial';
 import reviews from './TestonomialData.js';
function App() {

    
    const[courses ,setCourse] = useState([]);
    console.log(courses);
    const [loading, setLoader] = useState(true);
    const [catagory , setCatagory] =useState(filterData[0].title);

async function fetchDataOfCard(){
    setLoader(true);
    try{
          let response = await fetch(apiUrl);
          let output = await response.json();
          setCourse(output.data);
       }
    catch(error){
          toast.error("notwork Issue");    
    }
    setLoader(false);
  };

  useEffect(()=>{
    fetchDataOfCard();
  } ,[]);
console.log(courses);
  return (
    <div  className='Wrapper'>
            <div className='navbar'>
              <Navbar/>
            </div>  

            <div className='filter-container'>
                <Filter key={filterData.id}  AllfilterData={filterData}  catagory={catagory} setCatagory={setCatagory} />
            </div>

            <div>
                {
                    loading ? ( <Spinner/>) : (<Cardcontainer  courses={courses} catagory ={catagory}/>)
                }
            </div>

            <div>
                <Testonomial reviews={reviews}/> 
            </div>
          
    </div>
  );
}

export default App;
