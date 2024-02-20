import { localidades, traductorSecciones as traductor } from "./dataArray";

export function processInfo(data) {
  const arrInfo = createArr(data);
  return createRespuestas(arrInfo);

  function createArr(data) {
    let arrInfo = [];
    const iterator = data.split("\n");
    for (let i = 0; i < iterator.length; i++) {
      let row = iterator[i].split("\t");
      let element = [
        row[1],
        row[0],
        parseInt(row[2]),
        parseInt(row[3]),
        parseInt(row[4]),
        parseInt(row[5]),
        parseInt(row[6]),
        parseInt(row[7]),
        parseInt(row[8]),
        parseInt(row[9]),
        parseInt(row[10]),
        parseInt(row[11]),
        parseInt(row[12]),
        parseInt(row[13]),
        parseInt(row[14]),
      ];
      arrInfo.push(element);
    }
    return arrInfo;
  }

  function createRespuestas(arrInfo) {
    let respuestas = [];
    for (let i = 0; i < localidades.length; i++) {
      let obj = {
        "Adultos Femenino": [],
        "Adultos Masculino": [],
        "Jóvenes Femenino": [],
        "Jóvenes Masculino": [],
        "ECYD Femenino": [],
        "ECYD Masculino": [],
      };
      const arrLocalidad = arrInfo.filter((row) => row[0] === localidades[i]);
      let respSec = "";

      arrLocalidad.forEach(function (element) {
        obj[element[1]] = element.slice(2, 14);
        if (element[14] === 1) {
          respSec += `${traductor[element[1]]},`;
        }
      });

      let respuesta = [
        localidades[i],
        obj["ECYD Femenino"][0],
        obj["ECYD Masculino"][0],
        obj["Adultos Femenino"][0],
        obj["Adultos Masculino"][0],
        obj["Jóvenes Femenino"][0],
        obj["Jóvenes Masculino"][0],
        obj["ECYD Femenino"][1],
        obj["ECYD Masculino"][1],
        obj["Adultos Femenino"][1],
        obj["Adultos Masculino"][1],
        obj["Jóvenes Femenino"][1],
        obj["Jóvenes Masculino"][1],
        obj["ECYD Femenino"][2],
        obj["ECYD Masculino"][2],
        obj["Adultos Femenino"][2],
        obj["Adultos Masculino"][2],
        obj["Jóvenes Femenino"][2],
        obj["Jóvenes Masculino"][2],
        (obj["ECYD Femenino"][3] ?? 0) + (obj["ECYD Femenino"][4] ?? 0),
        (obj["ECYD Masculino"][3] ?? 0) + (obj["ECYD Masculino"][4] ?? 0),
        obj["Adultos Femenino"][3],
        obj["Adultos Masculino"][3],
        obj["Jóvenes Femenino"][3],
        obj["Jóvenes Masculino"][3],
        obj["ECYD Femenino"][5],
        obj["ECYD Masculino"][5],
        obj["Jóvenes Femenino"][5],
        obj["Jóvenes Masculino"][5],
        (obj["ECYD Femenino"][6] ?? 0) + (obj["Jóvenes Femenino"][6] ?? 0),
        (obj["ECYD Masculino"][6] ?? 0) + (obj["Jóvenes Masculino"][6] ?? 0),
        (obj["ECYD Femenino"][7] ?? 0) + (obj["Jóvenes Femenino"][7] ?? 0),
        (obj["ECYD Masculino"][7] ?? 0) + (obj["Jóvenes Masculino"][7] ?? 0),
        obj["Adultos Femenino"][11],
        obj["Adultos Masculino"][11],
        obj["Adultos Femenino"][9],
        obj["Adultos Masculino"][9],
        (obj["Adultos Femenino"][8] ?? 0) + (obj["Jóvenes Femenino"][8] ?? 0),
        (obj["Adultos Masculino"][8] ?? 0) + (obj["Jóvenes Masculino"][8] ?? 0),
        (obj["Adultos Femenino"][10] ?? 0) +
          (obj["Adultos Masculino"][10] ?? 0),
        respSec,
      ];
      respuestas.push(respuesta);
    }
    return respuestas;
  }
}

export function makeSimpleInserts(data) {
  const respuestas = [];
  return respuestas;
}
