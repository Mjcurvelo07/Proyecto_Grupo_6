import { Request, Response, Application } from "express";
import { OrigenController } from "../controllers/origen.controller"; // Asegúrate de importar el controlador correcto

export class OrigenRoutes {
    public origenController: OrigenController = new OrigenController();

    public routes(app: Application): void {
        app.route("/origenes").get(this.origenController.getAllOrigenes); 
        
        app.route("/origen/:id").get(this.origenController.getOneOrigen);

        app.route("/origenes").post(this.origenController.createOrigen);

        app.route("/origenes/:id").put(this.origenController.updateOrigen);

        app.route("/origenes/:id").delete(this.origenController.deleteOrigen);

        app.route("/eliminartipo2Origen/:id").put(this.origenController.softDeleteOrigen);
    }
}
