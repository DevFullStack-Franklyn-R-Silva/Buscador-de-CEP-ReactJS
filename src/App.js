import { FiSearch } from "react-icons/fi";
import "./styles.css";

function App() {
    return (
        <div className="container">
            <h1 className="title">Buscador CEP</h1>
            <div className="containerInput">
                <input type="text" placeholder="Digite seu CEP..." />
                <button className="buttonSearch">
                    <FiSearch size={25} color="#FFF" />
                </button>
            </div>
            <main className="main">
                <h2>CEP: 57308750</h2>
                <span>Rua Teste alguma</span>
                <span>Complemento: Alguma</span>
                <span>Arapiraca</span>
                <span>Alagoas - AL</span>
            </main>
        </div>
    );
}

export default App;
