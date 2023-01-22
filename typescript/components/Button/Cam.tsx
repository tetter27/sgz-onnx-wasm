import React from "react";
import styled from "styled-components";

type Props = {
  disabled: boolean;
  setter: any;
};

//styled-componentを使いbuttonのoutlineを0に
const Button = styled.button`
  &:focus {
    outline: 0;
  }
`;

export const CamOnOfButton: React.FC<Props> = ({ disabled, setter }) => {
  let icon;
  if (disabled) {
    icon = (
     "~/icon/cam-on"
    );
  } else {
    icon = (
        "~/icon/cam-of"
    );
  }
  const handleOnClick = () => {
    setter(!disabled);
  };
  return <Button onClick={handleOnClick}>{icon}</Button>;
};
