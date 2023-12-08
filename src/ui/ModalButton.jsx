import { HiOutlinePencilSquare } from "react-icons/hi2";

function ModalButton({ onClick }) {
  return (
    <button
      id="btn-edit"
      type="button"
      className="btn btn-warning"
      data-bs-toggle="modal"
      data-bs-target="#AnswerModal"
    >
      Reporte de Analisis <HiOutlinePencilSquare />
    </button>
  );
}

export default ModalButton;
