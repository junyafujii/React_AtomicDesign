import { Haeder } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Haeder />
      {children}
    </>
  );
};
