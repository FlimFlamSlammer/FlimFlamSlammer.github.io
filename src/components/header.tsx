import "@radix-ui/themes/styles.css";
import { TabNav } from "@radix-ui/themes";

type HeaderProps = {
	activeLink: string;
};

export function Header({ activeLink }: HeaderProps) {
	return (
		<header>
			<TabNav.Root justify="center">
				<TabNav.Link href="/" active={activeLink === "home" ? true : false}>
					Home
				</TabNav.Link>

				<TabNav.Link
					href="/about"
					active={activeLink === "about" ? true : false}
				>
					About
				</TabNav.Link>

				<TabNav.Link
					href="/achievements"
					active={activeLink === "achievements" ? true : false}
				>
					Achievements
				</TabNav.Link>

				<TabNav.Link
					href="/extracurriculars"
					active={activeLink === "extracurriculars" ? true : false}
				>
					Extracurriculars
				</TabNav.Link>

				<TabNav.Link
					href="/gallery"
					active={activeLink === "gallery" ? true : false}
				>
					Gallery
				</TabNav.Link>

				<TabNav.Link
					href="/contact"
					active={activeLink === "contact" ? true : false}
				>
					Contact
				</TabNav.Link>
			</TabNav.Root>
		</header>
	);
}
