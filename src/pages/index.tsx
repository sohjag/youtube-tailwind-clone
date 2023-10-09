import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { Appbar } from "@/components/Appbar";
import VerticalBar from "@/components/VerticalBar";
import TrendTopics from "@/components/TrendTopics";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Appbar />
      <div className="flex">
        <VerticalBar />
        <div className="grid grid-cols-1">
          <TrendTopics />
          <VideoGrid />
        </div>
      </div>
    </div>
  );
}
