import Record from './Record.jsx';
import React, {useState} from 'react';
import './Table.css'
const Table = ({list, deleteRecord}) => {

	const [idsToDelete, setIdsToDelete] = useState([])
	const handleAddId = (e, record)=>{		
			setIdsToDelete(idsToDelete.concat(record))
	}

	return (
		<div className="container">
 			<table className='table'>
				 <thead>
					<tr>
						<th> <button onClick={deleteRecord}>Delete</button> </th>
						<th>id</th>
						<th>EstadoERP</th>
						<th>TipoDocumento</th>
						<th>NombreCliente</th>
						<th>NoLineas</th>
						<th>FechaPedido</th>
						<th>Pedido</th>
						<th>EstadoSiesa</th>
						<th>PedidoSiesa</th>
					</tr>
				 </thead>
				 <tbody>
				{list.map(
					({
						id,
						EstadoERP,
						TipoDocumento,
						NombreCliente,
						NoLineas,
						FechaPedido,
						Pedido,
						EstadoSiesa,
						PedidoSiesa,
					}) => (
						<Record
							key = {id}
							id={id}
							EstadoERP={EstadoERP}
							TipoDocumento={TipoDocumento}
							NombreCliente={NombreCliente}
							NoLineas={NoLineas}
							FechaPedido={FechaPedido}
							Pedido={Pedido}
							EstadoSiesa={EstadoSiesa}
							PedidoSiesa={PedidoSiesa}
							handleAddId = {handleAddId}
						/>
					)
				)}
				 </tbody>
 			</table>
		</div>
	);
}

export default Table;

