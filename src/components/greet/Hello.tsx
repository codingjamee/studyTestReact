type HelloProps = {
  name?: string;
};

export const Hello = (props: HelloProps) => {
  return <div>Hello {props.name ? props.name : "Guest"}</div>;
};
