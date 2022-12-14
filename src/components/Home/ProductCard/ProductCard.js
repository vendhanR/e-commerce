import { useContext } from 'react';
import './ProductCard.css'
import AppContext from '../../../context';

function ProductCard(values) {

  const {dispatcherEvent} =useContext(AppContext)

 function handleAddToCartPage() {
   dispatcherEvent("ADD_ITEMS",values.item)
   values.notify()
 }


    let ratingSatr = Math.floor(Number(values.item.rating.rate))
    return(
        <div className="card">
           <h5 className="card-title">{values.item.title}</h5>
           <img src={values.item.image} alt="fff"></img>
         <div className="card-body">
            <h5 className="card-title">{values.item.category}</h5>
            <p className="card-text">&#8377;{values.item.price}</p>
            {/* <p className="card-text">{values.item.rating.rate}</p> */}
            <p className="card-text">{ratingSatr}</p>

            {/* <span>{stars}</span> */}
            <p className="card-text">{values.item.description}</p>
            <button onClick={handleAddToCartPage} className="btn btn-success flex-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
             </svg>Add to Cart</button>
          </div>
        </div>
    );
}


export default ProductCard;