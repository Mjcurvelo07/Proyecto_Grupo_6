import { Request, Response } from 'express';
import { Viajero, ViajeroI } from '../models/Viajero'; // Asegúrate de importar el modelo correcto

export class ViajeroController {

    public async getAllViajeros(req: Request, res: Response) {
        try {
            const viajeros: ViajeroI[] = await Viajero.findAll({
                where: {
                    estado: 'Activo'
                }
            });
            res.status(200).json({ viajeros });
        } catch (error) {
            res.status(500).json({ msg: "Error Interno" });
        }
    }

    public async getOneViajero(req: Request, res: Response) {
        const { id: idParam } = req.params;

        try {
            const viajero: ViajeroI | null = await Viajero.findOne({
                where: {
                    id: idParam,
                }
            });
            if (viajero) {
                res.status(200).json(viajero);
            } else {
                res.status(404).json({ msg: "El Viajero no existe" });
            }
        } catch (error) {
            res.status(500).json({ msg: "Error Interno" });
        }
    }

    public async createViajero(req: Request, res: Response): Promise<void> {
        try {
            let viajero: ViajeroI = req.body;
            const dataViajero: ViajeroI = await Viajero.create({ ...viajero });
            res.status(201).json({ dataViajero });
        } catch (error) {
            console.error('Error al crear el viajero:', error);
            res.status(500).json({ msg: 'Hubo un problema al crear el viajero.' });
        }
    }

    public async updateViajero(req: Request, res: Response) {
        const { id: pk } = req.params;

        const {
            id,
            nombre,
            direccion,
            telefono,
            estado
        } = req.body;

        try {
            let body: ViajeroI = {
                nombre,
                direccion,
                telefono,
                estado
            };

            const viajeroExist: ViajeroI | null = await Viajero.findByPk(pk);

            if (!viajeroExist) {
                return res.status(404).json({ msg: "El Viajero no existe" });
            }

            await Viajero.update(body, {
                where: { id: pk }
            });

            const viajero: ViajeroI | null = await Viajero.findByPk(pk);
            if (viajero) {
                return res.status(200).json({ msg: "El viajero ha sido actualizado" });
            }
        } catch (error) {
            return res.status(500).json({ msg: "Error Interno del Servidor" });
        }
    }

    public async deleteViajero(req: Request, res: Response) {
        const { id: pk } = req.params;

        try {
            const viajeroExist: ViajeroI | null = await Viajero.findByPk(pk);
            if (!viajeroExist) {
                return res.status(404).json({ msg: "El Viajero no existe" });
            }
            await Viajero.destroy({
                where: { id: pk }
            });
            res.status(200).json({ msg: "Viajero Eliminado" });
        } catch (error) {
            res.status(500).json({ msg: "Error Interno del Servidor" });
        }
    }

    public async softDeleteViajero(req: Request, res: Response) {
        const { id: pk } = req.params;
        const { estado } = req.body;

        try {
            const viajeroExist: ViajeroI | null = await Viajero.findByPk(pk);

            if (!viajeroExist) {
                return res.status(404).json({ msg: "El Viajero no existe" });
            }

            await Viajero.update({ estado }, {
                where: { id: pk }
            });

            const viajero: ViajeroI | null = await Viajero.findByPk(pk);
            if (viajero) {
                return res.status(200).json({ msg: "El viajero ha sido actualizado" });
            }
        } catch (error) {
            return res.status(500).json({ msg: "Error Interno del Servidor" });
        }
    }
}
