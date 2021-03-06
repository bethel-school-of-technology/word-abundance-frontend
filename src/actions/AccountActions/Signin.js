import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }      
  handleSubmit(){
        const {firstName, lastName, email, password
          } = this.state;
        return axios.post('http://localhost:3001/users', {
          firstName,
          lastName,
          email,
          password
        });
      }

      onSubmit(e){
        e.preventDefault();
    }

  render() {
    return (

      <main>
      <br/>     
      <div className='form-area-Signin'>
        <h4>Sign In</h4>
        <Form id='SigninStyle' onSubmit={this.handleChange} style={{ width: 'auto' }}>

          <FormGroup >

            <Label for='firstName'>First Name: </Label>
            <Input
              type='text'
              name='firstName'
              onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <Label for='lastName'>Last Name:</Label>
            <Input
              type='text'
              name='lastName'
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for='email'>Email:</Label>
            <Input
              type='text'
              name='email'
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for='password'> Password</Label>
            <Input
              type='password'
              name='password'
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup ref="form" onSubmit={this.handleSubmit}>
            <Button type="submit">Submit</Button>
          </FormGroup>
        </Form>
      </div>
      </main>
    )
  }
}
export default Signin;


// import React from "react";
// import { reduxForm, Field } from "redux-form";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import * as actions from "..";

// class Signin extends React.Component {
//   onSubmit = formProps => {
//     this.props.signin(formProps, () => {
//       this.props.history.push("/dashboard");
//     });
//   };

//   render() {
//     const { handleSubmit } = this.props;

//     return (
//       <React.Fragment>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-sm-4" />
//             <div className="col-sm-4">
//               <form onSubmit={handleSubmit(this.onSubmit)}>
//                 <fieldset>
//                   <h3>Login to My Dashboard</h3>
//                   <label>Email:</label>
//                   <Field
//                     name="email"
//                     type="text"
//                     component="input"
//                     autoComplete="none"
//                   />
//                 </fieldset>
//                 <fieldset>
//                   <label>Password:</label>
//                   <Field
//                     name="password"
//                     type="password"
//                     component="input"
//                     autoComplete="none"
//                   />
//                 </fieldset>
//                 <div>{this.props.errorMessage}</div>
//                 <button>Sign In!</button>
//               </form>
//             </div>
//             <div className="col-sm-4" />
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return { errorMessage: state.auth.errorMessage };
// }

// export default compose(
//   connect(
//     mapStateToProps,
//     actions
//   ),
//   reduxForm({ form: "signin" })
// )(Signin);


// import React from "react";
// import { reduxForm, Field } from "redux-form";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import * as actions from "../../actions";

// class Signin extends React.Component {
//   onSubmit = formProps => {
//     this.props.signin(formProps, () => {
//       this.props.history.push("/dashboard");
//     });
//   };

//   render() {
//     const { handleSubmit } = this.props;

//     return (
//       <React.Fragment>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-sm-4" />
//             <div className="col-sm-4">
//               <form onSubmit={handleSubmit(this.onSubmit)}>
//                 <fieldset>
//                   <h3>Login to My Dashboard</h3>
//                   <label>Email:</label>
//                   <Field
//                     name="email"
//                     type="text"
//                     component="input"
//                     autoComplete="none"
//                   />
//                 </fieldset>
//                 <fieldset>
//                   <label>Password:</label>
//                   <Field
//                     name="password"
//                     type="password"
//                     component="input"
//                     autoComplete="none"
//                   />
//                 </fieldset>
//                 <div>{this.props.errorMessage}</div>
//                 <button>Sign In!</button>
//               </form>
//             </div>
//             <div className="col-sm-4" />
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return { errorMessage: state.auth.errorMessage };
// }

// export default compose(
//   connect(
//     mapStateToProps,
//     actions
//   ),
//   reduxForm({ form: "signin" })
// )(Signin);


// export class UserLogin extends Component {
//     constructor() {
//       super();
//       this.state = {
//         email: '',
//         password: '',
//         errors: {},
//       };
  
//       this.onChange = this.onChange.bind(this);
//       this.onSubmit = this.onSubmit.bind(this);
//     }
  
//     componentDidMount() {
//       if (this.props.auth.isAuthenticated) {
//         this.props.history.push('/dashboard');
//       }
//     }
  
//     componentWillReceiveProps(nextProps) {
//       if (nextProps.auth.isAuthenticated) {
//         this.props.history.push('/about');
//       }
  
//       if (nextProps.errors) {
//         this.setState({ errors: {
//           ...nextProps.errors,
//           password: true,
//           email: true
//         }});
//       }
//     }
  
//     onSubmit(e) {
//       e.preventDefault();
  
//     const {email, password } = this.state;
      
//       // Check For Errors
//       if (password=== '') {
//         this.setState({ errors: { password: 'password is required' } });
//         return;
//       }
  
//       if (email === '') {
//         this.setState({ errors: { email: 'email is required' } });
//         return;
//       }
  
  
  
//       const userData = {
//         email: this.state.email,
//         password: this.state.password
//       };
  
//       this.props.userLogin(userData);
//     }
  
//     onChange(e) {
//       this.setState({ [e.target.name]: e.target.value });
//     }
  
//     render() {
//       const { errors } = this.state;
  
//       console.log('errors: ', errors)
    
//       return (
//         <div className="landing">
//           <div className="dark-overlay landing-inner text-light">
          
//         <div className="userLogin">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-8 m-auto">
//                 <form onSubmit={this.onSubmit}>
//                 <h1 className="display-4 text-center">Log In</h1>
//                   <TextFieldGroup
//                     placeholder="Email Address"
//                     name="email"
//                     type="email"
//                     value={this.state.email}
//                     onChange={this.onChange}
//                     error={errors.email}
//                     />
  
//                   <TextFieldGroup
//                     placeholder="Password"
//                     name="password"
//                     type="password"
//                     value={this.state.password}
//                     onChange={this.onChange}
//                     error={errors.password}
//                     />
//                   <input type="submit" style={{background: '#EFEDE1', color: 'black'}} className="btn btn-info btn-block mt-4" />
//                                       {errors && errors.response && (
//                                         <h5 className="login-error">Error, username or password incorrect!</h5>
//                                       )}
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>
//         </div>
//       );
//     }
//   }
  
//   Login.propTypes = {
//     userLogin: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired
//   };
  
//   const mapStateToProps = state => ({
//     auth: state.auth,
//     errors: state.errors
//   });
  
//   export default connect(mapStateToProps, { userLogin })(withRouter(Login));