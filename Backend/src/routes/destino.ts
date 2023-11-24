import { Request, Response, Application } from "express";
import { DestinoController } from "../controllers/destino.controller"; // Asegúrate de importar el controlador correcto

export class DestinoRoutes {
    public destinoController: DestinoController = new DestinoController();

    public routes(app: Application): void {
        // Obtener todos los destinos
        app.route("/destinos").get(this.destinoController.getAllDestinos);

        // Obtener un destino por ID
        app.route("/destinos/:id").get(this.destinoController.getOneDestino);

        // Crear un nuevo destino
        app.route("/destinos").post(this.destinoController.createDestino);

        // Actualizar un destino por ID
        app.route("/destinos/:id").patch(this.destinoController.updateDestino);

        // Eliminar un destino por ID
        app.route("/destinos/:id").delete(this.destinoController.deleteDestino);

        // Eliminar lógicamente un destino por ID
        app.route("/eliminartipo2Destino/:id").put(this.destinoController.softDeleteDestino);
    }
}
