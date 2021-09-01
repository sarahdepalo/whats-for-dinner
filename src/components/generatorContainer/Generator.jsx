import { useState } from 'react';
import './generator.scss';

const Generator = () => {
    const [state, setState] = useState({
        cuisine: "",
        protein: ""
    });

    const [randomEntree, setRandomEntree] = useState({});
    const [randomSide, setRandomSide] = useState({});

    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
        console.log(event.target.value)
    };

    const handleSubmit = async (event) => {
        let randomEntreeId 
        let randomSideId
        event.preventDefault();
        if(!!state.cuisine) {
            const cuisineId = parseInt(state.cuisine);
            // fetch all the entrees for that category
            const localEntreeUrl = `http://127.0.0.1:3000/entrees/category/${cuisineId}`
            const response = await fetch(localEntreeUrl).then((response) => response.json());
            randomEntreeId = (Math.floor(Math.random() * response.entrees.length))
            setRandomEntree(response.entrees[randomEntreeId]);
            //Randomize sides for that category
            randomSideId = (Math.floor(Math.random() * response.sides.length));
            console.log(randomSideId)
            setRandomSide(response.sides[randomSideId])
        }
    };

    return (
        <>
        <div className="container">
            <h2>Find Out What's For Dinner</h2>
            <p>We've tried to make planning dinner as easy as possible. Select one cuisine, and/or one protein and hit <em>Let's Eat!</em> You can also hit <em>Let's Eat </em>without choosing a cuisine or protein for a truly random dinner idea.</p>
        </div>
        <form onSubmit={(event) => handleSubmit(event)}>
            <div className="cuisineContainer">
                <h3>Cuisine</h3>
                <h4>Choose One</h4>
                <div className="options">
                    <input 
                    id="italian"
                    type="radio"
                    name="cuisine"
                    value="1"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="italian">Italian</label>

                    <input 
                    id="mexican"
                    type="radio"
                    name="cuisine"
                    value="2"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="mexican">Mexican</label>

                    <input 
                    id="thai"
                    type="radio"
                    name="cuisine"
                    value="3"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="thai">Thai</label>

                    <input 
                    id="japanese"
                    type="radio"
                    name="cuisine"
                    value="4"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="japanese">Japanese</label>


                    <input 
                    id="mediterranean"
                    type="radio"
                    name="cuisine"
                    value="5"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="mediterranean">Mediterranean</label>

                    <input 
                    id="indian"
                    type="radio"
                    name="cuisine"
                    value="6"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="indian">Indian</label>

                    <input 
                    id="cajun"
                    type="radio"
                    name="cuisine"
                    value="7"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="cajun">Cajun</label>

                    <input 
                    id="chinese"
                    type="radio"
                    name="cuisine"
                    value="8"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="chinese">Chinese</label>

                </div>
            </div>
            <div className="proteinsContainer">
                <h3>Protein</h3>
                <h4>Choose One</h4>
                <div className="options">
                     <input 
                    id="redMeat"
                    type="radio"
                    name="protein"
                    value="1"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="redMeat">Red Meat</label>

                    <input 
                    id="poultry"
                    type="radio"
                    name="protein"
                    value="2"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="poultry">Poultry</label>
                    
                    <input 
                    id="seafood"
                    type="radio"
                    name="protein"
                    value="3"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="seafood">Seafood</label>

                    <input 
                    id="vegetarian"
                    type="radio"
                    name="protein"
                    value="4"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="vegetarian">Vegetarian</label>

                </div>
                <button type="submit" className="primaryBtn">LET'S EAT!</button>
            </div>
        </form>
        </>
    )
}

export default Generator;