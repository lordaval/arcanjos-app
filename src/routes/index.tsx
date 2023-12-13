import { useAuth } from "../contexts/User";
import PresidenteRoutes from "./Presidente";
import SecretarioRoutes from "./Caixa";
import VendedorRoutes from "./Vendedor";
import { ActivityIndicator } from "react-native";

export default function MainRoutes() {
  const userData = useAuth();

  switch (userData?.cargo) {
    case "CAIXA":
      return <SecretarioRoutes />;
    case "Vendedor":
      return <VendedorRoutes />;
    case "PRESIDENTE":
      return <PresidenteRoutes />;
    default:
      return <ActivityIndicator
      size={50}
      color={"#000"}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    />;
  }
}
