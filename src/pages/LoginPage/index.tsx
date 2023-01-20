import { Button, Checkbox, Input } from "../../components";
import "./style.css";

export default function LoginPage() {
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
          <Input name="Username" />
          <Input name="Password" type="password" />
        </div>

        <div className="mb-10">
          <Checkbox name="Remember me" />
        </div>

        <div className="flex justify-center">
          <Button name="Entrar" />
        </div>
      </div>
    </>
  );
}
