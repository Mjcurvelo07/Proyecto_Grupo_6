import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Viaje } from "./Viaje";

export class ReferenciaFamiliar extends Model {
  public nombre!: string;
  public apellido!: string;
  public direccion!: string;
  public telefono!: string;
  public estado!: string; // Añade el atributo estado si es necesario
}

export interface ReferenciaFamiliarI {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    estado: string; // Añade el atributo estado si es necesario
}

ReferenciaFamiliar.init(
  {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
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
    tableName: "ReferenciasFamiliares",
    sequelize: database,
    timestamps: false
  }
);


