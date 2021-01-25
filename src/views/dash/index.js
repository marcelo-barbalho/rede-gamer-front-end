import React, { useState, useEffect } from "react";
import { getUsers } from "../../services/admin";
import styled from "styled-components";

const Dash = () => {
  const [user, setUser] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(false);
    let get = async () => {
      const allUsers = await getUsers();
      setUser(allUsers.data);
    };
    if (!refresh) {
      get();
    }

    return () => (get = () => {});
  }, [refresh]);

  return (
    <Container>
      <h2>Lista de usuarios</h2>
      <Table>
        <thead>
          <tr>
            <TableHead>Active</TableHead>
            <TableHead>Admin</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Birthdate</TableHead>
            <TableHead>Email</TableHead>
          </tr>
        </thead>
        <tbody>
          {user.map((item, i) => (
            <tr key={i}>
              <td>{item.is_active ? "sim" : "não"}</td>
              <td>{item.is_admin ? "sim" : "não"}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.birthdate}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dash;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 82vh;

  /* padding-top:5px;
    padding-bottom:5px; */
  h2 {
    margin: 1em 0;
  }
`;

const Table = styled.table`
  td {
    padding: 0.5em;
  }
  border: 0;
`;

const TableHead = styled.th`
  margin: 5px;

  background-color: #000;
`;
