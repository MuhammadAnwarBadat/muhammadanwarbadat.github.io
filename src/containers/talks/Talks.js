// import React, {useContext} from "react";
// import "./Talks.scss";
// import TalkCard from "../../components/talkCard/TalkCard";
// import {talkSection} from "../../portfolio";
// import {Fade} from "react-reveal";
// import StyleContext from "../../contexts/StyleContext";

// export default function Talks() {
//   const {isDark} = useContext(StyleContext);
//   if (!talkSection.display) {
//     return null;
//   }
//   return (
//     <Fade bottom duration={1000} distance="20px">
//       <div className="main" id="talks">
//         <div className="talk-header">
//           <h1 className="talk-header-title">{talkSection.title}</h1>
//           <p
//             className={
//               isDark
//                 ? "dark-mode talk-header-subtitle"
//                 : "subTitle talk-header-subtitle"
//             }
//           >
//             {talkSection.subtitle}
//           </p>
//           {talkSection.talks.map((talk, i) => {
//             return (
//               <TalkCard
//                 key={i}What 
//                 talkDetails={{
//                   title: talk.title,
//                   subtitle: talk.subtitle,
//                   slides_url: talk.slides_url,
//                   event_url: talk.event_url,
//                   image: talk.image,
//                   isDark
//                 }}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </Fade>
//   );
// }

import React, { useContext } from "react";
import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Talks() {
  const { isDark } = useContext(StyleContext);

  // Replace talkSection logic with static data or adjust as needed
  const talks = [
    {
      title: "Talk Title",
      subtitle: "Talk Subtitle",
      slides_url: "https://example.com/slides",
      event_url: "https://example.com/event",
      image: "https://example.com/image.jpg",
    },
    // Add more talks here as needed
  ];

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">Talks</h1>
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            Here are some of the talks
          </p>
          {talks.map((talk, i) => {
            return (
              <TalkCard
                key={i}
                talkDetails={{
                  title: talk.title,
                  subtitle: talk.subtitle,
                  slides_url: talk.slides_url,
                  event_url: talk.event_url,
                  image: talk.image,
                  isDark,
                }}
              />
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
