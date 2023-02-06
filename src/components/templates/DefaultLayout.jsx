import { Footer } from "../atoms/layout/Footer";
import { Haeder } from "../atoms/layout/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Haeder />
      {children}
      <Footer />
    </>
  );
};
