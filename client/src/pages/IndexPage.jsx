import { useEffect, useState } from "react";
import Post from "../Post";

export default function IndexPage() {
    const [posts, setPosts]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/post').then(response => {
            response.json().then((data)=>{
                setPosts(data);
            })
        })
    }, []);
    return (
        <>
            {
                posts.length > 0 && posts.map(post => (
                    <Post key={post._id} {...post}/>
                ))
            }
        </>
    );
}
