import ComoFunciona from "../components/ComoFunciona";
import Experiencias from "../components/Experiencias";
import Hero from "../components/Hero";
import Patrimonio from "../components/Patrimonio";
import Proyecto from "../components/Proyecto";

export default function Inicio() {
  return (
    <>
      <Hero />
      <Proyecto />
      <Experiencias />
      <ComoFunciona />
      <Patrimonio />
    </>
  );
}