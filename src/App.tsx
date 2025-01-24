import React, { useState } from "react";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { todoType } from "./types/todo.type";

function App() {
	const [todoList, setTodos] = useState<todoType[]>([]);
	const [value, setValue] = useState("");
	const [filter, setFilter] = useState<"active" | "completed" | "all">("all");
	const notCompletedTodoCount = todoList.filter(
		(todo) => todo.isCompleted === false
	).length;

	const enterHandler = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			e.preventDefault();
			const newTodo: todoType = {
				id: Date.now(),
				title: value,
				isCompleted: false,
			};
			create(newTodo);
			setValue("");
		}
	};

	const create = (newTodo: todoType) => {
		setTodos([newTodo, ...todoList]);
	};

	const removeTodoItem = (id: number) => {
		setTodos(todoList.filter((todo) => todo.id !== id));
	};

	const toggleComplete = (id: number) => {
		const updatedTodos = todoList.map((todo) => {
			if (todo && todo.id === id) {
				return { ...todo, isCompleted: !todo.isCompleted };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const clearCompleted = () => {
		setTodos(todoList.filter((todo) => todo.isCompleted === false));
	};

	return (
		<section className="mx-auto p-6 px-8">
			<form className="bg-white rounded">
				<label className="block text-gray-700 text-sm font-bold mb-2">
					<h1 className="text-center text-3xl">TO-DO</h1>
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					placeholder="What to do?"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onKeyDown={enterHandler}
				/>
			</form>
			<TodoItems
				todos={todoList.filter((todo) => {
					switch (filter) {
						case "active":
							return todo.isCompleted === false;
						case "completed":
							return todo.isCompleted === true;
						default:
							return todo;
					}
				})}
				removeTodoItem={removeTodoItem}
				toggleComplete={toggleComplete}
			/>
			<div className="flex justify-between gap-5 px-5 py-3 bg-gray-50">
				<span>
					{notCompletedTodoCount} {notCompletedTodoCount > 1 ? "items" : "item"}{" "}
					left
				</span>
				<div className="flex gap-4">
					<div>
						<input
							className="hidden peer"
							type="radio"
							name="filter"
							id="all"
							defaultChecked
						/>
						<label
							onClick={() => setFilter("all")}
							htmlFor="all"
							className="cursor-pointer transition-all px-2 border-1 border-transparent rounded peer-checked:border-1 peer-checked:border-amber-500"
						>
							All
						</label>
					</div>
					<div>
						<input
							className="hidden peer"
							type="radio"
							name="filter"
							id="active"
						/>
						<label
							onClick={() => setFilter("active")}
							htmlFor="active"
							className="cursor-pointer transition-all px-2 border-1 border-transparent rounded peer-checked:border-1 peer-checked:border-amber-500"
						>
							Active
						</label>
					</div>
					<div>
						<input
							className="hidden peer"
							type="radio"
							name="filter"
							id="completed"
						/>
						<label
							onClick={() => setFilter("completed")}
							htmlFor="completed"
							className="cursor-pointer transition-all px-2 border-1 border-transparent rounded peer-checked:border-1 peer-checked:border-amber-500"
						>
							Completed
						</label>
					</div>
				</div>
				<button
					className="cursor-pointer"
					onClick={clearCompleted}
				>
					Clear completed
				</button>
			</div>
		</section>
	);
}

export default App;
