import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const UpdateMovie = props => {
    console.log('props in UpdateMovie', props);

    const { push } = useHistory();
    const { id } = useParams();
    const [movie, setMovie] = useState({
        title: "",
        director: "",
        metascore: "",
        stars: []
    });
    const [newStar, setNewStar] = useState("");

    useEffect(() => {
        /* axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then(res => {
                console.log('res from UpdateMovie.js', res);
            })
            .catch(err => {
                console.log("err from UpdateMovie.js",err);
            }) */
        console.log(props.movieList);
        const movie = props.movieList.filter(movie => movie.id === id);
        console.log(movie);
    }, [id, props.movieList]);

    const handleChanges = e => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    }

    const updateMovie = e => {
        e.preventDefault();
        //axios put request
        //pass in new state
    }

    return (
        <form>
            <label htmlFor="title">
                Movie Title
                <input 
                    type="text"
                    id="title"
                    name="title"
                    onChange={handleChanges}
                />
            </label>
            <label htmlFor="director">
                Director
                <input 
                    type="text"
                    id="director"
                    name="director"
                    onChange={handleChanges}
                />
            </label>
            <label htmlFor="metascore">
                Metascore
                <input 
                    type="text"
                    id="metascore"
                    name="metascore"
                    onChange={handleChanges}
                />
            </label>
            <label htmlFor="star">
                Stars
                <input 
                    type="text"
                    id="star"
                    name="star"
                    onChange={handleChanges}
                />
            </label>
            <button onClick={updateMovie}>Update Movie</button>
        </form>
    )
};

export default UpdateMovie;