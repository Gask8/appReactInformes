import supabase from "./supabase";

export async function getManoAmigaData(id_batch) {
  const { data, error } = await supabase
    .from("Mano_Amiga")
    .select("*")
    .eq("id_batch", id_batch);

  if (error) {
    console.error(error);
    throw new Error("No se pudo encontrar la informacion de mano amiga");
  }

  return data;
}
