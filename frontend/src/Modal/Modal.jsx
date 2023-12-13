import React, { useState } from "react";
import modalStyle from "../styles/Modal.module.css";
import { SiChatbot } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { IoIosArrowForward, IoIosHelpCircleOutline } from "react-icons/io";
import { TbSpeakerphone } from "react-icons/tb";
import { IoSend } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

const objects = [
  {
    title: "Intercom Overview",
    para: "See how your customers service solution works.",
    totalArticle: "17 articles",
  },
  {
    title: "Getting Started",
    para: "Everthing you need to know to get started with intercom",
    totalArticle: "165 articles",
  },
  {
    title: "Help Desk",
    para: "Boost productivity with a workspace that connects yourinbox, tickets, and help center",
    totalArticle: "89 articles",
  },
  {
    title: "Ai Chatbot",
    para: "Cut support volume and increase efficiency with an AI chatbot and automations",
    totalArticle: "33 articles",
  },
  {
    title: "Proactive Support",
    para: "Get ahead of Support volume with product tours,about messages, and more",
    totalArticle: "160 articles",
  },
  {
    title: "Automation",
    para: "Automate simple processes, speed up your workflows and offer proactive support",
    totalArticle: "34 articles",
  },
  {
    title: "Articles",
    para: "Use Articles in your Help Cener to allow customers to self serve.",
    totalArticle: "40 articles",
  },
  {
    title: "Intercom",
    para: "See how your customers service solution works.",
    totalArticle: "18",
  },
  {
    title: "Reports",
    para: "Measuting the perfromance of yours teams,messages, articles and automations.",
    totalArticle: "32 articles",
  },
];

