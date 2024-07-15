import { Chrono } from "react-chrono";

import './Base.css';
import './Type.css';
import './App.css';

import Header from "./Header";
import Footer from "./Footer";
import working_items from "./working_items";

function App() {
  return (
    <div className="container">
      <Header />

      <div className='main-content'>
        <Chrono
          items={working_items}
          //== OUTLINE
          // mode="VERTICAL"
          mode="VERTICAL_ALTERNATING"
          // scrollable={{ scrollbar: false }}
          timelinePointShape="diamond"
          flipLayout="true"
          //== TOOLBAR
          disableToolbar="true"
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

      <Footer />
    </div>
  );
}

export default App;
