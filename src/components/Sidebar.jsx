import React from 'react'
import { Link, Navlink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { Tooltip, TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import Button from './Button';

const Sidebar = () => {
  const activeMenu = true;

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<>
      <div className="flex justify-between items-center">
        <Link to ="/" onClick={() => {}}
        className="item-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
          <SiShopware /> <span>Shoppy</span>
        </Link>
        <TooltipComponent content="Menu" position="BottomCenter">
          <Button type="button"
          onClick={() => {}}
          className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
            <MdOutlineCancel />
          </Button>
        </TooltipComponent>
      </div>
      </>)}
    </div>
  )
}

export default Sidebar
