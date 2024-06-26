import PropTypes from "prop-types";

const Input = ({
  id,
  name,
  placeholder,
  type = "text",
  isRequired = false,
  ...restProps
}) => {
  return (
    <input
      id={id}
      className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base w-full border-gray-300 rounded-lg focus:scale-105 ease-in-out duration-300"
      type={type}
      name={name}
      placeholder={placeholder}
      required={isRequired}
      {...restProps}
    />
  );
};

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  isRequired: PropTypes.bool,
};
