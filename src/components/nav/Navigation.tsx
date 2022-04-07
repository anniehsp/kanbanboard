import React, {useState} from 'react';
import TopBar from './TopBar';
import SideMenu from './SideMenu';

interface Props {
    onChangeBackgroundImage: (value: string) => void;
}

export default function Navigation({ onChangeBackgroundImage }: Props) {
    const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

    return (
      <div>
          <TopBar
              onChangeSideMenu={setOpenSideMenu}
          />
          <SideMenu
              open={openSideMenu}
              onChangeSideMenu={setOpenSideMenu}
              onChangeBackgroundImage={onChangeBackgroundImage}
          />
      </div>
    );
}