import { useState } from 'react';

function Nav(props) {

    // const [selectedCategory, setSelectedCategory] = useState("cat1230034")

    const handleCategoryChange = function (event) {
        let categoryNumber = event.target.value
        // setSelectedCategory(categoryNumber)
        update(categoryNumber)

    }


    const update = function (category) {
        props.updateProducts(category)
    }



    return (
        <nav>

            <form action="" className="categories">
                <input type="radio" id="all" name="category" value="cat150006" onClick={handleCategoryChange} defaultChecked />
                <label htmlFor="all">Shop All</label>

                <input type="radio" id="moisturizer" name="category" value="cat1230034" onClick={handleCategoryChange} />
                <label htmlFor="moisturizer">Moisturizers</label>

                <input type="radio" id="cleanser" name="category" value="cat1230033" onClick={handleCategoryChange} />
                <label htmlFor="cleanser">Cleaners</label>

                <input type="radio" id="treatments" name="category" value="cat1230035" onClick={handleCategoryChange} />
                <label htmlFor="treatments">Facial Treatments</label>

                <input type="radio" id="masks" name="category" value="cat1440038" onClick={handleCategoryChange} />
                <label htmlFor="masks">Masks</label>


                <input type="radio" id="eyeCare" name="category" value="cat1600040" onClick={handleCategoryChange} />
                <label htmlFor="eyeCare">Eye Care</label>

                <input type="radio" id="lipBalm" name="category" value="cat601090" onClick={handleCategoryChange} />
                <label htmlFor="lipBalm">Lip Balms</label>

                <input type="radio" id="sunscreen" name="category" value="cat60113" onClick={handleCategoryChange} />
                <label htmlFor="sunscreen">Sunscreen</label>

                <input type="radio" id="tanner" name="category" value="cat1230036" onClick={handleCategoryChange} />
                <label htmlFor="tanner">Self Tanner</label>

                <input type="radio" id="tools" name="category" value="cat1600043" onClick={handleCategoryChange} />
                <label htmlFor="tools">Tools</label>



            </form>

        </nav>
    )
}


export default Nav