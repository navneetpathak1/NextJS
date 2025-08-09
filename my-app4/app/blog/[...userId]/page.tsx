import axios from "axios";



export default async function BlogPage({params}) {
    const userId = (await params).userId;

    return <div>
        Blog number {JSON.stringify(userId)}
    </div>

}