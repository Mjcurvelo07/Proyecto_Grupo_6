import { Request, Response } from 'express';
import { Destino, DestinoI } from '../models/Destino'; // Asegúrate de importar el modelo correcto

export class DestinoController {

    public async getAllDestinos(req: Request, res: Response) {
        try {
            const destinos: DestinoI[] = await Destino.findAll({
                where: {
                    estado: 'Activo'
                }
            });
            res.status(200).json({ destinos });
        } catch (error) {
            res.status(500).json({ msg: "Error Interno" });
        }
    }

    public async getOneDestino(req: Request, res: Response) {
        const { id: idParam } = req.params;

        try {
            const destino: DestinoI | null = await Destino.findOne({
                where: {
                    id: idParam,
                }
            });
            if (destino) {
                res.status(200).json(destino);
            } else {
                res.status(404).json({ msg: "El Destino no existe" });
            }
        } catch (error) {
            res.status(500).json({ msg: "Error Interno" });
        }
    }

    public async createDestino(req: Request, res: Response): Promise<void> {
        try {
            let destino: DestinoI = req.body;
            const dataDestino: DestinoI = await Destino.create({ ...destino });
            res.status(201).json({ dataDestino });
        } catch (error) {
            console.error('Error al crear el destino:', error);
            res.status(500).json({ msg: 'Hubo un problema al crear el destino.' });
        }
    }

    public async updateDestino(req: Request, res: Response) {
        const { id: pk } = req.params;

        const {
            codigo_destino,
            estado
        } = req.body;

        try {
            let body: DestinoI = {
                codigo_destino,
                estado
            };

            const destinoExist: DestinoI | null = await Destino.findByPk(pk);

            if (!destinoExist) {
                return res.status(404).json({ msg: "El Destino no existe" });
            }

            await Destino.update(body, {
                where: { id: pk }
            });

            const destino: DestinoI | null = await Destino.findByPk(pk);
            if (destino) {
                return res.status(200).json({ msg: "El destino ha sido actualizado" });
            }
        } catch (error) {
            return res.status(500).json({ msg: "Error Interno del Servidor" });
        }
    }

    public async deleteDestino(req: Request, res: Response) {
        const { id: pk } = req.params;

        try {
            const destinoExist: DestinoI | null = await Destino.findByPk(pk);
            if (!destinoExist) {
                return res.status(404).json({ msg: "El Destino no existe" });
            }
            await Destino.destroy({
                where: { id: pk }
            });
            res.status(200).json({ msg: "Destino Eliminado" });
        } catch (error) {
            res.status(500).json({ msg: "Error Interno del Servidor" });
        }
    }

    public async softDeleteDestino(req: Request, res: Response) {
        const { id: pk } = req.params;
        const { estado } = req.body;

        try {
            const destinoExist: DestinoI | null = await Destino.findByPk(pk);

            if (!destinoExist) {
                return res.status(404).json({ msg: "El Destino no existe" });
            }

            await Destino.update({ estado }, {
                where: { id: pk }
            });

            const destino: DestinoI | null = await Destino.findByPk(pk);
            if (destino) {
                return res.status(200).json({ msg: "El destino ha sido actualizado" });
            }
        } catch (error) {
            return res.status(500).json({ msg: "Error Interno del Servidor" });
        }
    }
}
