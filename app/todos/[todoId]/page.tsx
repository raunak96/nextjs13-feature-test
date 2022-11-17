import { Todo } from "../../../types";
import { notFound } from "next/navigation";

type PageProps = {
	params: {
		todoId: string;
	};
};

export const dynamicParams = true; // true is default and same as fallback 'blocking'. false same as fallback false

const fetchTodo = async (todoId: string) => {
	/* By default, dynamic pages are server(dynamic) rendered */
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${todoId}`
	);
	const todo: Todo = await res.json();
	return todo;
};

const fetchTodoStatic = async (todoId: string) => {
	/* By force-cache, we are making sure data is cached hence it becomes SSG */
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${todoId}`,
		{
			cache: "force-cache",
		}
	);
	const todo: Todo = await res.json();
	return todo;
};

const fetchTodoISR = async (todoId: string) => {
	/* By using revalidate, we are making it ISR */
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${todoId}`,
		{
			next: { revalidate: 60 },
		}
	);
	const todo: Todo = await res.json();
	return todo;
};

const TodoPage = async ({ params: { todoId } }: PageProps) => {
	const todo = await fetchTodoISR(todoId);
	if (!todo?.id) return notFound();
	return (
		<div className="p-10 bg-yellow-200 border-2 my-5 shadow-lg max-w-lg mx-auto">
			<p>
				#{todo.id} - {todo.title}
			</p>
			<p>Done: {todo.completed ? "Yes" : "No"}</p>
			<p className="border-t border-black mt-5 text-right">
				By User : {todo.userId}
			</p>
		</div>
	);
};
export default TodoPage;

/* replacement for getStaticPaths */
export const generateStaticParams = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
	const todos: Todo[] = await res.json();
	return todos.slice(0, 10).map(todo => ({
		todoId: todo.id.toString(),
	}));
};
