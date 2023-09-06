const ListaCursos = () =>{
    const cursos=[
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
        </>
    )

  };
  export default ListaCursos;