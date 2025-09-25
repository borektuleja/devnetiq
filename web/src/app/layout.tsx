import type { Metadata } from "next";
import { Google_Sans_Code } from "next/font/google";
import "./globals.css";

const googleSansCode = Google_Sans_Code({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	description: "Devnetiq Web App",
	title: "Devnetiq",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<script
					crossOrigin="anonymous"
					src="//unpkg.com/react-scan/dist/auto.global.js"
				/>
			</head>
			<body className={`${googleSansCode.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
