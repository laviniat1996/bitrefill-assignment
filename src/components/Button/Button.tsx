import { StyledButton } from "./styled/StyledButton";

interface Props {
  handleClick: () => void;
  buttonLabel: string;
  center?: boolean;
}

export const ButtonComponent = ({ handleClick, buttonLabel, center }: Props) => {
  return (
    <StyledButton onClick={handleClick} center={center}>
      {buttonLabel}
    </StyledButton>
  );
};
