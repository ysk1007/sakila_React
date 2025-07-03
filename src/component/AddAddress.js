import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AddAddress() {
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [district, setDistrict] = useState("");
    const [cityId, setCityId] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [phone, setPhone] = useState("");


    const navigate = useNavigate();

    function addAddress(){
        fetch("http://localhost/address",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body : JSON.stringify({
                address : address,
                address2 : address2,
                district : district,
                cityId : cityId,
                postalCode : postalCode,
                phone : phone,
            })
        })
        .then((res)=>{
            if(res.ok){ // htpp 상태 코드 200
                alert("입력 성공");
                // /Address 컴포넌트
                navigate("/Address");
            }
            else{   // 300, 400, 500
                alert("입력 실패");
            }
        });
    }
  return (
    <div>
        <label>주소 추가</label>
        <br />
        <div>
            <label htmlFor="address">주소</label><input type="text" id="address" onChange={(e)=>{setAddress(e.target.value)}}></input><br />
            <label htmlFor="address2">주소2</label><input type="text" id="address2" onChange={(e)=>{setAddress2(e.target.value)}}></input><br />
            <label htmlFor="district">구역</label><input type="text" id="district" onChange={(e)=>{setDistrict(e.target.value)}}></input><br />
            <label htmlFor="cityId">도시번호</label><input type="text" id="cityId" onChange={(e)=>{setCityId(e.target.value)}}></input><br />
            <label htmlFor="postalCode">우편번호</label><input type="text" id="postalCode" onChange={(e)=>{setPostalCode(e.target.value)}}></input><br />
            <label htmlFor="phone">전화번호</label><input type="text" id="phone" onChange={(e)=>{setPhone(e.target.value)}}></input><br />
            <br />
            <button onClick={addAddress}>입력</button>
        </div>
    </div>
  )
}
