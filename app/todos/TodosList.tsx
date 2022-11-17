import Link from "next/link";
import { Todo } from "../../types";

const fetchTodos = async () => {
	// By default it is static rendering(SSG) (previously getStaticProps)
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
	// or
	/* const res = await fetch("https://jsonplaceholder.typicode.com/todos/",{
        cache:"force-cache"
    }); */

	// For ISR, next property added to fetch library
	/* const res = await fetch("https://jsonplaceholder.typicode.com/todos/",{
        next:{revalidate:60}
    }); */

	// To make it dynamic rendering (previously getServerSideProps)
	/* const res = await fetch("https://jsonplaceholder.typicode.com/todos/",{
        cache:"no-store"
    }); */

	const todos: Todo[] = await res.json();
	return todos;
};
const TodosList = async () => {
	const todos = await fetchTodos();
	return (
		<div>
			{todos.map((todo: Todo) => (
				<p key={todo.id}>
					<Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
				</p>
			))}
		</div>
	);
};
export default TodosList;
