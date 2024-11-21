import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Categories = () => {
    const [categories, setCategories] = useState([]); // ডিফল্ট মান হিসেবে খালি অ্যারে
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/categories.json')
            .then((res) => res.json())
            .then((data) => setCategories(data)) 
            .catch((error) => console.error('ERROR', error));
    }, []);

    return (
        <div className="h-[500px] w-64 p-3 bg-white rounded-3xl mt-10 ml-10 mr-10">

            {categories.length > 0 ? (
                categories.map(category => (
                    <NavLink
                        to={`/learning/${category.category}`}
                        key={category.category}
                        className={({ isActive }) =>
                            `btn w-full rounded-3xl mb-5 ${isActive ? 'btn-active' : ''}`
                        }
                    >
                        {category.category}
                    </NavLink>
                ))
            ) : (
                <p>Loading categories...</p>
            )}
            
            <button className="btn bg-purple-600 text-white" onClick={() => navigate('/learning')}>
                View All
            </button>
        </div>
    );
};

export default Categories;
