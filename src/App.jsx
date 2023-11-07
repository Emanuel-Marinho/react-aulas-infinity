import programacao from "./assets/programacao.png"
import psicologia from "./assets/psicologia.jpg"

function App() {

  return (
    <>
      <footer className="cabecalho">
        <div className="cabecalho_div_imagem">
          <img className="cabecalho_imagem" src={psicologia} alt="" />
          <h2>Emanuel Marinho</h2>
          <p>Psicólogo </p>
        </div>
      </footer>
      <h1>Apresentação:</h1>
      <br/>
      <ul>
        <li><strong>Nome: </strong>Emanuel Marinho</li>
        <li><strong>Idade: </strong>31</li>
        <li><strong>Profissão: </strong>Psicólogo</li>
      </ul>
      <br />
      <img style={{height:'250px'}} src={programacao} alt="programação" />
      



    </>
  )
}

export default App
