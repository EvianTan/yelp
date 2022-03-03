import React, {useEffect} from 'react'
import { useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'

const RestaurantList = (props) => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/");
                setRestaurants(response.data.data.restaurants);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    },[])

  return (
    <div className='list-group'>
        <table className="table table-hover table-dark">
            <thead>
                <tr className="table-primary">
                    <th scope='col'>Restaurants</th>
                    <th scope='col'>Location</th>
                    <th scope='col'>Price Range</th>
                    <th scope='col'>Ratings</th>
                    <th scope='col'>Edit</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {restaurants && restaurants.map((restaurant) => {
                    return (
                        <tr key={restaurant.id}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.location}</td>
                            <td>{"$".repeat(restaurant.price_range)}</td>
                            <td>reviews</td>
                            <td><button className="btn btn-warning">Update</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                    );
                    
                })}
                {/* <tr>
                    <td>mcdonals</td>
                    <td>new york</td>
                    <td>$$</td>
                    <td>mcdonals</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
                <tr>
                    <td>mcdonals</td>
                    <td>new york</td>
                    <td>$$</td>
                    <td>mcdonals</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr> */}
            </tbody>
        </table>
    </div>
  )
}

export default RestaurantList