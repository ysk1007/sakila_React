import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function EditAddress() {
    const {addressId} = useParams();
    const [address,setAddress] = useState({});
    const [city, setCity] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost/addressOne/${addressId}`)
        .then((res) => (res.json()))
        .then(function(data){
            setAddress(data);
            setCity(data.cityEntity);
        })

    }, []);

    function edit(){
        fetch(`http://localhost/address`,
        {
            method:'PATCH',
            headers:{"Content-Type": "application/json"},
            body : JSON.stringify({
                addressId : addressId,
                address : address.address,
                address2 : address.address2,
                district : address.district,
                cityId : city.cityId,
                postalCode : address.postalCode,
                phone : address.phone,
            })
        })
        .then((res)=>{
            if(res.ok){
                navigate('/Address');
            }
            else{
                alert('수정 실패');
            }
        })
    }

  return (
    <div>
        <label># {addressId} 주소 수정</label>
        <br />

        <label htmlFor="address">주소</label><input type="text" id="address" onChange={(e)=>{setAddress({...address, address : e.target.value})}} value={address.address}></input><br />
        <label htmlFor="address2">주소2</label><input type="text" id="address2" onChange={(e)=>{setAddress({...address, address2 : e.target.value})}} value={address.address2}></input><br />
        <label htmlFor="district">구역</label><input type="text" id="district" onChange={(e)=>{setAddress({...address, district : e.target.value})}} value={address.district}></input><br />
        <label htmlFor="cityId">도시번호</label><input type="text" id="cityId" onChange={(e)=>{setCity({...city, cityId : e.target.value})}} value={city.cityId}></input><br />
        <label htmlFor="postalCode">우편번호</label><input type="text" id="postalCode" onChange={(e)=>{setAddress({...address, postalCode : e.target.value})}} value={address.postalCode}></input><br />
        <label htmlFor="phone">전화번호</label><input type="text" id="phone" onChange={(e)=>{setAddress({...address, phone : e.target.value})}} value={address.phone}></input><br />

        <br />
        <button onClick={edit}>수정</button>
    </div>
  )
}
