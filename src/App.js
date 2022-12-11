import { useState } from "react";
import { Container } from "react-bootstrap";
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
function App() {
  const [lang, setLang] = useState(["JavaScritp, Python, PHP, TypeScript"])
  return (
   <DndContext
    collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}
   >
    <Container className="p-3" style={{"width": "50%"}} align="center">
      <h3>Best lang prog</h3>
      <SortableContext>
        items={lang}
        strategy={verticalListSortingStrategy}
      </SortableContext>
    </Container>
  </DndContext>
  );

  function handleDragEnd (event) {
    console.log("drag and called");
  }
}

export default App;
