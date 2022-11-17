"use client";

import { useRouter } from "next/navigation";

const Notfound = () => {
	const router = useRouter();
	return (
		<div className="z-30 bg-black fixed inset-0 flex flex-col gap-2 justify-center items-center">
			<p className="text-white text-3xl font-bold">
				OOps!! This todo does not exist.
			</p>
			<button
				className="p-4 bg-white text-black"
				onClick={() => router.back()}>
				Back to Home
			</button>
		</div>
	);
};
export default Notfound;
