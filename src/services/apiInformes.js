import supabase from "./supabase";

export async function getInforms() {
  const { data, error } = await supabase
    .from("Inform")
    .select("*")
    .or("fecha.eq.2023,fecha.eq.2022")
    .order("id", { ascending: true }, "localidad", { ascending: true });

  console.log(data);

  if (error) {
    console.error(error);
    throw new Error("No se pudo cargar la informacion");
  }

  return data;
}

export async function getLastInforms() {
  const { data, error } = await supabase
    .from("Inform")
    .select("*")
    .order("id", { ascending: false })
    .limit(29);

  if (error) {
    console.error(error);
    throw new Error("No se pudo cargar la informacion");
  }

  return data;
}

export async function getLocalityInforms(locality) {
  const { data, error } = await supabase
    .from("Inform")
    .select("*")
    .eq("localidad", locality)
    .order("id", { ascending: false })
    .limit(10);

  if (error) {
    console.error(error);
    throw new Error("No se pudo cargar la informacion");
  }

  return data;
}

export async function getGeneralInfo() {
  const { data, error } = await supabase.from("generalinfo").select("*");

  if (error) {
    console.error(error);
    throw new Error("No se pudo cargar la informacion");
  }

  return data;
}

export async function createManyInforms(newInforms) {
  const { data, error } = await supabase.from("Inform").insert(newInforms);

  if (error) {
    console.error(error);
    throw new Error("Error al subir la informacion");
  }

  return data;
}
