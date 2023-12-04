import { useNavigate, Outlet, Link } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>Logout</button>
      <hr />
      <Link to="welcome"> Say Welcome</Link>
      <hr />
      <Link to="goodbye">Say Goodbye</Link>
      <hr />
      <Outlet />
    </div>
  );
}
export default Dashboard;
