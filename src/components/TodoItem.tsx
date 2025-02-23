function TodoItem({
	id,
	title,
	isCompleted,
	removeTodoItem,
	toggleComplete,
}: {
	id: number;
	title: string;
	isCompleted: boolean;
	removeTodoItem: (id: number) => void;
	toggleComplete: (id: number) => void;
}) {
	return (
		<div className="flex justify-between  border-gray-300 bg-gray-100 border-b-1 px-5">
			<div className="flex gap-x-2 p-2">
				<input
					type="checkbox"
					checked={isCompleted}
					onChange={() => toggleComplete(id)}
				/>
				<p>{title}</p>
			</div>
			<button
				className="p-2 cursor-pointer"
				type="button"
				onClick={() => removeTodoItem(id)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="15px"
					height="15px"
					viewBox="0 0 20 20"
					fill="none"
				>
					<path
						fill="#000000"
						d="M7 1a2 2 0 00-2 2v2H2a1 1 0 000 2h.884c.036.338.078.754.12 1.213.11 1.202.218 2.664.218 3.787 0 1.47-.183 3.508-.315 4.776a2.015 2.015 0 002 2.224h10.186a2.015 2.015 0 002-2.224c-.132-1.268-.315-3.306-.315-4.776 0-1.123.107-2.585.218-3.787.042-.459.084-.875.12-1.213H18a1 1 0 100-2h-3V3a2 2 0 00-2-2H7zm6 4V3H7v2h6zM4.996 8.03c-.035-.378-.07-.728-.101-1.03h10.21a81.66 81.66 0 00-.1 1.03c-.112 1.212-.227 2.75-.227 3.97 0 1.584.194 3.714.325 4.982v.007a.02.02 0 01-.005.008l-.003.003H4.905a.024.024 0 01-.008-.01v-.008c.131-1.268.325-3.398.325-4.982 0-1.22-.115-2.758-.226-3.97zM8 8a1 1 0 011 1v6a1 1 0 11-2 0V9a1 1 0 011-1zm5 1a1 1 0 10-2 0v6a1 1 0 102 0V9z"
					/>
				</svg>
			</button>
		</div>
	);
}

export default TodoItem;
