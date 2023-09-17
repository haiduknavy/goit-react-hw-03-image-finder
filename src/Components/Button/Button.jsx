
import { ButtonMore } from "./Button.styled";

export default function Button({ loadMoreClick }) {
  return <ButtonMore onClick={() => loadMoreClick()}>Load more</ButtonMore>;
}

