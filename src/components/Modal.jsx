import PropTypes from "prop-types";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import closeIcon from "../assets/images/icons/close.svg";
import { useActionData } from "react-router-dom";

const Modal = forwardRef(function Modal({ Component }, ref) {
  const dialog = useRef();
  const actionData = useActionData();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
    close() {
      dialog.current.close();
    },
  }));

  // ? ************************************************************ Close the Modal ************************************************************ */
  const closeDialog = () => {
    dialog.current.close();
  };

  // ? ***************************************************************************************** Use Effect ***************************************************************************************** */
  useEffect(() => {
    if (actionData?.status) {
      dialog.current.close();
    }
  }, [actionData]);

  return createPortal(
    <dialog ref={dialog} className="border-none rounded-lg p-8 bg-gray-800">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex items-center text-center justify-between">
            <h2 className="dark:text-white text-lg font-semibold mb-4">
              Add Contacts
            </h2>
            <img
              src={closeIcon}
              alt="Close"
              className="w-5 h-5 cursor-pointer mb-3"
              onClick={closeDialog}
            />
          </div>
          <Component onClose={closeDialog} />
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

Modal.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default Modal;
