import React, {useState} from 'react';
import {Container, SideBar, Content, List, Navbar, Body} from './Style';
import Logo from '../../Assets/logo.svg';
import {FaChartBar} from 'react-icons/fa';
import {TbReportSearch} from 'react-icons/tb';
import {HiOutlineClipboardDocumentList} from 'react-icons/hi2';
import {ImProfile} from 'react-icons/im';
import SidebarList from '../../Components/SidebarList/SidebarList';
import {
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
  AiFillCaretDown,
} from 'react-icons/ai';
import {BsPersonCircle} from 'react-icons/bs';
import {useSelector, useDispatch} from 'react-redux';
import {Outlet, useNavigate} from 'react-router-dom';
import {userLogout} from '../../Redux/User';

let Sidebar = [
  {icon: <FaChartBar />, text: 'Stats', path: '/dashboard'},
  {icon: <TbReportSearch />, text: 'All Jobs', path: '/dashboard/profile'},
  {
    icon: <HiOutlineClipboardDocumentList />,
    text: 'Add Job',
    path: '/dashboard/jobs',
  },
  {icon: <ImProfile />, text: 'Profile', path: '/dashboard/add'},
];

export default function Dashboard() {
  let user = useSelector((state) => state.User.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [activeList, setActiveList] = useState(0);
  let [toggleSide, setToggleSide] = useState(false);
  let [logout, setLogout] = useState(false);

  let LogoutUser = () => {
    dispatch(userLogout());
    navigate('/');
  };

  return (
    <Container className={toggleSide && 'full'}>
      <SideBar className={toggleSide && 'hide'}>
        <img src={Logo} alt="logo" />
        <List>
          {Sidebar.map((item, index) => (
            <SidebarList
              text={item.text}
              icon={item.icon}
              key={index}
              index={index}
              active={activeList}
              path={item.path}
              action={() => setActiveList(index)}
            />
          ))}
        </List>
      </SideBar>
      <Content>
        <Navbar>
          {toggleSide ? (
            <AiOutlineFullscreenExit
              className="toggle"
              onClick={() => setToggleSide(!toggleSide)}
            />
          ) : (
            <AiOutlineFullscreen
              className="toggle"
              onClick={() => setToggleSide(!toggleSide)}
            />
          )}
          <h2>Dashboard</h2>
          <div onClick={() => setLogout(!logout)}>
            <BsPersonCircle />
            <p>{user.name}</p>
            <AiFillCaretDown />
            {logout && (
              <div onClick={LogoutUser}>
                <p>Logout</p>
              </div>
            )}
          </div>
        </Navbar>
        <Body>
          <Outlet />
        </Body>
      </Content>
    </Container>
  );
}
