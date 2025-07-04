import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function EditCustomer() {
    const {customerId} = useParams();
    const [customer, setCustomer] = useState({});
    const [store,setStore] = useState({});
    const [address,setAddress] = useState({});

    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost/customerOne/${customerId}`)
        .then((res) => (res.json()))
        .then(function(data){
            setCustomer(data);
            setStore(data.storeEntity)
            setAddress(data.addressEntity);
        })

    }, []);

    function edit(){
        fetch(`http://localhost/customerUpdate`,
        {
            method:'PATCH',
            headers:{"Content-Type": "application/json"},
            body : JSON.stringify({
                customerId : customerId,
                storeId : store.storeId,
                firstName : customer.firstName,
                lastName : customer.lastName,
                email : customer.email,
                addressId : address.addressId
            })
        })
        .then((res)=>{
            if(res.ok){
                navigate('/Customer');
            }
            else{
                alert('수정 실패');
            }
        })
    }

  return (
    <div>
        <label># {customerId} 고객 수정</label>
        <br />

        <label htmlFor="storeId">지점 아이디</label><input type="text" id="storeId" onChange={(e)=>{setStore({...store, storeId : e.target.value})}} value={store.storeId}></input><br />
        <label htmlFor="firstName">이름</label><input type="text" id="firstName" onChange={(e)=>{setCustomer({...customer, firstName : e.target.value})}} value={customer.firstName}></input><br />
        <label htmlFor="lastName">성</label><input type="text" id="lastName" onChange={(e)=>{setCustomer({...customer, lastName : e.target.value})}} value={customer.lastName}></input><br />
        <label htmlFor="email">이메일</label><input type="text" id="email" onChange={(e)=>{setCustomer({...customer, email : e.target.value})}} value={customer.email}></input><br />
        <label htmlFor="addressId">주소 아이디</label><input type="text" id="addressId" onChange={(e)=>{setAddress({...address, addressId : e.target.value})}} value={address.addressId}></input><br />

        <br />
        <button onClick={edit}>수정</button>
    </div>
  )
}
