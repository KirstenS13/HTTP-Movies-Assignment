import React from 'react';

const AddMovie = () => {
    return (
        <form>
            <h3>Add a Movie</h3>
            <label htmlFor="title">Title:</label>
            <input 
                type="text"
                name="title"
                id="title"
                placeholder="Enter title..."
            />
        </form>
    )
}

export default AddMovie;