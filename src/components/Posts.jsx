import { Post } from "./Post"
import{posts} from "../posts.json"

export function Posts () {

  return (
    <div>
        <ul>
            {posts.map((post) => (
                <Post key={post.id} titulo={post.title} paragrafo={post.description }/>
            ))}
        
        </ul>
       
       
    </div>
  )
}