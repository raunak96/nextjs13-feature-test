import Link from "next/link";
import { Todo } from "../../types";

const fetchTodos = async () => {
	// timeout for 1-5 seconds randomly
	const interval = Math.floor(Math.random() * 5 + 1) * 1000;
	await new Promise(resolve => setTimeout(resolve, interval));
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
		<>
			{todos.map((todo: Todo) => (
				<p key={todo.id}>
					<Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
				</p>
			))}
		</>
	);
};
export default TodosList;
