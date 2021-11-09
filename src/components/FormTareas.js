import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const FormTareas = () => {
    // crear los states
    const [tareaInd, setTareaInd] = useState('');
    const [tareas, setTareas] = useState([]);
    
    // const altaTarea = (e) => {
    //    console.log(e.target.value);
        // guardar en un state
    //    setTareaInd(e.target.value);
    //}

    const handleSubmit = (e) =>{
        e.preventDefault();
        // guardar en el arreglo de tareas
        setTareas([...tareas, tareaInd]);  // operador spread para agregar un elemento al arreglo tareas
        setTareaInd('');
    }

    const borrarTarea = (nTarea) =>{
        // let tareasModificadas = tareas.filter((item) => {return item != nTarea});
        let tareasModificadas = tareas.filter((item) => item != nTarea);
        setTareas(tareasModificadas);

    }

    return (
        <div>
            <Form className="container my-5" onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex">
                    <Form.Control type="text" placeholder="Ingrese una tarea" 
                                onChange={e => setTareaInd(e.target.value)} value={tareaInd}/>
                    <Button variant="primary" type="submit"> Submit </Button>
                </Form.Group>
            </Form>

            <section className="container">
                <ListaTareas arregloTareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
            </section>
        </div>
    );
};

export default FormTareas;