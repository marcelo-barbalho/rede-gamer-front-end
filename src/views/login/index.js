import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth/auth.action";
import Loading from "../../components/loading";
import history from "../../config/history";
import bg from "../../assets/images/bg-login.jpg";

const Login = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    username: "marceloteste",
    password: "123456789",
  });
  const loading = useSelector((state) => state.auth.loading);

  const handleChange = (attr) => {
    setForm({
      ...form,
      [attr.target.name]: attr.target.value,
    });
  };
  const isSubmitValid = () => form.username && form.password;

  const submitLogin = async (e) => {
    e.preventDefault();
    if (isSubmitValid()) {
      dispatch(login(form));
    }
    // console.log(form)
    // history.push('/')
  };

  const toForm = () => history.push("/adduser");

  return (
    <LoginPage>
      <CustomLogin>
        {loading ? (
          <Loading />
        ) : (
          <Form>
            <Form.Group controlId="formBasic">
              <Form.Label>User:</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="username"
                value={form.username || ""}
                type="text"
                placeholder="Insira seu usuário"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                onChange={handleChange}
                name="password"
                value={form.password || ""}
                placeholder="Insira sua Senha"
              />
            </Form.Group>
            <Button
              onClick={submitLogin}
              disabled={!isSubmitValid()}
              type="submit"
              variant="primary"
            >
              Submit
            </Button>
            <Link onClick={() => toForm()}>New Here? Join the force!</Link>
          </Form>
        )}
      </CustomLogin>
    </LoginPage>
  );
};
export default Login;

const CustomLogin = styled.div`
  width: 250px;
  background: rgba(0, 0, 0, 0.5);
  margin-left: 35%;
  padding: 1em;
  form {
    display: flex;
    flex-direction: column;
  }
  .form-group {
    padding: 1em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      background-color: #242526;
      color: #fff;
      box-shadow: none;
      border: none;
      padding: 5px;
      border-radius: 5px;
    }
  }
  button {
    width: 100%;
    margin-bottom: 1em;
    cursor: pointer;
  }
`;
const LoginPage = styled.div`
  background: url(${bg});
  background-size: cover;
  height: 82vh;
  padding-top: 20vh;
`;
const Link = styled.span`
  cursor: pointer;
  width: 100%;
  &:hover {
    text-decoration: underline;
  }
`;
