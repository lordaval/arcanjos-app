import { firestore } from "../../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import Produto from "../@types/Produto";

export async function getProdutos(): Promise<Produto[]> {
  let productss: Produto[] = [];
  const productCollection = collection(firestore, "produtos");
  await new Promise((resolve) => {
    onSnapshot(productCollection, (querySnapshot) => {
      const products: any[] = [];
      querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });
      console.log("products", products);
      productss = products;
      console.log("productss", productss);
      resolve(productss);
      return productss;
    });
  });
  console.log("productss", productss);
  return productss;
}

export async function getOneProduto(id: string): Promise<Produto | undefined> {
  const productCollection = collection(firestore, "produtos");
  const q = query(productCollection);
  const querySnapshot = await getDocs(q);
  const productDoc = querySnapshot.docs.find((doc) => doc.id === id);
  if (productDoc) {
    const product = productDoc.data();
    console.log(product);
    return product as Produto;
  } else {
    console.log("Produto não encontrado");
    return undefined;
  }
}
