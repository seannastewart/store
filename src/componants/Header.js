import headerImg from './assets/6.jpg'
import { useState, useEffect } from 'react';
import firebase from '../firebase';
import { getDatabase, ref, onValue, remove } from 'firebase/database';

function Header(props) {


    const [count, setCount] = useState([]);

    useEffect(() => {

        const database = getDatabase(firebase)
        const dbRef = ref(database)


        onValue(dbRef, (response) => {
            const newState = [];
            const data = response.val();
            for (let key in data) {
                newState.push({ key: key, name: data[key] });
            }
            setCount(newState);
        })
    }, [])


    return (
        <div>
            <div className="wrapper">
                <h1>The Skincare Store</h1>
                <i className="fa-solid fa-cart-shopping" onClick={props.unhideCart}> <span>{count.length}</span></i>
            </div>
            <div className="headerImg">
                <img src={headerImg} alt="" />
            </div>

        </div>

    )
}

export default Header