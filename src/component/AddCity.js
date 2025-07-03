import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AddCity() {
    const [city, setCity] = useState("");
    const [countryId, setCountryId] = useState("");


    const navigate = useNavigate();

    function addCity(){
        fetch("http://localhost/city",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body : JSON.stringify({
                city : city,
                countryId : countryId
            })
        })
        .then((res)=>{
            if(res.ok){ // htpp 상태 코드 200
                alert("입력 성공");
                // /City 컴포넌트
                navigate("/City");
            }
            else{   // 300, 400, 500
                alert("입력 실패");
            }
        });
    }
  return (
    <div>
        <label>도시 추가</label>
        <br />
        <div>
            <label htmlFor="city">도시 명</label><input type="text" id="city" onChange={(e)=>{setCity(e.target.value)}}></input><br />
            <label htmlFor="countryId">나라 아이디</label><input type="text" id="countryId" onChange={(e)=>{setCountryId(e.target.value)}}></input><br />
            <br />
            <button onClick={addCity}>입력</button>
        </div>
    </div>
  )
}
