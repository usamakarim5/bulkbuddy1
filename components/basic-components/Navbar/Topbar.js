import React, { useState } from "react";
import { Link } from "react-router-dom";
import './topbar.css';


const Topbar = () => {
  const [isElectronics, setIsElectronics] = useState(false);
  const [isAppliances, setIsAppliances] = useState(false);

  return (
    <>
    <div className='top_bar py-2'>
      <div
        className=" topbar_hover"
        onMouseOver={() => {
          setIsElectronics(true);
        }}
        onMouseOut={() => {
          setIsElectronics(false);
        }}
      >
        <span className="topbar_text topbar_item">
          Electronics {isElectronics == true ? <i class="fa fa-chevron-up topbar_text topbar_icon" aria-hidden="true"></i> : <i class="fa fa-chevron-down topbar_text topbar_icon" aria-hidden="true"></i> }
        </span>
        {isElectronics && (
          <div className="col-md-11 all_electronics_cont">
            <div className="electronic_row">
            <div className="elc_head">
            <span className="">Mobiles</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              MI
            </Link>
            <Link className="elc_item">
              Realme
            </Link>
            <Link className="elc_item">
              Oppo
            </Link>
            <Link className="elc_item">
              Vivo
            </Link>
            <Link className="elc_item">
              Apple
            </Link>
            <Link className="elc_item">
              Infinix
            </Link>
            <Link className="elc_item">
              Samsung
            </Link>
            <Link className="elc_item">
              Huawei
            </Link>
            <Link className="elc_item">
              Poco X2
            </Link>
            <Link className="elc_item">
              Asus
            </Link>
            <Link className="elc_item">
              Honor
            </Link>
            <Link className="elc_item">
              Realme Narzo 10
            </Link>
            <Link className="elc_item">
              Infinix HOT 9
            </Link>
            <Link className="elc_item">
              IQOO 3
            </Link>
            <Link className="elc_item">
              iPhone SE
            </Link>
            <Link className="elc_item">
              Motorola razr
            </Link>
            <Link className="elc_item">
              Realme Narzo 10A
            </Link>
            </div>
            <div className="electronic_row2">
            <div className="elc_head">
            <span className="">Mobile Accesories</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              MI
            </Link>
            <Link className="elc_item">
              Realme
            </Link>
            <Link className="elc_item">
              Oppo
            </Link>
            <Link className="elc_item">
              Vivo
            </Link>
            <Link className="elc_item">
              Apple
            </Link>
            <Link className="elc_item">
              Infinix
            </Link>
            <Link className="elc_item">
              Samsung
            </Link>
            <Link className="elc_item">
              Huawei
            </Link>
            <Link className="elc_item">
              Poco X2
            </Link>
            <div className="elc_head">
            <span className="">Smart Wearable Tech</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              Asus
            </Link>
            <Link className="elc_item">
              Honor
            </Link>
            <Link className="elc_item">
              Realme Narzo 10
            </Link>
            <Link className="elc_item">
              Infinix HOT 9
            </Link>
            <div className="elc_head">
            <span className="">Health Care Appliances</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              iPhone SE
            </Link>
            <Link className="elc_item">
              Motorola razr
            </Link>
            <Link className="elc_item">
              Realme Narzo 10A
            </Link>
            </div>
            <div className="electronic_row">
            <div className="elc_head">
            <span className="">Mobiles</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              MI
            </Link>
            <Link className="elc_item">
              Realme
            </Link>
            <Link className="elc_item">
              Oppo
            </Link>
            <Link className="elc_item">
              Vivo
            </Link>
            <Link className="elc_item">
              Apple
            </Link>
            <Link className="elc_item">
              Infinix
            </Link>
            <Link className="elc_item">
              Samsung
            </Link>
            <Link className="elc_item">
              Huawei
            </Link>
            <Link className="elc_item">
              Poco X2
            </Link>
            <Link className="elc_item">
              Asus
            </Link>
            <Link className="elc_item">
              Honor
            </Link>
            <Link className="elc_item">
              Realme Narzo 10
            </Link>
            <Link className="elc_item">
              Infinix HOT 9
            </Link>
            <Link className="elc_item">
              IQOO 3
            </Link>
            <Link className="elc_item">
              iPhone SE
            </Link>
            <Link className="elc_item">
              Motorola razr
            </Link>
            <Link className="elc_item">
              Realme Narzo 10A
            </Link>
            </div>
            <div className="electronic_row2">
            <div className="elc_head">
            <span className="">Mobile Accesories</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              MI
            </Link>
            <Link className="elc_item">
              Realme
            </Link>
            <Link className="elc_item">
              Oppo
            </Link>
            <Link className="elc_item">
              Vivo
            </Link>
            <Link className="elc_item">
              Apple
            </Link>
            <Link className="elc_item">
              Infinix
            </Link>
            <Link className="elc_item">
              Samsung
            </Link>
            <Link className="elc_item">
              Huawei
            </Link>
            <Link className="elc_item">
              Poco X2
            </Link>
            <div className="elc_head">
            <span className="">Smart Wearable Tech</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              Asus
            </Link>
            <Link className="elc_item">
              Honor
            </Link>
            <Link className="elc_item">
              Realme Narzo 10
            </Link>
            <Link className="elc_item">
              Infinix HOT 9
            </Link>
            <div className="elc_head">
            <span className="">Health Care Appliances</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              iPhone SE
            </Link>
            <Link className="elc_item">
              Motorola razr
            </Link>
            <Link className="elc_item">
              Realme Narzo 10A
            </Link>
            </div>
            <div className="electronic_row">
            <div className="elc_head">
            <span className="">Mobiles</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              MI
            </Link>
            <Link className="elc_item">
              Realme
            </Link>
            <Link className="elc_item">
              Oppo
            </Link>
            <Link className="elc_item">
              Vivo
            </Link>
            <Link className="elc_item">
              Apple
            </Link>
            <Link className="elc_item">
              Infinix
            </Link>
            <Link className="elc_item">
              Samsung
            </Link>
            <Link className="elc_item">
              Huawei
            </Link>
            <Link className="elc_item">
              Poco X2
            </Link>
            <Link className="elc_item">
              Asus
            </Link>
            <Link className="elc_item">
              Honor
            </Link>
            <Link className="elc_item">
              Realme Narzo 10
            </Link>
            <Link className="elc_item">
              Infinix HOT 9
            </Link>
            <Link className="elc_item">
              IQOO 3
            </Link>
            <Link className="elc_item">
              iPhone SE
            </Link>
            <Link className="elc_item">
              Motorola razr
            </Link>
            <Link className="elc_item">
              Realme Narzo 10A
            </Link>
            </div>
          </div>
        )}
      </div>
      <div
        className=" topbar_hover"
        onMouseOver={() => {
          setIsAppliances(true);
        }}
        onMouseOut={() => {
          setIsAppliances(false);
        }}
      >
      <span className="topbar_text topbar_item">
          TVs & Appliances {isAppliances == true ? <i class="fa fa-chevron-up topbar_text topbar_icon" aria-hidden="true"></i> : <i class="fa fa-chevron-down topbar_text topbar_icon" aria-hidden="true"></i> }
        </span>
        {isAppliances && (
          <div className="col-md-11 all_electronics_cont">
            <div className="electronic_row">
            <div className="elc_head">
            <span className="">Mobiles</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              MI
            </Link>
            <Link className="elc_item">
              Realme
            </Link>
            <Link className="elc_item">
              Oppo
            </Link>
            <Link className="elc_item">
              Vivo
            </Link>
            <Link className="elc_item">
              Apple
            </Link>
            <Link className="elc_item">
              Infinix
            </Link>
            <Link className="elc_item">
              Samsung
            </Link>
            <Link className="elc_item">
              Huawei
            </Link>
            <Link className="elc_item">
              Poco X2
            </Link>
            <Link className="elc_item">
              Asus
            </Link>
            <Link className="elc_item">
              Honor
            </Link>
            <Link className="elc_item">
              Realme Narzo 10
            </Link>
            <Link className="elc_item">
              Infinix HOT 9
            </Link>
            <Link className="elc_item">
              IQOO 3
            </Link>
            <Link className="elc_item">
              iPhone SE
            </Link>
            <Link className="elc_item">
              Motorola razr
            </Link>
            <Link className="elc_item">
              Realme Narzo 10A
            </Link>
            </div>
            <div className="electronic_row2">
            <div className="elc_head">
            <span className="">Mobile Accesories</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              MI
            </Link>
            <Link className="elc_item">
              Realme
            </Link>
            <Link className="elc_item">
              Oppo
            </Link>
            <Link className="elc_item">
              Vivo
            </Link>
            <Link className="elc_item">
              Apple
            </Link>
            <Link className="elc_item">
              Infinix
            </Link>
            <Link className="elc_item">
              Samsung
            </Link>
            <Link className="elc_item">
              Huawei
            </Link>
            <Link className="elc_item">
              Poco X2
            </Link>
            <div className="elc_head">
            <span className="">Smart Wearable Tech</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              Asus
            </Link>
            <Link className="elc_item">
              Honor
            </Link>
            <Link className="elc_item">
              Realme Narzo 10
            </Link>
            <Link className="elc_item">
              Infinix HOT 9
            </Link>
            <div className="elc_head">
            <span className="">Health Care Appliances</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              iPhone SE
            </Link>
            <Link className="elc_item">
              Motorola razr
            </Link>
            <Link className="elc_item">
              Realme Narzo 10A
            </Link>
            </div>
            <div className="electronic_row">
            <div className="elc_head">
            <span className="">Mobiles</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              MI
            </Link>
            <Link className="elc_item">
              Realme
            </Link>
            <Link className="elc_item">
              Oppo
            </Link>
            <Link className="elc_item">
              Vivo
            </Link>
            <Link className="elc_item">
              Apple
            </Link>
            <Link className="elc_item">
              Infinix
            </Link>
            <Link className="elc_item">
              Samsung
            </Link>
            <Link className="elc_item">
              Huawei
            </Link>
            <Link className="elc_item">
              Poco X2
            </Link>
            <Link className="elc_item">
              Asus
            </Link>
            <Link className="elc_item">
              Honor
            </Link>
            <Link className="elc_item">
              Realme Narzo 10
            </Link>
            <Link className="elc_item">
              Infinix HOT 9
            </Link>
            <Link className="elc_item">
              IQOO 3
            </Link>
            <Link className="elc_item">
              iPhone SE
            </Link>
            <Link className="elc_item">
              Motorola razr
            </Link>
            <Link className="elc_item">
              Realme Narzo 10A
            </Link>
            </div>
            <div className="electronic_row2">
            <div className="elc_head">
            <span className="">Mobile Accesories</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              MI
            </Link>
            <Link className="elc_item">
              Realme
            </Link>
            <Link className="elc_item">
              Oppo
            </Link>
            <Link className="elc_item">
              Vivo
            </Link>
            <Link className="elc_item">
              Apple
            </Link>
            <Link className="elc_item">
              Infinix
            </Link>
            <Link className="elc_item">
              Samsung
            </Link>
            <Link className="elc_item">
              Huawei
            </Link>
            <Link className="elc_item">
              Poco X2
            </Link>
            <div className="elc_head">
            <span className="">Smart Wearable Tech</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              Asus
            </Link>
            <Link className="elc_item">
              Honor
            </Link>
            <Link className="elc_item">
              Realme Narzo 10
            </Link>
            <Link className="elc_item">
              Infinix HOT 9
            </Link>
            <div className="elc_head">
            <span className="">Health Care Appliances</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              iPhone SE
            </Link>
            <Link className="elc_item">
              Motorola razr
            </Link>
            <Link className="elc_item">
              Realme Narzo 10A
            </Link>
            </div>
            <div className="electronic_row">
            <div className="elc_head">
            <span className="">Mobiles</span>
            <i class="fa fa-caret-right head_icon" aria-hidden="true"></i>
            </div>
            <Link className="elc_item">
              MI
            </Link>
            <Link className="elc_item">
              Realme
            </Link>
            <Link className="elc_item">
              Oppo
            </Link>
            <Link className="elc_item">
              Vivo
            </Link>
            <Link className="elc_item">
              Apple
            </Link>
            <Link className="elc_item">
              Infinix
            </Link>
            <Link className="elc_item">
              Samsung
            </Link>
            <Link className="elc_item">
              Huawei
            </Link>
            <Link className="elc_item">
              Poco X2
            </Link>
            <Link className="elc_item">
              Asus
            </Link>
            <Link className="elc_item">
              Honor
            </Link>
            <Link className="elc_item">
              Realme Narzo 10
            </Link>
            <Link className="elc_item">
              Infinix HOT 9
            </Link>
            <Link className="elc_item">
              IQOO 3
            </Link>
            <Link className="elc_item">
              iPhone SE
            </Link>
            <Link className="elc_item">
              Motorola razr
            </Link>
            <Link className="elc_item">
              Realme Narzo 10A
            </Link>
            </div>
          </div>
        )}
        </div>
        </div>
    </>
  );
};

export default Topbar;
