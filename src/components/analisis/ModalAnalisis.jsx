import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAnalisis, updateAnalisis } from "../../services/apiAnalisis";
import { useRetriveAnalisis } from "./hooks/useAnalisis";
import toast from "react-hot-toast";

const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 10rem;
`;

function ModalAnalisis({ id_inform }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [obj, setObj] = useState({ analisis: "", accion: "" });

  useRetriveAnalisis(id_inform, setObj, setIsUpdating);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsUpdating(true);
      await updateAnalisis(obj);
      toast.success("Informacion Guardada");
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdating(false);
    }
  }

  async function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    try {
      setIsUpdating(true);
      await updateAnalisis({ ...obj, [field]: value });
      toast.success("Informacion Guardada");
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <div
      className="modal fade"
      id="AnswerModal"
      tabIndex="-1"
      aria-labelledby="AnswerModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="AnswerModalLabel">
              Reporte de Analisis y Accion
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <label htmlFor="analisis" className="form-label">
                Analisis:
              </label>
              <Textarea
                id="analisis"
                value={obj.analisis}
                onChange={(e) => setObj({ ...obj, analisis: e.target.value })}
                placeholder="Ingrese aqui el analisis de su reporte"
                onBlur={(e) => handleUpdate(e, "analisis")}
                disabled={isUpdating}
              ></Textarea>

              <label htmlFor="accion" className="form-label">
                Accion
              </label>
              <Textarea
                id="accion"
                value={obj.accion}
                onChange={(e) => setObj({ ...obj, accion: e.target.value })}
                placeholder="Ingrese aqui la accion de su reporte"
                onBlur={(e) => handleUpdate(e, "accion")}
                disabled={isUpdating}
              ></Textarea>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                disabled={isUpdating}
              >
                Cerrar
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isUpdating}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalAnalisis;
