import React from 'react'
import { Flex } from '@chakra-ui/react'
import Post from '../Posts'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { IPost } from '../../models/post'

function RecentPost() {
  const [post, setPosts] = React.useState([] as Array<IPost>);
  const postCollection = collection(db, 'posts');

  React.useEffect(() => {
    (async function() {
      const data = await getDocs(postCollection);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any);
      console.log(post);
    })()

    const obs = onSnapshot(postCollection, {
      next: (data) => {
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any);
      }
    })

    return () => {
      obs();
    }
  }, [])
  return (
    <Flex width="391px" height="600px" bg="white" p="20px" direction="column" overflow="auto" borderRadius="12px">
      {post.map((item, index) => (
        <Post {...item} key={index.toString()} />
      ))}
    </Flex>
  )
}

export default RecentPost