import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { Mail } from "lucide-react";
import AutoResizeTextArea from "../../_components/AutoResizeTextArea/AutoResizeTextArea";

const PostForm = () => {
  return (
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
  );
};

export default PostForm;
