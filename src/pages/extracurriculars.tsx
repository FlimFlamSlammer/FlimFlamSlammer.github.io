import "@radix-ui/themes/styles.css";
import { Heading, Text } from "@radix-ui/themes";
import { Header } from "../components/header";

export default function Home() {
	return (
		<>
			<Header activeLink="extracurriculars" />
			<main className={`min-h-screen`}>
				<div className="flex flex-col py-10 px-[30%] gap-3">
					<Heading size="8" weight="bold" align="left">
						Extracurriculars
					</Heading>
					<Text size="5">Here are the extracurriculars I participate in:</Text>
					<Text size="3">
						<ul>
							<li>Web Development Course</li>
							<li>Maths Course</li>
							<li>Chinese Language Course</li>
							<li>German Language Course</li>
							<li>Informatics Course</li>
						</ul>
					</Text>
				</div>
			</main>
		</>
	);
}
