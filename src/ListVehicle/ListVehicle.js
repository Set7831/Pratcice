import './ListVehicle.css';
import React from 'react';
import EditIcons from './edit.svg';
import DeleteIcons from './delete.svg';

const ListVehicle = props => {
    return (
        <table className="item-list">
            <tr className="table-row">
                <td>{props.ID}</td>
                <td>{props.Vehicle}</td>
                <td>{props.Driver}</td>
                <td>{props.Color}</td>
                <td>{props.Device}</td>
                <td>{props.Location}</td>
                <td>{props.Total_ODO}</td>
                <td className="actions">
                    <iconbutton className="edit" button_edit={props.edit}>
                        <img src={EditIcons}/>
                    </iconbutton>
                    <iconbutton className="delete" button_delete={props.delete}>
                    <img src={DeleteIcons}/>

                    </iconbutton></td>
            </tr>
        </table>
         
    );
}


export default ListVehicle;