import { useState, useEffect } from 'react';
export default function Category(props) {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                const arr = data.products.map(elem => elem.category);
                setCategory(arr.filter((value, index) => arr.indexOf(value) === index))
            });
    }, []);

    return (
        <div className="Category">
            <button>Category</button>
            <div className="categories">
                <a href="#" onClick={() => props.setSelectedCategory(null)}><b>All</b></a>
                {category.map(elem => (
                    <a href="#" key={elem} onClick={() => props.setSelectedCategory(elem)}>
                        {elem}
                    </a>
                ))}
            </div>
        </div>
    );
}

