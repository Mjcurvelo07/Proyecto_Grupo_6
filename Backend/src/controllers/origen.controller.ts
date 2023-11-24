import { Request, Response } from 'express';
import { Origen, OrigenI } from '../models/Origen'; // Asegúrate de importar el modelo correcto

export class OrigenController {

    public async getAllOrigenes(req: Request, res: Response) {
        try {
            const origenes: OrigenI[] = await Origen.findAll({
                where: {
                    estado: 'Activo'
                }
            });
            res.status(200).json({ origenes });
        } catch (error) {
            res.status(500).json({ msg: "Error Interno" });
        }
    }

    public async getOneOrigen(req: Request, res: Response) {
        const { id: idParam } = req.params;

        try {
            const origen: OrigenI | null = await Origen.findOne({
                where: {
                    id: idParam,
                }
            });
            if (origen) {
                res.status(200).json(origen);
            } else {
                res.status(404).json({ msg: "El Origen no existe" });
            }
        } catch (error) {
            res.status(500).json({ msg: "Error Interno" });
        }
    }

    public async createOrigen(req: Request, res: Response): Promise<void> {
        try {
            let origen: OrigenI = req.body;
            const dataOrigen: OrigenI = await Origen.create({ ...origen });
            res.status(201).json({ dataOrigen });
        } catch (error) {
            console.error('Error al crear el origen:', error);
            res.status(500).json({ msg: 'Hubo un problema al crear el origen.' });
        }
    }

    public async updateOrigen(req: Request, res: Response) {
        const { id: pk } = req.params;

        const {
            id,
            codigo_origen,
            estado
        } = req.body;

        try {
            let body: OrigenI = {
                codigo_origen,
                estado
            };

            const origenExist: OrigenI | null = await Origen.findByPk(pk);

            if (!origenExist) {
                return res.status(404).json({ msg: "El Origen no existe" });
            }

            await Origen.update(body, {
                where: { id: pk }
            });

            const origen: OrigenI | null = await Origen.findByPk(pk);
            if (origen) {
                return res.status(200).json({ msg: "El origen ha sido actualizado" });
            }
        } catch (error) {
            return res.status(500).json({ msg: "Error Interno del Servidor" });
        }
    }

    public async deleteOrigen(req: Request, res: Response) {
        const { id: pk } = req.params;

        try {
            const origenExist: OrigenI | null = await Origen.findByPk(pk);
            if (!origenExist) {
                return res.status(404).json({ msg: "El Origen no existe" });
            }
            await Origen.destroy({
                where: { id: pk }
            });
            res.status(200).json({ msg: "Origen Eliminado" });
        } catch (error) {
            res.status(500).json({ msg: "Error Interno del Servidor" });
        }
    }

    public async softDeleteOrigen(req: Request, res: Response) {
        const { id: pk } = req.params;
        const { estado } = req.body;

        try {
            const origenExist: OrigenI | null = await Origen.findByPk(pk);

            if (!origenExist) {
                return res.status(404).json({ msg: "El Origen no existe" });
            }

            await Origen.update({ estado }, {
                where: { id: pk }
            });

            const origen: OrigenI | null = await Origen.findByPk(pk);
            if (origen) {
                return res.status(200).json({ msg: "El origen ha sido actualizado" });
            }
        } catch (error) {
            return res.status(500).json({ msg: "Error Interno del Servidor" });
        }
    }
}
