const Maybe = (props) => {
  return props.condition ? props.children : null;
};

export default Maybe;
