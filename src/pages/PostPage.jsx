import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PostPage () {
    const { id } = useParams();
    const [post, setPost] = useState(null)
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(data => data.json())
        .then(data => setPost(data))
        .catch(e => {
            setIsError(true)
            setErrorMessage(e.message)
        });
    }, [])

    if(isError) return errorMessage;
    if(!post) return 'Загрузка...';

    return (
        <>
            <Link to={'/posts'}>{'<--'}Back</Link>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
        
    )
}