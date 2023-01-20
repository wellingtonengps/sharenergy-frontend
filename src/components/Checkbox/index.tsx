import "./style.css";

type InputProps = {
  name: string;
};

export default function Checkbox(props: InputProps) {
  return (
    <div className="flex place-items-baseline justify-center ">
      <input
        className="mr-2  rounded-md bg-shape text-black text-xl font-sans pl-2 pr-2"
        type="checkbox"
      />
      <h2 className="text-sm text-primary font-sans">{props.name}</h2>
    </div>
  );
}
