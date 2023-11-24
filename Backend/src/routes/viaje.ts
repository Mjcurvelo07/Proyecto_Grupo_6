import { Request, Response, Application } from "express";
import { ViajeController } from "../controllers/viaje.controller"; // Asegúrate de importar el controlador correcto

export class ViajeRoutes {
    public viajeController: ViajeController = new ViajeController();

    public routes(app: Application): void {
        app.route("/viajes").get(this.viajeController.getAllViajes);
        
        app.route("/viajes/:id").get(this.viajeController.getOneViaje);

        app.route("/viajes").post(this.viajeController.createViaje);

        app.route("/viajes/:id").put(this.viajeController.updateViaje);

        app.route("/viajes").delete(this.viajeController.deleteViaje);

        app.route("/eliminartipo2Viaje/:id").put(this.viajeController.softDeleteViaje);
    }
}
