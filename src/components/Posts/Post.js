import React from 'react'
import axios from "axios";
import  { useEffect, useState } from 'react';

function Post(props){
    const{title,body}=props


     return(

         <div>
            <h1>{title}</h1>
            <h1>{body}</h1>
            </div>
      )
    }

export default Post
