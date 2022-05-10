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

    useEffect(() => {
        props.update(items.length)
    }, [])

    const handleRemoveItem = (itemId) => {
        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${itemId}`);

        // using the Firebase method remove(), we remove the node specific to the book ID
        remove(dbRef)
    }



    return (
        <div>
            <ul className="cart">
                <span onClick={props.hideCart}> <i className="fa-solid fa-circle-xmark"></i></span>
                <h2>Your Cart</h2>
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
            </ul>
        </div>
    )

}

export default Cart