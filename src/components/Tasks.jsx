import NewTask from "./NewTask";

export default function Tasks({ tasks, SelectedProjectId, onAdd, onDelete }) {
    const projectTasks = tasks.filter((task) => task.projectId === SelectedProjectId);

    return (
        <section>
            <h2 className="text-2xl font-bold text-slate-700 mb-4">Tasks</h2>
            <NewTask onAdd={onAdd} />
            {projectTasks.length === 0 && (<p className="text-stone-800 my-4">This project does not have any tasks yet.</p>)}
            {projectTasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {projectTasks.map((task) =>
                        <li key={task.id} className="flex justify-between my-4">
                            <span>{task.text}</span>
                            <button onClick={() => onDelete(task.id)} className="text-stone-700 hover:text-red-500">Clear</button>
                        </li>)}
                </ul>
            )}
        </section>
    )
}