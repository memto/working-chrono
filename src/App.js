import { Chrono } from "react-chrono";

import './App.css';
import working_items from "./working_items";

function App() {
  return (
    <div className="App">
      <div className='WorkingChrono'>
        <Chrono
          items={working_items}
          //== OUTLINE
          // mode="VERTICAL"
          mode="VERTICAL_ALTERNATING"
          // scrollable={{ scrollbar: false }}
          timelinePointShape="diamond"
          flipLayout="true"
          //== TOOLBAR
          // disableToolbar="true"
          toolbarPosition="top"
          enableDarkToggle="true"
          enableLayoutSwitch="true"
          enableQuickJump="true"
          //== CARD
          // cardHeight={600}
          cardWidth={500}
          // contentDetailsHeight={100}
          fontSizes={{
            title: "1rem",
          }}
          mediaHeight={300}
          mediaSettings={{ align: "right", fit: "cover" }}
        />
      </div>
    </div>
  );
}

export default App;
