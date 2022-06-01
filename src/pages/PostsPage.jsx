import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function PostsPage () {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data => setPosts(data))
    },[])

    return (
        <ul className="posts-list">
            {
                posts.map(post => (
                    <li className="post-item">
                        {/* <h2> */}
                            <Link className="post-link" to={`/posts/${post.id}`}>{post.title}</Link>
                        {/* </h2> */}
                    </li>
                ))
            }
        </ul>
    )
    
}