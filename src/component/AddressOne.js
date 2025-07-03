import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function AddressOne() {
    const {addressId} = useParams();
    const [addressOne, setAddressOne] = useState([]);
    const [cityOne, setCityOne] = useState([]);
    const [countryOne, setCountryOne] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost/addressOne/${addressId}`)
        .then((res) => (res.json()))
        .then(function(data){
            setAddressOne(data);
            setCityOne(data.cityEntity);
            setCountryOne(data.cityEntity.countryEntity);
        })

    });

  return (
    <div>
        <label>상세보기</label>
        <table className='min-w-auto divide-y divide-gray-200 text-sm text-left'>
            <tr>
                <th>#</th><td>{addressOne.addressId}</td>
            </tr>
            <tr>
                <th>주소</th><td>{addressOne.address} {addressOne.address2}</td>
            </tr>
            <tr>
                <th>구역</th><td>{addressOne.district}</td>
            </tr>
            <tr>
                <th>우편번호</th><td>{addressOne.postalCode}</td>
            </tr>
            <tr>
                <th>전화번호</th><td>{addressOne.phone}</td>
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
