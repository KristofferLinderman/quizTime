import React from "react";
import { mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Score from "./Score";

Enzyme.configure({ adapter: new Adapter() });
describe("Score", () => {
  describe("when score is 5", () => {
    it("should render Score 5", () => {
      const wrapper = mount(<Score score={5} />);
      expect(wrapper.html()).toEqual("<div><h1>Score: 5</h1></div>");
      wrapper.unmount();
    });
  });
});
