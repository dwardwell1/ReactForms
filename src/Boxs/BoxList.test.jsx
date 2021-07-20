import {render, fireEvent, getByLabelText, findAllByText, getAllByText} from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function(){
    render(<BoxList />);
});

it("matches snapshot", function(){
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add item to shopping list", function(){
    const {queryByText, getByLabelText} = render(<BoxList />);
    const Color = getByLabelText("Choose Color");
    const Width = getByLabelText("Width:");
    const Height = getByLabelText("Height:");
    const btn = queryByText("Add")
    // const buttons = getAllByText("x")
    // expect(buttons.length).toEqual(2)
    fireEvent.change(Color, {target: {value: "#9d4848"}});
    fireEvent.change(Width, {target: {value: "200"}});
    fireEvent.change(Height, {target: {value: "130"}});
    fireEvent.click(btn);
    expect(queryByText("#9d4848")).toBeDefined();
    // expect(buttons.length).toEqual(3)

});