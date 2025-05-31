import Card from "../components/Card";
import { useState, useEffect } from 'react';

export default function Home(props) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        let filtered = data.products;

        // Filter by category
        if (props.selectedCategory) {
          filtered = filtered.filter(
            item => item.category === props.selectedCategory
          );
        }

        // Filter by search value (title or category)
        if (props.searchValue) {
          filtered = filtered.filter(item =>
            item.title.toLowerCase().includes(props.searchValue) ||
            item.category.toLowerCase().includes(props.searchValue)
          );
        }

        // Set filtered data
        setFilteredProducts(filtered);
      });
  }, [props.selectedCategory, props.searchValue]);

  const titles = filteredProducts.map(elem => elem.title);
  const pics = filteredProducts.map(elem => elem.images[0]);
  const descs = filteredProducts.map(elem => elem.description);
  const categories = filteredProducts.map(elem => elem.category);
  const price = filteredProducts.map(elem => elem.price);
  const brand = filteredProducts.map(elem => elem.brand);
  const rating = filteredProducts.map(elem => elem.rating);
  const stock = filteredProducts.map(elem => elem.stock);
  const shippingInfo = filteredProducts.map(elem => elem.shippingInformation);
  const reviews = filteredProducts.map(elem => elem.reviews);
  
  return (
    <div className="Home">
      <Card title={titles} pic={pics} desc={descs} 
      category={categories} price={price} brand={brand}
      rating={rating} stock={stock} shippingInfo={shippingInfo}
       reviews={reviews}/>
    </div>
  );
}
