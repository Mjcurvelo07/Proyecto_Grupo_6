import { ViajeroRoutes } from "./viajero";
import { ViajeRoutes } from "./viaje";
import { DestinoRoutes } from "./destino";
import { OrigenRoutes } from "./origen";
import { ReferenciaFamiliarRoutes } from "./referencia_familiar";

export class Routes {
    public viajeroRoutes: ViajeroRoutes = new ViajeroRoutes();
    public viajeRoutes: ViajeRoutes = new ViajeRoutes();
    public destinoRoutes: DestinoRoutes = new DestinoRoutes();
    public origenRoutes: OrigenRoutes = new OrigenRoutes();
    public referenciaFamiliarRoutes: ReferenciaFamiliarRoutes = new ReferenciaFamiliarRoutes();
}
