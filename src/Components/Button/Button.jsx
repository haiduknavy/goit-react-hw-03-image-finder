
import { ButtonMore } from "./Button.styled";

export default function Button({ onButtonClick }) {
  return <ButtonMore onClick={() => onButtonClick()}>Load more</ButtonMore>;
}

