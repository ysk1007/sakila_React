import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function CityOne() {
    const {cityId} = useParams();
    const [cityOne, setCityOne] = useState([]);
    const [countryOne, setCountryOne] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost/cityOne/${cityId}`)
        .then((res) => (res.json()))
        .then(function(data){
            setCityOne(data);
            setCountryOne(data.countryEntity);
        })

    });

  return (
    <div>
        <label>상세보기</label>
        <table className='min-w-auto divide-y divide-gray-200 text-sm text-left'>
            <tr>
                <th>#</th><td>{cityOne.cityId}</td>
            </tr>
            <tr>
                <th>도시</th><td>{cityOne.city}</td>
            </tr>
            <tr>
                <th>나라</th><td>{countryOne.country}</td>
            </tr>
            
        </table>
    </div>
  )
}
