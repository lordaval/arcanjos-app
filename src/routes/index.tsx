import { useAuth } from '../contexts/User';
import PresidenteRoutes from './Presidente';
import SecretarioRoutes from './Secretario';
import VendedorRoutes from './Vendedor';

export default function MainRoutes() {

    const userData = useAuth()

    switch (userData?.cargo) {
        case "Secretário":
            return <SecretarioRoutes />
            break;
        case "Vendedor":
            return <VendedorRoutes />
            break;
        case "Presidente":
            return <PresidenteRoutes />
            break;
        default:
            return <VendedorRoutes />
            break;
    }
}