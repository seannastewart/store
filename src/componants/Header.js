import headerImg from './assets/6.jpg'

function Header() {
    return (
        <div>
            <div className="wrapper">
                <h1>The Skincare Store</h1>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="headerImg">
                <img src={headerImg} alt="" />
            </div>

        </div>

    )
}

export default Header