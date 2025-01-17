import { menuItems } from '../../menuItems';
import MenuItems from '../MenuItems';
const Navbar = () => {
  return (
    <nav className="container-fluid navMain">
      <ul className="menus container">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;