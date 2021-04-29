import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from "react-router-dom";

export const PostsCommentsComponent = () => {
        let history = useHistory();
      
        function handleClick() {
          history.push("/posts");
        }
    
    let { id } = useParams();

    const [userPostComments, setUserPostComments] = useState()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(data =>{
            setUserPostComments(data)
        })
        }, [])
        console.log(userPostComments)
    
    let comments
    if (!userPostComments){
        return <h1>Loading1...</h1>
    }else{
        [comments] = userPostComments
        return (<>
            <button type="button" onClick={handleClick}>
                Go home
            </button>
            <div>
                {
                userPostComments.map((userPostComments)=>
                    <li key={userPostComments.id}>{userPostComments.body}</li>)
                }
            </div></>
        )
    }
}
