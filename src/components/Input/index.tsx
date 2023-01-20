import "./style.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: "text " | "password" | "checkbox";
}

export default function Input({ name, type, ...props }: InputProps) {
  return (
    <div className="flex flex-col">
      <h2 className="text-base text-primary font-sans">{name}</h2>
      <input
        className="h-10  rounded-md bg-shape text-black text-xl font-sans pl-2 pr-2"
        type={type}
        {...props}
      />
    </div>
  );
}
