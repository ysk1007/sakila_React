import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function CountryOne() {
    const {countryId} = useParams();
    const [countryOne, setCountryOne] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost/countryOne/${countryId}`)
        .then((res) => (res.json()))
        .then(function(data){
            setCountryOne(data);
        })

    });

    function remove(){
        if(!window.confirm('삭제 하시겠습니까?')) return;

        fetch(`http://localhost/country/${countryId}`,
            {
                method: 'DELETE'
            }
        )
        .then((res)=>{
            if(res.ok){ // 200
                navigate('/Country');
            }
            else{       // http code 500
                window.alert('삭제 실패');
            }
        })
    }

  return (
    <div>
        <h1>상세보기</h1>
        <table className='min-w-auto divide-y divide-gray-200 text-sm text-left'>
            <tr>
                <th>#</th><td>{countryOne.countryId}</td>
            </tr>
            <tr>
                <th>나라</th><td>{countryOne.country}</td>
            </tr>
            <tr>
                <th>마지막 업데이트</th><td>{countryOne.lastUpdate}</td>
            </tr>
        </table>
        <br />
        <div>
            <button onClick={remove}>삭제</button>
            <button onClick={()=>{navigate(`/EditCountry/${countryId}`)}}>수정</button>
        </div>
    </div>
  )
}
