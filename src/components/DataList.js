import {Link} from "react-router-dom";

function DataList() {
    let pokemonArray =   [
        {name:'Cyndaquil', age: 22, color: 'red', id: 1},
        {name:'Oshawott', age: 11, color: 'blue', id: 2},
        {name:'Rowlet', age: 6, color: 'green', id: 3}
    ];

    let pokemonEles = pokemonArray.map((item) =>
        <Link to={`${item.id}`} key={item.id}>Name: {item.name} - Age: {item.age} - Color: {item.color} - ID: {item.id}<br/></Link>
    );

    return (
        <div>
            <br/>
            {pokemonEles}
        </div>
    )
}

export default DataList;