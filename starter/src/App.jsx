import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./assets/Loading";
import { useDeferredValue } from "react";

const url = "https://course-api.com/react-tours-project"


const App = () => {
  const [loading,setLoading]=useState(true)
  const [tours,setTours]=useState([])
  
  const eliminar=(id)=>{
      const newTours=tours.filter((item)=>item.id !== id)
      setTours(newTours)    
  
  }

  const fetchTours=async()=>{
    setLoading(true)
    try {
      const response=await fetch(url)
      const datos=await response.json()
      setTours(datos)
      
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  };
  useEffect(()=>{fetchTours()},[]) 
 
  if (loading){
    return(
      <main>
    <Loading></Loading>
      </main>)    
  }
  if (tours.length >0){
  return (
    <main>
      <h2>Our Tours</h2>
      <div className='title-underline'/>
      <Tours tours={tours} eliminar={eliminar}></Tours>
    </main>
  )
  }else{
    return(
      <main className="loading">
        <h2>No Tours Left</h2>
        <button onClick={fetchTours} className="btn">Refresh</button>
      </main>
    )
  }
  
};
export default App;
