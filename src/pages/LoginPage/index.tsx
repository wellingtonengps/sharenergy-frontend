import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Input } from "../../components";
import { useState } from "react";
import "./style.css";
import { useAuth } from "../../hook/auth";

export default function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { signIn, user } = useAuth();

  async function handleSignin() {
    signIn(username, password);
    console.log(user);
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

        <div className="flex flex-col h-36 place-content-between mb-6">
          <Input
            name="Username"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
          />
          <Input
            name="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-10">
          <Checkbox name="Remember me" />
        </div>

        <div className="flex justify-center">
          <Button
            name="Create Account"
            color="signin"
            onClick={() => navigate("/createaccount")}
          />
        </div>
        <div className="flex justify-center mt-5">
          <Button
            name="Sign in"
            color="create account"
            onClick={handleSignin}
          />
        </div>
      </div>
    </>
  );
}
