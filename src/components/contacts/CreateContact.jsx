import { useFormik } from "formik";
import PropTypes from "prop-types";
import { addContactSchema } from "../../utils/Schema";
import { useSubmit } from "react-router-dom";

const CreateContact = ({ onClose }) => {
  const submit = useSubmit();

  // ? ***************************************************************************************** Use of Formik ***************************************************************************************** */
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        emailPhoneUsername: "",
      },
      validationSchema: addContactSchema,
      onSubmit: (values) => {
        return submit(values, { method: "POST" });
      },
    });

  const submitHandler = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  // ? ***************************************************************************************** Render the form ***************************************************************************************** */
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-4">
        <input
          className={`block w-full p-2 text-lg text-gray-900 border rounded-sm bg-gray-50 outline-none dark:bg-gray-900  dark:placeholder-gray-400 dark:text-white ${
            errors.emailPhoneUsername && touched.emailPhoneUsername
              ? "border-red-500 dark:border-red-500"
              : "border-gray-900 dark:border-gray-800"
          }`}
          id="default-search"
          name="emailPhoneUsername"
          placeholder="Enter Email, Phone or Username"
          type="text"
          value={values.emailPhoneUsername}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
        />
        {errors.emailPhoneUsername && touched.emailPhoneUsername && (
          <p className="text-red-500 mt-2">{errors.emailPhoneUsername}</p>
        )}
      </div>
      {/* <div className="mb-4">
        <label htmlFor="message" className="block text-gray-400 mb-2">
          Invitation Message
        </label>
        <textarea
          id="message"
          placeholder="Enter Message"
          className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          //   value={message}
          //   onChange={(e) => setMessage(e.target.value)}
        />
      </div> */}
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          onClick={onClose}
        >
          Close
        </button>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Contact
        </button>
      </div>
    </form>
  );
};

export default CreateContact;

CreateContact.propTypes = {
  onClose: PropTypes.func.isRequired,
};
