import React, {useState} from 'react';
import 'bulma/css/bulma.min.css';
import {Container, Box, Form, Button, Heading} from 'react-bulma-components';
import {ModalMessage} from './../components';

const TodoInput = ({createTodoItem}) => {
    const [valueTitle, setValueTitle] = useState('');
    const [valueDesc, setValueDesc] = useState('');
    const [showModal, setShowModal] = useState(false);
    
    const submitTodo = (event) => {
        event.preventDefault();
        if (valueTitle !== "" && valueDesc !== "") {
            createTodoItem(valueTitle, valueDesc);
            setValueTitle("");
            setValueDesc("");
        } else {
            setShowModal(true);
        }
    }

    const closeModal = (status) => {
        setShowModal(status);
    }

    return (
    <Container fullhd breakpoint={'fluid'} style={{marginTop: '10px'}}>
        <ModalMessage showStatus={showModal} closeModal={closeModal}/>
        <Box style={{margin: 'auto'}}>
            <Heading subtitle>
                Todo Application
            </Heading>
            <Form.Control onSubmit={submitTodo}>
                <Form.Field >
                    <Form.Control>
                        <Form.Input 
                        placeholder="Title" 
                        type="text"
                        value={valueTitle}
                        onChange={(e) => setValueTitle(e.target.value)}
                        />
                    </Form.Control>
                </Form.Field>

                <Form.Field>
                    <Form.Control>
                        <Form.Textarea 
                        placeholder="Description"
                        type="text" 
                        value={valueDesc}
                        onChange={(e) => setValueDesc(e.target.value)}
                        />
                    </Form.Control>
                </Form.Field>

                <Button.Group>
                    <Button fullwidth rounded color="primary" onClick={submitTodo}>Create</Button>
                </Button.Group>
            </Form.Control>
        </Box>
    </Container>
    )
}

export default TodoInput;