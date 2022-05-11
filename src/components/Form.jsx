import React, {useState, useEffect} from 'react'
import './Form.css'

export default function Form({addRecord, updateRecord}) {
	const [data, setData] = useState({})
	const [register, setRegister] = useState(true)
	const [successfullySaved, setSuccessfullySaved] = useState(false)

	const handleRegister=()=>{
		setRegister(!register)
		setSuccessfullySaved(false)
	}

	const handleData =(e)=>{
		setData({...data, [e.target.id]: e.target.value})
	}

	const handleSendData =(e)=>{
		setData({...data,
		inpOrderSiesa: data["inpDocType"]+data["inpOrder"],
		orderDate: new Date().toISOString(),
		register
		})
		setSuccessfullySaved(true)
	}

	const handleUpdateData =(e)=>{
		setData({...data,
		inpOrderSiesa: data["inpDocType"]+data["inpOrder"],
		orderDate: new Date().toISOString(),
		register
		})
		setSuccessfullySaved(true)
	}

	useEffect((e) => {
		if(data.inpStatusERP) addRecord(e, data)
		if(data.inpId) updateRecord(e, data)
	}, [successfullySaved]);

  return (
	  	<section>
		  <button className='btnSwich' onClick={handleRegister} >{register ? "Actualizar" : "Registrar"}</button>
		  <h3> {register ? "Registrar" : "Actualizar"} </h3>
	 <form>
		 <label disabled={register} htmlFor="inpId">id</label>
		 <input onChange={handleData} disabled={register} type="text" id="inpId" />

		 <label htmlFor="inpStatusERP">EstadoERP</label>
		 <select defaultValue={"DEFAULT"} onChange={handleData} id='inpStatusERP'>
  				<option value="DEFAULT" disabled>Selecionar</option>
  				<option value="Aprobado">Aprobado</option>
  				<option value="Anulado">Anulado</option>
  				<option value="Finalizado">Finalizado</option>
		</select>

		 <label htmlFor="inpDocType">EstadoERP</label>
		 <select defaultValue={"DEFAULT"} onChange={handleData} id='inpDocType'>
  				<option value="DEFAULT" disabled>Selecionar</option>
  				<option value="AGDC">AGDC</option>
  				<option value="BHPC">BHPC</option>
  				<option value="GRTC">GRTC</option>
  				<option value="PCMC">PCMC</option>
		</select>

		 <label htmlFor="inpName">Nombre</label>
		 <input onChange={handleData} type="text" id="inpName" />

		 <label htmlFor="inpLines">Nolineas</label>
		 <input onChange={handleData} type="text" id="inpLines" />

		 <label htmlFor="inpOrder">Pedido</label>
		 <input onChange={handleData} type="text" id="inpOrder" />

		 <label htmlFor="inpStatusSiesa">EstadoSiesa</label>
		 <select defaultValue={"DEFAULT"}  onChange={handleData} id='inpStatusSiesa'>
  				<option value="DEFAULT" disabled>Selecionar</option>
  				<option value="1" >1</option>
  				<option value="0" >0</option>
		</select>

		{register ? 
		<button type='button' onClick={(e)=>{handleSendData()}}>Agregar</button> : 
		<button type='button' onClick={(e)=>{handleUpdateData()}}>Actualizar</button>
		}

	 </form>
	 </section>
  )
}
