import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Viaje } from "./Viaje";

export class Destino extends Model {
  public codigo_destino!: string;
  public estado!: string;
}

export interface DestinoI {
  codigo_destino: string;
  estado: string; 
}

Destino.init(
  {
    codigo_destino: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('Activo', 'Inactivo'), // Asumiendo que el estado tiene esos valores; cámbialos si es necesario.
      allowNull: false
  }
  },
  {
    tableName: "destinos",
    sequelize: database,
    timestamps: false
  }
);
Destino.hasMany(Viaje);
Viaje.belongsTo(Destino);