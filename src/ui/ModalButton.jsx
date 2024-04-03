import { HiOutlinePencilSquare } from "react-icons/hi2";

function ModalButton({ onClick }) {
  return (
    <button
      id="btn-edit"
      type="button"
      className="btn btn-warning n-print "
      data-bs-toggle="modal"
      data-bs-target="#AnswerModal"
    >
      Responder Analisis <br />y Acciones <HiOutlinePencilSquare />
    </button>
  );
}

export default ModalButton;
