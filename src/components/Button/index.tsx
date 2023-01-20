import "./style.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  color: "signin" | "create account";
}

export default function Button({ name, color, ...props }: ButtonProps) {
  return (
    <button
      className={`${
        color === "signin" ? "bg-primary" : "bg-secondary"
      } rounded-md font-sans text-base h-11 w-36`}
      {...props}
    >
      {name}
    </button>
  );
}
