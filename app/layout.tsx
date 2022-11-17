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
			<head>
				<title>NextJS 13 Demo</title>
				<meta
					content="width=device-width, initial-scale=1"
					name="viewport"
				/>
				<meta name="keywords" content="nextjs13, demo" />
				<meta
					name="description"
					content="Testing the NextJS 13 features"
				/>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
