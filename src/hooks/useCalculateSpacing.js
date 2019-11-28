import { useMediaQuery } from "@material-ui/core";

export default function useCalculateSpacing() {
  const md = useMediaQuery("(min-width:960px)");
  if (md) {
    return 2;
  } else {
    return 0;
  }
}
