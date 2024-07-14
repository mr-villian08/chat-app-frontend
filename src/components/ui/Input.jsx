import PropTypes from "prop-types";

const Input = ({
  id,
  name,
  placeholder,
  type = "text",
  isRequired = false,
  isError = false,
  ...restProps
}) => {
  return (
    <div className="flex flex-col">
      <input
        id={id}
        className={`border dark:bg-indigo-700 dark:text-gray-300 p-3 shadow-md placeholder:text-base w-full border-gray-300 rounded-lg focus:scale-105 ease-in-out duration-300 ${
          isError ? "border-red-500" : "border-gray-300 dark:border-gray-700"
        }`}
        type={type}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        {...restProps}
      />
      {isError && (
        <p className="text-red-500 mt-1 text-sm">{restProps.errors[name]}</p>
      )}
    </div>
  );
};

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  isRequired: PropTypes.bool,
  isError: PropTypes.bool,
};
