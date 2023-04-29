import { Post } from "./Post"

export function Posts () {

    const title = "Postagem 1"
    const descriptions = "lorem ipsum dolor sit amet, consectetur adipiscing elit post 1."
    const title2 = "Postagem 2"
    const descriptions2 = "lorem ipsum dolor sit amet, consectetur adipiscing elit post 2."



  return (
    <div>
        <ul>
             <Post titulo={title} paragrafo={descriptions} />
            <Post titulo={title2} paragrafo={descriptions2} />
        
        </ul>
       
       
    </div>
  )
}