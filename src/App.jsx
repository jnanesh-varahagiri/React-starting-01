
import { CORE_CONCEPTS } from './data'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton/TabButton'
import { useState } from 'react'
function App() {
  const [selectedTopic , setSelectedTopic]= useState('Please Click A Button')
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)

  }
  return (
    <div>
     <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <TabButton>Components</TabButton> */}
            <TabButton onSelect={()=>handleSelect('Component')}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect('Jsx')}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('State')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
