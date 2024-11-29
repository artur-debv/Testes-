import { useState } from "react"
import axios from "axios"
import Button from "./Button"

interface Task {
    id: string,
    title: string
}

const Tasks = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    const handleClick = async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos?limit=4");

        setTasks(data);
    }

    return (
        <>
            <h1>Tasks From Api</h1>
            <Button disabled={false} onClick={handleClick}>Get tasks from api</Button>
            {tasks.map(task =>
                <p key={task.id}>{task.title}</p>)
            }
        </>
    )
}

export default Tasks