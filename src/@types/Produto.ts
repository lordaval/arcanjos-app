import { Timestamp } from "firebase/firestore";

interface Produto {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  valor: number;
  quantidade: number;
  tipo: string | "BEBIDA" | "COMIDA";
  ultimaVenda: Timestamp;
  ultimaAdicao: Timestamp;
}

export default Produto;
