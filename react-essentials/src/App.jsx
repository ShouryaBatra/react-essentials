import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx'


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts concept = {CORE_CONCEPTS[0]}/>
          <CoreConcepts concept = {CORE_CONCEPTS[0]}/>
          <CoreConcepts concept = {CORE_CONCEPTS[0]}/>
          <CoreConcepts concept = {CORE_CONCEPTS[0]}/>
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;