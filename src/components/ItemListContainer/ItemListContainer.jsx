// import { ItemList } from "../ItemList/ItemList";

// export const ItemListContainer = ({ titulo, productos }) => {
//   //estado

//   //llamada a la una api

//   return (
//     <section>
//       <h1>{titulo}</h1>
//       <ItemList lista={productos} />
//     </section>
//   );
// };

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ titulo }) => {
  const [productos, setProductos] = useState([]); // estado local
  const { categoryId } = useParams(); // capturamos el parámetro de la URL

  useEffect(() => {
    // simulación de llamada a un JSON local
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        if (categoryId) {
          // si hay categoría, filtramos
          const filtrados = data.filter((prod) => prod.category === categoryId);
          setProductos(filtrados);
        } else {
          // si no hay categoría, mostramos todos
          setProductos(data);
        }
      })
      .catch((error) => console.error("Error cargando productos:", error));
  }, [categoryId]);

  return (
    <section>
      <h1>{titulo || (categoryId ? `Categoría: ${categoryId}` : "Productos")}</h1>
      <ItemList list={productos} />
    </section>
  );
};
