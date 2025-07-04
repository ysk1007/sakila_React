import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function EditCity() {
    const {cityId} = useParams();
    const [city, setCity] = useState({});
    const [country, setCountry] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost/cityOne/${cityId}`)
        .then((res) => (res.json()))
        .then(function(data){
            setCity(data);
            setCountry(data.countryEntity);
        })

    }, []);

    function edit(){
        fetch(`http://localhost/city`,
        {
            method:'PATCH',
            headers:{"Content-Type": "application/json"},
            body : JSON.stringify({
                cityId: cityId,
                city: city.city,
                countryId : country.countryId
            })
        })
        .then((res)=>{
            if(res.ok){
                navigate('/City');
            }
            else{
                alert('수정 실패');
            }
        })
    }

  return (
    <div>
        <label># {cityId} 도시 수정</label>
        <br />

        <label htmlFor="city">도시 명</label><input type="text" id="city" onChange={(e)=>{setCity({...city, city : e.target.value})}} value={city.city}></input><br />
        <label htmlFor="countryId">나라 아이디</label><input type="text" id="countryId" onChange={(e)=>{setCountry({...country, countryId : e.target.value})}} value={country.countryId}></input><br />

        <br />
        <button onClick={edit}>수정</button>
    </div>
  )
}
