import { dataHeader, dataHeaderInforms } from "../../utils/dataArray";
import {
  createManyReports,
  deleteManyReports,
} from "../../services/apiReportes";
import { createBatch, deleteBatch } from "../../services/apiBatch";
import {
  createManyInforms,
  deleteManyInforms,
} from "../../services/apiInformes";

export async function makeInserts(processInfo, individual_informs) {
  let idBatch;
  try {
    const newBatch = await createBatch();
    idBatch = newBatch[0].id;
    await createManyReports(createObjectArray(processInfo, idBatch));
    console.log(individual_informs);
    console.log(createObjectIndividualInform(individual_informs, idBatch));
    await createManyInforms(
      createObjectIndividualInform(individual_informs, idBatch)
    );
    alert("Informes cargados correctamente");
  } catch (err) {
    console.error(err);
    alert("No se Cargo la Informacion");
    console.log(idBatch);
    await deleteManyReports(idBatch);
    await deleteManyInforms(idBatch);
    await deleteBatch(idBatch);
    console.log("Batch eliminado");
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

function createObjectIndividualInform(arr, id) {
  let inserts = [];
  arr.forEach((e) => {
    e.forEach((f, i) => {
      if (f === "") e[i] = null;
    });
  });
  arr.forEach((e) => {
    const element = e.reduce(
      (a, v, i) => ({ ...a, [dataHeaderInforms[i]]: v }),
      {}
    );
    inserts.push({ ...element, id_batch: id });
  });
  return inserts;
}
