import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header component with a login button", () => {
    
    render(
        <BrowserRouter>
        <Provider store={appStore}>
             <Header/>
        </Provider>
        </BrowserRouter>
  );
  
 //not a very recommenend way
 // const loginButton = screen.getByText("Login");

 //better way -> 
 // const loginButton = screen.getByRole("button");

  //multiple buttons;
const loginButton = screen.getByRole("button",{name: "Login"});

  expect(loginButton).toBeInTheDocument();


});

it("Should load Header component with a cart", () => {
    
    render(
        <BrowserRouter>
        <Provider store={appStore}>
             <Header/>
        </Provider>
        </BrowserRouter>
  );
  
 
const cartItems = screen.getByText("Cart - (0 items)");


  expect(cartItems).toBeInTheDocument();


});

it("Should change Login button to logout on click", () => {
    
    render(
        <BrowserRouter>
        <Provider store={appStore}>
             <Header/>
        </Provider>
        </BrowserRouter>
  );
  

  const loginButton = screen.getByRole("button",{name: "Login"});
  
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button",{name: "Logout"});

  expect(logoutButton).toBeInTheDocument();


});