import React from "react";
import micOnIcon from '@/icon/mic-on.svg';
import micOffIcon from '@/icon/mic-off.svg';
import styled from "styled-components";

type Props = {
  muted: boolean;
  setter: any;
};

//styled-componentを使いbuttonのoutlineを0に
const Button = styled.button`
  &:focus {
    outline: 0;
  }
`;

export const MicOnOfButton: React.FC<Props> = ({ muted, setter }) => {
  let icon;
  if (muted) {
    icon = (
     "micOnIcon"
    );
  } else {
    icon = ( "micOffIcon" );
  }
  const handleOnClick = () => {
    setter(!muted);
  };
  return <Button onClick={handleOnClick}>{icon}</Button>;
};
