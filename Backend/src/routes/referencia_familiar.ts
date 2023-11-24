import { Request, Response, Application } from "express";
import { ReferenciaFamiliarController } from "../controllers/referencia_familiar.controller";

export class ReferenciaFamiliarRoutes {
    public referenciaFamiliarController: ReferenciaFamiliarController = new ReferenciaFamiliarController();

    public routes(app: Application): void {
        app.route("/referenciasfamiliares").get(this.referenciaFamiliarController.getAllReferenciasFamiliares);
        
        app.route("/referenciasfamiliares/:id").get(this.referenciaFamiliarController.getOneReferenciaFamiliar);

        app.route("/referenciasfamiliares").post(this.referenciaFamiliarController.createReferenciaFamiliar);

        app.route("/referenciasfamiliares/:id").put(this.referenciaFamiliarController.updateReferenciaFamiliar);

        app.route("/referenciasfamiliares/:id").delete(this.referenciaFamiliarController.deleteReferenciaFamiliar);

        app.route("/referenciasfamiliares/:id").put(this.referenciaFamiliarController.softDeleteReferenciaFamiliar);
    }
}
