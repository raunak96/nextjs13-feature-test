import Link from "next/link";

const Header = () => {
	return (
		<header className="p-5 bg-blue-500">
			<ul className="flex items-center justify-between text-white">
				<li className="rounded-md opacity-80 hover:opacity-100 hover:underline">
					<Link href="/">Home</Link>
				</li>
				<li className="rounded-md opacity-80 hover:opacity-100 hover:underline">
					<Link href="/todos">Todos</Link>
				</li>
			</ul>
		</header>
	);
};
export default Header;
