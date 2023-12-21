//greet는 text hello를 render해야하고 만일 component에 name이 추가되면
//name다음에 hello가 render되어야 함

import { render, screen } from "@testing-library/react";
import { Hello } from "../components/greet/Hello";

describe("Greet", () => {
  test("Greet renderㄴ  correctly", () => {
    render(<Hello />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
});
describe("Nested", () => {
  test("Greet renders with a name", () => {
    render(<Hello name="jenner" />);
    const textElement = screen.getByText("Hello jenner");
    expect(textElement).toBeInTheDocument();
  });
});