import { dataHeader } from "../../utils/dataArray";
import { createManyInforms } from "../../services/apiReportes";
import { createBatch } from "../../services/apiBatch";

export async function makeInserts(processInfo) {
  try {
    const newBatch = await createBatch();
    const idBatch = newBatch[0].id;
    await createManyInforms(createObjectArray(processInfo, idBatch));
    alert("Informes cargados correctamente");
  } catch (err) {
    console.error(err);
    alert("No se Cargo la Informacion");
  }
}

function createObjectArray(arr, id) {
  let inserts = [];
  arr.forEach((e) => {
    e.forEach((f, i) => {
      if (f === undefined) e[i] = 0;
    });
  });
  arr.forEach((e) => {
    const element = e.reduce((a, v, i) => ({ ...a, [dataHeader[i]]: v }), {});
    inserts.push({ ...element, id_batch: id });
  });
  return inserts;
}
