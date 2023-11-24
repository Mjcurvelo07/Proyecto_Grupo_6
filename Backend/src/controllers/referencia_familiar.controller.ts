import { Request, Response } from 'express';
import { ReferenciaFamiliar, ReferenciaFamiliarI } from '../models/Referencia_familiar'; // Asegúrate de importar el modelo correcto

export class ReferenciaFamiliarController {

    public async getAllReferenciasFamiliares(req: Request, res: Response) {
        try {
            const referenciasFamiliares: ReferenciaFamiliarI[] = await ReferenciaFamiliar.findAll({
                where: {
                    estado: 'Activo'
                }
            });
            res.status(200).json({ referenciasFamiliares });
        } catch (error) {
            res.status(500).json({ msg: "Error Interno" });
        }
    }

    public async getOneReferenciaFamiliar(req: Request, res: Response) {
        const { id: idParam } = req.params;

        try {
            const referenciaFamiliar: ReferenciaFamiliarI | null = await ReferenciaFamiliar.findOne({
                where: {
                    id: idParam,
                }
            });
            if (referenciaFamiliar) {
                res.status(200).json(referenciaFamiliar);
            } else {
                res.status(404).json({ msg: "La Referencia Familiar no existe" });
            }
        } catch (error) {
            res.status(500).json({ msg: "Error Interno" });
        }
    }

    public async createReferenciaFamiliar(req: Request, res: Response): Promise<void> {
        try {
            let referenciaFamiliar: ReferenciaFamiliarI = req.body;
            const dataReferenciaFamiliar: ReferenciaFamiliarI = await ReferenciaFamiliar.create({ ...referenciaFamiliar });
            res.status(201).json({ dataReferenciaFamiliar });
        } catch (error) {
            console.error('Error al crear la referencia familiar:', error);
            res.status(500).json({ msg: 'Hubo un problema al crear la referencia familiar.' });
        }
    }

    public async updateReferenciaFamiliar(req: Request, res: Response) {
        const { id: pk } = req.params;

        const {
            id,
            nombre,
            apellido,
            direccion,
            telefono,
            estado
        } = req.body;

        try {
            let body: ReferenciaFamiliarI = {
                nombre,
                apellido,
                direccion,
                telefono,
                estado
            };

            const referenciaFamiliarExist: ReferenciaFamiliarI | null = await ReferenciaFamiliar.findByPk(pk);

            if (!referenciaFamiliarExist) {
                return res.status(404).json({ msg: "La Referencia Familiar no existe" });
            }

            await ReferenciaFamiliar.update(body, {
                where: { id: pk }
            });

            const referenciaFamiliar: ReferenciaFamiliarI | null = await ReferenciaFamiliar.findByPk(pk);
            if (referenciaFamiliar) {
                return res.status(200).json({ msg: "La referencia familiar ha sido actualizada" });
            }
        } catch (error) {
            return res.status(500).json({ msg: "Error Interno del Servidor" });
        }
    }

    public async deleteReferenciaFamiliar(req: Request, res: Response) {
        const { id: pk } = req.params;

        try {
            const referenciaFamiliarExist: ReferenciaFamiliarI | null = await ReferenciaFamiliar.findByPk(pk);
            if (!referenciaFamiliarExist) {
                return res.status(404).json({ msg: "La Referencia Familiar no existe" });
            }
            await ReferenciaFamiliar.destroy({
                where: { id: pk }
            });
            res.status(200).json({ msg: "Referencia Familiar Eliminada" });
        } catch (error) {
            res.status(500).json({ msg: "Error Interno del Servidor" });
        }
    }

    public async softDeleteReferenciaFamiliar(req: Request, res: Response) {
        const { id: pk } = req.params;
        const { estado } = req.body;

        try {
            const referenciaFamiliarExist: ReferenciaFamiliarI | null = await ReferenciaFamiliar.findByPk(pk);

            if (!referenciaFamiliarExist) {
                return res.status(404).json({ msg: "La Referencia Familiar no existe" });
            }

            await ReferenciaFamiliar.update({ estado }, {
                where: { id: pk }
            });

            const referenciaFamiliar: ReferenciaFamiliarI | null = await ReferenciaFamiliar.findByPk(pk);
            if (referenciaFamiliar) {
                return res.status(200).json({ msg: "La referencia familiar ha sido actualizada" });
            }
        } catch (error) {
            return res.status(500).json({ msg: "Error Interno del Servidor" });
        }
    }
}
