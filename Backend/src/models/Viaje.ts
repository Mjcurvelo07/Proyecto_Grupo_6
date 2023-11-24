import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Viajero } from "./Viajero";
import { ReferenciaFamiliar } from "./Referencia_familiar";

export class Viaje extends Model {
  public numero_plaza!: number;
  public fecha_viaje!: Date;
  public estado!: string;
}

export interface ViajeI {
  numero_plaza: number;
  fecha_viaje: Date;
  estado: string;
}

Viaje.init(
  {
    numero_plaza: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_viaje: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('Activo', 'Inactivo'), // Asumiendo que el estado tiene esos valores; cámbialos si es necesario.
      allowNull: false
  }
  },
  {
    tableName: "viajes",
    sequelize: database,
    timestamps: false
  }
);
Viajero.hasMany(Viaje);
Viaje.belongsTo(Viajero);

Viaje.hasMany(ReferenciaFamiliar);
ReferenciaFamiliar.belongsTo(Viaje);