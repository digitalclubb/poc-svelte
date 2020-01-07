import { render } from "@testing-library/svelte";
import Header from "./Header.svelte";

describe("header component", () => {
  test("should render component correctly", () => {
    const { container } = render(Index, {
      props: {
        articles: []
      }
    });

    expect(container).toContainHTML("<div></div>");
  });
});
