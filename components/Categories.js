import React, { useState } from "react";
import { Link } from "react-router-dom";
import { allCategories } from "./Data/CategoriesData";
import mobiles from "../images/mobiles.webp";
import electronics from "../images/electronics.webp";
import appliances from "../images/appliances.webp";

const Categories = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isAudio, setIsAudio] = useState(false);
  const [isCameras, setIsCameras] = useState(false);
  const [isComputers, setIsComputers] = useState(false);
  const [isGaming, setIsGaming] = useState(false);
  const [isLaptops, setIsLaptops] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false);
  const [isPowerbank, setIsPowerBank] = useState(false);
  const [isAutomation, setIsAutomation] = useState(false);
  const [isWearable, setIsWearable] = useState(false);
  const [isStorage, setIsStorage] = useState(false);
  const [isTablets, setIsTablets] = useState(false);
  const [isElectronics, setIsElectronics] = useState(false)


  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
     <div
          className=" top_bar py-1">
      <Link
        className="categories_items d-flex justfiy-content-center align-items-center flex-column "
        to={`/home/mobiles`}
      >
        <img className="items_image" src={mobiles}></img>
        <span className="categories_head">Mobiles</span>
      </Link>
      <Link
        className="categories_items d-flex justfiy-content-center align-items-center flex-column"
        onMouseOver={() => {
          handleMouseOver();
        }}
        onMouseOut={() => {
          handleMouseOut();
        }}
        to={`/home/mobiles`}
      >
        <img className="items_image" src={electronics}></img>
        <span className="categories_head">
          Electronics {isHovering == true ? <i class="fa fa-chevron-up" aria-hidden="true"></i> : <i class="fa fa-chevron-down" aria-hidden="true"></i> }
        </span>
        <div className={ isHovering && 'up-arrow'}/>
        {isHovering && (
          <div className="electronics_list">
        
            <div className="col-12 d-flex list_left">
              <Link to ='home/electronics/audio' className="list_item dropright px-2 py-3" onMouseOver={()=>{setIsAudio(true)}} onMouseOut = {()=>{setIsAudio(false)}}>
                <span>Audio</span>
                {isAudio && 
                  <i class="fa fa-chevron-right"></i>
                }
                {isAudio && 
              <div className="col-12 d-flex flex-column audio_right py-2">
              <b className="d-flex align-items-start px-2 py-2">More in Audio</b>
              <Link className="list_item right_link px-2 py-2" to = {`home/electronics/audio`}>
                <span>All </span>
              </Link>
              <Link className="list_item right_link px-2 py-2" to = {`home/electronics/audio/categories/${'Bluetooth Headsets'}`}>
                <span>Bluetooth Headphones</span>
              </Link>
              <Link className="list_item right_link px-2 py-2" to = {`home/electronics/audio/categories/${'Wired Headphones'}`}>
                <span>Wired Headphones </span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to = {`home/electronics/audio/categories/${'Wireless Airbuds'}`}>
                <span>True Wireless Airbuds </span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to = {`home/electronics/audio/categories/${'Bluetooth Speakers'}`}>
                <span>Bluetooth Speakers </span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to = {`home/electronics/audio/categories/${'Soundbars'}`}>
                <span>Soundbars </span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to = {`home/electronics/audio/categories/${'Home Theaters'}`}>
                <span>Home Theaters </span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to = {`home/electronics/audio/categories/${'Tv Streaming devices'}`}>
                <span>TV Streaming Device </span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to = {`home/electronics/audio/categories/${'Remote Control'}`}>
                <span>Remote Control </span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to = {`home/electronics/audio/categories/${'DTH Setup Box'}`}>
                <span>DTH Set Top Box </span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to = {`home/electronics/audio/categories/${'Headphones Pouch & Covers'}`}>
                <span>Headphones Pouch & Case Covers </span>
              </Link>
              </div>
            }
              </Link>
              <div className="list_item  px-2 py-3" onMouseOver={()=>{setIsElectronics(true)}} onMouseOut={()=>{setIsElectronics(false)}}>
                <span>Electronics GST Store</span>
              </div>
              <Link to ='home/electronics/cameras' className="list_item dropright px-2 py-3" onMouseOver={()=>{setIsCameras(true)}} onMouseOut = {()=>setIsCameras(false)}>
                <span>Cameras & Accesories</span>
                {isCameras && 
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                  }
                {isCameras && 
                <div className="col-12 d-flex flex-column audio_right py-2">
              <b className="d-flex align-items-start px-2 py-2">More in Cameras & Accessories</b>
              <Link className="list_item right_link px-2 py-2">
                <span>All </span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>DSLR & Mirrorless</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Sports & Actions </span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Point & Shoot </span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Instant Cameras</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Comcoders </span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Camera Tripods </span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Camera Lenses </span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Drone </span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Flashes</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Gimbals</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Binoculars</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Other Camera Accessories</span>
              </Link>
              </div> 
                }
              </Link>
              <Link to ='home/electronics/computers' className="list_item dropright px-2 py-3" onMouseOver={()=>{setIsComputers(true)}} onMouseOut={()=>{setIsComputers(false)}}>
                <span >Computer Peripherels</span>
                {isComputers &&
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                }
                {
                  isComputers &&
                  <div className="col-12 d-flex flex-column audio_right py-2">
              <b className="d-flex align-items-start px-2 py-2">More in Computer Peripherels</b>
              <Link className="list_item right_link px-2 py-2">
                <span>All </span>
              </Link>
              <Link className="list_item right_link px-2 py-2" to = {`home/electronics/computers/categories/${'Printers'}`}>
                <span>Printers</span>
              </Link>
              <Link className="list_item right_link px-2 py-2" to ={`home/electronics/computers/categories/${'Monitors'}`}>
                <span>Monitors</span>
              </Link>
              <Link className="list_item right_link px-2 py-2" to ={`home/electronics/computers/categories/${'Projectors'}`}>
                <span>Projectors</span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to ={`home/electronics/computers/categories/${'Portable Projectors'}`}>
                <span>Portable Projectors</span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to ={`home/electronics/computers/categories/${'Ink Catridges'}`}>
                <span>Ink Catridges</span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to ={`home/electronics/computers/categories/${'Toners'}`}>
                <span>Toners </span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to ={`home/electronics/computers/categories/${'Ink Bottles'}`}>
                <span>Ink Bottles </span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to ={`home/electronics/computers/categories/${'Recepient Printers'}`}>
                <span>Recepient Printers </span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to ={`home/electronics/computers/categories/${'Lamination Machines'}`}>
                <span>Lamination Machines</span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to ={`home/electronics/computers/categories/${'Note Counting Machines'}`}>
                <span>Note Counting Machines</span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to ={`home/electronics/computers/categories/${'Barcode Scanners'}`}>
                <span>Barcode Scanners</span>
              </Link>
              <Link className="list_item right_link px-2 py-2"  to ={`home/electronics/computers/categories/${'Currency Detectors'}`}>
                <span>Currency Detectors</span>
              </Link>
              </div>
                }
              </Link>
              <Link to ='home/electronics/games' className="list_item dropright px-2 py-3" onMouseOver = {()=>{setIsGaming(true)}} onMouseOut = {()=>{setIsGaming(false)}}>
                <span >Gaming</span>
                {isGaming && 
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                }
                {
                  isGaming && 
                  <div className="col-12 d-flex flex-column audio_right py-2">
              <b className="d-flex align-items-start px-2 py-2">More in Gaming</b>
              <Link className="list_item right_link px-2 py-2">
                <span>All</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Gaming Consoles</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Gaming Mouse</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Gaming Keyboards</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Gamepads</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Games</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Accessory Kits</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Gaming Accessories Combo </span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Gaming Mousepads</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Membership Cards</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Controllers</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Other Gaming Accesories</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Gaming Components</span>
              </Link>
              </div>
                }
          
              </Link>
              <Link to ='home/electronics/laptop-accessories' className="list_item dropright px-2 py-3" onMouseOver = {()=>{setIsLaptops(true)}} onMouseOut = {()=>{setIsLaptops(false)}}>
                <span>Laptop Accesories</span>
                {isLaptops &&
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                }
                {
                  isLaptops &&
                  <div className="col-12 d-flex flex-column audio_right py-2">
              <b className="d-flex align-items-start px-2 py-2">More in Laptops Accesories</b>
              <Link className="list_item right_link px-2 py-2">
                <span>All</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Mouse</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Laptop Keyboards</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Routers</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Data Cards</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>UPS</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>USB Gadgets</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Security Software</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Laptop Battery</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Laptop Adapters</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Wireless USB Adapters</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Processors</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Other Accessories</span>
              </Link>
              </div>
                }

              </Link>
              <Link to ='home/electronics/laptop-desktop' className="list_item dropright px-2 py-3" onMouseOver={()=>{setIsDesktop(true)}} onMouseOut = {()=>{setIsDesktop(false)}}>
                <span>Laptop and Desktop</span>
                {isDesktop &&
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                }
                {
                  isDesktop &&
                  <div className="col-12 d-flex flex-column audio_right py-2">
              <b className="d-flex align-items-start px-2 py-2">More in Laptops and Desktops</b>
              <Link className="list_item right_link px-2 py-2">
                <span>All</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Laptops</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Gaming Laptops</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Desktop PCs</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>All in One PCs</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Mini PCs</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Tower PCs</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>PC Finder</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>GST Invoice on Laptops</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Laptops Buying Guide</span>
              </Link>
              </div>
                }
            
              </Link>
              <Link to ='home/electronics/mobile-accessories' className="list_item dropright px-2 py-3" onMouseOver = {()=>{setIsMobile(true)}} onMouseOut={()=>{setIsMobile(false)}}>
                <span>Mobile Accessories</span>
                {
                  isMobile &&
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                }
                {
                  isMobile &&
                  <div className="col-12 d-flex flex-column audio_right py-2">
              <b className="d-flex align-items-start px-2 py-2">More in Mobiles</b>
              <Link className="list_item right_link px-2 py-2">
                <span>All</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Plain Cases</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Designer Cases</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Screen Gaurds</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Camera Lense Protectors</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Tablet Accessories</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Mobile Charger</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Mobile Cable</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Mobile Pouches</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Mobile Flash</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Mobile Holder</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Mobile USB Gadget</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Mobile Accessories Combo</span>
              </Link>
              </div>

                }
   
              </Link>
              <Link to ='home/electronics/powerbanks' className="list_item dropright px-2 py-3" onMouseOver={()=>{setIsPowerBank(true)}} onMouseOut={()=>setIsPowerBank(false)}>
                <span>Powerbank</span>
                {isPowerbank &&
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                }
              {
                isPowerbank &&
                <div className="col-12 d-flex flex-column audio_right py-2">
              <b className="d-flex align-items-start px-2 py-2">More in Powerbank</b>
              <Link className="list_item right_link px-2 py-2">
                <span>All</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Powerbanks</span>
              </Link>
              </div>
              }
              </Link>
              <Link to ='home/electronics/home-automation' className="list_item dropright px-2 py-3" onMouseOver={()=>{setIsAutomation(true)}} onMouseOut = {()=>{setIsAutomation(false)}}>
                <span>Smart Home Automation</span>
                {isAutomation &&
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                }
               {
                isAutomation &&
                <div className="col-12 d-flex flex-column audio_right py-2">
              <b className="d-flex align-items-start px-2 py-2">More in Home Automation</b>
              <Link className="list_item right_link px-2 py-2">
                <span>All</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Smart Assistants</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Smart Lights</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Smart Cameras</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Smart Switches</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Smart Door locks</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Sensors and Alarms</span>
              </Link>
              </div>
               }
              </Link>
              <Link to ='home/electronics/smart-wearables' className="list_item dropright px-2 py-3" onMouseOver={()=>{setIsWearable(true)}} onMouseOut={()=>{setIsWearable(false)}}>
                <span>Smart Wearables</span>
                {isWearable &&
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                }
               {
                isWearable &&
                <div className="col-12 d-flex flex-column audio_right py-2">
              <b className="d-flex align-items-start px-2 py-2">More in Smart Wearables</b>
              <Link className="list_item right_link px-2 py-2">
                <span>All</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Smart Watches</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Smart Bands</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Smart Glasses</span>
              </Link>
              </div>

               }
              </Link>
              <Link to ='home/electronics/storage' className="list_item dropright px-2 py-3" onMouseOver={()=>{setIsStorage(true)}} onMouseOut = {()=>{setIsStorage(false)}}>
                <span>Storage</span>
                {
                  isStorage &&
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                }
               {
                isStorage &&
                <div className="col-12 d-flex flex-column audio_right py-2">
              <b className="d-flex align-items-start px-2 py-2">More in Storage</b>
              <Link className="list_item right_link px-2 py-2">
                <span>All</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Mobile Memory Cards</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>ComputerStorage Pendrives</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>MobileStorage Pendrives</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>External Hardrive</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Internal Hardrive</span>
              </Link>
              </div>

               }
              </Link>
              <Link to ='home/electronics/tablets' className="list_item dropright px-2 py-3" onMouseOver = {()=>{setIsTablets(true)}} onMouseOut = {()=>{setIsTablets(false)}}>
                <span>Tablets</span>
                {isTablets &&
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                }
                {
                  isTablets &&
                  <div className="col-12 d-flex flex-column audio_right py-2">
              <b className="d-flex align-items-start px-2 py-2">More in Tablets</b>
              <Link className="list_item right_link px-2 py-2">
                <span>All</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Tablets With Call Facility</span>
              </Link>
              <Link className="list_item right_link px-2 py-2">
                <span>Tablets Without Call Facility</span>
              </Link>
              </div>
                }
              </Link>
            </div>
           
         
          </div>
        )}
      </Link>

      <Link
        className="categories_items d-flex justfiy-content-center align-items-center flex-column "
        to={`/home/appliances`}
      >
        <img className="items_image" src={appliances}></img>
        <span className="categories_head">
          Appliances
        </span>
      </Link>
      </div>
    </>
  );
};

export default Categories;
