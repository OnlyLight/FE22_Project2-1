import React, { Component } from 'react';
import ItemRowTable from "../sub-component/ItemRowTable";

class TableUsers extends Component {
    render() {
        return (
            <div className="card mb-3 mt-4">
                <div className="card-header">
                    <i className="fas fa-table"/> Data Table
                </div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <ItemRowTable>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john@example.com</td>
                                <td>user</td>
                                <td>
                                    <button className="mr-2 btn btn-warning">Edit</button>
                                </td>
                            </ItemRowTable>
                        </tbody>
                    </table>
                </div>
                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
        );
    }
}

export default TableUsers;