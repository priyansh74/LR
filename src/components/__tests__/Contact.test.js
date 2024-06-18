import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import { afterEach, before, describe } from "node:test";

describe("Contact Us Page Test Cases", () => {
   
  beforeAll(() =>{
     console.log("Before All");
  });
  
  beforeEach(() =>{
    console.log("Before Each");
 });

 afterAll(() =>{
  console.log("After All");
}); 
  afterEach(() =>{
  console.log("After each");
});

    //you can write test as 'it' also. There is no difference jut an alias
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact us component", () => {
    render(<Contact />);

    // const button = screen.getByRole("button"); or
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the contact us component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });

});
