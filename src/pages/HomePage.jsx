import {Link} from 'react-router-dom'

const userId = 10

function HomePage() {
  return (
    <>
      <h1>Hola Mundo</h1>
      <hr />
      <Link to={`/users/${userId}`}>Usuarios del corte ya tu sabe</Link>
    </>
  );
}
export default HomePage;
