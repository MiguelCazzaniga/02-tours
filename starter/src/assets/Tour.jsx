import { useState } from "react"

const Tour = ( {id,name,image,info,price,eliminar}) => {
  const [vertodo,setVerTodo]=useState(false)
  
   
  return (
    <div className='card'>
      <img src={image} alt={name}></img>
      <span className='price'>${price}</span>

      <div>
        <div className='title'>
          <p>{name}</p>
        </div>
        <div className='info'>
          <p> {vertodo ? info : `${info.substring(0, 200)}...`}</p>
          <button onClick={() => setVerTodo(!vertodo)} className="card-button">
            {vertodo ? <p>Ver Menos</p> : <p>Ver Mas...</p>}
          </button>
        </div>
        <button onClick={()=>eliminar(id)} className="btn">No me interesa</button>
      </div>         
    </div>
  )
}
export default Tour