import { Container, Message } from './styles'

type Props = {
  message: string
}
1
export const ListEmpty = ({message}: Props) => {
  return (
    <Container>
      <Message>
        {message}
      </Message>
    </Container>
  );
}