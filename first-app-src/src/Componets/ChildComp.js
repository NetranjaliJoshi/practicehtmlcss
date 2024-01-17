const ChildComp = (props) => {
  return (
    <>
      <h1>child comp</h1>
      <p>
        Count is <strong>Count {props.count}</strong>
      </p>
      <p>
        my name value: <strong>{props.myname}</strong>
      </p>
    </>
  );
};
export default ChildComp;
