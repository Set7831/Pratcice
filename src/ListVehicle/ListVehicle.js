import React from 'react';
import './ListVehicle.css';
import EditIcons from './edit.svg';
import DeleteIcons from './delete.svg';

const ListVehicle = props => (
        
    <tr className="table-row">
        <td style={{width: "5%"}}>{props.ID}</td>
        <td style={{width: "15%"}}>{props.Vehicle}</td>
        <td>{props.Driver}</td>
        <td>{props.Color}</td>
        <td>{props.Device}</td>
        <td>{props.Location}</td>
        <td>{props.Total_ODO}</td>
        <td className="actions" style={{width: "5%"}}>
            <iconbutton className="edit" buttonEdit={props.edit}>
                <img src={EditIcons} alt="Edit"/>
            </iconbutton>
            <iconbutton className="delete" buttonDelete={props.delete}>
                <img src={DeleteIcons} alt="Delete"/>
            </iconbutton>
        </td>
    </tr> 
);


export default ListVehicle;