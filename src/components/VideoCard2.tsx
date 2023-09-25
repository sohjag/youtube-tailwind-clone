export function VideoCard2(props: any) {
  return (
    <div className="flex justify-between p-4">
      <div className="w-52 pr-2">
        <img className="rounded-md" src={props.thumbnail}></img>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-10">
          <div className="text-sm pb-3">{props.title.slice(0, 30) + "..."}</div>
          <div className="text-gray-500 text-xs">{props.author}</div>
          <div className="text-gray-500 text-xs">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
