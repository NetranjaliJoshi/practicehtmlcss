const FunctionComp = (props) => {
  // desctructing props

  const { myname, post } = props;
  return (
    <div>
      <h2>this is function component</h2>
      {/* <p>
        My Name is : <strong>{props.myname}</strong>
      </p>
      <p>
        My poast is : <strong>{props.post}</strong>
      </p> */}
      <p>My Name {myname}</p>
      <p>My post {post}</p>
    </div>
  );
};
export default FunctionComp;
