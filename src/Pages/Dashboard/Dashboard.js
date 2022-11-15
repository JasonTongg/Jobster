import React, {useState, useEffect} from 'react';
import {
  Container,
  SideBar,
  Content,
  List,
  Navbar,
  Body,
  PopupBar,
  PopupBarContainer,
} from './Style';
import Logo from '../../Assets/logo.svg';
import {FaChartBar} from 'react-icons/fa';
import {TbReportSearch} from 'react-icons/tb';
import {MdLibraryAdd} from 'react-icons/md';
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
import {getJobs} from '../../Redux/AllJobs';
import {toast} from 'react-toastify';
import {GrClose} from 'react-icons/gr';

let Sidebar = [
  {icon: <FaChartBar />, text: 'Stats', path: '/dashboard'},
  {icon: <TbReportSearch />, text: 'All Jobs', path: '/dashboard/jobs'},
  {
    icon: <MdLibraryAdd />,
    text: 'Add Job',
    path: '/dashboard/add',
  },
  {icon: <ImProfile />, text: 'Profile', path: '/dashboard/profile'},
];

export default function Dashboard() {
  let user = useSelector((state) => state.User.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [activeList, setActiveList] = useState();
  let [toggleSide, setToggleSide] = useState(false);
  let [logout, setLogout] = useState(false);
  let location = window.location.pathname;

  let LogoutUser = () => {
    dispatch(userLogout());
    toast.success('Logout Success');
    navigate('/');
  };

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  useEffect(() => {
    switch (location) {
      case '/dashboard/profile':
        setActiveList(3);
        break;
      case '/dashboard/jobs':
        setActiveList(1);
        break;
      case '/dashboard/add':
        setActiveList(2);
        break;
      case '/dashboard/edit':
        setActiveList(2);
        break;
      default:
        setActiveList(0);
        break;
    }
  }, [location]);

  return (
    <Container className={toggleSide && 'full'}>
      <SideBar className={toggleSide && 'hide'}>
        <img src={Logo} alt="logo" onClick={() => navigate('/')} />
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
      <PopupBarContainer className={toggleSide ? 'hide' : 'show'}>
        <PopupBar>
          <GrClose
            className="close"
            onClick={() => setToggleSide(!toggleSide)}
          ></GrClose>
          <img src={Logo} alt="logo" onClick={() => navigate('/')} />
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
        </PopupBar>
      </PopupBarContainer>
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
