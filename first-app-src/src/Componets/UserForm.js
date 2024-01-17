// import React, { Component } from "react";
// import "./external.css";
// export class UserForm extends Component {
//   uCourses = ["Angular", "React", "Java", "Python", "Node Js"];

//   constructor(props) {
//     super(props);

//     this.state = {
//       fname: "",
//       femail: "",
//       phone: "",
//       fpass: "",
//       courses: "",
//     };
//   }
//   inputChangeHandler = (event) => {
//     console.log(event.target.type);
//     console.log(event.target.name);
//     console.log(event.target.value);

//     const { type, name, value } = event.target;
//     this.setState({ [name]: value });
//   };
//   chekdata = (event) => {
//     event.preventDefault();
//     if (this.state.fname === "") {
//       window.alert("Full name is required");
//       return false;
//     }
//     if (!this.state.fname.match("^[a-zA-Z]{3,20}$")) {
//       window.alert("Full name must contain only charecter min-3 max=10");
//       return false;
//     }
//     if (
//       !this.state.femail.match(
//         /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       )
//     ) {
//       window.alert("Full name must contain only charecter min-3 max=10");
//       return false;
//     }
//     if (!this.state.fname.match("^[a-zA-Z]{3,20}$")) {
//       window.alert("Full name must contain only charecter min-3 max=10");
//       return false;
//     }

//     window.alert(JSON.stringify(this.state));
//   };
//   render() {
//     const { fname, femail, phone, fpass } = this.state;
//     return (
//       <div className="">
//         <div className="container text-center">
//           <h5>This userform Component </h5>
//           <form onSubmit={this.chekdata}>
//             <label className="form-label">Enter your fullName</label>
//             <input
//               type="text"
//               name="fname"
//               className="form-control"
//               value={fname}
//               onChange={this.inputChangeHandler}
//             />
//             <label className="form-label">Enter your Email</label>
//             <input
//               type="text"
//               name="femail"
//               className="form-control"
//               value={femail}
//               onChange={this.inputChangeHandler}
//             />
//             <label className="form-label">Enter your contact number</label>
//             <input
//               type="text"
//               name="phone"
//               className="form-control"
//               value={phone}
//               onChange={this.inputChangeHandler}
//             />
//             <label className="form-label">Enter your password</label>
//             <input
//               type="text"
//               name="fname"
//               className="form-control"
//               value={fpass}
//               onChange={this.inputChangeHandler}
//             />
//             <select
//               name="courses"
//               className="form-control"
//               id=""
//               onChange={this.inputChangeHandler}
//             >
//               <option value="">Select Your Course</option>
//               {this.uCourses.map((val, index) => {
//                 return (
//                   <option value={val} key={index}>
//                     {val}
//                   </option>
//                 );
//               })}
//             </select>

//             <button type="submit" className="btn btn-success mt-2">
//               submit
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default UserForm;
