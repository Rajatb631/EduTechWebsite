import { Link } from "react-router-dom";

const Sidebar = ({ links, title = "Menu" }) => {
  return (
    <div className="w-64 bg-gray-100 p-4 h-screen sticky top-0 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-6 text-green-600">{title}</h2>

      <ul className="space-y-3">
        {links.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-green-100 hover:text-green-600 transition"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
