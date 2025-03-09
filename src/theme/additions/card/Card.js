const Card = {
  baseStyle: {
    p: "22px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxShadow: "0px 5px 14px rgba(1, 31, 91, 0.1)",
    borderRadius: "16px",
    position: "relative",
    wordWrap: "break-word",
    backgroundClip: "border-box",
    borderTop: "3px solid",
    borderTopColor: "#011F5B", // Penn Blue
  },
  variants: {
    panel: (props) => ({
      bg: props.colorMode === "dark" ? "#111C44" : "white",
    }),
    primary: {
      borderTopColor: "#011F5B", // Penn Blue
    },
    secondary: {
      borderTopColor: "#990000", // Penn Red
    },
    stats: {
      borderTopColor: "transparent",
      boxShadow: "0px 3px 10px rgba(1, 31, 91, 0.08)",
    }
  },
  defaultProps: {
    variant: "panel",
  },
};

export const CardComponent = {
  components: {
    Card,
  },
};
