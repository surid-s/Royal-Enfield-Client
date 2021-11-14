import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const ManageAllOrder = () => {
    const [order, setOrder] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch("localhost:5000/allOrder")
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [control]);

    const handleDelete = (id) => {
            fetch(`localhost:5000/deleteOrder/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                       
                    } else {
                        setConrol(false);
                    }
                });
        
    }                                                                                                  

    const handleStatus = (id) => {
        fetch(`localhost:5000/updateStatus/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify('Shipped')
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
            
                }
            })
    }

    return (
        <div className="container table-responsive">
            <div className="order-text">
                <h1>Total Orders: {order?.length}</h1>
            </div>
            <Table striped bordered hover className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Title</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Stutus</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {order.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.product}</td>
                            <td>{pd.email}</td>
                            <td>{pd.address}</td>
                            <td>
                                <button
                                    onClick={() => handleStatus(pd._id)}
                                    className="btn bg-warning p-2"
                                >
                                    Pending
                                </button>

                            </td>
                            <td>
                                <button
                                    onClick={() => handleDelete(pd._id)}
                                    className="btn bg-danger p-2"
                                >
                                    Delete
                                </button></td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageAllOrder;