import Tour from "./assets/Tour"


const Tours = ({tours,eliminar}) => {
    console.log("tours en Tours",tours)
    return (
    <div className="cardList">
        {tours.map((item)=>{
            return(
            <Tour key={item.id} {...item} eliminar={eliminar}></Tour>)
        })}
    </div>
    
  )
}
export default Tours