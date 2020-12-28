import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

export default function TestPage({ source }) {
  const Test = () => {
    return <div>Test Component</div>;
  };
  const components = { Test };
  const content = hydrate(source, { components });
  return <div className="wrapper">{content}</div>;
}

export async function getStaticProps() {
  const source = "Some **mdx** text, with component ";
  const mdxSource = await renderToString(source);
  return { props: { source: mdxSource } };
}
