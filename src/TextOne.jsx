function TextOne(props) {
  return (
    <p className="name-length">
      Did you know that {props.name} is {props.name.length} characters long?!
    </p>
  );
}

export default TextOne;
