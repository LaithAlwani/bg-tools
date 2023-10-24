"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const Page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    postTitle: "",
    boardgameId: "",
    images: [],
    files: [],
    desc: "",
    tag: "",
  });

  if (status === "loading") {
    return <h1>loading...</h1>;
  }
  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      console.log(post);
      const response = await fetch("/api/files/new", {
        method: "POST",
        body: JSON.stringify({
          postTitle: post.postTitle,
          boardgameId: post.boardgameId,
          images: post.images,
          files: post.files,
          desc: post.desc,
          tag: post.tag,
          userId: session.user.id,
        }),
      });

      // if (response.ok) {
      //   router.push("/");
      // }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };
  return session ? (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      hadleSubmit={createPrompt}
    />
  ) : (
    <h1>please log in</h1>
  );
};

export default Page;
