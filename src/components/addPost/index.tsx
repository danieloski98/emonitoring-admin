import React from 'react'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Heading, Text, Textarea, Button } from '@chakra-ui/react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase.config';

interface IProps {
    isOpen: boolean;
    close: () => void;
}

const AddPost: React.FC<IProps> = ({ isOpen, close }) => {
    const [post, setPost] = React.useState('');
    const ref = collection(db, 'posts');
    const addPost = async () => {
        await addDoc(ref, { username: 'daniel', post });
        close()
        alert('Posted!')
    }
  return (
    <Modal isOpen={isOpen} onClose={() => close()}>
        <ModalOverlay />
        <ModalContent width="450px" height="400px" bg="white">
            <ModalCloseButton />
            <ModalBody pt="40px">
                <Heading>Add Post</Heading>
                <Textarea mt="20px" onChange={(e) => setPost(e.target.value)} />
                <Button onClick={addPost} bg="blue" color="white" width="100%" mt="20px">Submit</Button>
            </ModalBody>
        </ModalContent>
    </Modal>
  )
}

export default AddPost