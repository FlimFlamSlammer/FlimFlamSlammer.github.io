import "@radix-ui/themes/styles.css";
import { DataList, Heading, Text } from "@radix-ui/themes";
import { Header } from "../components/header";

export default function Home() {
	return (
		<>
			<Header activeLink="contact" />
			<main className={`min-h-screen`}>
				<div className="flex flex-col py-10 px-[30%] gap-6">
					<Heading size="8" weight="bold" align="left">
						Contacts
					</Heading>
					<DataList.Root size="3">
						<DataList.Item>
							<DataList.Label>Phone</DataList.Label>
							<DataList.Value>+62 878 5497 6718</DataList.Value>
						</DataList.Item>
						<DataList.Item>
							<DataList.Label>Email</DataList.Label>
							<DataList.Value>lionelchris1509@gmail.com</DataList.Value>
						</DataList.Item>
					</DataList.Root>
				</div>
			</main>
		</>
	);
}
