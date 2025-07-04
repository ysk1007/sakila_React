import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function CityOne() {
    const {cityId} = useParams();
    const [cityOne, setCityOne] = useState([]);
    const [countryOne, setCountryOne] = useState([]);
    const navigate = useNavigate();

        useEffect(()=>{
            fetch(`http://localhost/cityOne/${cityId}`)
            .then((res) => (res.json()))
            .then(function(data){
                setCityOne(data);
                setCountryOne(data.countryEntity);
            })

        });

        function remove(){
            if(!window.confirm('삭제 하시겠습니까?')) return;

            fetch(`http://localhost/city/${cityId}`,
                {
                    method: 'DELETE'
                }
            )
            .then((res)=>{
                if(res.ok){ // 200
                    navigate('/City');
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
                <th>#</th><td>{cityOne.cityId}</td>
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
            <button onClick={()=>{navigate(`/EditCity/${cityId}`)}}>수정</button>
        </div>
    </div>
  )
}
