"use client"
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import ScrollIndicator from "@/components/Indicators";
import { getStoryblokApi } from "@storyblok/react/rsc";
import Gallery from "@/components/Gallery";

export default async function Home() {
	const {	data: { story } } = await getStoryblokApi().get(`cdn/stories/igc/home`, { version: "draft" });

	return (
		<div className="bg-black">
				<Hero blok={story?.content} />
				<Gallery blok={story?.content}/>
				<NewsSection />
			<ScrollIndicator />
		</div>
	);
}


