import supabase from "./supabase";

export async function getAnalisis(id_report) {
  const { data, error } = await supabase
    .from("Analisis")
    .select("*")
    .eq("id_report", id_report)
    .single();
  // console.log(data);

  if (error) {
    if (error.code === "PGRST116") {
      createAnalisis({ id_report: id_report, analisis: "", accion: "" });
    } else {
      console.error(error.code);
      throw new Error("No se pudo cargar la informacion");
    }
  }

  return data;
}

export async function createAnalisis(newAnalisis) {
  const { data, error } = await supabase.from("Analisis").insert(newAnalisis);

  if (error) {
    console.error(error);
    throw new Error("Error al guardar la informacion");
  }

  return data;
}

export async function updateAnalisis(newAnalisis) {
  const { data, error } = await supabase
    .from("Analisis")
    .update(newAnalisis)
    .eq("id", newAnalisis.id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Error al guardar la informacion");
  }

  return data;
}
