import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import AboutNav from './AboutNav';
import Awards from './Awards'
import Accordion from '../Accordion/Accordion';
import Footer from '../Footer/Footer';

let backgroundImage = 'http://localhost:3000/images/davidPuerto.jpg';

const panels = [
  {
    icon: 'fa fa-briefcase',
    dates: '2017-Present',
    company: 'WebMD',
    officeLocation: 'in Seattle, WA',
    title: 'Senior User Experience Design Engineer',
    skills: [
      'HTML', 'CSS', 'JavaScript (React)', 'Prototyping'
    ],
    summary: 'Joined CONNECT platform team to identify pain points and rework their UI for adm' +
        'ins, physicians, clinicians, and patients. Converted Stylus to SCSS without intr' +
        'oducing breaking changes. Prototyped and worked alongside PMs and UX and Product' +
        ' teams to ensure design fidelity, responsiveness, and usability/accessibility be' +
        'fore implementation on all UI components, including the App Shell, navigation, c' +
        'ards, toast, modals, etc. Scoped the future of the product proposing a WYSIWYG e' +
        'ditor experience for the platform in lieu of a more archaic “service designer.” ',
    links: [
      {
        url: '',
        text: ''
      }
    ]
  }, {
    icon: 'fa fa-briefcase',
    dates: '2015-2016',
    company: 'Starbucks',
    officeLocation: 'in Seattle, WA',
    title: 'Senior Product Designer',
    skills: [
      'Product Design', 'Design Integration', 'UX Design', 'Prototyping'
    ],
    summary: 'Designed transaction history for the web including prototypes for design. Tracke' +
        'd legacy CSS bugs and resolved cross-browser IE9+ across all devices.  Removed d' +
        'ependency on Bootstrap (retained grid system for layout). Prototyped ordering fr' +
        'om the web using web technologies. Prototyped the future Starbucks web experienc' +
        'e in React+Redux+Radium. Delivered UX prototypes of natural feeling interactions' +
        ' and JS/CSS animations. Helped roll out a maintainable UI Pattern Library to be ' +
        'shared across engineering teams supporting multiple platforms in React+SCSS. Des' +
        'igned and developed Responsive Cards. Worked in distributed and cross-functional' +
        ' teams of remote and on-site developers. Acted as principal liaison between desi' +
        'gn and engineering during the rollout of Libra and the new Rewards program inclu' +
        'ding handing off high-fidelity web prototypes ready for implementation. Built th' +
        'e animated Star Gauge (pure CSS IE9+) that is present on the Starbucks.com Rewar' +
        'ds site when engineering resources were low to ensure the highest level of fit a' +
        'nd finish could be shared across native and mobile web experiences without addin' +
        'g another SVG/JS dependency to the legacy Starbucks.com. Wireframes and visual d' +
        'esign exploration with Sketch, OmniGraffle, and designed in the browser using Co' +
        'dePen for rapid prototyping and sharing assets with engineers.  Assets managed w' +
        'ith Zeplin.',
    links: [
      {
        url: '',
        text: ''
      }
    ]
  }, {
    icon: 'fa fa-briefcase',
    dates: '2014-2015',
    company: 'Facebook',
    officeLocation: 'in Seattle, WA',
    title: 'UI Designer',
    skills: [
      'Product Design', 'Visual Design', 'UX Research', 'Prototyping'
    ],
    summary: 'UX Research on the IDE experience, art direction, iconography, typography, style' +
        ' guide, and UI implementation landing commits in HTML/CSS/SVG for the open sourc' +
        'e projects `Lyric` and `Nuclide`. FBIDE was a well-known Facebook tool that was ' +
        'highly visible, impacting a vast number of Facebook engineers prior to 2017.',
    links: [
      {
        url: '',
        text: ''
      }
    ]
  }, {
    icon: 'fa fa-briefcase',
    dates: '2013-2013',
    company: 'SonoSite',
    officeLocation: 'in Seattle, WA',
    title: 'UX Prototyper',
    skills: [
      'UX Research', 'Prototyping in the browser'
    ],
    summary: 'Alongside industrial designers prototyped a HIPPA-compliant hand-held ultrasound' +
        ' device, akin to Star Trek’s tricorder using HTML/CSS3/JavaScript. UX Research a' +
        'nd A/B testing of a one-handed wheel user interface design tested on a tablet.',
    links: [
      {
        url: '',
        text: ''
      }
    ]
  }, {
    icon: 'fa fa-graduation-cap',
    dates: '2017-2017',
    company: 'CodeFellows',
    officeLocation: 'in Seattle, WA',
    title: 'JavaScript Certificate',
    skills: [''],
    summary: 'Met some cool people, networked, worked on the whiteboard, algorithms, and made ' +
        'some cool stuff with some people who I admire.',
    links: [
      {
        url: '',
        text: ''
      }
    ]
  }, {
    icon: 'fa fa-graduation-cap',
    dates: '2004-2007',
    company: 'College',
    officeLocation: '',
    title: 'Bachelor of Science',
    skills: [
      'Interactive Media Design', 'Focus on Flash ActionScript 2.0'
    ],
    summary: 'I earned my B.S. degree from the Art Institute of Atlanta ground campus & Online' +
        '. I graduated Best of Show and was awarded for my interactive media design portf' +
        'olio at portfolio review at Soldiers and Sailors Hall 12/2007 in Pittsburgh, PA.' +
        ' Selected works were used to recruit prosepctive highschool students.',
    links: [
      {
        url: '',
        text: ''
      }
    ]
  }
  // }, {   icon: 'fa fa-briefcase',   dates: '2012-2012',   company: 'Verizon
  // Wireless',   officeLocation: 'in Atlanta, GA',   title: 'HTML Developer',
  // skills: [     'HTML/CSS/JS', 'Presentation layer development', 'UX Design',
  // 'Prototyping'   ],   summary: 'Delivered the needs-based presentation layer
  // for an internal CRM from the ground' +       ' up alongside one other
  // engineer. Prototyped the tablet experience for account m' +       'anagement
  // and device management interfaces.VZW Engineering decided to reuse my H' +
  // 'TML / CSS and allowed me to lead the effort to create a responsive,living
  // patter' +       'n library. Single-handedly refactored client-side markup
  // from numerous silos thr' +       'oughout the organization including legacy
  // style sheets from internal and offshor' +       'e teams for Account
  // Management and Device Management. Removed dependency on Boot' +       'strap
  // and took CSS code bloat down from over 500 kb to under 50 kb gzipped.Hand ' +
  //       '- combed through every bit of HTML / JSTL and removed excess markup
  // reducing ove' +       'rall codebase by over 50 %.',   links: [     { url:
  // '',       text: ''     }   ] }, {   icon: 'fa fa-briefcase',   dates:
  // '2014-2015',   company: 'Sherwin Williams',   officeLocation: 'in Cleveland,
  // OH',   title: 'UX Designer',   skills: [     'UX Design', 'CSS', 'HTML',
  // 'jQuery', 'Design Integration'   ],   summary: 'Implemented a design language
  // based on OOCSS/SMACSS principles and removed the d' +       'ependency on
  // third-party framework lessening code bloat by over 50%. Created and' + '
  // maintained UI pattern libraries and owned HTML/CSS standards across
  // platforms. ' +       'Used SCSS to encourage expedited workflows and
  // prototyping between engineering a' +       'nd design as well as provide
  // cross-browser debugging.',   links: [     {       url: '',       text: '' } ]
  // }, {   icon: 'fa fa-briefcase',   dates: '2008-2010',   company:
  // 'Dealerskins',   officeLocation: 'in Nashville, TN',   title: 'Flash
  // Designer',   skills: [     'UX Design', 'CSS', 'HTML', 'jQuery', 'Design
  // Integration'   ],   summary: 'Delivered a full - Flash website every three
  // days serving as the presentation la' +       'yer over a custom CRM tool
  // built in Flex.Designed visual mockups for NADA compet' + 'ition.Produced
  // prototypes for future products.Redesigned the homepage and campai' + 'gned
  // for a move away from Flash back towards traditional web technologies.Played'
  // +       ' catcher on company kickball team.',   links: [     {       url:
  // '',       text: ''     }   ] }, {   icon: 'fa fa-briefcase',   dates:
  // '2004-2006',   company: 'The Center for Rural Development', officeLocation:
  // 'in Somerset, KY',   title: 'Web Designer', skills: ['Quintessential foot in
  // the door'],   summary: 'Worked under the supervision of a seasoned designer
  // supporting internal and exte' + 'rnal clients in the 42-county service area
  // that this federal non-profit organiza' + 'tion -- the brainchild of
  // Congressman Hal Rogers in Somerset, Kentucky. Our miss' +       'ion: Promote
  // the arts and technologies throughout Appalachia to expose people to' + ' the
  // impact they can make across distributed learning and remote work in technol'
  // +       'ogy, programming, and digital design. Federal non-profit and their
  // affiliates, i' +       'ncluding internal and external clients of a 42-county
  // service area in Southern a' +    'nd Eastern, Appalachian Kentucky through a
  // myriad of web and graphic design init' +       'iatives promoting the arts,
  // technology, entrepreneurship, leadership, youth deve' + 'lopment, personal
  // accountability, environmental responsibility, and small busine' +       'ss
  // development. Was able to establish a skateboarding park alongside baseball
  // an' +       'd soccer fields working with young athletes and community
  // leaders to provide a s' +       'afe haven for the skateboarders to avoid a
  // city ordinance banning skateboarding.',   links: [   {       url: '', text:
  // ''   }   ] }
];

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    let about = document.getElementById('about-dap');

    about.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  render() {
    return (
      <div id="about-dap" className="content flex">
        <div className="left-column">
          <div
            className="fixed-column"
            style={{
            backgroundImage: `url(${backgroundImage})`
          }}>
            <div className="bg-wrapper">
              <div className="bg bg-scroll"></div>
              <div className="overlay"></div>
              <div className="bg-title">
                <span>about me</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <section id="sec1" className="about line">
            <AboutNav/>
            <div className="container">
              <div className="section-title">
                <div className="sect-subtitle">
                  <span>About</span>
                </div>
                <h3>Who I am</h3>

                <h2>About me</h2>
                <div className="st-separator"></div>
              </div>
              <div className="section-body">
                <h3 className="text-title">UI Designer
                  <span>&nbsp;&amp;&nbsp;</span>
                  Developer From Seattle, WA USA</h3>
                <p>
                  With over a decade of browser-centric design and development experience, I've
                  built my career upon a love for meaningful, high-impact, interactive media
                  design. Let's be transparent here: I'm a Flash-refugee who was doing
                  responsive-design and UX before the words were even coined. My sedulous approach
                  to creating refined, yet innovative design systems involves visually
                  synthesizing complex workflows into extensible pattern libraries expressing the
                  underlying design language. What started out as a mastery of traditional screen
                  design software became an obsession with the modern web development ecosystem. I
                  pride myself as a seasoned, hands-on UX leader that delivers the highest-level
                  of fit and finish to the products I love; &nbsp;
                  <em>from brainchild to launch</em>.
                </p>
                <h3 className="text-title">Designer Statement
                  <span>&nbsp;Aside</span>
                </h3>
                <p>
                  I like hackathons, PWAs, SPAs, the movie Hackers, well-designed backpacking
                  gear, getting shreddy in the PNW and abroad, The Lost Boys, "the Bristol sound,"
                  jumping out of airplanes, reconnecting with lost souls, filling my passport with
                  stamps, board sports, different languages, making street art, praying in
                  temples, falling in love with the&nbsp;
                  <u>process</u>, running every city in Brooks & Mizunos, Sea to Summit, Mountain
                  Hardwear, Salomon, Japan, Flow bindings, RIDE Kink, BOA boots, mycology, working
                  on my abs, the internet, pushing myself phyically, mountains, surf, good design,
                  culinary and craft anything, battle-tested friendships, camaraderie, fighting
                  the powers that be for what I believe in, people who suck at karaoke but sing it
                  anyways, urban farming, muscle cars, onsens, German cars, Italian bikes,
                  motorcycles, motorcyles, motorcyles, that QuatD ExBox Exhaust on the S2R Ducati,
                  las Caleras, cookies, high dives, cliff jumping, secret beaches, calderas, being
                  naked in the rain with black tattoos, banya5, float tanks, SBP, road trips, thru
                  hikes, awkard moments, wake up calls, morning people, happy people, Church
                  people, fire lookouts, the PNT, laughing myself into tears, brunch, and being
                  surprised.
                </p>
                <Link to="/folio" className="btn hide-icon">
                  <i className="fa fa-angle-right"></i>
                  <span>View My Work</span>
                </Link>
              </div>
            </div>
          </section>
          <div className="section-separator"></div>
          <section id="sec2">
            <div className="container">
              <div className="section-title">
                <div className="sect-subtitle">
                  <span>Resume</span>
                </div>
                <h3>What I've been doing
                </h3>
                <h2>Partial Resume
                </h2>
                <div className="st-separator"></div>
              </div>
              <div className="section-body">
                <Accordion panels={panels}/>
              </div>
            </div>
          </section>
          <div className="section-separator"></div>
          <section id="sec3">
            <div className="section-body">
              <Awards/>
            </div>
          </section>
          <Footer className="line"/>

        </div>
      </div>
    )
  }
}

export default About;