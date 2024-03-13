import { describe, expect, it, vi } from "vitest";
import renderer from "react-test-renderer";
import About from "../../routes/about";

vi.mock("react-router-dom", async () => {
  const useNavigate = () => vi.fn();
  return { useNavigate };
});

vi.mock("@shopify/polaris", async () => {
  const Page = ({ title, backAction, children }) => {
    return (
      <div>
        <h1>{title}</h1>
        <div>{backAction.content}</div>
        <div>{children}</div>
      </div>
    );
  };
  const Text = ({ variant, as, children }) => {
    return <p>{children}</p>;
  };
  return { Page, Text };
});

// a simple example of a snapshot test
// this is similar to testing basic React components that do not require mocks
describe("snapshot test for frontend/routes/index.jsx", () => {
  it("should render the Index component", () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
