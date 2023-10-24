import Link from "next/link";

const Form = ({ type, post, setPost, submitting, hadleSubmit }) => {
  return (
    <section>
      <h1>{type} File</h1>
      <form onSubmit={hadleSubmit}>
        <input
          type="text"
          placeholder="post title"
          value={post.postTitle}
          onChange={(e) => setPost({ ...post, postTitle: e.target.value })}
        />
        <input
          type="text"
          placeholder="Boardgame"
          value={post.boardgameId}
          onChange={(e) => setPost({ ...post, boardgameId: e.target.value })}
        />
        <input
          type="file"
          placeholder="images"
          value={post.images}
          onChange={(e) => setPost({ ...post, images: e.target.value })}
        />
        <input
          type="file"
          placeholder="files"
          value={post.files}
          onChange={(e) => setPost({ ...post, files: e.target.value })}
        />
        <input
          type="text"
          placeholder="tags"
          value={post.tags}
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Description"
          onChange={(e) => setPost({ ...post, desc: e.target.value })}></textarea>
        <Link href="/" className="btn btn-outline">
          Cancel
        </Link>
        <button type="submit" className="btn" disabled={submitting}>
          {submitting ? `${type}...` : type}
        </button>
      </form>
    </section>
  );
};

export default Form;
