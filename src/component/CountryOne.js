import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function CountryOne() {
    const {countryId} = useParams();
    const [countryOne, setCountryOne] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost/countryOne/${countryId}`)
        .then((res) => (res.json()))
        .then(function(data){
            setCountryOne(data);
        })

    });

  return (
    <div>
        <h1>상세보기</h1>
        <table className='min-w-auto divide-y divide-gray-200 text-sm text-left'>
            <tr>
                <th>#</th><td>{countryOne.countryId}</td>
            </tr>
            <tr>
                <th>나라</th><td>{countryOne.country}</td>
            </tr>
            <tr>
                <th>마지막 업데이트</th><td>{countryOne.lastUpdate}</td>
            </tr>
        </table>
    </div>
  )
}
