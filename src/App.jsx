import { useState, useEffect } from 'react';
import database from './database/index.js';

import Table from './components/Table.jsx';
import Navigation from './components/Navigation';
import Form from './components/Form'
import NotFound from './components/NotFound'
import Home from './components/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const [list, setList ] = useState(database);
	const handleAddRecord =(e, record)=>{
		setList(list.concat({
			id:list.length,
			EstadoERP:record.inpStatusERP,
			TipoDocumento:record.inpDocType,
			NombreCliente:record.inpName,
			NoLineas:Number(record.inpLines),
			FechaPedido:record.orderDate,
			Pedido:record.inpOrder,
			EstadoSiesa:Number(record.inpStatusSiesa),
			PedidoSiesa:record.inpOrderSiesa
		}))
	}

	const handleUpdateRecord =(e, record)=>{
		let newList = []
		for (let idx = 0; idx < list.length; idx++) {
			if(list[idx].id == record.inpId ){
				list[idx].EstadoERP=record.inpStatusERP;
				list[idx].TipoDocumento=record.inpDocType;
				list[idx].NombreCliente=record.inpName;
				list[idx].NoLineas=record.inpLines;
				list[idx].FechaPedido=record.orderDate;
				list[idx].Pedido=record.inpOrder;
				list[idx].EstadoSiesa=record.inpStatusSiesa;
				list[idx].PedidoSiesa=record.inpOrderSiesa
				newList = newList.concat(list[idx])
			}else{
				newList = newList.concat(list[idx])
			}
		}
		setList(newList)
	}

	const handleDeleteRecord=(e, ids)=>{
		const newList = list.filter(item=>item.id !== ids[0])
		setList(newList)

	}
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/table' element={<Table list = {list} deleteRecord={handleDeleteRecord}/>} />
				<Route path='/form' element={<Form addRecord={handleAddRecord} updateRecord ={handleUpdateRecord} />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
 