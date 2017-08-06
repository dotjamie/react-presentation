// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  CodePane,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  Text,
  Appear,
  Layout,
  Fill,
  Fit,
  S,
} from "spectacle";

import Interactive from "../assets/interactive";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  leslieKnope: require("../assets/giphy.gif"),
  reactLogo: require("../assets/react-logo.png"),
  twitterReact: require("../assets/twitter-react.png"),
  wwcLogo: require("../assets/wwc-logo.jpg"),
  virtualdom: require("../assets/virtual-dom.png"),
};

preloader(images);

const theme = createTheme({
  dark: "black",
  reactBlue: "#00d8ff",
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#1c81b1",
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary" notes="<ul>
        <li>Mission</li>
        <li>SV chapter</li>
        <li>React series</li>
        <li>Women helping women</li></ul>">
          <Image
            src={images.wwcLogo}
          >
          </Image>
        </Slide>

        <Slide transition={["zoom"]} bgColor="dark" notes="<ul>
        <li>emoji - I won’t lie, that’s a bit how I felt when I took the leap to modern web development.</li>
        <li>How many of are currently using angular or react or another modern technology?</li>
        <li>How many of you are totally new to them?</li>
        <li>really want to help you feel confident about learning React if it’s a technology you want to take on.</li>
        <li>really want to help you feel confident about learning React if it’s a technology you want to take on.</li>
        <li>information overload can be intimidating </li>
        <li>next trans: So to help ease the overload,</li>
        </ul>">
          <Image
            src={images.reactLogo}
          >
          </Image>
          <Text margin="10px 0 0" textColor="reactBlue" size={3} fit bold>
             How to get started
          </Text>
          <Text margin="10px 0 0" textColor="reactBlue" size={6}>
             (without getting &#x1f629;)
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" align={'flex-start'} notes="<ul>
        <li>My initial feeling of react</li>
        <li>Fun fact: built presesntation w/React</li>
        <li>Will put on github, will share pdv version and give list of resources</li>
        <li>Let's jump in</li></ul>">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Why I'm here
          </Heading>
          <Appear fid={1}>
            <Text margin="50px 0" size={6}>
               1) To help you feel confident about learning
            </Text>
          </Appear>
          <Appear fid={2}>
            <Text margin="50px 0 " size={6}>
               2) To share with you the things I wish someone would've told me about React
            </Text>
          </Appear>
          <Appear fid={3}>
            <Text margin="50px 0 " size={6}>
               3) To geek out on different different front end technologies together
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Roadmap
          </Heading>
          <List>
            <ListItem>Break down the React hype</ListItem>
            <ListItem>Common configurations/tools</ListItem>
            <ListItem>Keywords & key concepts</ListItem>
            <ListItem>Demo</ListItem>
            <ListItem>Pros & cons</ListItem>
            <ListItem>Tips for not getting overwhelmed</ListItem>
            <ListItem>Resources</ListItem>
            <ListItem>React/Angular 1 side-by-side</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes="<ul><li>What is React in a nutshell?</li>
        <li>It’s not a complete framework like Angular is, it’s a library. </li>
        <li>You’ll often hear people say React is the “V” or view layer of MVC architecture, where as Angular is essentially the M V & C</li>
        <li>Next trans: Why do people care?</li></ul>">
          <Heading size={3} textColor="secondary">What is React?</Heading>
          <Appear fid={1}>
            <Text size={5} textColor="secondary" margin="40px 0">It’s a library for creating user interfaces. It renders the UI and responds to events. </Text>
          </Appear>
          <Appear fid={2}>
            <Text size={5} textColor="secondary" margin="40px 0">Library: V (view layer) === React </Text>
          </Appear>
          <Appear fid={3}>
            <Text size={5} textColor="secondary" margin="40px 0">Framework: MVC == Angular</Text>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes="<ul>
        <li>Traction largely for performance and scalability benefits. </li>
        <li>One reason for speed, vitrual DOM</li>
        <li>Next trans: First major buzzword of the night</li></ul>">
          <Heading size={3} textColor="secondary">What is the main value?</Heading>
          <Appear fid={1}>
            <Text size={5} textColor="secondary" margin="40px 0">It provides tools to write code that is resusable, composable, unit testable</Text>
          </Appear>
          <Appear fid={2}>
            <Text size={5} textColor="secondary" margin="40px 0">Well supported and documented</Text>
          </Appear>
          <Appear fid={3}>
            <Text size={5} textColor="secondary" margin="40px 0">...And it’s FAST!</Text>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes="<ul>
        <li>Sounds a bit cray at first</li>
        <li>a copy of the DOM that helps the DOM be more efficient at it’s job</li>
        <li>Analogy</li>
        <li>If you remember nothing else, the regular DOM is slow and so the Virtual DOM acts a filter to compute minimal DOM operations</li>
        <li>Next trans: Now that you have a general idea of what React is, let’s dig in, but before we do.. </li></ul>">
          <Heading size={3} textColor="secondary">Virtual DOM</Heading>
          <Appear fid={1}>
            <Image
              src={images.virtualdom}
            >
            </Image>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes="<ul>
        <li>Here's a tweet from a meme account that pokes fun at the idea</li>
        <li>Next trans: I show you this now because...</li>
        </ul>">
          <Heading size={5} textColor="secondary">Be prepared to challenge what you thought was best practice</Heading>
          <Appear fid={1}>
            <Image width={500}
              src={images.twitterReact}
            >
            </Image>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes="<ul>
        <li> JSX is a preprocessor step that adds XML syntax to JavaScript</li>
        <li> JSX technically not required to use React</li>
        <li> JSX technically not required to use React</li>
        <li> JSX Main purpose</li>
        <li>JSX husband joke</li>
        <li>JSX Advice: Make curly braces your friend</li>
        <li>es6 great to learn </li>
        <li>es6 advice: tutorial, methods and syntax</li>
        <li>Next bullts are specific to react app config</li>
        <li>Babel and browsers </li>
        <li>Webpack tool that everybody loves to hate and hates to love</li>
        <li>Webpack config </li>
        <li>Webpack purpose: bundling </li>
        <li>Redux advice: don’t use it if you don’t need it: </li>
        <li>Redux Feather and updated docs - go feather!</li>
        </ul>">
          <Heading size={4} fit lineHeight={1} textColor="secondary">
            Keywords - know before you go
          </Heading>
          <List>
            <Appear fid={1}>
              <ListItem margin="20px 0">JSX - syntax extension to JavaScript</ListItem>
            </Appear>
            <Appear fid={2}>
              <ListItem margin="20px 0">es6 - next JavaScript version</ListItem>
            </Appear>
            <Appear fid={3}>
              <ListItem margin="20px 0">Babel - the tool that transforms your es6 code to es5 so browsers can read it</ListItem>
            </Appear>
            <Appear fid={4}>
              <ListItem margin="20px 0">Webpack - a module bundler </ListItem>
            </Appear>
            {/*<Appear fid={}>
              <ListItem margin="20px 0">The DOM - you've heard it, you use it, but do you really know it?</ListItem>
            </Appear>*/}
            <Appear fid={5}>
              <ListItem margin="20px 0">Redux - state manager</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>single responsibility principle</li></ul>">
          <Heading size={1} fit textColor="secondary" textFont="secondary">
            Components
          </Heading>
          <Text size={4} margin="10px 0 0" textColor="quartenary">
             Everything is a component
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes="<ul>
        <li>different ways to define a React Component</li>
        <li>Will show ex in next slide</li>
        <li>Mounting - where a component element is in relation to the dom tree</li>
        <li>Lifecycle  - built in methods, specific order, we don’t have time to go through</li>
        <li>State - good to handle in parent, lift up state, pass as props</li>
        <li>Props - heard anyone say they don't make the rules...</li>
        <li>Props - receive data and then use it, often for presentational purposes</li>
        <li>Handlers - just as they sound, execute events and tell component to update state</li>
        </ul>">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Keywords - React components
          </Heading>
          <List>
            <Appear fid={1}>
              <ListItem>Class Component - stateful </ListItem>
            </Appear>
            <Appear fid={2}>
              <ListItem>Functional Component (stateless) - props</ListItem>
            </Appear>
            <Appear fid={3}>
              <ListItem>Mounting & Component lifecycle</ListItem>
            </Appear>
            <Appear fid={4}>
              <ListItem>State aka mutable data</ListItem>
            </Appear>
            <Appear fid={5}>
              <ListItem>Props aka immutable (read-only) data</ListItem>
            </Appear>
            <Appear fid={6}>
              <ListItem>Handlers (updates to state through events)</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>Syntax difference and deprecation</li><li>Filter results when researching</li><li>Render function is only requirement</li></ul>">
          <Heading size={2} fit textColor="secondary" textFont="secondary">
            Class Components
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/react-class-basic.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>Babel is the tool that makes the transformations into what the browsers can read and maybe what you are used to seeing</li><li>and that</li></ul>">
          <Heading size={2} fit textColor="secondary" textFont="secondary">
            Functional Components
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/arrow-functions.example")}
            margin="20px auto"
          />
        </Slide>


        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" textFont="secondary">
            React in action
          </Heading>
          <iframe width="100%" height="500" src="//jsfiddle.net/dotjamie/txfqvf7w/1/embedded/js,html,css,result/dark/" allowFullScreen="allowfullscreen" frameBorder="0"></iframe>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" >
          <Heading size={3} textColor="primary" caps>React</Heading>

          <Layout>
            <Fill>
              <Heading size={5} caps textColor="secondary" bgColor="white" padding={10} margin={5}>
                Pros
              </Heading>
              <List bgColor="white" padding={10} margin={5}>
                <ListItem textSize="40px">Fast!</ListItem>
                <ListItem textSize="40px">Auto rerendering</ListItem>
                <ListItem textSize="40px">Components</ListItem>
                <ListItem textSize="40px">JSX - easy to starting writing</ListItem>
              </List>
            </Fill>
            <Fill>
              <Heading size={5} caps textColor="secondary" bgColor="white" padding={10} margin={5}>
                Cons
              </Heading>
              <List bgColor="white" padding={10} margin={5}>
                <ListItem textSize="40px">JSX - you may not love it</ListItem>
                <ListItem textSize="40px">Build tools are necessary (or strongly recommended)</ListItem>
                <ListItem textSize="40px">Community conventions are still developing</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit textColor="secondary">Tips for not getting overwhelmed
          </Heading>
          <Appear fid={1}>
            <Text size={3} margin="30px 0">Don't let the syntax scare you</Text>
          </Appear>
          <Appear fid={2}>
            <Text size={3} margin="30px 0">Filter search results within the last year</Text>
          </Appear>
          <Appear fid={3}>
            <Text size={3} margin="30px 0">*Remember: EVERYTHING is a component</Text>
          </Appear>
          <Appear fid={4}>
          <Text size={3} margin="30px 0">**Remember: it's just JavaScript</Text>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" padding={10} margin={5}>
                Angular 1
              </Heading>
              <List bgColor="white" padding={10} margin={5}>
                <ListItem textSize="36px">Framework</ListItem>
                <ListItem textSize="36px">Templates</ListItem>
                <ListItem textSize="36px">2-way data binding</ListItem>
                <ListItem textSize="36px">Easier to get up and running</ListItem>
                <ListItem textSize="36px">Steeper learning curve post-setup</ListItem>
              </List>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" padding={10} margin={5}>
                React
              </Heading>
              <List bgColor="white" padding={10} margin={5}>
                <ListItem textSize="36px">UI library</ListItem>
                <ListItem textSize="36px">Components</ListItem>
                <ListItem textSize="36px">1-way data binding (faster)</ListItem>
                <ListItem textSize="36px">Initial set up takes time</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>React ecosystem evolving</li>
        <li>many modern technolgies</li>
        <li>Getting started with the one that’s calling your name is truly the key</li>
        <li>Dabble</li>
        <li>Knowing one will make you a more sought after web developer. </li>
        <li>If you know one it’s a universal signal that you can learn others  </li>
        <li>I hope this presentation has helped you feel a little more confident to get after it. </li>
        </ul>">
          <Layout>
            <Fit>
              <Heading size={4} textColor="secondary" textFont="secondary">
                React
              </Heading>
              <CodePane
                lang="javascript"
                source={require("raw-loader!../assets/react-click.example")}
              />
            </Fit>
            <Fit>
              <Heading size={4} textColor="secondary" textFont="secondary">
                Angular 1
              </Heading>
              <CodePane
                lang="javascript"
                source={require("raw-loader!../assets/angular-click.example")}
              />
            </Fit>
          </Layout>

        </Slide>

        <Slide>
          <Image
            src={images.leslieKnope}
            height={500}
          >
          </Image>
          <Text size={3}>View presentation on GitHub: @dotjamie</Text>
          <Text size={3}>Email: women.javascript@gmail.com</Text>

        </Slide>

      </Deck>
    );
  }
}
