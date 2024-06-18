import { render,screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../../components/RestaurantCard";
import MOCK_Data from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props data", () => {
   
    render(<RestaurantCard resData={MOCK_Data} />);

    const resName = screen.getByText("Sri Alok Park");

    //assertion
    expect(resName).toBeInTheDocument();

});

