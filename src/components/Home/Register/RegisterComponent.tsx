import PrimaryButton from "../../Buttons/PrimaryButton";
import TextBox from "../../Inputs/TextBox";
import "../../../styles/Home/register/RegisterComponentStyles.css";
import { useState } from "react";

type props = {
  addTask: (titulo: string, descricao: string) => void;
};

function RegisterComponent({ addTask }: props) {
  const [titulo, setTitulo] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");

  function onSubmit() {
    if (!titulo.trim() || !descricao.trim()) {
      return;
    }
    addTask(titulo, descricao);
    setTitulo("");
    setDescricao("");
  }

  return (
    <form className="Register_Body">
      <TextBox
        placeHolder="Título da Tarefa"
        value={titulo}
        onChange={(value) => {
          setTitulo(value);
        }}
      />
      <TextBox
        placeHolder="Descrição da Tarefa"
        value={descricao}
        onChange={(value) => {
          setDescricao(value);
        }}
      />
      <PrimaryButton onClick={onSubmit} />
    </form>
  );
}
export default RegisterComponent;
