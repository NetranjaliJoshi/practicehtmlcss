const MyFcComp = () => {
  return (
    <>
      <h2>Self information</h2>
      <p>
        My name is {this.props.fname} {this.props.lname} . Iam styding CDAC in
        {this.props.company}. I am {this.props.age} old {this.props.gender}.
      </p>
    </>
  );
};

export default MyFcComp;
