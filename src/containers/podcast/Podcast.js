// import React, {useContext} from "react";
// import "./Podcast.scss";
// import {podcastSection} from "../../portfolio";
// import {Fade} from "react-reveal";
// import StyleContext from "../../contexts/StyleContext";

// export default function Podcast() {
//   const {isDark} = useContext(StyleContext);

//   if (!podcastSection)
//     console.error("podcastSection object for Podcast section is missing");

//   if (!podcastSection.display) {
//     return null;
//   }
//   return (
//     <Fade bottom duration={1000} distance="20px">
//       <div className="main">
//         <div className="podcast-header">
//           <h1 className="podcast-header-title">{podcastSection.title}</h1>
//           <p
//             className={
//               isDark
//                 ? "dark-mode podcast-header-subtitle"
//                 : "subTitle podcast-header-subtitle"
//             }
//           >
//             {podcastSection.subtitle}
//           </p>
//         </div>
//         <div className="podcast-main-div">
//           {podcastSection.podcast.map((podcastLink, i) => {
//             if (!podcastLink) {
//               console.log(
//                 `Podcast link for ${podcastSection.title} is missing`
//               );
//             }
//             return (
//               <div key={i}>
//                 <iframe
//                   className="podcast"
//                   src={podcastLink}
//                   frameBorder="0"
//                   scrolling="no"
//                   title="Podcast"
//                 ></iframe>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </Fade>
//   );
// }

import React, { useContext } from "react";
import "./Podcast.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast() {
  const { isDark } = useContext(StyleContext);

  // Replace podcastSection logic with static data
  const podcastData = {
    title: "My Podcast",
    subtitle: "Check out my latest podcast episodes",
    display: true,  // Show the section
    podcast: [
      "https://www.podcastlink1.com",
      "https://www.podcastlink2.com",
      // Add more podcast links here
    ],
  };

  if (!podcastData.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastData.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastData.subtitle}
          </p>
        </div>
        <div className="podcast-main-div">
          {podcastData.podcast.map((podcastLink, i) => {
            if (!podcastLink) {
              console.log(`Podcast link for ${podcastData.title} is missing`);
            }
            return (
              <div key={i}>
                <iframe
                  className="podcast"
                  src={podcastLink}
                  frameBorder="0"
                  scrolling="no"
                  title="Podcast"
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
