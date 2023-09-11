import type { Metadata } from "next";
import AutoResizeTextArea from "@/app/_components/AutoResizeTextArea/AutoResizeTextArea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
};

type Post = {
  id: string;
  name: string;
  userId: string;
  iconUrl: string;
  body: string;
};

const posts: Array<Post> = [
  {
    id: "1",
    name: "neco3🐈",
    userId: "neco3coffee",
    iconUrl: "https://placekitten.com/50/50",
    body: "おはようございます! 今日も1日楽しんでいきます! エニタイムからの朝マックカフェラテは素晴らしい!",
  },
  {
    id: "2",
    name: "cat",
    userId: "cateeeeeeee",
    iconUrl: "https://placekitten.com/50/50",
    body: "おはようございまにゃ! 今日も1日楽しんでいきまにゃ! おやすみなさいにゃ",
  },
  {
    id: "3",
    name: "shad🎨",
    userId: "shadcn",
    iconUrl: "https://github.com/shadcn.png",
    body: "Re-usable components built using Radix UI and Tailwind CSS. This is NOT a component library. It's a collection of re-usable components that you can copy and paste into your apps.",
  },
  {
    id: "4",
    name: "neco3🐈",
    userId: "neco3coffee",
    iconUrl: "https://placekitten.com/50/50",
    body: "おはようございます! 今日も1日楽しんでいきます! エニタイムからの朝マックカフェラテは素晴らしい!",
  },
  {
    id: "5",
    name: "neco3🐈",
    userId: "neco3coffee",
    iconUrl: "https://placekitten.com/50/50",
    body: "おはようございます! 今日も1日楽しんでいきます! エニタイムからの朝マックカフェラテは素晴らしい!",
  },
  {
    id: "6",
    name: "cat",
    userId: "cateeeeeeee",
    iconUrl: "https://placekitten.com/50/50",
    body: "おはようございまにゃ! 今日も1日楽しんでいきまにゃ! おやすみなさいにゃ",
  },
  {
    id: "7",
    name: "shad🎨",
    userId: "shadcn",
    iconUrl: "https://github.com/shadcn.png",
    body: "Re-usable components built using Radix UI and Tailwind CSS. This is NOT a component library. It's a collection of re-usable components that you can copy and paste into your apps.",
  },
  {
    id: "8",
    name: "neco3🐈",
    userId: "neco3coffee",
    iconUrl: "https://placekitten.com/50/50",
    body: "おはようございます! 今日も1日楽しんでいきます! エニタイムからの朝マックカフェラテは素晴らしい!",
  },
];

export default function Page() {
  return (
    // HomeContainer
    <div className="flex flex-col">
      {/* PostForm */}
      <div className="flex flex-row border">
        <div className="w-1/6 flex justify-center mt-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-5/6 flex flex-col pr-4">
          <AutoResizeTextArea id="text" />
          <div className="flex justify-end mb-4 items-center">
            <Button variant="secondary" size="sm">
              <Mail className="mr-2 h-5 w-5" /> <span>投稿する</span>
            </Button>
          </div>
        </div>
      </div>
      {/* PostList */}
      <div className="flex flex-col">
        {/* Post */}
        {posts.map(({ id, name, userId, iconUrl, body }) => {
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
        })}
      </div>
    </div>
  );
}
