import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AddCountry() {
    const [country, setCountry] = useState("");
    const navigate = useNavigate();

    function addCountry(){
        fetch("http://localhost/country",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body : JSON.stringify({country : country})
        })
        .then((res)=>{
            if(res.ok){ // htpp 상태 코드 200
                alert("입력 성공");
                // /Country 컴포넌트
                navigate("/Country");
            }
            else{   // 300, 400, 500
                alert("입력 실패");
            }
        });
    }
  return (
    <div>
        <label>나라 추가</label>
        <br />
        <div>
            <label htmlFor="country">나라</label><input type="text" id="country" onChange={(e)=>{setCountry(e.target.value)}}></input><br />
            <br />
            <button onClick={addCountry}>입력</button>
            <div>{country}</div>
        </div>
    </div>
  )
}
