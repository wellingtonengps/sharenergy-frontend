import "./style.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export default function Button({ name, ...props }: ButtonProps) {
  return (
    <button
      className="bg-primary rounded-md font-sans text-base h-11 w-36"
      {...props}
    >
      {name}
    </button>
  );
}
