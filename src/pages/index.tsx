import "tailwindcss/tailwind.css"
import "../app/globals.css"
import SideNav from "@/components/SideNav/SideNav";

export default function Home() {

	return (
		<main className="flex flex-col gap-2 min-h-screen main-bg">
			<SideNav/>
		</main>
	);
}
