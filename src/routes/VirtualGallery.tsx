import Sketch from "react-p5";
import p5Types from "p5";

export default function VirtualGallery(): JSX.Element {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth - 25, p5.windowHeight - 130, p5.WEBGL);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.orbitControl(4, 4);
    p5.directionalLight(p5.color(150, 100, 0, 0.05), p5.createVector(0, -1, 0));
    p5.pointLight(p5.color(150, 100, 0), 0, 0, 0);
    p5.ambientLight(180, 150, 150);

    p5.noStroke();

    p5.sphere(30);
  };

  return (
    <>
      <p>Use scroll to zoom</p>
      <Sketch setup={setup} draw={draw} />
    </>
  );
}
