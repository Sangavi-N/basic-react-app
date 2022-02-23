import ReactDOM from "react-dom";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import Post from "./Post";

export default function Axiosmethod() {
    const [state, setState] = useState({
        users: [],
        isLoading: true,
        errors: null
      });

      const _getData = () => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
        setState({users:response.data, isLoading:false});
        });
    };
    useEffect(() => _getData(), []);
      return (

        <div>
        {!state.isLoading ? 
        state.users.map(user => {
                const { id, title, body, image } = user;
                
     return(
        <div key={id}>
            <div>this is post index</div>
            <Post title={title} body = {body}/>
        </div>
        
        )
     }):<div></div>}
    </div>
      );

}  
