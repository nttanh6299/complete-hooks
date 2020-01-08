import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DataFetchingOne = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () => {
        id ? setIdFromButtonClick(id) : setPost({});
    }

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                setPost(res.data);
            })
            .catch(err => console.log(err));
    }, [idFromButtonClick]);

    return ( <div>
        <input type='text' value={id} onChange={e => setId(e.target.value)} />
        <button type='button' onClick={handleClick}>Fetch post</button>
        <p>{post && post.title}</p>
    </div> );
}