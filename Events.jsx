import { pizzas } from "../data"

export default function Events(){

    let index =0;
    let pizza = pizzas[index]


    pizzas.map((p ,key) =>{

    })

    function handlePreviousClick(){
        alert("Geri butonu")
    }

    return(

        <>
        <button className="btn btn-primary" onClick={handlePreviousClick}>Previous</button>
        <button className="btn btn-primary" onClick={() => {alert('ileri butonu')}}>Next</button>

        <div className="col">
         <div className="card" style={{ width: '18rem' }}>
      <img src={"/img/" + pizza.image} className='card-img-top p-2 p-md-3 border-bottom' />
      <div className="card-body">
        <h5 className="card-title">{pizza.title}</h5>
        <p className="card-text">{pizza.description}</p>
        <span className={pizza.price <=200 ? "badge text-bg-danger": 'badge text-bg-primary'}>{pizza.price}</span>
      </div>
    </div>
      </div>
        </>
    )

}