"use server";

import dbConnect from "../lib/dbConnect";
import Consumo from "../model/Consumo";

interface ConsumoData {
  fecha: string;
  descripcion: string;
  monto: number;
}

const addConsumo = async (
  data: FormData
): Promise<{ success: boolean; gasto?: ConsumoData; error?: string }> => {
  try {
    await dbConnect();

    const fecha = data.get("fecha") as string;
    const descripcion = data.get("descripcion") as string;
    const monto = Number(data.get("monto"));

    if (!fecha || !descripcion || isNaN(monto)) {
      throw new Error("Fecha, descripcion y monto son requeridos");
    }

    const consumoData: ConsumoData = { fecha, descripcion, monto };

    const newConsumo = new Consumo(consumoData);
    const savedConsumo = await newConsumo.save();

    const plainGasto: ConsumoData = {
      fecha: savedConsumo.fecha,
      descripcion: savedConsumo.descripcion,
      monto: savedConsumo.monto,
    };

    return { success: true, gasto: plainGasto };
  } catch (error: any) {
    console.error("Error al añadir gasto:", error);
    return { success: false, error: error.message };
  }
};

export { addConsumo };
