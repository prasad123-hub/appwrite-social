import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { account, databases } from "../api/appwrite";
import { v4 as uuidv4 } from "uuid";
import { Query } from "appwrite";

const Posts = () => {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const promise = account.get();

    promise.then(
      function (response) {
        setSession(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      <div className="p-2">
        {session ? (
          <CreatePost session={session} />
        ) : (
          <div className="bg-gray-200 rounded-md p-3">
            <h1>Login to Create Post</h1>
            <button
              onClick={() => router.push("/login")}
              className="bg-blue-500 text-white font-medium rounded-md mt-2 px-3 py-2"
            >
              Login
            </button>
          </div>
        )}
        <PostCard />
      </div>
    </>
  );
};

export default Posts;

const CreatePost = ({ session }) => {
  const [posts, setPost] = useState("");
  const email = session.email;
  const name = session.name;

  const handleSubmit = (e) => {
    e.preventDefault();
    const promise = databases.createDocument(
      "63ac47882a1c65f7d64f",
      "63ad405004fec44abd75",
      uuidv4(),
      { posts, email, name }
    );

    promise.then(
      function (response) {
        console.log(response); // Success
        window.location.reload();
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  return (
    <div className="pb-4 border-b border-blue-400">
      <form onSubmit={handleSubmit}>
        <div className="flex items-start space-x-3 mt-3">
          <textarea
            type="text"
            name="post"
            className="w-full h-20 border border-gray-300 rounded-md p-2"
            onChange={(e) => setPost(e.target.value)}
            placeholder="What's on your mind?"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium rounded-md mt-2 px-4 py-2"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

const PostCard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const promise = databases.listDocuments(
      "63ac47882a1c65f7d64f",
      "63ad405004fec44abd75",
      [Query.orderDesc("$createdAt")]
    );

    promise.then(
      function (response) {
        setPosts(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      {posts.map((post) => {
        return (
          <div className="pb-10 border-b border-blue-400" key={post.$id}>
            <div className="flex items-center space-x-4 mt-3">
              <div className="h-10 w-10 bg-gray-100 rounded-full">
                <Image
                  src="/user-icon.svg"
                  height={40}
                  width={40}
                  alt="default user"
                />
              </div>
              <div>
                <h1 className="font-semibold">{post.name}</h1>
                <p className="text-gray-700 text-sm">{post.email}</p>
              </div>
            </div>
            <div className="mt-3">
              <p>{post.posts}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
