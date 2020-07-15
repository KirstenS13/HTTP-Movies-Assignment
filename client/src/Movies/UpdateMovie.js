import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const UpdateMovie = props => {
    console.log('props in UpdateMovie', props);

    const { push } = useHistory();
    const { id } = useParams();
    const numberId = Number(id);
    const [theMovie, setTheMovie] = useState({
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
        const movie = props.movieList.filter(movie => movie.id === numberId);
        console.log("movie in UpdateMovie.js",movie);
        console.log("id in UpdateMovie.js from useParams", id);
        setTheMovie(movie[0]);
    }, [id, props.movieList]);

    const handleChanges = e => {
        setTheMovie({ ...theMovie, [e.target.name]: e.target.value });
    }

    const updateMovie = e => {
        e.preventDefault();
        //axios put request
        //pass in new state
    }

    

    return (
        <form>
            <p>{theMovie.director}</p>
            <p>{theMovie.title}</p>
            <p>{theMovie.id}</p>
            <p>{theMovie.metascore}</p>
            <label htmlFor="title">
                Title: 
                <input 
                    type="text"
                    id="title"
                    name="title"
                    onChange={handleChanges}
                />
            </label>
            <label htmlFor="director">
                Director: 
                <input 
                    type="text"
                    id="director"
                    name="director"
                    onChange={handleChanges}
                />
            </label>
            <label htmlFor="metascore">
                Metascore: 
                <input 
                    type="text"
                    id="metascore"
                    name="metascore"
                    onChange={handleChanges}
                />
            </label>
            <label htmlFor="star">
                Stars: 
                <input 
                    type="text"
                    id="star"
                    name="star"
                    onChange={handleChanges}
                />
            </label>
            <button onClick={updateMovie}>Update</button>
        </form>
    )
};

export default UpdateMovie;