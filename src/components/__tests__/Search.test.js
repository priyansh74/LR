import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});
it("Should Search Restaurant List for Coffee text input", async () => {
    await act(async () =>  render( 
    <BrowserRouter>
       <Body/>
    </BrowserRouter> 
    ));
   const cardsBeforeSearch = screen.getAllByTestId("resCard");
   expect(cardsBeforeSearch.length).toBe(20);
   const searchBtn = screen.getByRole("button", {name: "Search"});
   const searchInput = screen.getByTestId("searchInput");
   fireEvent.change(searchInput, {target : {value : "coffee"}});
   fireEvent.click(searchBtn);
   //screen should load 2 restaurant cards 
   const cardsAfterSearch = screen.getAllByTestId("resCard");
   expect(cardsAfterSearch.length).toBe(2);
});
it("Should render top rated Restaurants", async () => {
     
    await act(async () =>  render( 
    <BrowserRouter>
       <Body/>
    </BrowserRouter> 
    ) 
   );
   const cardsBeforeSearch = screen.getAllByTestId("resCard");
   expect(cardsBeforeSearch.length).toBe(20);
   
   const topRatedBtn = screen.getByRole("button", {name : "Top Rated Restaurants"});
   fireEvent.click(topRatedBtn);
   
   const cardsAfterFilter = screen.getAllByTestId("resCard");
   expect(cardsAfterFilter.length).toBe(8);
   
});