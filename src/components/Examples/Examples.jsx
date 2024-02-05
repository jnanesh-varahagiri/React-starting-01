import { CORE_CONCEPTS, EXAMPLES } from "../../data";
import TabButton from '../TabButton/TabButton'
import Section from "../Section/Section";
import { useState } from "react";

function Examples() {
  let topic = "Please Select a topic";
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
  }
  if (selectedTopic) {
    topic = (
      <>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </>
    );
  }
  return (
    <Section title="Examples" id="examples">
     
      <menu>
        {/* <TabButton>Components</TabButton> */}
        {CORE_CONCEPTS.map((item, index) => {
          return (
            <TabButton
              key={index}
              isSelected={selectedTopic === item.title ? true : false}
              onSelect={handleSelect}
            >
              {item.title}
            </TabButton>
          );
        })}

        {/* <TabButton isSelected={selectedTopic==='jsx' ? true : false} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props' ? true : false} onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state' ? true : false} onSelect={()=>handleSelect('state')}>State</TabButton> */}
      </menu>
      <div id="tab-content">{topic}</div>
    </Section>
  );
}

export default Examples;
