// import { Nav } from "../Nav/Nav";

// export const Header = () => {
//   return (
//     <header>
//       <h2>HEADER</h2>
//       <Nav />
//     </header>
//   );
// };
import { Nav } from "../Nav/Nav";
import "./Header.css";
export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* <h1 className="logo">🛍️ eShop</h1> */}
       <h1 className="logo">
  <span role="img" aria-label="bag">🛍️</span> eShop </h1>
        <Nav />
      </div>
    </header>
  );
};
