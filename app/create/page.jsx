'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation' 
import Form from '@components/Form'


const Page = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    postTitle: '',
    boardgameId: '',
    images: [],
    files:[],
    desc:'',
    tag:''
  });
  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true)
    try {
      
      setTimeout(() => {
        router.push('/');
      },1500)
    }
    catch (err) {
      console.log(err)
    }
    finally {
      setSubmitting(false);
    }
  }
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      hadleSubmit={createPrompt}
    />
  )
}

export default Page