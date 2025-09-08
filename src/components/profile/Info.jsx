import PropTypes from "prop-types";
import InfoInput from "./InfoInput";

const Info = ({ profile }) => {
  return (
    <>
      <InfoInput title="Username" inputName="username" data={profile} />
      <InfoInput title="Your Name" inputName="name" data={profile} />
      <InfoInput title="About" inputName="about" data={profile} isTextArea />
    </>
  );
};

export default Info;

Info.propTypes = {
  profile: PropTypes.object.isRequired,
};
