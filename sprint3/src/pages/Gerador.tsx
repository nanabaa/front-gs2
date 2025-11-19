import { useEffect, useState } from "react"

interface Consulta {
    id:number,
    cpf:number
}

function Pacientes(){

    const [consulta,setConsulta] = useState<Consulta[]>([])
    
    function getConsulta(){
        fetch("https://preztech-561497.onrender.com/consultas")
        .then(response => response.json())
        .then(data => console.log(data))
    }

    useEffect( () => getConsulta(), [])
    
    return(
        
        <section className="h-[53.5rem] flex flex-col justify-center items-center">
        <h2 className="text-3xl mb-20 md:mt-0">Gerador de equipes</h2>
        </section>
    )
}

export default Pacientes