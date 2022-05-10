import { useState, useEffect } from 'react';
import firebase from '../firebase';
import { getDatabase, ref, onValue, remove } from 'firebase/database';

function Cart(props) {

    const [items, setItems] = useState([]);

    useEffect(() => {

        const database = getDatabase(firebase)
        const dbRef = ref(database)


        onValue(dbRef, (response) => {
            const newState = [];
            const data = response.val();
            for (let key in data) {
                newState.push({ key: key, name: data[key] });
            }
            setItems(newState);
        })
    }, [])



    const handleRemoveItem = (itemId) => {
        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${itemId}`);
        remove(dbRef)
    }



    return (
        <div className="cartContainer">
            <ul className="cart">
                <span onClick={props.hideCart}>x</span>
                <h2>Your Cart</h2>
                <h3>
                    {items.length === 0 ? "Your cart is empty"
                        :
                        null}</h3>
                {items.map((item) => {
                    return (
                        <li key={item.name.currentSku.skuId}>
                            <i className="fa-solid fa-trash-can" onClick={() => handleRemoveItem(item.key)}></i>
                            <div className="imageContainer">
                                < img
                                    src={item.name.image450}
                                    alt={item.name.title} />
                            </div>

                            <div className="cartText">
                                <p className="boldFont brand">{item.name.brandName}</p>
                                <p>{item.name.displayName}</p>
                                <p className="boldFont"> {item.name.currentSku.listPrice}</p>
                            </div>
                        </li>
                    )
                })}
                <button>Checkout</button>
            </ul>

        </div>
    )

}

export default Cart