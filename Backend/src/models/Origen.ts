import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Viaje } from "./Viaje";

export class Origen extends Model {
  public codigo_origen!: string;
  public estado!: string;
}

export interface OrigenI {
  codigo_origen: string;
  estado: string; 
}

Origen.init(
  {
    codigo_origen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('Activo', 'Inactivo'), // Asumiendo que el estado tiene esos valores; cámbialos si es necesario.
      allowNull: false
  }
  },
  {
    tableName: "origenes",
    sequelize: database,
    timestamps: false
  }
);

Origen.hasMany(Viaje);
Viaje.belongsTo(Origen);