import "../styles/globals.css";
import { Oswald } from "@next/font/google";
import Header from "./Header";

const oswald = Oswald({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-oswald",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={oswald.variable}>
			<head />
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
