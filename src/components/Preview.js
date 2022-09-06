import { Card } from 'react-bootstrap';

function Preview(props) {
  const convo = { props };
  return (
    <Card>
      {/* <Link to={"/"} */}
      <Card.Body>
        <Card.Title>{convo.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
export default Preview;
