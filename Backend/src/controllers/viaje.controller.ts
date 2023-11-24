import { Request, Response } from 'express';
import { Viaje, ViajeI } from '../models/Viaje'; // Asegúrate de importar el modelo correcto

export class ViajeController {

    public async getAllViajes(req: Request, res: Response) {
        try {
            const viajes: ViajeI[] = await Viaje.findAll({
                where: {
                    estado: 'Activo'
                }
            });
            res.status(200).json({ viajes });
        } catch (error) {
            res.status(500).json({ msg: "Error Interno" });
        }
    }

    public async getOneViaje(req: Request, res: Response) {
        const { id: idParam } = req.params;

        try {
            const viaje: ViajeI | null = await Viaje.findOne({
                where: {
                    id: idParam,
                }
            });
            if (viaje) {
                res.status(200).json(viaje);
            } else {
                res.status(404).json({ msg: "El Viaje no existe" });
            }
        } catch (error) {
            res.status(500).json({ msg: "Error Interno" });
        }
    }

    public async createViaje(req: Request, res: Response): Promise<void> {
        try {
            let viaje: ViajeI = req.body;
            const dataViaje: ViajeI = await Viaje.create({ ...viaje });
            res.status(201).json({ dataViaje });
        } catch (error) {
            console.error('Error al crear el viaje:', error);
            res.status(500).json({ msg: 'Hubo un problema al crear el viaje.' });
        }
    }

    public async updateViaje(req: Request, res: Response) {
        const { id: pk } = req.params;

        const {
            id,
            numero_plaza,
            fecha_viaje,
            estado
        } = req.body;

        try {
            let body: ViajeI = {
                numero_plaza,
                fecha_viaje,
                estado
            };

            const viajeExist: ViajeI | null = await Viaje.findByPk(pk);

            if (!viajeExist) {
                return res.status(404).json({ msg: "El Viaje no existe" });
            }

            await Viaje.update(body, {
                where: { id: pk }
            });

            const viaje: ViajeI | null = await Viaje.findByPk(pk);
            if (viaje) {
                return res.status(200).json({ msg: "El viaje ha sido actualizado" });
            }
        } catch (error) {
            return res.status(500).json({ msg: "Error Interno del Servidor" });
        }
    }

    public async deleteViaje(req: Request, res: Response) {
        const { id: pk } = req.params;

        try {
            const viajeExist: ViajeI | null = await Viaje.findByPk(pk);
            if (!viajeExist) {
                return res.status(404).json({ msg: "El Viaje no existe" });
            }
            await Viaje.destroy({
                where: { id: pk }
            });
            res.status(200).json({ msg: "Viaje Eliminado" });
        } catch (error) {
            res.status(500).json({ msg: "Error Interno del Servidor" });
        }
    }

    public async softDeleteViaje(req: Request, res: Response) {
        const { id: pk } = req.params;
        const { estado } = req.body;

        try {
            const viajeExist: ViajeI | null = await Viaje.findByPk(pk);

            if (!viajeExist) {
                return res.status(404).json({ msg: "El Viaje no existe" });
            }

            await Viaje.update({ estado }, {
                where: { id: pk }
            });

            const viaje: ViajeI | null = await Viaje.findByPk(pk);
            if (viaje) {
                return res.status(200).json({ msg: "El viaje ha sido actualizado" });
            }
        } catch (error) {
            return res.status(500).json({ msg: "Error Interno del Servidor" });
        }
    }
}
