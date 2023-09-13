import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import PostForm from "../../_components/PostForm";
import PostList from "../../_components/PostList";

const HomeContainer = () => {
  return (
    <div className="flex flex-col">
      <PostForm />
      <PostList />
    </div>
  );
};

export default HomeContainer;
