import TodosList from "./TodosList";

const Todos = () => {
	return (
		<div>
			{/* @ts-expect-error Server Component */}
			<TodosList />
		</div>
	);
};
export default Todos;
