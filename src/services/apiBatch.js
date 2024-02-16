import supabase from "./supabase";

export async function createBatch() {
  const newBatch = {
    fecha: getCurrentYear(),
    trimestre: getCurrentTrimestre(),
  };

  const { data, error } = await supabase
    .from("Batch")
    .insert(newBatch)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Error al crear una nueva tanda");
  }

  return data;
}

export async function deleteBatch(id) {
  const { data, error } = await supabase.from("Batch").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Error borrando tanda");
  }

  return data;
}

function getCurrentTrimestre() {
  const month = new Date().getMonth();
  if (month <= 2) return "Octubre-Diciembre";
  if (month <= 5) return "Enero-Marzo";
  if (month <= 8) return "Abril-Junio";
  return "Julio-Septiembre";
}

function getCurrentYear() {
  return new Date().getFullYear().toString();
}
