import TodosList from "./TodosList";

export default function TodosLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex gap-2 m-4">
			<div>
				{/* @ts-expect-error Server Component */}
				<TodosList />
			</div>
			<div className="flex-1">{children}</div>
		</main>
	);
}
