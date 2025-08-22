import "../../styles/inputs/TextBoxStyles.css";

type props = {
  placeHolder: string;
  onChange: (value: string) => void;
  value: string;
};

function TextBox({ placeHolder, onChange, value }: props) {
  return (
    <input
      className="TextBox"
      type="text"
      placeholder={placeHolder}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
}

export default TextBox;
