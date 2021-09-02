import { useState, useEffect } from 'react';
import './generator.scss';

const Generator = () => {
    const [state, setState] = useState({
        cuisine: "",
        protein: ""
    });

    const [randomEntree, setRandomEntree] = useState({});
    const [randomSide, setRandomSide] = useState({});

    //fetches an inital random entree and side
    useEffect(() => {
        const getInitialDinner = async () => {
            const categoryArray = [1, 2, 3, 4, 5, 6, 7, 8];
            let randomCategory = (Math.floor(Math.random() * categoryArray.length));
            const localUrl = `http://127.0.0.1:3000/dinner/category/${randomCategory}`;
            const response = await fetch(localUrl).then((response) => response.json());

            let randomEntreeId = (Math.floor(Math.random() * response.entrees.length));
            setRandomEntree(response.entrees[randomEntreeId]);
  
            let randomSideId = (Math.floor(Math.random() * response.sides.length));
            setRandomSide(response.sides[randomSideId]); 
        }

        getInitialDinner();
    }, []);

    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: parseInt(value)
        });
    };

    //refactor this function later to make it more DRY
    const handleSubmit = async (event) => {
        event.preventDefault();

        let randomEntreeId 
        let randomSideId
        
        //If user selects NO proteins or Cuisine
        if(state.cuisine === "" && state.protein === "") {
            const categoryArray = [1, 2, 3, 4, 5, 6, 7, 8];
            const randomCategory = (Math.floor(Math.random() * categoryArray.length));
            const localUrl = `http://127.0.0.1:3000/dinner/category/${randomCategory}`;
            const response = await fetch(localUrl).then((response) => response.json());

            randomEntreeId = (Math.floor(Math.random() * response.entrees.length));
            setRandomEntree(response.entrees[randomEntreeId]);
  
            randomSideId = (Math.floor(Math.random() * response.sides.length));
            setRandomSide(response.sides[randomSideId]); 
        }

        //If user ONLY selects cuisine
        if(!!state.cuisine && state.protein === "") {
            // fetch all the entrees & sides for that category
            const localUrl = `http://127.0.0.1:3000/dinner/category/${state.cuisine}`;
            const response = await fetch(localUrl).then((response) => response.json());
            randomEntreeId = (Math.floor(Math.random() * response.entrees.length));
            setRandomEntree(response.entrees[randomEntreeId]);
            //Randomize sides for that category
            randomSideId = (Math.floor(Math.random() * response.sides.length));
            setRandomSide(response.sides[randomSideId]);
        } else {

            //If user selects cuisine AND protein
            if(!!state.cuisine && !!state.protein) {
                const localUrl = `http://127.0.0.1:3000/dinner/category/${state.cuisine}/protein/${state.protein}`;
                const response = await fetch(localUrl).then((response) => response.json());
                console.log('Protein and cuisine response is', response)
                randomEntreeId = (Math.floor(Math.random() * response.entrees.length));
                setRandomEntree(response.entrees[randomEntreeId]);
                randomSideId = (Math.floor(Math.random() * response.sides.length));
                setRandomSide(response.sides[randomSideId]);
            } else {

                //If user selects ONLY protein
                if(state.cuisine === "" && !!state.protein) {
                    const localUrl = `http://127.0.0.1:3000/dinner/protein/${state.protein}`;
                    const response = await fetch(localUrl).then((response) => response.json());
                    randomEntreeId = (Math.floor(Math.random() * response.entrees.length));
                    setRandomEntree(response.entrees[randomEntreeId]);
                    randomSideId = (Math.floor(Math.random() * response.sides.length));
                    setRandomSide(response.sides[randomSideId]);
                }
            }
        }
    };

    return (
        <>
        <div className="container" id="get-dinner">
            <h2>Find Out What's For Dinner</h2>
            <p>We've tried to make planning dinner as easy as possible. Select one cuisine, and/or one protein and hit <em>Let's Eat! </em>You can also hit <em>Let's Eat </em>without choosing a cuisine or protein for a truly random dinner idea.</p>
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
                    aria-label="italian"
                    className="cuisineChoice"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="italian">Italian</label>

                    <input 
                    id="mexican"
                    type="radio"
                    name="cuisine"
                    value="2"
                    aria-label="mexican"
                    className="cuisineChoice"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="mexican">Mexican</label>

                    <input 
                    id="thai"
                    type="radio"
                    name="cuisine"
                    value="3"
                    aria-label="thai"
                    className="cuisineChoice"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="thai">Thai</label>

                    <input 
                    id="japanese"
                    type="radio"
                    name="cuisine"
                    value="4"
                    aria-label="japanese"
                    className="cuisineChoice"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="japanese">Japanese</label>
                </div>
                <div className="options">
                    <input 
                    id="mediterranean"
                    type="radio"
                    name="cuisine"
                    value="5"
                    aria-label="mediterranean"
                    className="cuisineChoice"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="mediterranean">Mediterranean</label>

                    <input 
                    id="indian"
                    type="radio"
                    name="cuisine"
                    value="6"
                    aria-label="indian"
                    className="cuisineChoice"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="indian">Indian</label>

                    <input 
                    id="cajun"
                    type="radio"
                    name="cuisine"
                    value="7"
                    aria-label="cajun"
                    className="cuisineChoice"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="cajun">Cajun</label>

                    <input 
                    id="chinese"
                    type="radio"
                    name="cuisine"
                    value="8"
                    aria-label="chinese"
                    className="cuisineChoice"
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
                    aria-label="red meat"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="redMeat">Red Meat</label>

                    <input 
                    id="poultry"
                    type="radio"
                    name="protein"
                    value="2"
                    aria-label="poultry"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="poultry">Poultry</label>
                    
                    <input 
                    id="seafood"
                    type="radio"
                    name="protein"
                    value="3"
                    aria-label="seafood"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="seafood">Seafood</label>

                    <input 
                    id="vegetarian"
                    type="radio"
                    name="protein"
                    value="4"
                    aria-label="vegetarian"
                    onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="vegetarian">Vegetarian</label>

                </div>
                <button type="submit" className="primaryBtn">LET'S EAT!</button>
            </div>
        </form>

        <div className="resultsContainer">
            {!!randomEntree ? 
            <div className="row">
                <div className="col-3 animated">
                    <h2>{randomEntree.entree_name}</h2>
                </div>
                <div className="col-3">
                    <h2>With</h2>
                </div>
                <div className="col-3">
                    <h2>{randomSide.side_name}</h2>
                </div>
            </div>

            : null}
        </div>
        </>
    )
}

export default Generator;