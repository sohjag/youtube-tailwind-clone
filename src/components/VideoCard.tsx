export function VideoCard(props: any) {
  return (
    <div className="p-4">
      <img src={props.thumbnail} className="rounded-lg"></img>

      <div className="grid grid-cols-12 pt-2">
        <img
          src={props.image}
          className="rounded-full col-span-2 w-10 h-10"
        ></img>
        <div className="col-span-10">
          <div>{props.title}</div>
          <div className="text-gray-500">{props.author}</div>
          <div className="text-gray-500">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
