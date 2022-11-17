"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

const Search = () => {
	const searchRef = useRef<HTMLInputElement | null>(null);
	const router = useRouter();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		router.push(`/search/${searchRef?.current?.value ?? ""}`);
		e.target.reset();
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder="Search Term"
				className="outline-none px-2 py-3 border-2 mr-2 rounded-md"
				type="text"
				id="search"
				ref={searchRef}
			/>
			<button
				className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
				type="submit">
				Search
			</button>
		</form>
	);
};
export default Search;
