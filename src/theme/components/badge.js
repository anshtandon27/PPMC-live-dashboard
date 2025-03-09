export const badgeStyles = {
    components: {
        Badge: {
            sizes: {
                md: {
                    width: "65px",
                    height: "25px"
                }
            },
            baseStyle: {
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            variants: {
                solid: {
                    borderRadius: "8px",
                    fontWeight: "medium",
                    fontSize: "xs"
                },
                outline: {
                    borderRadius: "8px",
                    fontWeight: "medium",
                    fontSize: "xs"
                },
                status: {
                    borderRadius: "full",
                    fontWeight: "medium",
                    fontSize: "xs",
                    px: 2,
                    py: 1
                }
            }
        }
    }
}