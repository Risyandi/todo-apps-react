import React from 'react';
import 'bulma/css/bulma.min.css';
import {Container, Box, Button} from 'react-bulma-components';

const TodoItem = ({item, index, deleteTodoItem, completeTodoItem, updateTodoItem}) => {
    return (
        <Container fullhd breakpoint={'fluid'} style={{marginTop: '10px'}}>
            <Box style={{margin: 'auto'}}>
                <div style={{textDecoration: item.status !== 0 ? "line-through" : ""}}>
                    <p className='item-title'>{item.title}</p>
                    <p className='item-desc'>{item.description}</p>
                    <p className='item-create-date'>{item.createdAt}</p>
                </div>
                <Button.Group>
                    {
                        item.status !== 1 ?
                        <Button rounded color="success" onClick={() => completeTodoItem(index)}>Done</Button>
                        : 
                        <Button rounded color="success" onClick={() => completeTodoItem(index)}>Undone</Button>
                    }
                    <Button rounded color="primary" onClick={() => updateTodoItem(index)}>Update</Button>
                    {
                        item.status !== 1 ? 
                        <Button rounded color="danger" onClick={() => deleteTodoItem(index)}>Delete</Button>
                        : 
                        ''
                    }
                </Button.Group>
            </Box>
        </Container>
    )
}

export default TodoItem;