const Modal = () => {
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(true);
  const [activeItem, setActiveItem] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      sendMessage(inputValue);
      setInputValue("");
    }
  };

  function sendMessage(message) {
    setValue(message);
    axios
      .post("https://quest-labs.onrender.com/reply", { message })
      .then((res) => {
        console.log(res);
        setData(res.data.msg);
      })
      .catch((error) => console.log(error));
  }

  let content;

  if (activeItem === 2) {
    content = (
      <div>
        <nav id={activeItem === 2 && modalStyle.helpNavbar}>
          <h3>Help</h3>
          <div className={modalStyle.helpSearchDiv}>
            <p>Search for help</p>
            <IoSearchOutline className={modalStyle.helpSearchIcon} />
          </div>
        </nav>
        <div className={modalStyle.helpContainer}>
          <h3 id={modalStyle.Tenheading}> 10 Collections</h3>
          {objects.map((el, index) => {
            return (
              <div key={index} className={modalStyle.helpDiv}>
                <h4>{el.title}</h4>
                <div>
                  <p>{el.para}</p>
                  <MdKeyboardArrowRight className={modalStyle.rightArrow} />
                </div>
                <p>{el.totalArticle}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (activeItem === 0) {
    content = (
      <div
        className={flag2 ? modalStyle.container : modalStyle.inActiveContainer}
      >
        <nav>
          <div>
            <img
              src="https://downloads.intercomcdn.com/i/o/355439/a7cdd3705c65918af17f3ce0/1bb87d41d15fe27b500a4bfcde01bb0e.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.intercomassets.com/avatars/5444634/square_128/5444634-1665143430.jpg"
              alt=""
            />
            <img
              src="https://static.intercomassets.com/avatars/5130954/square_128/5130954-1665143101.jpg"
              alt=""
            />
            <img
              src="https://static.intercomassets.com/avatars/2672455/square_128/profile_pic-removebg-preview-1665417970.png"
              alt=""
            />
          </div>
        </nav>
        <div className={modalStyle.headingsDiv}>
          <h2>Hello there.</h2>
          <h2>How can we help?</h2>
        </div>
        <div className={modalStyle.secondDiv}>
          <div onClick={() => setFlag2(!flag2)}>
            <p>Send us a message</p>
            <p>We typically reply within a day</p>
          </div>
          <div>
            <IoSend className={modalStyle.sendIcon} />
          </div>
        </div>
        <div className={modalStyle.thirdDiv}>
          <img
            src="https://downloads.intercomcdn.com/i/o/798705491/802ac1eb4c72711c6a270831/Join%20the%20New%20Intercom%20Community.png?resize=568x"
            alt=""
          />
          <div>
            <h4>The Intercom Community</h4>
            <p>
              Be sure to check out the Intercom Community for support,plus tips
              & tricks from Intercom users and much more
            </p>
          </div>
        </div>
        <div className={modalStyle.fourthDiv}>
          <div className={modalStyle.searchDiv}>
            <p>Search for help</p>
            <IoSearchOutline className={modalStyle.searchIcon} />
          </div>
          <div className={modalStyle.fourthDiv_1}>
            <p>Send Custom user attributes to intercom</p>
            <MdKeyboardArrowRight className={modalStyle.rightArrow} />
          </div>
          <div className={modalStyle.fourthDiv_1}>
            <p>Tracking user data in Intercom</p>
            <MdKeyboardArrowRight className={modalStyle.rightArrow} />
          </div>
          <div className={modalStyle.fourthDiv_1}>
            <p>Customize the pre-made email templates</p>
            <MdKeyboardArrowRight className={modalStyle.rightArrow} />
          </div>
          <div className={modalStyle.fourthDiv_1}>
            <p>Forward your email to your team inbox</p>
            <MdKeyboardArrowRight className={modalStyle.rightArrow} />
          </div>
        </div>
        <div className={modalStyle.fifthDiv}>
          <img
            src="https://images.ctfassets.net/xny2w179f4ki/Y779AgRt5sjg2nE9NnWx7/2684a93c01ce95d546deedcc64a0e90d/HBR_Resource_LP_Thumbnail_-_393x250.png"
            alt=""
          />
          <div>
            <h4>Future-Proofing Bussinesses with Modern Customer Engagement</h4>
            <p>
              Customer retention is more important than ever.
              <br />
              See how bussinesses are building unified, efficient customer
              engagement strategies that protect their bottom line.
            </p>
          </div>
        </div>
      </div>
    );
  } else if (activeItem === 3) {
    content = (
      <div>
        <nav id={activeItem === 3 && modalStyle.newsNavbar}>
          <h3>Help</h3>
        </nav>
        <div className={modalStyle.newsFirstDiv}>
          <div className={modalStyle.newsFirstDiv_1}>
            <div>
              <h3>Latest</h3>
              <p>From Team Intercom </p>
            </div>
            <div>
              <img
                src="https://static.intercomassets.com/avatars/5444634/square_128/5444634-1665143430.jpg"
                alt=""
              />
              <img
                src="https://static.intercomassets.com/avatars/5130954/square_128/5130954-1665143101.jpg"
                alt=""
              />
              <img
                src="https://static.intercomassets.com/avatars/2672455/square_128/profile_pic-removebg-preview-1665417970.png"
                alt=""
              />
            </div>
          </div>
          <div className={modalStyle.newsFirstDiv_2}>
            <img
              src="https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png"
              alt=""
            />
            <div>
              <div>New</div>
              <div>+2 labels</div>
            </div>
            <div>
              <div className={modalStyle.newsSupport}>
                <h3>
                  Support customers with Fin in 45 languages--join the open beta
                </h3>
                <p>
                  Support customers with Fin in 45 languages--with no extra
                  setup required
                </p>
              </div>
              <IoIosArrowForward className={modalStyle.forwardIcon} />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (activeItem === 1) {
    content = (
      <h2 style={{ textAlign: "center", color: "white" }}>No Messages</h2>
    );
  }

  // console.log(data)

  return (
    <div id={modalStyle.main}>
      <div
        className={flag1 ? modalStyle.modal_Active : modalStyle.modal_inActive}
        style={flag2 === false ? { overflow: "hidden" } : {}}
      >
        {content}
        <footer id={modalStyle.footer}>
          <ul
            className={
              flag2 ? modalStyle.ul_links : modalStyle.inActiveUl_links
            }
          >
            <li
              className={activeItem === 0 ? modalStyle.active : ""}
              onClick={() => handleItemClick(0)}
            >
              <RiHomeSmile2Fill className={modalStyle.icons} />
              <span>Home</span>
            </li>
            <li
              className={activeItem === 1 ? modalStyle.active : ""}
              onClick={() => handleItemClick(1)}
            >
              <BiMessageDetail className={modalStyle.icons} />
              <span>Messages</span>
            </li>
            <li
              className={activeItem === 2 ? modalStyle.active : ""}
              onClick={() => handleItemClick(2)}
            >
              <IoIosHelpCircleOutline className={modalStyle.icons} />
              <span>Help</span>
            </li>
            <li
              className={activeItem === 3 ? modalStyle.active : ""}
              onClick={() => handleItemClick(3)}
            >
              <TbSpeakerphone className={modalStyle.icons} />
              <span>News</span>
            </li>
          </ul>
          <div
            id={
              flag2
                ? modalStyle.chatbotInputDiv
                : modalStyle.activeChatbotInputDiv
            }
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyUp={handleKeyUp}
              placeholder="Message..."
            />
          </div>
        </footer>
        <div
          className={
            flag2 ? modalStyle.inActivechatbot : modalStyle.activeChatbot
          }
        >
          <div className={modalStyle.firstChatbotDiv}>
            <nav className={modalStyle.chatbotNavbar}>
              <div onClick={() => setFlag2(!flag2)}>
                <IoIosArrowBack />
              </div>
              <div>Intercom</div>
              <div></div>
            </nav>
            <div className={modalStyle.chatbotImagesDiv}>
              <img
                src="https://static.intercomassets.com/avatars/5120302/square_128/5120302-1665143094.jpeg"
                alt=""
              />
              <img
                src="https://static.intercomassets.com/avatars/4619635/square_128/4619635-1665142899.jpg"
                alt=""
              />
              <img
                src="https://static.intercomassets.com/avatars/4470594/square_128/4470594-1665142836.png"
                alt=""
              />
            </div>
            <div className={modalStyle.chatbotTextDiv}>
              <h3>We typically reply within a day</h3>
              <p>
                We help your business grow by connecting you to your customers.
                For more support, tips & tricks, check out the Community
                https://community.intercom.com
              </p>
            </div>
          </div>
          <div className={modalStyle.secondChatbotDiv}>
            {data.map((el, index) => {
              console.log(el);
              return (
                <div key={index}>
                  <div>
                    <p>User</p>
                    <p>{value}</p>
                  </div>
                  <div>
                    <p>Bot</p>
                    <p>{el.reply}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={modalStyle.button} onClick={() => setFlag1(!flag1)}>
        {flag1 ? <FaChevronDown /> : <SiChatbot />}
      </div>
    </div>
  );
};

export default Modal;
