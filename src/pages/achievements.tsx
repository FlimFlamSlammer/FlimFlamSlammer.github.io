import "@radix-ui/themes/styles.css";
import { Heading, Text } from "@radix-ui/themes";
import { Header } from "../components/header";

export default function Home() {
	return (
		<>
			<Header activeLink="achievements" />
			<main className={`min-h-screen`}>
				<div className="flex flex-col py-10 px-[30%] gap-6">
					<Heading size="8" weight="bold" align="left">
						Achievements :o
					</Heading>
					<Text size="3">
						<ul>
							<li>1st Place in OSN-K Sidoarjo</li>
							<li>2nd Winner of S2lC</li>
							<li>I forgot the rest</li>
						</ul>
					</Text>
				</div>
			</main>
		</>
	);
}
