import React, {useState, useEffect} from 'react';

const Record = ({ id, EstadoERP, TipoDocumento, NombreCliente, NoLineas, FechaPedido, Pedido, EstadoSiesa, PedidoSiesa, handleAddId }) => {

const [isChecked, setIsChecked] = useState(false)
	const colorStateList = {
		Aprobado : "#0ad135",
		Anulado : "red",
		Finalizado : "blue",
	}

	const colorState = colorStateList[EstadoERP]

	useEffect((e) => {
			handleAddId(e, {id, isChecked})
			
	}, [isChecked]);

	return (
		<tr>
			<td>
				<input type='checkbox' checked={isChecked} name={id} onChange={(e)=>
					{
						setIsChecked(!isChecked)
					}
				}/>
			</td>
			<td>{id}</td>
			<td style={{color:colorState}} >{EstadoERP}</td>
			<td>{TipoDocumento}</td>
			<td>{NombreCliente}</td>
			<td>{NoLineas}</td>
			<td>{FechaPedido}</td>
			<td>{Pedido}</td>
			<td>{EstadoSiesa}</td>
			<td>{PedidoSiesa}</td>
		</tr>
	);
};

export default Record;
