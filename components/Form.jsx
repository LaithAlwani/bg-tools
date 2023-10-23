import Link from "next/link";

const Form = ({ type, post, setPost, submitting, hadleSubmit }) => {
  return (
    <section>
      <h1>{type} post</h1>
      <form onSubmit={hadleSubmit}>
        <input type="text" placeholder="post title"  />
        <input type="text" placeholder="Boardgame"  />
        <input type="file" placeholder="images"  />
        <input type="file" placeholder="files"  />
        <input type="text" placeholder="tags"  />
        <textarea name="" id="" cols="30" rows="10" placeholder="Description"></textarea>
        <Link href="/" className="btn btn-outline">Cancel</Link>
        <button type="submit" className="btn" disabled={submitting}>{submitting ? `${type}...` : type}</button>
      </form>
    </section>
  );
};

export default Form;
