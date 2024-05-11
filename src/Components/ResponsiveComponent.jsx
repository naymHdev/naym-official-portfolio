/* eslint-disable react/prop-types */

import useScreenSize from "../Hooks/useScreenSize";

const ResponsiveComponent = ({ children }) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
