import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";

interface Props {
  id: string;
  userId: string;
  name: string;
  iconUrl: string;
  body: string;
}

const Post = ({ id, userId, name, iconUrl, body }: Props) => {
  return (
    <div className="flex flex-row border" key={id}>
      <div className="w-1/6 flex justify-center mt-4">
        <Avatar>
          <AvatarImage src={iconUrl} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-5/6 flex flex-col pl-2 pr-4 mb-4">
        <p className="mt-4 mb-5">
          <span>{name}</span>
          <span className="ml-1 text-slate-500">@{userId}</span>{" "}
        </p>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Post;
