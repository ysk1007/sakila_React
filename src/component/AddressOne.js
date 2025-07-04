import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function AddressOne() {
    const {addressId} = useParams();
    const [addressOne, setAddressOne] = useState([]);
    const [cityOne, setCityOne] = useState([]);
    const [countryOne, setCountryOne] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost/addressOne/${addressId}`)
        .then((res) => (res.json()))
        .then(function(data){
            setAddressOne(data);
            setCityOne(data.cityEntity);
            setCountryOne(data.cityEntity.countryEntity);
        })

    });

    function remove(){
    if(!window.confirm('삭제 하시겠습니까?')) return;

    fetch(`http://localhost/address/${addressId}`,
        {
            method: 'DELETE'
        }
    )
    .then((res)=>{
        if(res.ok){ // 200
            navigate('/Address');
        }
        else{       // http code 500
            window.alert('삭제 실패');
        }
    })
}
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

        <div>
            <button onClick={remove}>삭제</button>
            <button onClick={()=>{navigate(`/EditAddress/${addressId}`)}}>수정</button>
        </div>
    </div>
  )
}
