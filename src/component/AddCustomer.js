import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AddCustomer() {
    const [storeId, setStoreId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [addressId, setAddressId] = useState("");


    const navigate = useNavigate();

    function addCustomer(){
        fetch("http://localhost/customer",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body : JSON.stringify({
                storeId : storeId,
                firstName : firstName,
                lastName : lastName,
                email : email,
                addressId : addressId
            })
        })
        .then((res)=>{
            if(res.ok){ // htpp 상태 코드 200
                alert("입력 성공");
                // /Customer 컴포넌트
                navigate("/Customer");
            }
            else{   // 300, 400, 500
                alert("입력 실패");
            }
        });
    }
  return (
    <div>
        <label>고객 추가</label>
        <br />
        <div>
            <label htmlFor="storeId">지점 아이디</label><input type="text" id="storeId" onChange={(e)=>{setStoreId(e.target.value)}}></input><br />
            <label htmlFor="firstName">이름</label><input type="text" id="firstName" onChange={(e)=>{setFirstName(e.target.value)}}></input><br />
            <label htmlFor="lastName">성</label><input type="text" id="lastName" onChange={(e)=>{setLastName(e.target.value)}}></input><br />
            <label htmlFor="email">이메일</label><input type="text" id="email" onChange={(e)=>{setEmail(e.target.value)}}></input><br />
            <label htmlFor="addressId">주소 아이디</label><input type="text" id="addressId" onChange={(e)=>{setAddressId(e.target.value)}}></input><br />
            <br />
            <button onClick={addCustomer}>입력</button>
        </div>
    </div>
  )
}
