import React, { useState } from 'react';
import axios from 'axios';

const AddMovie = () => {
    const [newMovie, setNewMovie] = useState({
        title: "",
        director: "",
        id: "",
        metascore: "",
        stars: [
            "",
            "",
            ""
        ]
    });

    const handleChanges = e => {
        if (e.target.name === "star") {
            let newStar = [];
            newStar.push(e.target.value);
            setNewMovie({ ...newMovie, stars: (newMovie.stars.map((star, i) => {
                if (e.target.id === `star${i}`) {
                    return newStar[0];
                } else {
                    return star;
                }
            }))});
            console.log("newStar", newStar);
            console.log('newMovie in AddMovie.js', newMovie);
        } else {
            setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
            console.log('newMovie in AddMovie.js', newMovie);
        }
    }

    return (
        <form>
            <h3>Add a Movie</h3>
            <label htmlFor="title">Title:</label>
            <input 
                type="text"
                name="title"
                id="title"
                placeholder="Enter title..."
                value={newMovie.title}
                onChange={handleChanges}
            />
            <label htmlFor="director">Director:</label>
            <input 
                type="text"
                name="director"
                id="director"
                placeholder="Enter director..."
                value={newMovie.director}
                onChange={handleChanges}
            />
            <label htmlFor="metascore">Metascore:</label>
            <input 
                type="number"
                name="metascore"
                id="metascore"
                placeholder="Enter metascore..."
                value={newMovie.metascore}
                onChange={handleChanges}
            />
            <label htmlFor="star0">Star:</label>
            <input 
                type="text"
                name="star"
                id="star0"
                placeholder="Enter star..."
                value={newMovie.stars[0]}
                onChange={handleChanges}
            />
            <label htmlFor="star1">Stars:</label>
            <input 
                type="text"
                name="star"
                id="star1"
                placeholder="Enter star..."
                value={newMovie.stars[1]}
                onChange={handleChanges}
            />
            <label htmlFor="star2">Stars:</label>
            <input 
                type="text"
                name="star"
                id="star2"
                placeholder="Enter star..."
                value={newMovie.stars[2]}
                onChange={handleChanges}
            />
            <button>Add Movie</button>
        </form>
    )
}

export default AddMovie;