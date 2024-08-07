import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examasdfples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick("state")}>State</TabButton>
          </menu>
          {!selectedTopic ? <p>Please select a topic</p> : null}
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
