type HelloProps = {
  name?: string;
};

export const Hello = (props: HelloProps) => {
  return <div>{props.name} Hello</div>;
};
