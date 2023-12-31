import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 100px;
  background-image: linear-gradient(
    to bottom,
    var(--background-color) 50%,
    var(--button-color) 50%
  );
  background-size: 100% 4px;
  background-repeat: repeat-y;
  display: flex;
  position: relative;
  flex-direction: column;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: black solid 2px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 45px;
  align-self: center;
`;

const StyledButton = styled.button`
  background: var(--button-color);
  background: linear-gradient(var(--button-color), var(--button-color-second));
  border-radius: 11px;
  width: 50px;
  height: 30px;
  color: var(--text-button-color);
  display: inline-block;
  cursor: pointer;
  text-align: center;
  margin: 10px;
  bottom: 10px;
  right: 10px;
  z-index: 2;
`;

const StyledQuestion = styled.p`
  text-align: center;
  color: red;
  font-size: 1.4rem;
  margin-top: -10px;
  padding: 10px;
`;

export default function DeleteQuestion({ handleDelete }) {
  return (
    <>
      <Container>
        <StyledQuestion>Do you want to delete this profile?</StyledQuestion>
        <ButtonContainer>
          <StyledButton type="button" onClick={handleDelete}>
            Yes
          </StyledButton>
          <StyledButton type="button" onClick={() => window.location.reload()}>
            No
          </StyledButton>
        </ButtonContainer>
      </Container>
    </>
  );
}
