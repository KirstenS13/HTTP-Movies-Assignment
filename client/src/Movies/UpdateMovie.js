import React from 'react';

const UpdateMovie = () => {
    return (
        <form>
            <label htmlFor="title">
                <input 
                    type="text"
                    id="title"
                    name="title"
                />
            </label>
            <label htmlFor="director">
                <input 
                    type="text"
                    id="director"
                    name="director"
                />
            </label>
            <label htmlFor="metascore">
                <input 
                    type="text"
                    id="metascore"
                    name="metascore"
                />
            </label>
            <label htmlFor="star">
                <input 
                    type="text"
                    id="star"
                    name="star"
                />
            </label>
        </form>
    )
};

export default UpdateMovie;