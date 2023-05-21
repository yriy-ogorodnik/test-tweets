import { BiLeftArrowAlt } from "react-icons/bi";

import { Link } from "react-router-dom";


export const BackClik = ({ to, children }) => {
  return (
    <Link to={to}>
      <BiLeftArrowAlt size="32" />
      {children}
    </Link>
  )
};