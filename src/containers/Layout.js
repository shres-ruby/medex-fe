import React from "react";
import {
  Container,
  // Divider,
  // Dropdown,
  // Grid,
  // Header,
  // Image,
  // List,
  Menu,
} from "semantic-ui-react";
import { Link } from "react-router-dom";


class CustomLayout extends React.Component {
    // componentDidMount() {
    //   this.props.fetchCart();
    // }
  
    render() {
      // const { authenticated, cart, loading } = this.props;
      return (
        <div>
          <Menu inverted>
            <Container>
              <Link to="/products">
                <Menu.Item header>Home</Menu.Item>
              </Link>
              <Link to="/login">
                <Menu.Item header>Login</Menu.Item>
              </Link>
              <Link to="/patientsignup">
                <Menu.Item header>Register as User/Patient</Menu.Item>
              </Link>
              <Link to="/doctorsignup">
                <Menu.Item header>Register as doctor</Menu.Item>
              </Link>
              <Link to="/upload">
                <Menu.Item header>Upload Prescription</Menu.Item>
              </Link>
              {/* {authenticated ? (
                <React.Fragment> */}
                  {/* <Menu.Menu position="right">
                    <Link to="/profile">
                      <Menu.Item>Profile</Menu.Item>
                    </Link> */}
                    {/* <Dropdown
                      icon="cart"
                      loading={loading}
                      text={`${cart !== null ? cart.order_items.length : 0}`}
                      pointing
                      className="link item"
                    >
                      <Dropdown.Menu>
                        {cart !== null ? (
                          <React.Fragment>
                            {cart.order_items.map(order_item => {
                              return (
                                <Dropdown.Item key={order_item.id}>
                                  {order_item.quantity} x {order_item.item.title}
                                </Dropdown.Item>
                              );
                            })}
                            {cart.order_items.length < 1 ? (
                              <Dropdown.Item>No items in your cart</Dropdown.Item>
                            ) : null}
                            <Dropdown.Divider />
  
                            <Dropdown.Item
                              icon="arrow right"
                              text="Checkout"
                              onClick={() =>
                                this.props.history.push("/order-summary")
                              }
                            /> */}
                          {/* </React.Fragment>
                        ) : (
                          <Dropdown.Item>No items in your cart</Dropdown.Item>
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item header onClick={() => this.props.logout()}>
                      Logout
                    </Menu.Item>
                  </Menu.Menu>
                </React.Fragment>
              ) : ( */}
                {/* <Menu.Menu position="right">
                  <Link to="/login">
                    <Menu.Item header>Login</Menu.Item>
                  </Link>
                  <Link to="/signup">
                    <Menu.Item header>Signup</Menu.Item>
                  </Link>
                </Menu.Menu>
              )} */}
            </Container>
          </Menu>
  
          {this.props.children}
  
        </div>
      );
    }
  }

  export default CustomLayout;



// import React from 'react';
// import { Layout, Menu, Breadcrumb } from 'antd';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

// import * as actions from '../store/actions/auth';

// const { Header, Content } = Layout;

// class CustomLayout extends React.Component {
//     render(){
//         return (
//             <Layout className="layout">
//             <Header>
//             <div className="logo" />
//             <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
//                 {
//                     this.props.isAuthenticated ?
    
//                     <Menu.Item key="3" onClick={this.props.logout}>
//                         Logout
//                     </Menu.Item>
//                     :
//                     <Menu.Item key="3">
//                         <Link to="/login/">Login</Link>
//                     </Menu.Item>
//                 }
//                 <Menu.Item key="1">
//                 <Link to="/patientsignup/">Register as patient/user</Link>
//                 </Menu.Item>
//                 <Menu.Item key="2">
//                 <Link to="/doctorsignup/">Register as doctor</Link>
//                 </Menu.Item>
                
//             </Menu>
//             </Header>
//             <Content style={{ padding: '0 50px' }}>
//             <Breadcrumb style={{ margin: '16px 0' }}>
//                 <Breadcrumb.Item>Home</Breadcrumb.Item>
//                 <Breadcrumb.Item>List</Breadcrumb.Item>
//                 <Breadcrumb.Item>App</Breadcrumb.Item>
//             </Breadcrumb>
//             <div className="site-layout-content">
//                 {this.props.children}
//             </div>
//             </Content>
//             </Layout>
//         );
//     }
    
// }

// const mapDispatchToProps = dispatch => {
//     return {
//       logout: () => dispatch(actions.logout())
// }
//   }
  
// export default connect(null, mapDispatchToProps)(CustomLayout);




  