import supabase from "./supabase";

export async function getAnalisis(id_report) {
  const { data, error } = await supabase
    .from("Analisis")
    .select("*")
    .eq("id_report", id_report)
    .limit(1)
    .single();

  if (error) {
    console.error(error);
    if (error.code === "PGRST116") {
      const data2 = await createAnalisis({
        id_report: id_report,
        analisis: "",
        accion: "",
        analisis_a: "",
        accion_a: "",
        analisis_e: "",
        accion_e: "",
      });
      console.log("creando analisis");
      return data2[0];
    } else {
      console.error(error.code);
      throw new Error("No se pudo cargar la informacion");
    }
  }
  return data;
}

export async function createAnalisis(newAnalisis) {
  const { data, error } = await supabase
    .from("Analisis")
    .insert(newAnalisis)
    .select();

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

export async function getAnalisisData(id_batch) {
  const { data, error } = await supabase
    .from("Analisis")
    .select("*, General_Report!inner(localidad, id_batch)")
    .eq("General_Report.id_batch", id_batch);

  if (error) {
    console.error(error);
    throw new Error("No se pudo encontrar los analisis");
  }

  return data;
}
