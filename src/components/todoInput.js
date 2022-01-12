import React, {useState} from 'react';
import 'bulma/css/bulma.min.css';
import {Container, Box, Form, Button, Heading} from 'react-bulma-components';

const TodoInput = ({createTodoItem}) => {
    const [valueTitle, setValueTitle] = useState('');
    const [valueDesc, setValueDesc] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (valueTitle && valueDesc === "") {
            return console.log("Please add something to-do")
        }
        createTodoItem(valueTitle, valueDesc);
        setValueTitle("");
        setValueDesc("");
    }

    return (
    <Container fullhd breakpoint={'fluid'} style={{marginTop: '10px'}}>
        <Box style={{margin: 'auto'}}>
            <Heading subtitle>
                Todo Application
            </Heading>
            <Form.Control onSubmit={handleSubmit}>
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
                    <Button fullwidth rounded color="primary" onClick={handleSubmit}>Create</Button>
                </Button.Group>
            </Form.Control>
        </Box>
    </Container>
    )
}

export default TodoInput;