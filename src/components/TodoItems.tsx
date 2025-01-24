import TodoItem from "./TodoItem";
import { todoType } from "../types/todo.type";

function TodoItems({
	todos,
	removeTodoItem,
	toggleComplete,
}: {
	todos: todoType[];
	removeTodoItem: (id: number) => void;
	toggleComplete: (id: number) => void;
}) {
	return (
		<div>
			{todos.map((item) => (
				<TodoItem
					key={item.id}
					id={item.id}
					title={item.title}
					isCompleted={item.isCompleted}
					removeTodoItem={removeTodoItem}
					toggleComplete={toggleComplete}
				/>
			))}
		</div>
	);
}

export default TodoItems;
