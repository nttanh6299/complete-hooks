import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    post: {},
    error: ''
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                post: action.payload,
                error: ''
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                post: {},
                error: 'Something went wrong'
            };
        default:
            return state;
    }
};

export const DataFetchingOne = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { loading, post, error } = state;

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${Math.floor(Math.random() * 100) + 1}`)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' });
            });
    }, []);

    return ( <div>
        {loading ? 'Loading......' : post.title}
        {error ? error : null}
    </div> );
}