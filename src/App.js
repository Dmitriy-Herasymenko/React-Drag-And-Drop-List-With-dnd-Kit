import { useState } from "react";
import Container from "react-bootstrap/Container";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  const [lang, setLang] = useState([
    "JavaScript",
    "Python",
    "PHP",
    "TypeScript",
  ]);

  const handleDragEnd = event => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setLang( items => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log("arraySort", arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Container className="p-3" style={{ width: "50%" }} align="center">
        <h3>The best programming languages!</h3>
        <SortableContext items={lang} strategy={verticalListSortingStrategy}>
          {lang.map((language) => (
            <SortableItem key={language} id={language} />
          ))}
        </SortableContext>
      </Container>
    </DndContext>
  );
};
