import supabase from "./supabase";

export async function getInforms() {
  const { data, error } = await supabase
    .from("General_Report")
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

export async function getLastInforms() {
  const { data, error } = await supabase
    .from("General_Report")
    .select("*, Batch(*)")
    .order("id_batch", { ascending: false })
    .limit(29);

  if (error) {
    console.error(error);
    throw new Error("No se pudo cargar la informacion");
  }

  return data;
}

export async function getLocalityInforms(locality) {
  const { data, error } = await supabase
    .from("General_Report")
    .select("*, Batch(*)")
    .eq("localidad", locality)
    .order("id_batch", { ascending: false })
    .limit(10);

  if (error) {
    console.error(error);
    throw new Error("No se pudo cargar la informacion");
  }

  return data;
}

export async function getGeneralInfo() {
  const { data, error } = await supabase
    .from("generalinfo")
    .select("*, Batch(*)");

  if (error) {
    console.error(error);
    throw new Error("No se pudo cargar la informacion");
  }

  return data;
}

export async function createManyInforms(newInforms) {
  const { data, error } = await supabase
    .from("General_Report")
    .insert(newInforms);

  if (error) {
    console.error(error);
    throw new Error("Error al subir la informacion");
  }

  return data;
}
