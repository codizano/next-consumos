// consumo.model.js
import mongoose, { Document, Model } from "mongoose";

// consumo.interface.ts
export interface IConsumo extends Document {
  fecha: string;
  descripcion: string;
  monto: number;
}

const consumoSchema = new mongoose.Schema<IConsumo>({
  // Fecha del consumo
  fecha: {
    type: String,
    required: true,
  },
  // Descripción del gasto
  descripcion: {
    type: String,
    required: true,
  },
  // Monto del gasto
  monto: {
    type: Number,
    required: true,
  },
});

let Consumo: Model<IConsumo>;
try {
  Consumo = mongoose.model<IConsumo>("Consumo");
} catch {
  Consumo = mongoose.model<IConsumo>("Consumo", consumoSchema);
}

export default Consumo;
