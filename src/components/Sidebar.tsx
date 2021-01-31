import './Sidebar.scss';
import { Link } from "react-router-dom";

interface Props {
  isOpenSideBar: Boolean
}

function Sidebar(props: Props) {
  const { isOpenSideBar } = props;
  return (
    <nav data-testid="sidebar" className={`sidebar ${isOpenSideBar && 'active p-2'}`}>
      {
        isOpenSideBar &&
        <div data-testid="sidebar-content">
          <div className="sidebar-brand">
            <span>
              Project Tracker
            </span>
          </div>
          <ul className="list-unstyled text-start">
            <li>
              <Link to="/home/workflow">Workflow</Link>
            </li>
            <li>
              <Link data-testid="projects" to="/home/projects">Projects</Link>
            </li>
            <li>
              <Link data-testid="users" to="/home/users">Users</Link>
            </li>
          </ul>
        </div>}
    </nav>
  )
}

export default Sidebar;