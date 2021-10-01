import PostItem from "./PostItem";

const PostList = ({ posts, title }) => {
  console.log(posts);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> {title}</h1>
      {posts.map((post) => (
        <PostItem {...post} />
      ))}
    </div>
  );
};

export default PostList;
