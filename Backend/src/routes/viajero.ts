import { Request, Response, Application } from "express";
import { ViajeroController } from "../controllers/viajero.controller";// Asegúrate de importar el controlador correcto

export class ViajeroRoutes {
    public viajeroController: ViajeroController = new ViajeroController();

    public routes(app: Application): void {
        app.route("/viajeros").get(this.viajeroController.getAllViajeros);
        
        app.route("/viajeros/:id").get(this.viajeroController.getOneViajero);

        app.route("/viajeros").post(this.viajeroController.createViajero);

        app.route("/viajeros/:id").put(this.viajeroController.updateViajero);

        app.route("/viajeros/:id").delete(this.viajeroController.deleteViajero);

        app.route("/eliminartipo2Viajero/:id").put(this.viajeroController.softDeleteViajero);
    }
}
