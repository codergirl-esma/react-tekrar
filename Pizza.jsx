export default function Pizza({pizzaObj , key}){



    return(
      <div className="col">
         <div className="card" style={{ width: '18rem' }}>
      <img src={"/img/" + pizzaObj.image} className='card-img-top p-2 p-md-3 border-bottom' />
      <div className="card-body">
        <h5 className="card-title">{pizzaObj.title}</h5>
        <p className="card-text">{pizzaObj.description}</p>
        <span className={pizzaObj.price <=200 ? "badge text-bg-danger": 'badge text-bg-primary'}>{pizzaObj.price}</span>
      </div>
    </div>
      </div>
     
       
    );
  }