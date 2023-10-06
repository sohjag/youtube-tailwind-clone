import { Router, useRouter } from "next/router";
import { VideoCard } from "./VideoCard";
export const Videos = [
  {
    title: "Cozy Jazz House Mix - Amii Watson B2B Jimmi Harvey",
    image: "./channels4_profile.jpg",
    thumbnail: "./thumbnail.jpg",
    author: "Flavour Trip",
    views: "32M views",
    timestamp: "9 months ago",
  },
  {
    title: "Tame Impala - InnerSpeaker (Live From Wave House)",
    image: "./channels4_profile.jpg",
    thumbnail: "./thumbnail.jpg",
    author: "Tame Impala",
    views: "32M views",
    timestamp: "9 months ago",
  },
  {
    title: "Groovy Disco and R&B Mix at a New York Basement Party | Tinzo",
    image: "./channels4_profile.jpg",
    thumbnail: "./thumbnail.jpg",
    author: "Book Club",
    views: "5M views",
    timestamp: "9 months ago",
  },
  {
    title: "Music for Work — Mind Boosting Mix",
    image: "./channels4_profile.jpg",
    thumbnail: "./thumbnail.jpg",
    author: "Chill Music Lab",
    views: "1M views",
    timestamp: "9 months ago",
  },
  {
    title: "Cozy Jazz House Mix - Amii Watson B2B Jimmi Harvey",
    image: "./channels4_profile.jpg",
    thumbnail: "./thumbnail.jpg",
    author: "Flavour Trip",
    views: "32M views",
    timestamp: "9 months ago",
  },
  {
    title: "Cozy Jazz House Mix - Amii Watson B2B Jimmi Harvey",
    image: "./channels4_profile.jpg",
    thumbnail: "./thumbnail.jpg",
    author: "Flavour Trip",
    views: "32M views",
    timestamp: "9 months ago",
  },
  {
    title: "Tame Impala - InnerSpeaker (Live From Wave House)",
    image: "./channels4_profile.jpg",
    thumbnail: "./thumbnail.jpg",
    author: "Tame Impala",
    views: "32M views",
    timestamp: "9 months ago",
  },
  {
    title: "Groovy Disco and R&B Mix at a New York Basement Party | Tinzo",
    image: "./channels4_profile.jpg",
    thumbnail: "./thumbnail.jpg",
    author: "Book Club",
    views: "5M views",
    timestamp: "9 months ago",
  },
  {
    title: "Music for Work and Concentration — Mind Boosting Mix",
    image: "./channels4_profile.jpg",
    thumbnail: "./thumbnail.jpg",
    author: "Chill Music Lab",
    views: "1M views",
    timestamp: "9 months ago",
  },
  {
    title: "Cozy Jazz House Mix - Amii Watson B2B Jimmi Harvey",
    image: "./channels4_profile.jpg",
    thumbnail: "./thumbnail.jpg",
    author: "Flavour Trip",
    views: "32M views",
    timestamp: "9 months ago",
  },
  {
    title: "Deep house - Amii Watson B2B Jimmi Harvey",
    image: "./channels4_profile.jpg",
    thumbnail: "./thumbnail.jpg",
    author: "Flavour Trip",
    views: "8M views",
    timestamp: "10 months ago",
  },
  {
    title: "Cozy Jazz House Mix - Amii Watson B2B Jimmi Harvey",
    image: "./channels4_profile.jpg",
    thumbnail: "./thumbnail.jpg",
    author: "Flavour Trip",
    views: "32M views",
    timestamp: "9 months ago",
  },
];

export const VideoGrid = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 hover:cursor-pointer">
      {Videos.map((video) => (
        <div
          onClick={() => {
            router.push("./video");
          }}
        >
          <VideoCard
            title={video.title}
            image={video.image}
            thumbnail={video.thumbnail}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          />
        </div>
      ))}
    </div>
  );
};
