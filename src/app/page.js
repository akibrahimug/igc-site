import Hero from "@/components/Hero";
import HomeSection from "@/components/HomeSection2";
import ScrollIndicator from "@/components/Indicators";
import { getStoryblokApi } from "@storyblok/react/rsc";

export const metadata = {
	title: "IGC Home",
}
export default async function Home() {
	const {	data: { story } } = await fetchData();

	return (
		<>
			<div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth relative z-0">
				<Hero blok={story?.content} />
				<HomeSection blok={story?.content} />
			</div>
			<ScrollIndicator />
		</>
	);
}

export async function fetchData() {
	let sbParams = { version: "draft" };

	const storyblokApi = getStoryblokApi();
	return storyblokApi.get(`cdn/stories/igc/home`, sbParams, { cache: "no-store" });
}
