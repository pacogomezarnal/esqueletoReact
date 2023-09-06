import { useState } from 'react';

const cursosArray=[
    {
        id:1,
        nombre:"Todo sobre BootStrap",
        profesor: "Pakuchi",
        tipo: "desarrollo"
    },
    {
        id:2,
        nombre:"Comenzando con Python",
        profesor: "Nate",
        tipo: "desarrollo"
    },
    {
        id:3,
        nombre:"PHP",
        profesor: "Sarosi",
        tipo: "desarrollo"
    }
]
const ListaCursos = () =>{

    const [cursos, setCursos] = useState(cursosArray);
    const addCurso = () => {
        const cursosNuevo = cursos.slice();
        const cursoNuevo = {
            id:4,
            nombre:"Tarjetas gráficas",
            profesor: "Arturo",
            tipo: "informatica"
        };
        cursosNuevo.push(cursoNuevo);
        setCursos(cursosNuevo);
    }

    return(
        <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Profesor</th>
                    <th scope="col">Tipo</th>
                </tr>
            </thead>
            <tbody>
                {
                    cursos.map((c)=>
                        (
                            <tr key={c.id}>
                                <th scope="row">{c.id}</th>
                                <td>{c.nombre}</td>
                                <td>{c.profesor}</td>
                                <td>{c.tipo}</td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
        <button className="btn btn-primary" onClick={addCurso}>
                Nuevo
        </button>
        </>
    )

  };
  export default ListaCursos;