import React from 'react';
import { Form, Button } from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const FormTareas = () => {
    return (
        <div>
            <Form className="container my-5">
                <Form.Group className="mb-3 d-flex">
                    <Form.Control type="text" placeholder="Ingrese una tarea" />
                    <Button variant="primary" type="submit"> Submit </Button>
                </Form.Group>
            </Form>

            <section className="container">
                <ListaTareas></ListaTareas>
            </section>
        </div>
    );
};

export default FormTareas;