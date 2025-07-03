import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function CustomerOne() {
    const {customerId} = useParams();
    const [customerOne, setCustomerOne] = useState([]);
    const [storeOne, setStoreOne] = useState([]);
    const [addressOne, setAddressOne] = useState([]);
    const [cityOne, setCityOne] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost/customerOne/${customerId}`)
        .then((res) => (res.json()))
        .then(function(data){
            setCustomerOne(data);
            setStoreOne(data.storeEntity);
            setAddressOne(data.addressEntity);
            setCityOne(data.addressEntity.cityEntity);
        })

    });

  return (
    <div>
        <label>상세보기</label>
        <table className='min-w-auto divide-y divide-gray-200 text-sm text-left'>
            <tr>
                <th>#</th><td>{customerOne.customerId}</td>
            </tr>
            <tr>
                <th>지점</th><td>{storeOne.storeId}호점</td>
            </tr>
            <tr>
                <th>이름</th><td>{customerOne.firstName}{customerOne.lastName}</td>
            </tr>
            <tr>
                <th>전화번호</th><td>{addressOne.phone}</td>
            </tr>
            <tr>
                <th>이메일</th><td>{customerOne.email}</td>
            </tr>
            <tr>
                <th>가입일</th><td>{customerOne.createDate}</td>
            </tr>
            <tr>
                <th>주소</th><td>{cityOne.city} {addressOne.address} {addressOne.address2} {addressOne.district}</td>
            </tr>
            
        </table>
    </div>
  )
}
