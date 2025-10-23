// import { Nav } from "../Nav/Nav";

// export const Header = () => {
//   return (
//     <header>
//       <h2>HEADER</h2>
//       <Nav />
//     </header>
//   );
// };

import "./Header.css";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">🛍️ eShop</h1>
        <Nav />
      </div>
    </header>
  );
};

