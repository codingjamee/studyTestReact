//greet는 text hello를 render해야하고 만일 component에 name이 추가되면
//name다음에 hello가 render되어야 함

import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";

describe("Greet", () => {
  it("Greet renders  correctly", () => {
    render(<Hello />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
});
