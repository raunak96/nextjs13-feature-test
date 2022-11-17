import { Suspense } from "react";
import TodosList from "./todos/TodosList";

const Home = () => {
	return (
		<div className="flex flex-col space-y-5 m-4">
			<Suspense
				fallback={<p className="text-green-500">Loading the todos</p>}>
				<div className="flex space-x-2">
					{/* @ts-expect-error Server Component */}
					<TodosList />
				</div>
			</Suspense>

			<Suspense
				fallback={<p className="text-blue-500">Loading the posts</p>}>
				<div className="flex space-x-2">
					{/* @ts-expect-error Server Component */}
					<TodosList />
				</div>
			</Suspense>
		</div>
	);
};
export default Home;
