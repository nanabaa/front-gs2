import { useEffect, useState } from "react"

interface Gerador {

}

function Gerador() {



    return (
        <>
        <section className="h-[53.5rem] flex flex-col justify-center items-center">
            <h2 className="text-3xl mb-20 md:mt-0">Gerador de Equipes</h2>
            <div className="flex flex-col ">
                <form>
                    <div>
                        <label className='text-xl lg:text-2xl leading-13'>A equipe deve ser de habilidades:</label>
                        <div>
                            <input type="radio" name="myCheckbox" />
                            <label htmlFor=""> Semelhantes</label>
                        </div>
                        <div>
                            <input type="radio" name="myCheckbox" />
                            <label htmlFor=""> Variadas</label>
                        </div>
                        <div className="flex flex-col justify-self-start">
                            <label className='text-xl lg:text-2xl leading-13' htmlFor="">Pessoas por Equipe</label>
                            <select>
                                <option value="nada"></option>
                                <option value="Dois">2</option>
                                <option value="Tres">3</option>
                                <option value="Quatro">4</option>
                                <option value="Cinco">5</option>
                                <option value="Seis">6</option>
                                <option value="Sete">7</option>
                                <option value="Oito">8</option>
                                <option value="Nove">9</option>
                                <option value="Dez">10</option>
                            </select>
                        </div>
                        <h2 className='text-xl lg:text-2xl leading-13'>Pessoa 1</h2>
                        <div className="grid grid-cols-3">
                            <div className="flex flex-col mr-5">
                                <label htmlFor="">Principais Habilidades</label>
                                <select>
                                <option value="nada"></option>
                                <option value="Um">Back-end</option>
                                <option value="Dois">Front-end</option>
                                <option value="Tres">Design</option>
                                <option value="Quatro">Marketing</option>
                                <option value="Cinco">Administração</option>
                                <option value="Seis">Redes</option>
                                <option value="Sete">Dados</option>
                                <option value="Oito">Modelagem 3D</option>
                                <option value="Nove">Audiovisual</option>
                            </select>
                            <select>
                             <option value="nada"></option>
                                <option value="Um">Back-end</option>
                                <option value="Dois">Front-end</option>
                                <option value="Tres">Design</option>
                                <option value="Quatro">Marketing</option>
                                <option value="Cinco">Administração</option>
                                <option value="Seis">Redes</option>
                                <option value="Sete">Dados</option>
                                <option value="Oito">Modelagem 3D</option>
                                <option value="Nove">Audiovisual</option>
                            </select>
                            <select>
                            <option value="nada"></option>
                                <option value="Um">Back-end</option>
                                <option value="Dois">Front-end</option>
                                <option value="Tres">Design</option>
                                <option value="Quatro">Marketing</option>
                                <option value="Cinco">Administração</option>
                                <option value="Seis">Redes</option>
                                <option value="Sete">Dados</option>
                                <option value="Oito">Modelagem 3D</option>
                                <option value="Nove">Audiovisual</option>
                            </select>
                            <select>
                            <option value="nada"></option>
                                <option value="Um">Back-end</option>
                                <option value="Dois">Front-end</option>
                                <option value="Tres">Design</option>
                                <option value="Quatro">Marketing</option>
                                <option value="Cinco">Administração</option>
                                <option value="Seis">Redes</option>
                                <option value="Sete">Dados</option>
                                <option value="Oito">Modelagem 3D</option>
                                <option value="Nove">Audiovisual</option>
                            </select>
                            <select>
                            <option value="nada"></option>
                                <option value="Um">Back-end</option>
                                <option value="Dois">Front-end</option>
                                <option value="Tres">Design</option>
                                <option value="Quatro">Marketing</option>
                                <option value="Cinco">Administração</option>
                                <option value="Seis">Redes</option>
                                <option value="Sete">Dados</option>
                                <option value="Oito">Modelagem 3D</option>
                                <option value="Nove">Audiovisual</option>
                            </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="">Ultimo cargo ocupado</label>
                                <select>
                                <option value="nada"></option>
                                <option value="Um">Social Media</option>
                                <option value="Dois">Programador</option>
                                <option value="Tres">Gerente</option>
                                <option value="Quatro">Designer</option>
                                <option value="Cinco">Administrador</option>
                                <option value="Seis">Engenheiro de Software</option>
                                <option value="Sete">Engenheiro de Mecatrônica</option>
                                <option value="Oito">Freelancer</option>
                                <option value="Nove">Júnior</option>
                            </select>
                            <select>
                                <option value="nada"></option>
                                <option value="Um">Social Media</option>
                                <option value="Dois">Programador</option>
                                <option value="Tres">Gerente</option>
                                <option value="Quatro">Designer</option>
                                <option value="Cinco">Administrador</option>
                                <option value="Seis">Engenheiro de Software</option>
                                <option value="Sete">Engenheiro de Mecatrônica</option>
                                <option value="Oito">Freelancer</option>
                                <option value="Nove">Júnior</option>
                            </select>
                            <select>
                                <option value="nada"></option>
                                <option value="Um">Social Media</option>
                                <option value="Dois">Programador</option>
                                <option value="Tres">Gerente</option>
                                <option value="Quatro">Designer</option>
                                <option value="Cinco">Administrador</option>
                                <option value="Seis">Engenheiro de Software</option>
                                <option value="Sete">Engenheiro de Mecatrônica</option>
                                <option value="Oito">Freelancer</option>
                                <option value="Nove">Júnior</option>
                            </select>
                            <select>
                               <option value="nada"></option>
                                <option value="Um">Social Media</option>
                                <option value="Dois">Programador</option>
                                <option value="Tres">Gerente</option>
                                <option value="Quatro">Designer</option>
                                <option value="Cinco">Administrador</option>
                                <option value="Seis">Engenheiro de Software</option>
                                <option value="Sete">Engenheiro de Mecatrônica</option>
                                <option value="Oito">Freelancer</option>
                                <option value="Nove">Júnior</option>
                            </select>
                            <select>
                                <option value="nada"></option>
                                <option value="Um">Social Media</option>
                                <option value="Dois">Programador</option>
                                <option value="Tres">Gerente</option>
                                <option value="Quatro">Designer</option>
                                <option value="Cinco">Administrador</option>
                                <option value="Seis">Engenheiro de Software</option>
                                <option value="Sete">Engenheiro de Mecatrônica</option>
                                <option value="Oito">Freelancer</option>
                                <option value="Nove">Júnior</option>
                            </select>
                            </div>
                            <div className="flex flex-col ml-5">
                                <label htmlFor="">Softskills</label>
                                <select>
                                <option value="nada"></option>
                                <option value="Um">Comunicação</option>
                                <option value="Dois">Liderança</option>
                                <option value="Tres">Criatividade</option>
                                <option value="Quatro">Trabalho em equipe</option>
                                <option value="Cinco">Pensamento crítico</option>
                                <option value="Seis">Resolução de problemas</option>
                                <option value="Sete">Adaptabilidade</option>
                                <option value="Oito">Inteligência emocional</option>
                                <option value="Nove">Proatividade</option>
                            </select>
                            <select>
                                <option value="nada"></option>
                                <option value="Um">Comunicação</option>
                                <option value="Dois">Liderança</option>
                                <option value="Tres">Criatividade</option>
                                <option value="Quatro">Trabalho em equipe</option>
                                <option value="Cinco">Pensamento crítico</option>
                                <option value="Seis">Resolução de problemas</option>
                                <option value="Sete">Adaptabilidade</option>
                                <option value="Oito">Inteligência emocional</option>
                                <option value="Nove">Proatividade</option>
                            </select>
                            <select>
                                <option value="nada"></option>
                                <option value="Um">Comunicação</option>
                                <option value="Dois">Liderança</option>
                                <option value="Tres">Criatividade</option>
                                <option value="Quatro">Trabalho em equipe</option>
                                <option value="Cinco">Pensamento crítico</option>
                                <option value="Seis">Resolução de problemas</option>
                                <option value="Sete">Adaptabilidade</option>
                                <option value="Oito">Inteligência emocional</option>
                                <option value="Nove">Proatividade</option>
                            </select>
                            <select>
                                <option value="nada"></option>
                                <option value="Um">Comunicação</option>
                                <option value="Dois">Liderança</option>
                                <option value="Tres">Criatividade</option>
                                <option value="Quatro">Trabalho em equipe</option>
                                <option value="Cinco">Pensamento crítico</option>
                                <option value="Seis">Resolução de problemas</option>
                                <option value="Sete">Adaptabilidade</option>
                                <option value="Oito">Inteligência emocional</option>
                                <option value="Nove">Proatividade</option>
                            </select>
                            <select>
                                <option value="nada"></option>
                                <option value="Um">Comunicação</option>
                                <option value="Dois">Liderança</option>
                                <option value="Tres">Criatividade</option>
                                <option value="Quatro">Trabalho em equipe</option>
                                <option value="Cinco">Pensamento crítico</option>
                                <option value="Seis">Resolução de problemas</option>
                                <option value="Sete">Adaptabilidade</option>
                                <option value="Oito">Inteligência emocional</option>
                                <option value="Nove">Proatividade</option>
                            </select>
                            </div>
                        </div>
                        <div>
<button className="bg-roxo w-100 pt-2 pb-2 pl-10 pr-10 h-15 text-2xl rounded-3xl mt-15 mr-5 text-text-white cursor-pointer" type="submit" name="submit" id="submit" >Adicionar pessoa</button>
<button className="bg-roxo w-100 pt-2 pb-2 pl-10 pr-10 h-15 text-2xl rounded-3xl mt-15 ml-5 text-text-white cursor-pointer" type="submit" name="submit" id="submit" >Gerar</button>
                        </div>
                    </div>
                </form>

            </div>
        </section>
        </>

    )
}

export default Gerador