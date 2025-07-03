import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Customer() {
    const [customerList, setCityList] = useState([]);
        const [pageNumber, setPageNumber] = useState(1);
        const [totalPages, setTotalPages] = useState(0);
        const [nav, setNav] = useState([]);
    
        useEffect(()=>{
            fetch(`http://localhost/customerList/${pageNumber}`)
            .then((res) => (res.json()))
            .then(function(data){
                setCityList(data.content);   // data {} Page 타입이고, data.content가 배열
                setTotalPages(data.totalPages);
    
                // 페이지 nav
                const navSize = 10;
                const startNav = Math.floor((pageNumber - 1) / navSize) * navSize + 1;
                const arr = [];
    
                for (let i = startNav; i < startNav + navSize; i++) {
                    if(i > data.totalPages) break;
                    arr.push(i);
                }
    
                setNav(arr);
            });
        }, [pageNumber]); // 두번째 인자가 []이면 처음 화면 랜더링때 한번만 useEffect() 실행
      return (
        <div>
        <label>고객 항목</label>
        <Link className='btn' to="/AddCustomer">추가</Link>
        <table className='min-w-full divide-y divide-gray-200 text-sm text-left'>
            <tr>
                <th>#</th><th>고객 이름 (성 + 이름)</th>
            </tr>
            {
                customerList.map((c)=>(
                    <tr key={c.customerId}>
                      <td>{c.customerId}</td><td><Link to={`/CustomerOne/`+c.customerId}>{c.firstName} {c.lastName}</Link></td>
                    </tr>
                ))
            }
        </table>
        
        {/* 페이지 네비 */}
        <div>
            {
                nav[0] > 1 ? <button onClick={() => setPageNumber(nav[0] - 1)}>이전</button> : <span></span>
            }

            {
                nav.map((i) => (
                    <button key={i} onClick={() => setPageNumber(i)}>{i}</button>
                ))
            }

            {
                nav[nav.length - 1] < totalPages ? <button onClick={() => setPageNumber(nav[nav.length - 1] + 1)}>다음</button> : <span></span>
            }
        </div>

        </div>
      )
}
