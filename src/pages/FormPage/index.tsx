import { useState } from "react";
import { Button, Input } from "../../components";
import "./style.css";
import { User, useAuth } from "../../hook/auth";

export default function FormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { createUserAccount } = useAuth();

  async function createAccout() {
    const data: User = {
      name: name,
      email: email,
      cpf: parseInt(CPF),
      address: address,
      phoneNumber: parseInt(phoneNumber),
      username: username,
      password: password,
    };

    createUserAccount(data);
  }

  return (
    <>
      <div className="flex flex-col align-middle">
        <img
          src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
          alt="logo"
          height={33}
          width={304}
          className="mb-10"
        />

        <form className="flex flex-col place-content-between mb-6 gap-2">
          <Input
            name="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            name="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            name="CPF"
            onChange={(e) => setCPF(e.target.value)}
            value={CPF}
          />
          <Input
            name="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
          <Input
            name="Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
          <Input
            name="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <Input
            name="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </form>

        <div className="flex justify-center">
          <Button
            name="Create Account"
            onClick={createAccout}
            color="create account"
          />
        </div>
      </div>
    </>
  );
}
