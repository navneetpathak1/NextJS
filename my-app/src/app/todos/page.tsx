import axios from "axios";

async function getTodos() {
    const response = await axios.get("http://localhost:3000/api/v1/user");
    return response.data;
}


export default async function Todos() {

    const todo = await getTodos();

    return (
        <div>
            <Todo user={todo.user} email={todo.email} key={todo.userId}/>
        </div>
    )
}

interface ITodo {
    userId?: number;
    user: string;
    email: boolean;
}

function Todo({user, email} : ITodo) {
    return (
        <div>
            {user} {email}
        </div>
    )
}