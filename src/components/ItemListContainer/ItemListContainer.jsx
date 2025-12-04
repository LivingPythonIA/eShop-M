import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import { getProducts } from "../../services/products"

export const ItemListContainer = ({titulo}) => {
  const [products, setProducts] = useState([])
  const {category} = useParams()
  // const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
  getProducts(category)
    .then((data) => setProducts(data))
    .catch((err) => {
      console.log(err)
 // modifico y agrego if *2
   setError(err.message || "Error al cargar productos");
      })
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section >
      <h2>{titulo}<span className="text-category">{category}</span></h2>
      <ItemList list={products}/>
    </section>
  )
}