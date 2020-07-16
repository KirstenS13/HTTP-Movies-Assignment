import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const UpdateMovie = props => {
    const { push } = useHistory();
    const { id } = useParams();
    const numberId = Number(id);
    const [theMovie, setTheMovie] = useState({
        title: "",
        director: "",
        metascore: "",
        stars: []
    });

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then(res => {
                console.log('res from UpdateMovie.js', res);
                setTheMovie(res.data);
            })
            .catch(err => {
                console.log("err from UpdateMovie.js",err);
            })
        /* const movie = props.movieList.filter(movie => movie.id === numberId);
        console.log("movie in UpdateMovie.js",movie);
        console.log("id in UpdateMovie.js from useParams", id);
        setTheMovie(movie[0]); */
    }, [id]);

    const handleChanges = e => {
        if (e.target.name === "star") {
            const starsCopy = [ ...theMovie.stars ];
            const targetedStar = e.target.id;
            let selectedStar = starsCopy.filter((star, i) => {
                return (targetedStar === `star${i}`)
            });
            selectedStar = e.target.value;
            setTheMovie({ ...theMovie, stars: (theMovie.stars.map((star, i) => {
                if (e.target.id === `star${i}`) {
                    return selectedStar;
            } else {
                return star;
            }}))});
            console.log("starsCopy", starsCopy);
            console.log("selectedStar", selectedStar);
        } else {
            setTheMovie({ ...theMovie, [e.target.name]: e.target.value});
        }
        
        
        /* theMovie.stars.map((star, i) => {
            if (e.target.id === i) {
                const newStar = e.target.value;
                console.log("newStar", newStar);
                return newStar;
            }
        }) */ 
    }

    const updateMovie = e => {
        e.preventDefault();
        //axios put request
        //pass in new state
        axios
            .put(`http://localhost:5000/api/movies/${id}`, theMovie)
            .then(res => {
                console.log('res from put request', res);
                setTheMovie({
                    title: "",
                    director: "",
                    metascore: "",
                    stars: []
                });
                push("/");
            })
            .catch(err => {
                console.log('err from put request', err);
            })
    }

    return (
        <form>
            <label htmlFor="title">
                Title: 
                <input 
                    type="text"
                    id="title"
                    name="title"
                    onChange={handleChanges}
                    value={theMovie.title}
                />
            </label>
            <label htmlFor="director">
                Director: 
                <input 
                    type="text"
                    id="director"
                    name="director"
                    onChange={handleChanges}
                    value={theMovie.director}
                />
            </label>
            <label htmlFor="metascore">
                Metascore: 
                <input 
                    type="text"
                    id="metascore"
                    name="metascore"
                    onChange={handleChanges}
                    value={theMovie.metascore}
                />
            </label>
            <label htmlFor="star0">Stars:</label>
            <input 
                type="text"
                id="star0"
                name="star"
                onChange={handleChanges}
                value={theMovie.stars[0]}
            />
            <button>Update Star</button>
            <label htmlFor="star1">Stars:</label>
            <input 
                type="text"
                id="star1"
                name="star"
                onChange={handleChanges}
                value={theMovie.stars[1]}
            />
            <button>Update Star</button>
            <label htmlFor="star2">Stars:</label>
            <input 
                type="text"
                id="star2"
                name="star"
                onChange={handleChanges}
                value={theMovie.stars[2]}
            />
            <button>Update Star</button>
            <button onClick={updateMovie}>Update Movie</button>
        </form>
    )
};

export default UpdateMovie;