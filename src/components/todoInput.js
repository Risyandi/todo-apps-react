import React, {useState} from 'react';
import 'bulma/css/bulma.min.css';
// import {Form, Button} from 'react-bulma-components';

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
        <form onSubmit={handleSubmit}>

            {/* <Form.Field >
                <Form.Control>
                    <Form.Input placeholder="Title" />
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Control>
                    <Form.Textarea placeholder="Description" />
                </Form.Control>
            </Form.Field>

            <Button.Group>
                <Button fullwidth rounded color="primary">Create</Button>
            </Button.Group> */}

            <input
            type="text"
            placeholder="Title"
            value={valueTitle}
            onChange={(e) => setValueTitle(e.target.value)}
            />
            <input
            type="text"
            placeholder="Description"
            value={valueDesc}
            onChange={(e) => setValueDesc(e.target.value)}
            />
            <button onClick={handleSubmit}>Create</button>
        </form>
    )
}

export default TodoInput;