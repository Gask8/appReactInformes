import { useEffect } from "react";
import { getLocalityReports } from "../../../services/apiReportes";

export function useReportsData(searchLocality, setInformes, setIsLoading) {
  useEffect(() => {
    async function fetchData() {
      // if (searchLocality === "") {
      //   return;
      // }
      try {
        setIsLoading(true);
        const res = getLocalityReports(searchLocality);
        res.then(
          function (data) {
            setInformes(data);
            setIsLoading(false);
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
  }, [searchLocality, setInformes, setIsLoading]);
}
