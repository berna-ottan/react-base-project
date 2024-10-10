import ListContainer from "../components/ListContainer/ListContainer";
import Cartao from "../components/cartao/Cartao";
import Base from "./Base";

const dados = [
    {
        titulo: "um titulo do array",
        texto: "um texto grande do array"
    },
    {
        titulo: "um outro titulo do array",
        texto: "um novo texto do array"
    }
]




const SobreNos =() => (
    <Base>
    <ListContainer>
        {
            dados.map( (ele) => (
                <Cartao
                    titulo={ele.titulo}
                    texto={ele.texto}
                />
            ))
        }
    </ListContainer>
    </Base>
);

export default SobreNos;