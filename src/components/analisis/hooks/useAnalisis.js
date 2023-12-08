import { useEffect } from "react";
import { getAnalisis } from "../../../services/apiAnalisis";

export function useRetriveAnalisis(id_inform, setObj, setIsUpdating) {
  useEffect(() => {
    async function fetchData() {
      try {
        setIsUpdating(true);
        const res = getAnalisis(id_inform);
        res.then(
          function (data) {
            setObj(data);
            setIsUpdating(false);
          },
          function (error) {
            console.log(error);
          }
        );
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id_inform, setObj, setIsUpdating]);
}
