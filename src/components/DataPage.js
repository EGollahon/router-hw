import {useParams} from "react-router-dom";

function DataPage() {
    let pokemonArray =   [
        {name:'Cyndaquil', age: 22, color: 'red', id: 1},
        {name:'Oshawott', age: 11, color: 'blue', id: 2},
        {name:'Rowlet', age: 6, color: 'green', id: 3}
    ];

    const params = useParams();

    const currentObj = pokemonArray.find((obj) => obj.id === Number(params.id));

    return(
        <div>
            Name: {currentObj.name} <br/>
            Age: {currentObj.age} <br/>
            Color: {currentObj.color} <br/>
            ID: {currentObj.id}
        </div>
    )
}

export default DataPage;