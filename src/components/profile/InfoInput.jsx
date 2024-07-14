import PropTypes from "prop-types";
import { useRef, useState } from "react";
import editIcon from "../../assets/images/icons/edit.svg";
import checkIcon from "../../assets/images/icons/check.svg";
import { useNavigation, useSubmit } from "react-router-dom";

const InfoInput = ({ title, inputName, data, isTextArea = false }) => {
  const submit = useSubmit();
  const textareaRef = useRef(null);
  const { state } = useNavigation();
  const [textareaHeight, setTextareaHeight] = useState("24px");

  const [isEditInfo, setIsEditInfo] = useState({
    username: {
      value: data.username,
      isEditing: data.username.length === 0,
    },
    name: {
      value: data.name,
      isEditing: data.name.length === 0,
    },
    about: {
      value: data.about,
      isEditing: data.about.length === 0,
    },
  });

  // ? *********************************************************************************** Handle Textarea change *********************************************************************************** */
  const handleTextareaChange = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "24px";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setTextareaHeight(`${textarea.scrollHeight}px`);
  };

  // ? *********************************************************************************** Handle Submit *********************************************************************************** */
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditInfo((previousInfo) => ({
      ...previousInfo,
      [inputName]: { ...previousInfo[inputName], isEditing: false },
    }));
    return submit(
      { [inputName]: isEditInfo[inputName].value },
      { method: "POST" }
    );
  };

  return (
    <div className="mt-10">
      <form method="POST" onSubmit={handleSubmit}>
        <p className="text-sm text-green-300">{title}</p>
        {!isEditInfo[inputName].isEditing && (
          <div className="flex items-center justify-between">
            <p className="w-full py-1 mt-4 text-base text-gray-900 bg-gray-50 dark:bg-gray-900 dark:border-gray-800 dark:text-white">
              {isEditInfo[inputName].value}
            </p>
            <img
              src={editIcon}
              alt="Edit"
              className="h-5 w-5 mt-4 cursor-pointer"
              onClick={() =>
                setIsEditInfo((previousInfo) => ({
                  ...previousInfo,
                  [inputName]: { ...previousInfo[inputName], isEditing: true },
                }))
              }
            />
          </div>
        )}
        {isEditInfo[inputName].isEditing && (
          <div className="w-full py-1 mt-4 text-base relative flex items-center border-b border-gray-900 rounded-sm bg-gray-50 outline-none dark:bg-gray-900 dark:border-green-300 dark:placeholder-gray-400 dark:text-white">
            {!isTextArea && (
              <input
                type="text"
                name={inputName}
                value={isEditInfo[inputName].value}
                placeholder={`Enter ${title}`}
                className="bg-transparent border-none focus:outline-none text-white pr-10 w-full"
                onChange={(e) =>
                  setIsEditInfo((previousInfo) => ({
                    ...previousInfo,
                    [inputName]: { isEditing: true, value: e.target.value },
                  }))
                }
              />
            )}
            {isTextArea && (
              <textarea
                ref={textareaRef}
                name={inputName}
                id={inputName}
                value={isEditInfo[inputName].value}
                placeholder={`Enter ${title}`}
                className="bg-transparent border-none focus:outline-none text-white pr-10 w-full"
                onChange={(e) => {
                  handleTextareaChange();
                  setIsEditInfo((previousInfo) => ({
                    ...previousInfo,
                    [inputName]: { isEditing: true, value: e.target.value },
                  }));
                }}
                style={{ height: textareaHeight }}
              ></textarea>
            )}

            {state !== "submitting" && (
              <button className="mb-4" type="submit">
                <img
                  src={checkIcon}
                  alt="Submit"
                  className="h-6 w-6 absolute right-0"
                />
              </button>
            )}
            {state === "submitting" && (
              <div className="flex items-center justify-center">
                <div
                  className="animate-spin inline-block w-5 h-5 border-2 border-current border-t-transparent text-green-200 rounded-full"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default InfoInput;

InfoInput.propTypes = {
  title: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  isTextArea: PropTypes.bool,
};
