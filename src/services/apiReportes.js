import supabase from "./supabase";

export async function getReports() {
  const { data, error } = await supabase
    .from("General_Report")
    .select("*, Batch(*)")
    .or("id_batch.eq.15,id_batch.eq.14")
    .order("id_batch", { ascending: false }, "localidad", { ascending: true });
  if (error) {
    console.error(error);
    throw new Error("No se pudo cargar la informacion");
  }

  return data;
}

export async function getLastReports() {
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

export async function getLocalityReports(locality) {
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

export async function getAllReports() {
  const { data, error } = await supabase
    .from("General_Report")
    .select("*, Batch(*)");

  if (error) {
    console.error(error);
    throw new Error("No se pudo cargar la informacion");
  }

  return data;
}

export async function createManyReports(newInforms) {
  const { data, error } = await supabase
    .from("General_Report")
    .insert(newInforms);

  if (error) {
    console.error(error);
    throw new Error("Error al subir la informacion");
  }

  return data;
}

export async function deleteManyReports(id) {
  const { data, error } = await supabase
    .from("General_Report")
    .delete()
    .eq("id_batch", id);

  if (error) {
    console.error(error);
    throw new Error("Error al subir la informacion");
  }

  return data;
}
