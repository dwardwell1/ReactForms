import {render, fireEvent, getByLabelText, findAllByText, getAllByText} from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function(){
    render(<TodoList />);
});

it("matches snapshot", function(){
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add item to shopping list", function(){
    const {queryByText, getByLabelText} = render(<TodoList />);
    const input = getByLabelText("New Todo");

    const btn = queryByText("Add Todo")
    expect(queryByText("Add Shrek")).not.toBeInTheDocument();
    fireEvent.change(input, {target: {value: "Add Shrek"}});
    fireEvent.click(btn);
    expect(queryByText("Add Shrek")).toBeInTheDocument();
   
});