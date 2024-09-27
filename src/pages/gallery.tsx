import Image from "next/image";

import "@radix-ui/themes/styles.css";
import { Heading, Text } from "@radix-ui/themes";
import { Header } from "../components/header";

export default function Home() {
	return (
		<>
			<Header activeLink="gallery" />
			<main className={`min-h-screen`}>
				<div className="flex flex-col py-10 px-[30%] gap-6">
					<Heading size="8" weight="bold" align="left">
						Gallery
					</Heading>
					<Text size="5">
						I don&apos;t really have pictures of myself so here are some
						pictures of my projects
					</Text>
				</div>
				<div className="flex flex-col px-[20%] gap-3">
					<div className="w-1/2 flex flex-row gap-3">
						<Image
							src="/rasterizer.png"
							alt="a 3d raster renderer"
							width="896"
							height="714"
							className="w-auto object-cover"
						></Image>
						<Image
							src="/pacman.png"
							alt="a pacman remake"
							width="1193"
							height="884"
							className="w-auto object-cover"
						></Image>
					</div>
					<div className="w-1/2 flex flex-row gap-3">
						<Image
							src="/donut.png"
							alt="a catching donut game"
							width="1193"
							height="884"
							className="w-auto object-cover"
						></Image>
						<Image
							src="/wireframe.png"
							alt="a 3d wireframe renderer"
							width="896"
							height="714"
							className="w-auto object-cover"
						></Image>
					</div>
					<div className="w-full flex flex-row gap-3">
						<Image
							src="/leener.png"
							alt="personal website"
							width="1697"
							height="959"
							className="w-auto object-cover"
						></Image>
					</div>
					<div className="w-1/2 flex flex-row gap-3">
						<Image
							src="/aotv.png"
							alt="cool game about virus"
							width="1192"
							height="891"
							className="w-auto object-cover"
						></Image>
						<Image
							src="/blocks.png"
							alt="a bunch of bouncy squares"
							width="1193"
							height="884"
							className="w-auto object-cover"
						></Image>
					</div>
				</div>
			</main>
		</>
	);
}
