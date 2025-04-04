import { navMenu } from "../constants/data.js";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-700">
        <div className="container mx-auto flex items-center justify-between p-8">
          <div>Blog App</div>
          <ul className="flex items-center justify-between gap-4 uppercase text-white font-bold">
            {navMenu.map((menu, index) => {
              return (
                <li key={index}>
                  <a href={menu.href}>{menu.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;