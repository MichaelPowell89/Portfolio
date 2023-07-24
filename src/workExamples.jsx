import React from 'react';
import xbox from "./public/images/Platform/Xbox.png"
import playstation from "./public/images/Platform/Playstation.png"
import steam from "./public/images/Platform/Steam.png"
import nintendo from "./public/images/Platform/Nintendo.png"
import android from "./public/images/Platform/Android.png"
import apple from "./public/images/Platform/appleWhite.png"
import windows from "./public/images/Platform/windowsWhite.png"
import website from "./public/images/Platform/websiteWhite.png"

const workExamples = [
    {
      id: 1,
      title: "Rugby Challenge 4",
      ReleaseYear: "2020",
      link: "https://www.rugbychallenge4.com",
      position: <h5 className="positionDescription">Quality Assurance & Game Design</h5>,
      summary: <p className="summary">Rugby Challenge 4 is a AAA sports title based on Rugby Union. Developed in Unreal Engine</p>,
      description: <ul>
        <li>Providing extensive play testing and in depth reviews through later stages of production</li>
        <li>Research, discussion and documention for gameplay improvements for updates based on consumer feedback and competitive sports titles</li>
        <li>Discussion, collaboration and mediation with stakeholders regarding feedback, development and implementation of new gameplay features</li>
      </ul>,
      // Xbox
      platform1: <a href="https://www.xbox.com/en-au/games/store/rugby-challenge-4/9p3qwt95fmhq" className="platformLogo"><img width='50px' height='50px' src={xbox} alt=""/></a>,
      //Playstation
      platform2: <a href="https://store.playstation.com/en-au/product/EP4116-CUSA16106_00-RUCHALLENGE4SIEE/" className="platformLogo"><img width='60px' height='50px' src={playstation} alt=""/></a>,
      //Steam
      platform3: <a href="https://store.steampowered.com/app/543960/Rugby_Challenge_4/" className="platformLogo"><img width='50px' height='50px' src={steam} alt=""/></a>,
      //Switch
      platform4: <a href="https://www.nintendo.com/store/products/rugby-challenge-4-switch/" className="platformLogo"><img width='50px' height='50px' src={nintendo} alt=""/> </a>
    },
    {
      id: 2,
      title: "AFL Evolution 2",
      ReleaseYear: "2020",
      link: "https://www.aflevolution2.com.au/",
      position: <h5 className="positionDescription">Quality Assurance & Game Design</h5>,
      summary: <p className="summary">AFL Evolution 2 is a AAA sports title based on Australian Rules football. Developed in Unreal Engine</p>,
      description: <ul>
        <li>Research, discussion, documention and community interaction for scoping and implementing gameplay improvements for DLC and future titles</li>
        <li>Regular meetings and collaboration with stakeholders which consisted of daily cooperative online testing</li>
        <li>Documentation and design of player attributes and statistics for depicting gameplay behaviour consistent with real world players</li>
        <li>Assisting with marketing and advertisements with capturing gameplay images and footage using Unreal Engine</li>
      </ul>,// Xbox
      platform1: <a href="https://www.xbox.com/en-au/games/store/afl-evolution-2/9nsx507n0s3x" className="platformLogo"><img width='50px' height='50px' src={xbox} alt=""/></a>,
      //Playstation
      platform2: <a href="https://store.playstation.com/en-au/product/EP4116-CUSA14564_00-AFLEVOLUTION2000" className="platformLogo"><img width='60px' height='50px' src={playstation} alt=""/></a>,
      //Steam
      platform3: <a href="https://www.xbox.com/en-au/games/store/rugby-challenge-4/9p3qwt95fmhq" className="platformLogo"><img width='50px' height='50px' src={steam} alt=""/></a>,
      //Switch
      platform4: <a href="https://ec.nintendo.com/AU/en/titles/70010000016662" className="platformLogo"><img width='50px' height='50px' src={nintendo} alt=""/></a> 
    },
    {
      id: 3,
      title: "Ty The Tasmanian Tiger 2",
      ReleaseYear: "2020",
      link: "",
      position: <h5 className="positionDescription">Quality Assurance</h5>,
      summary: <p className="summary">Ty The Tasmanian Tiger 2 was a remake of the original game released in 2004</p>,
      description: <ul>
        <li>Extensive testing through all stages of development</li>
        <li>Daily scrum meetings with stakeholders</li>
      </ul>,
      // Xbox
      platform1: <a href="https://www.xbox.com/en-au/games/store/ty-the-tasmanian-tiger-2-bush-rescue-hd/9nm1h95grgk7" className="platformLogo"><img width='50px' height='50px' src={xbox} alt=""/></a>,
      //Playstation
      platform2: <a href="https://store.playstation.com/en-au/product/EP5633-CUSA26866_00-7582797769000003" className="platformLogo"><img width='60px' height='50px' src={playstation} alt=""/></a>,
      //Switch
      platform4: <a href="https://www.nintendo.com.au/games/nintendo-switch/ty-the-tasmanian-tiger-2-bush-rescue-hd" className="platformLogo"><img width='50px' height='50px' src={nintendo} alt=""/></a>
    },
    {
      id: 4,
      title: "Catapult King",
      ReleaseYear: "2012",
      link: "http://catapultking.com/",
      position: <h5 className="positionDescription">Quality Assurance & Level Design</h5>,
      summary: <p className="summary">Catapult King is a 3D puzzle game for mobile devices. Originally released in 2012 before being updated in Unity and re-released in 2020</p>,
      description: <ul>
        <li> Level design, construction and testing in Unity</li>
        <li> Extensive playtesting through all stages of development, started in 2011 and returned to collaborate again in 2020</li>
        <li> Discussion and documentation for feedback regarding gameplay, player satisfaction and tone</li>
      </ul>,
      platform1: <a href="https://play.google.com/store/apps/details?id=com.chillingo.catapultkingfree.android.row" className="platformLogo"><img width='45px' height='55px' src={android} alt=""/></a>,
      platform2: <a href="https://apps.apple.com/us/app/id497936366" className="platformLogo"><img width='50px' height='50px' src={apple} alt=""/></a>,
    },
    {
      id: 5,
      title: "OGI",
      ReleaseYear: "2011",
      Link: "",
      position: <h5 className="positionDescription">Design</h5>,
      summary: <p className="summary">OGI is a 3D puzzle game for mobile devices originally released in 2012 but since removed. Developed in Unity</p>,
      description: <ul>
        <li>Design and documentation from original concept through to finished product</li>
        <li>Level design and extensive playtesting to estimate and balance gameplay difficulty with player enjoyment</li>
        <li>Assisted with community playtesting and displaying game at public exhibition</li>
      </ul>
    },
    {
      id: 6,
      title: "AFL Evolution 3 (Pitch)",
      ReleaseYear: "N/A",
      Link: "",
      position: <h5 className="positionDescription">Design</h5>,
      summary: <p className="summary">Sequel to AFL Evolution 2, a AAA sports title based on Australian Rules Football.</p>,
      description: <ul>
        <li>Initial design, documentation and scoping for sequel title to AFL Evolution 2</li>
        <li>Early UI concepts for improving design to compete with modern sports titles</li>
        <li>Analyze and review real-world player behaviour and potential gameplay implementations to make game more authentic</li>
        <li>Gather feedback and reviews from consumers to present valid concepts to shareholder regarding improving gameplay and potential sales</li>
      </ul>
    },
    {
      id: 7,
      title: "Slime Time (Game Jam)",
      ReleaseYear: "2021",
      Link: "https://itch.io/jam/gmtk-2021/rate/1082073",
      position: <h5 className="positionDescription">Design</h5>,
      summary: <p className="summary">Slime time is a puzzle game developed by 4 people over a weekend for a Game Jam with the concept being, "Together"</p>,
      description: <ul>
        <li>Collaboration, design and documentation</li>
        <li>UI, Level and puzzle design within Unity</li>
      </ul>,
      platform1: <div className="platformLogo"><img width='50px' height='50px' src={windows} alt=""/></div>
    },
    {
      id: 8,
      title: "Simone Sullivan Celebrant",
      ReleaseYear: "2020",
      Link: "https://simonesullivancelebrant.com/",
      position: <h5 className="positionDescription">Web Developer</h5>,
      description: <ul>
        <li>Created a website from start to finish using HTML, CSS and JavaScript and released using BlueHost</li>
        <li>Maintain website for regular servicing and updates</li>
      </ul>,
      platform1: <div className="platformLogo"><img width='50px' height='50px' src={website} alt=""/></div>,
      coverImage: <img src="./images/Games/Web/Celebrant.png"/>
    },
    {
      id: 9,
      title: "Rafiki Yangu",
      ReleaseYear: "2022",
      Link: "https://www.rafikiyangu.com.au/",
      position: <h5 className="positionDescription">Web Developer</h5>,
      description: <ul>
        <li>Created a website from start to finish using Squarespace with additional CSS and javascript implementations</li>
        <li>Maintain website as business continues to grow. Regular sanity testing for updates to policies.</li>
      </ul>,
      platform1: <div className="platformLogo"><img width='50px' height='50px' src={website} alt=""/></div>,
      coverImage: <img src="./images/Games/Web/RafikiYangu.png"/>
    },
    {
      id: 10,
      title: "Centr",
      ReleaseYear: "2023",
      Link: "https://www.centr.com/",
      position: <h5 className="positionDescription">QA Engineer</h5>,
      description: <ul>
        <li>Performed scheduled automation tests using Github for CI/CD integration.</li>
        <li>Regurarly assisted in resolving issues and completing web tasks using React and NextJS.</li>
      </ul>,
      platform1: <div className="platformLogo"><img width='50px' height='50px' src={website} alt=""/></div>,
      coverImage: <img src="./images/Games/Web/Centr.png" alt="Cover Image" />
    }
  ];
  
  export default workExamples;
  