import "@radix-ui/themes/styles.css";
import { Heading, Text } from "@radix-ui/themes";
import { Header } from "../components/header";

export default function Home() {
	return (
		<>
			<Header activeLink="home" />
			<main className={`min-h-screen`}>
				<div className="flex flex-col py-10 px-[30%] gap-6">
					<Heading size="8" weight="bold" align="left">
						Hello! &#128075; <br />
						I&apos;m Lionel Wijaya.
					</Heading>
					<Text size="5">
						I&apos;m a student from Indonesia, currently studying at Petra
						Acitya CJHS.
					</Text>
				</div>
			</main>
		</>
	);
}
