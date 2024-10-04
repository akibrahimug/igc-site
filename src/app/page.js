import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import ScrollIndicator from "@/components/Indicators";
import { getStoryblokApi } from "@storyblok/react/rsc";

export const metadata = {
	title: "IGC Home",
}
export default async function Home() {
	const {	data: { story } } = await getStoryblokApi().get(`cdn/stories/igc/home`, { version: "draft" });

	return (
		<>
			<div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth relative z-0">
				<Hero blok={story?.content} />
				<NewsSection />
			</div>
			<ScrollIndicator />
		</>
	);
}


