import styled from "styled-components"
import Hero from "./components/Hero"
import About from "./components/About";
import Works from "./components/Works"
import Contact from "./components/Contact"
import Skills from "./components/Skills";

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpg");
  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
    </Container>
  )
}

export default App