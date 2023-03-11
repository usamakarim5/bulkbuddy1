import React, {useState} from 'react'
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Categories from "../../Categories";
import { Link } from "react-router-dom";
import { allMobiles } from "../../Data/MobileBrandsData";

const FilterComponent = () => {

    const [value, setValue] = useState([20, 37]);
    const [isBrand, setIsBrand] = useState(true);
    const [isCustomerRating, setIsCutomerRating] = useState(true);
    const [isGSTInvoice, setIsGSTInvoice] = useState(false);
    const [isRam, setIsRam] = useState(true);
    const [isStorage, setIsStorage] = useState(false);
    const [isBattery, setIsBattery] = useState(false);
    const [isScreen, setIsScreen] = useState(false);
    const [isPrimary, setIsPrimary] = useState(false);
    const [isSecondary, setIsSecondary] = useState(false);
    const [isProcessor, setIsProcessor] = useState(false);
    const [isSpeciality, setIsSpeciality] = useState(false);
    const [isResolution, setIsResolution] = useState(false);
    const [isOperating, setIsOperating] = useState(false);
    const [isNetwork, setIsNetwork] = useState(false);
    const [isSim, setIsSim] = useState(false);
    const [isOffers, setIsOffers] = useState(true);
    const [isFeatures, setIsFeatures] = useState(false);
    const [isType, setIsType] = useState(false);
    const [isCores, setIsCores] = useState(false);
    const [isAvailability, setIsAvailability] = useState(false);
    const [isDiscount, setIsDiscount] = useState(true);
    const [isOSVersion, setIsOSVersion] = useState(false);
    const [isClock, setIsClock] = useState(false);
    const [isBrandSearch, setIsBrandSearch] = useState(false)
    const [searchedBrands, setSearchedBrands] = useState([])
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleSearch = (e)=>{
     var searched = allMobiles.allMobils.filter((items)=>items.toLowerCase().includes(e.target.value))
     setSearchedBrands(searched)
    }



  return (
    <div className="col-md-2 mobiles_filter">
    <div className="col-12 filter_head">Filters</div>
    <div className="col-12 filter_category underline">
      <span className="filter_name">Categories</span>
      <Link className="filter_title">
        <i
          class="fa fa-chevron-left me-1 filter_icon"
          aria-hidden="true"
        ></i>{" "}
        Mobiles & Accessories
      </Link>
      <Link className="filter_sub_title">Mobiles</Link>
    </div>
    <div className="col-12 filter_category underline">
      <span className="filter_name">Price</span>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
      <div className="col-md-12 d-flex justify-content-evenly">
        <select className="min_max_input">
          <option>Min</option>
          <option>10000</option>
          <option>20000</option>
          <option>30000</option>
          <option>40000</option>
        </select>
        <select className="min_max_input">
          <option>Max</option>
          <option>10000</option>
          <option>20000</option>
          <option>30000</option>
          <option>40000</option>
        </select>
      </div>
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsBrand(!isBrand);
        }}
      >
        <span className="filter_name">Brand </span>
        {isBrand ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isBrand && (
        <div className="brand_options_div">
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            size="small"
          />

          {allMobiles.popular.map((item) => (
            <div className="brand_list col-12">
              <input
                type="checkbox"
                className="brands_list_checkbox"
                value=""
              />
              <span className="ms-3">{item}</span>
            </div>
          ))}
          <span className="brand_list moreBtn" onClick={()=>setIsBrandSearch(true)}>More</span>
         {isBrandSearch && 
         <div className="search_div_brand">
            <div className="search_brand_head">
              <input
                className="search_brand_input"
                placeholder="Search Brand"
                onChange={(e)=>{handleSearch(e)}}
              ></input>
              <i
                class="fa fa-times search_brand_close"
                aria-hidden="true"
                onClick={()=>setIsBrandSearch(false)}
              ></i>
            </div>
            {searchedBrands.length > 0 ?
              <div className="col-12 search_list_items_cont">
              {searchedBrands.map((item) => (
                <span className="search_list_item">
                  <input
                    type="checkbox"
                    className="input_checkbox"
                    value=""
                  />
                  <span className="list_item_name">{item}</span>
                </span>
              ))}
              </div>
              :
              <div className="col-12 search_list_items_cont">
              <span className="search_head_desc">Popular</span>
              {allMobiles.popular.map((item) => (
                <span className="search_list_item">
                  <input
                    type="checkbox"
                    className="input_checkbox"
                    value=""
                  />
                  <span className="list_item_name">{item}</span>
                </span>
              ))}
              <span className="search_head_desc">All mobiles</span>
              {allMobiles.allMobils.map((item) => (
                <span className="search_list_item">
                  <input
                    type="checkbox"
                    className="input_checkbox"
                    value=""
                  />
                  <span className="list_item_name">{item}</span>
                </span>
              ))}
            </div>

            }
          
            <div className="search_brand_footer">
              <button className="filter_clear_btn">Clear all</button>
              <button className="filter_apply_btn">Apply Filter</button>
            </div>
          </div>
         }
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsCutomerRating(!isCustomerRating);
        }}
      >
        <span className="filter_name">Customer Ratings </span>
        {isCustomerRating ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isCustomerRating && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">
              4 <i class="fa fa-star" aria-hidden="true"></i> & Above
            </span>
          </div>

          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">
              3 <i class="fa fa-star" aria-hidden="true"></i> & Above
            </span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsGSTInvoice(!isGSTInvoice);
        }}
      >
        <span className="filter_name">Gst invoice available </span>
        {isGSTInvoice ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isGSTInvoice && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">GST Invoice available</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsRam(!isRam);
        }}
      >
        <span className="filter_name">Ram </span>
        {isRam ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isRam && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">4 GB</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">3 GB</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">2 GB</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">1 GB & Below</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">8 GB & Above</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">6 GB</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsStorage(!isStorage);
        }}
      >
        <span className="filter_name">Internal storage </span>
        {isStorage ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isStorage && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">256 GB & Above</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">128-255 GB</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">64-127 GB</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">32-63 GB</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">16-31 GB</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">8-15 GB</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">4-7 GB</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">2-3 GB</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">2 GB & below</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsBattery(!isBattery);
        }}
      >
        <span className="filter_name">Battery Capacity</span>
        {isBattery ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isBattery && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">1000-1999 mAh</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">2000-2999 mAh</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">3000-3999 mAh</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">4000-4999 mAh</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">5000-5999 mAh</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">6000 mAh & Above</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Less than 1000 mAh</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsScreen(!isScreen);
        }}
      >
        <span className="filter_name">Screen Size </span>
        {isScreen ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isScreen && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">5.7 - 5.9 inch</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">5.5 - 5.6 inch</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">5.2 - 5.4 inch</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">5.0 - 5.1 inch</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">4.5 - 4.9 inch</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">4.0 - 4.4 inch</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">3.5 - 3.9 inch</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">3.0 - 3.4 inch</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Less than 3 inch</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">6.4 inch & Above</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsPrimary(!isPrimary);
        }}
      >
        <span className="filter_name">Primary Camera </span>
        {isPrimary ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isPrimary && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">5 - 7.9 MP</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Below 5 MP</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">8 - 11.9 MP</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">12 - 15.9 MP</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">16 - 20.9 MP</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">21 - 31.9 MP</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">32 - 47.9 MP</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">48 - 63.9 MP</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">64 MP & Above</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsSecondary(!isSecondary);
        }}
      >
        <span className="filter_name">Secondary Camera </span>
        {isSecondary ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isSecondary && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">12 - 15.9 MP</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">16 - 20.9 MP</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">21 MP & Above</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">5 - 7.9 MP</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">8 - 11.9 MP</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Below 5 MP</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsProcessor(!isProcessor);
        }}
      >
        <span className="filter_name">Processor Brand</span>
        {isProcessor ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isProcessor && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">AMD</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Apple</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">ARM</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Exynos</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Google</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">HiSilicon</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Huawei</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Intel</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Mediatek</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">RDA</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Snapdragon</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsSpeciality(!isSpeciality);
        }}
      >
        <span className="filter_name">Speciality </span>
        {isSpeciality ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isSpeciality && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Big Storage</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Higher Performance</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Long lasting Battery</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Selfie Camera</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsResolution(!isResolution);
        }}
      >
        <span className="filter_name">Resolution type</span>
        {isResolution ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isResolution && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Full HD</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Full HD+</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Full HD+ AMOLED Display</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Full HD+ E3 Super AMOLED Display</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Full HD+ Super AMOLED Display</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">FWVGA</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsOperating(!isOperating);
        }}
      >
        <span className="filter_name">Operating System</span>
        {isOperating ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isOperating && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Android</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Blackberry</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">iOS</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">KaiOs</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Symbian</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Tizen</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Windows</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsNetwork(!isNetwork);
        }}
      >
        <span className="filter_name">Network Type</span>
        {isNetwork ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isNetwork && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">2G</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">3G</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">4G</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">4G VOLTE</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">5G</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsSim(!isSim);
        }}
      >
        <span className="filter_name">Sim Type</span>
        {isSim ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isSim && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Dual Sim</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">
              Dual Sim {"("}Nano+eSim{")"}
            </span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">
              Dual Sim {"("}Physical+eSim{")"}
            </span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Four Sim</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Single Sim</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Triple Sim</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsOffers(!isOffers);
        }}
      >
        <span className="filter_name">Offers</span>
        {isOffers ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isOffers && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">NO Cost EMI</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Special Price</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsFeatures(!isFeatures);
        }}
      >
        <span className="filter_name">Features</span>
        {isFeatures ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isFeatures && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">WiFi</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">FM Player</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">HD Recording</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">NFC</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Bluetooth</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Music Player</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">USB</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">GPRS</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsType(!isType);
        }}
      >
        <span className="filter_name">Type</span>
        {isType ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isType && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Smartphones</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Feature Phones</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsCores(!isCores);
        }}
      >
        <span className="filter_name">Number of Cores</span>
        {isCores ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isCores && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Dual Core</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Hexa Core</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Octa Core</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Quad Core</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Single Core</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsAvailability(!isAvailability);
        }}
      >
        <span className="filter_name">Availability</span>
        {isAvailability ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isAvailability && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Exclude Out of Stock</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsDiscount(!isDiscount);
        }}
      >
        <span className="filter_name">Discount</span>
        {isDiscount ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isDiscount && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">50% or more</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">40% or more</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">30% or more</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">20% or more</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">10% or more</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsOSVersion(!isOSVersion);
        }}
      >
        <span className="filter_name">Oprating system version name</span>
        {isOSVersion ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isOSVersion && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Android Q</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Anna</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Belle</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Eclair</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Froyo</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Gingerbead</span>
          </div>
        </div>
      )}
    </div>
    <div className="col-12 filter_category underline">
      <div
        className="brand_div"
        onClick={() => {
          setIsClock(!isClock);
        }}
      >
        <span className="filter_name">Clock Speed</span>
        {isClock ? (
          <i class="fa fa-chevron-up me-1 " aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down me-1 " aria-hidden="true"></i>
        )}
      </div>
      {isClock && (
        <div className="brand_options_div">
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">1.5 - 1.9 GHz</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">2 - 2.1 GHz</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">2.2 - 2.4 GHz</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">2.5 GHz & Above</span>
          </div>
          <div className="brand_list col-12">
            <input
              type="checkbox"
              className="brands_list_checkbox"
              value=""
            />
            <span className="ms-3">Below 1.5 Ghz</span>
          </div>
        </div>
      )}
    </div>
  </div>
  )
}

export default FilterComponent