import { firestore, storage } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import Produto from "../@types/Produto";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function getProdutos(): Promise<Produto[]> {
  let productss: Produto[] = [];
  const productCollection = collection(firestore, "produtos");
  await new Promise((resolve) => {
    onSnapshot(productCollection, (querySnapshot) => {
      const products: any[] = [];
      querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });
      productss = products;
      resolve(productss);
      return productss;
    });
  });
  return productss;
}

export async function getOneProduto(id: string): Promise<Produto | undefined> {
  const productCollection = collection(firestore, "produtos");
  const q = query(productCollection);
  const querySnapshot = await getDocs(q);
  const productDoc = querySnapshot.docs.find((doc) => doc.id === id);
  if (productDoc) {
    const product = productDoc.data();
    return product as Produto;
  } else {
    return undefined;
  }
}

export async function createProduto(
  descricao: string,
  nome: string,
  quantidade: number,
  tipo: "COMIDA" | "BEBIDA",
  valor: number,
  imagem: File
) {
  try {
    const productCollection = collection(firestore, "produtos");

    const newProduct = {
      nome,
      valor,
      descricao,
      quantidade,
      tipo,
    };

    const docRef = await addDoc(productCollection, newProduct);

    const storageRef = ref(storage, `produtos/${docRef.id}/${imagem.name}`);
    const snapshot = await uploadBytes(storageRef, imagem);
    const imageURL = await getDownloadURL(snapshot.ref);

    const productDocRef = doc(firestore, "produtos", docRef.id);

    await setDoc(productDocRef, { imagem: imageURL }, { merge: true });
  } catch (error) {
    console.error("Error creating produto:", error);
  }
}
