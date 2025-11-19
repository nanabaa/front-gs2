import { useEffect, useState } from "react"

interface Gerador {

}

function Gerador() {



    return (
        <>
        <section className="h-[53.5rem] flex flex-col justify-center items-center">
            <h2 className="text-3xl mb-20 md:mt-0">Gerador de Equipes</h2>
            <div>
                <form>
                    <div>
                        <label>A equipe deve ser de habilidades:</label>
                        <input type="checkbox">Semelhantes</input>
                    </div>
                </form>

            </div>
        </section>
        </>

    )
}

export default Gerador