import { Box, chakra } from "@chakra-ui/react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import github from "prism-react-renderer/themes/github";

interface Props {
  className: string;
}

const CodeBlock: React.FC<Props> = ({ className, children }) => {
  let lang: Language = "markdown";
  if (typeof className !== "undefined") {
    lang = className.replace(/language-/, "") as Language;
  }

  return (
    <Highlight
      {...defaultProps}
      language={lang}
      code={children.toString().trim()}
      theme={github}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <chakra.pre
            className={className}
            style={style}
            p="1rem"
            mt="1rem"
            mb="1rem"
            fontSize="sm"
            rounded="lg"
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </chakra.pre>
        );
      }}
    </Highlight>
  );
};

export default CodeBlock;
