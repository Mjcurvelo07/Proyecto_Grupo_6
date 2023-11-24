import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { ReferenciaFamiliar } from "./Referencia_familiar";

export class Viajero extends Model {
  public nombre!: string;
  public direccion!: string;
  public telefono!: string;
  public estado!: string;
}

export interface ViajeroI {
    nombre: string;
    direccion: string;
    telefono: string;
    estado: string;
}

Viajero.init(
  {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('Activo', 'Inactivo'), // Asumiendo que el estado tiene esos valores; cámbialos si es necesario.
        allowNull: false
    }
  },
  {
    tableName: "viajeros",
    sequelize: database,
    timestamps: false
  }
);
Viajero.hasMany(ReferenciaFamiliar);
ReferenciaFamiliar.belongsTo(Viajero);