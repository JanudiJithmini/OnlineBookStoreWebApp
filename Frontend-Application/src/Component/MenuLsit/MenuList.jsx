import { Link } from "react-router-dom";

function MenuList({ linkName, url }) {
  return (
    <Link to={url} className="menu-list">
      {linkName}
    </Link>
  );
}

export default MenuList;
