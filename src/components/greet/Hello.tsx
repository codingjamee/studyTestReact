type HelloProps = {
  name?: string;
};

export const Hello = (props: HelloProps) => {
  return <div>Hello {props.name}</div>;
};
