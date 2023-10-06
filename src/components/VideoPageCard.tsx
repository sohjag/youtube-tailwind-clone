export function VideoPageCard(props: any) {
  return (
    <div className="p-4">
      <img src={props.thumbnail}></img>
      <div className="mt-5 mb-2">{props.title}</div>
      <div className="flex justify-items-start pt-2">
        <div className="pr-5">
          <img src={props.image} className="rounded-full w-10 h-10"></img>
        </div>
        <div className="pr-5">
          <div className="text-gray-500">{props.author}</div>
          <div className="text-gray-500 text-xs">1.5M subscribers</div>
        </div>
        <button className="bg-white hover:bg-gray-300 text-black pl-3 pr-3 rounded-3xl text-sm">
          Subscribe
        </button>
      </div>
      <div className="rounded-md bg-[#222222] pt-2 pb-5 pl-1 mt-3">
        {props.views} | {props.timestamp}
      </div>
    </div>
  );
}
