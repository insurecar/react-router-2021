import "./styles/App.css";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript", body: "Description" },
    { id: 3, title: "Javascript", body: "Description" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Список постів" />
    </div>
  );
}

export default App;
