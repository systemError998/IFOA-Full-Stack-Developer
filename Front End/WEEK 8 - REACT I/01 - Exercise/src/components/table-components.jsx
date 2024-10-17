
function TableComponent(props) {
    return (
        <table>
            <tr>
                <th>Nome</th>
                <th>Cognome</th>
                <th>Età</th>
                <th>Città</th>
            </tr>
            
            {props.users.map(user => (
                <tr>
                    <td>{user.nome}</td>
                    <td>{user.cognome}</td>
                    <td>{user.età}</td>
                    <td>{user.città}</td>
                </tr>
            ))}
        </table>
    )
}

export default TableComponent