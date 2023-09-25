import { Router, useRouter } from "next/router";
import { VideoCard2 } from "./VideoCard2";
import { Videos } from "./VideoGrid";

export const VideoGrid2 = () => {
  const router = useRouter();

  return (
    <div className="grid sm:grid-cols-1">
      {Videos.map((video) => (
        <div
          onClick={() => {
            router.push("./video");
          }}
        >
          <VideoCard2
            title={video.title}
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
