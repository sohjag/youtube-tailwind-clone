import { Appbar } from "@/components/Appbar";
import { VideoCard } from "@/components/VideoCard";
import { Videos } from "@/components/VideoGrid";
import { Router, useRouter } from "next/router";
import { VideoGrid2 } from "@/components/VideoGrid2";
import { VideoPageCard } from "@/components/VideoPageCard";

export default function video() {
  return (
    <div>
      <Appbar />
      <div className="flex">
        <div className="flex sm:w-9/12">
          <VideoPageCard
            title={Videos[0].title}
            image={Videos[0].image}
            thumbnail={Videos[0].thumbnail}
            author={Videos[0].author}
            views={Videos[0].views}
            timestamp={Videos[0].timestamp}
          />
        </div>
        <div className="flex sm:w-3/12">
          <VideoGrid2 />
        </div>
      </div>
    </div>
  );
}
