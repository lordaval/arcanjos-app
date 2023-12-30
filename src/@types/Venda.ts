import { Timestamp } from "firebase/firestore";

interface Venda {
  id: string;
  valor: number;
  quantidade: number;
  tipo: string | "BEBIDA" | "COMIDA" | "AMBOS";
  data: Timestamp;
}

export default Venda;
