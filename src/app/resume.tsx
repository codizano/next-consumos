"use client";
import { useRef, useState } from "react";
import { addConsumo } from "../../utils/consumoAction";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const [fechaError, setFechaError] = useState<string | null>(null);
  const [montoError, setMontoError] = useState<string | null>(null);
  const [descripcionError, setDescripcionError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    const fecha = formData.get("fecha") as string;
    const descripcion = formData.get("descripcion") as string;
    const monto = formData.get("monto") as string;

    // Codigo de Validacion para los diferentes campos
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form ref={formRef} action={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="fecha"
            className="block text-sm font-medium text-gray-700"
          >
            Fecha
          </label>
          <input
            id="fecha"
            name="fecha"
            type="date"
            onChange={() => setFechaError(null)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {fechaError && (
            <p className="mt-2 text-sm text-red-600">{fechaError}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="monto"
            className="block text-sm font-medium text-gray-700"
          >
            Monto
          </label>
          <input
            id="monto"
            name="monto"
            type="number"
            onChange={() => setMontoError(null)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {montoError && (
            <p className="mt-2 text-sm text-red-600">{montoError}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Guardar gasto
        </button>
      </form>
    </div>
  );
}
