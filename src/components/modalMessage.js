import React from 'react';
import 'bulma/css/bulma.min.css';
import {Modal, Media, Content} from 'react-bulma-components';

const ModalMessage = (props) => {
    let showModal = props.showStatus;

    const closeModal = (status) => {
        props.closeModal(status);
    }

    return (
        <Modal
            onClose = {
                (event) => closeModal(false)
            }
            show={showModal}
        >
            <Modal.Card>
            <Modal.Card.Header
            showClose={false}>
                <Modal.Card.Title>
                Information
                </Modal.Card.Title>
            </Modal.Card.Header>
            <Modal.Card.Body>
                <Media>
                <Media.Item>
                    <Content>
                    <p>
                        Please check your field input is not empty.
                    </p>
                    </Content>
                </Media.Item>
                </Media>
            </Modal.Card.Body>
            <Modal.Card.Footer
                alignItems="right" 
            >
                <Content>
                    Copyright 2023
                </Content>
            </Modal.Card.Footer>
            </Modal.Card>
        </Modal>
    )
}
export default ModalMessage;