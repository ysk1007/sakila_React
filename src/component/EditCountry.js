import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function EditCountry() {
    const {countryId} = useParams();
    const [country, setCountry] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost/countryOne/${countryId}`)
        .then((res) => (res.json()))
        .then(function(data){
            setCountry(data);
        })

    }, []);

    function edit(){
        fetch(`http://localhost/country`,
        {
            method:"PATCH",
            headers:{"Content-Type": "application/json"},
            body : JSON.stringify({
                countryId : country.countryId,
                country : country.country
            })
        })
        .then((res)=>{
            if(res.ok){
                navigate('/Country');
            }
            else{
                alert('수정 실패');
            }
        })
    }

  return (
    <div>
        <label># {country.countryId} 나라 수정</label>
        <br />

        <label htmlFor="country">나라</label>
        <input type="text" id="country" onChange={(e)=>{setCountry({...country, country : e.target.value})}} value={country.country}></input><br />
        <br />
        <button onClick={edit}>수정</button>
    </div>
  )
}
