import axios from "axios";



export default async function BlogPage({params}: {
    params: {
        userId: string
    }
} ) {
    const userId = (await params).userId;

    const response = await axios(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    const data = response.data;
    return <div>
        Blog number {userId}
        title- {data.title}
        body - {data.body}
    </div>

}