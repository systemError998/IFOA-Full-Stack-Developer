import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/esm/Table';

export default function RowTableComponent( { user , index }) {
  return (
    <Table>
        <thead>
            <tr>
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>  {/* Degli oggetti che ti ho passato come props dimmi name, username, email ecc */}
                <td><Button variant="dark">Dark</Button><Button variant="dark">Dark</Button></td>
            </tr>
        </thead>
    <tbody>

    </tbody>
    </Table>
  )
}
