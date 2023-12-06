import supabase from "./supabase";

export async function getInforms() {
  const { data, error } = await supabase
    .from("Individual_Inform")
    .select("*, Batch(*)")
    // .eq("id_batch", "14")
    .or("id_batch.eq.15,id_batch.eq.14")
    .order("id_batch", { ascending: false }, "localidad", { ascending: true });

  // console.log(data);

  if (error) {
    console.error(error);
    throw new Error("No se pudo cargar la informacion");
  }

  return data;
}

export async function getSectionInform(seccion) {
  const { data, error } = await supabase
    .from("Individual_Inform")
    .select("*, Batch(*)")
    .eq("seccion", seccion)
    .order("id_batch", { ascending: false })
    .limit(1);

  if (error) {
    console.error(error);
    throw new Error("No se pudo cargar la informacion");
  }

  return data;
}

export async function createManyIndividualInforms(newInforms) {
  const { data, error } = await supabase
    .from("Individual_Inform")
    .insert(newInforms);

  if (error) {
    console.error(error);
    throw new Error("Error al subir la informacion");
  }

  return data;
}
