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
    }, []);

    const handleChanges = e => {
        e.target.name === "stars" ? setTheMovie({ ...theMovie, stars: e.target.value}) : setTheMovie({ ...theMovie, [e.target.name]: e.target.value});
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
            <label htmlFor="stars">Stars:</label>
            <input 
                type="text"
                id="stars"
                name="stars"
                onChange={handleChanges}
                value={theMovie.stars}
            />
            <button onClick={updateMovie}>Update</button>
        </form>
    )
};

export default UpdateMovie;