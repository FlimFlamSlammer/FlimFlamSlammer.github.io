import "@radix-ui/themes/styles.css";
import { Heading, Text } from "@radix-ui/themes";
import { Header } from "../components/header";

export default function Home() {
	return (
		<>
			<Header activeLink="about" />
			<main className={`min-h-screen`}>
				<div className="flex flex-col py-10 px-[30%] gap-6">
					<Heading size="8" weight="bold" align="left">
						About Me
					</Heading>
					<Text size="3">
						I&apos;m Lionel Wijaya, a 14-year-old student from Indonesia,
						currently studying at Petra Acitya CJHS. I like to play video games
						and code. Sometimes I play the piano too. I frequently join maths
						competitions. I&apos;m currently going through school and studying
						for informatics competitions.
					</Text>
				</div>
			</main>
		</>
	);
}
