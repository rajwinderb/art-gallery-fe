import "../styles/VirtualGallery.css";
import Sketch from "react-p5";
import p5Types from "p5";
import {
  numberGenerateCycler,
  stringGenerateCycler,
} from "../utils/functions/generators";
import { IUserArt, IWallInfo, ISingleWallImgs } from "../utils/Interfaces";
import { API_BASE } from "../utils/APIFragments";
import axios from "axios";

let myCamera: p5Types.Camera;
const imgScale = 0.2;
const wallDistance = 350;
const singleWallDimensions = {
  width: 700,
  height: 250,
  depth: 10,
};
const wallImgs: ISingleWallImgs[] = [
  {
    middle: undefined,
    right: undefined,
    left: undefined,
  },
  {
    middle: undefined,
    right: undefined,
    left: undefined,
  },
  {
    middle: undefined,
    right: undefined,
    left: undefined,
  },
  {
    middle: undefined,
    right: undefined,
    left: undefined,
  },
];
const imgDefaultDimensions = 100;
const wallInfo: IWallInfo[] = [
  {
    id: 0,
    translate: {
      x: wallDistance,
      y: -singleWallDimensions.height / 2,
      z: 0,
    },
    colour: "blue",
    rotateY: Math.PI / 2,
  },
  {
    id: 1,
    translate: {
      x: 0,
      y: -singleWallDimensions.height / 2,
      z: wallDistance,
    },
    colour: "red",
    rotateY: 0,
  },
  {
    id: 2,
    translate: {
      x: -wallDistance,
      y: -singleWallDimensions.height / 2,
      z: 0,
    },
    colour: "black",
    rotateY: -Math.PI / 2,
  },
  {
    id: 3,
    translate: {
      x: 0,
      y: -singleWallDimensions.height / 2,
      z: -wallDistance,
    },
    colour: "green",
    rotateY: 0,
  },
];
const nextImagePlacement = stringGenerateCycler(["middle", "right", "left"]);
const nextWallId = numberGenerateCycler([0, 1, 2, 3]);

export default function VirtualGallery(): JSX.Element {
  // const [userGallery, setUserGallery] = useState<IUserArt[]>([]);
  async function preload(p5: p5Types) {
    const userId = localStorage.getItem("savedUserId");
    let userGallery: IUserArt[] = [];
    if (userId !== null) {
      await axios
        .get(`${API_BASE}/userart/${userId}`)
        .then((response) => {
          userGallery = response.data.artworks;
          console.log(response.data.artworks);
        })
        .catch((error) => console.log(error));
    }
    let wallId: number = nextWallId();
    let imagePlacement = nextImagePlacement();
    for (const artwork of userGallery) {
      wallImgs[wallId][imagePlacement] = p5.loadImage(
        `https://rb-art-gallery-be.herokuapp.com/getimage/${artwork.id}.jpg`
      );
      if (imagePlacement === "left") {
        wallId = nextWallId();
      }
      imagePlacement = nextImagePlacement();
    }
  }

  function setup(p5: p5Types, canvasParentRef: Element) {
    p5.createCanvas(p5.windowWidth - 5, p5.windowHeight - 205, p5.WEBGL);
    p5.noStroke();

    myCamera = p5.createCamera();
    myCamera.setPosition(0, -125, 0);
    myCamera.lookAt(250, -125, 0);
  }

  function draw(p5: p5Types) {
    p5.background(250);

    p5.directionalLight(
      p5.color(252, 252, 247),
      p5.createVector(-0.8, -0.5, -0.2)
    );
    p5.directionalLight(p5.color(252, 252, 247), p5.createVector(0, 0.5, 0));
    p5.directionalLight(p5.color(244, 255, 250), p5.createVector(0.5, 0, 0.5));
    p5.ambientLight(180, 150, 150);

    drawFloor(p5);
    drawWalls(p5);

    if (p5.keyIsDown(p5.RIGHT_ARROW)) {
      myCamera.pan(-0.01);
    }
    if (p5.keyIsDown(p5.LEFT_ARROW)) {
      myCamera.pan(0.01);
    }
  }

  function drawFloor(p5: p5Types) {
    p5.push();
    p5.rotateX(p5.PI / 2);
    p5.ambientMaterial(p5.color("#130701"));
    p5.square(-350, -350, 700);
    p5.pop();
  }

  function drawWalls(p5: p5Types) {
    for (const wall of wallInfo) {
      drawWall(wall, p5);
    }
  }

  function drawWall(wall: IWallInfo, p5: p5Types) {
    p5.push();
    p5.translate(wall.translate.x, wall.translate.y, wall.translate.z);
    p5.rotateY(wall.rotateY);
    p5.ambientMaterial(p5.color("#052d40"));
    p5.box(
      singleWallDimensions.width,
      singleWallDimensions.height,
      singleWallDimensions.depth
    );
    drawImages(wall.id, p5);
    p5.pop();
  }

  function drawImages(id: number, p5: p5Types) {
    p5.strokeWeight(3);
    p5.stroke(0);
    let img;
    if (wallImgs[id]["middle"] !== undefined) {
      img = wallImgs[id]["middle"];
      img !== undefined &&
        drawMiddleImage(
          img,
          id,
          p5,
          imgDefaultDimensions,
          imgDefaultDimensions
        );
    }
    if (wallImgs[id]["right"] !== undefined) {
      img = wallImgs[id]["right"];
      img !== undefined &&
        drawRightImage(img, id, p5, imgDefaultDimensions, imgDefaultDimensions);
    }
    if (wallImgs[id]["left"] !== undefined) {
      img = wallImgs[id]["left"];
      img !== undefined &&
        drawLeftImage(img, id, p5, imgDefaultDimensions, imgDefaultDimensions);
    }
    p5.noStroke();
  }

  function drawMiddleImage(
    img: p5Types.Image,
    id: number,
    p5: p5Types,
    imageWidth: number,
    imageHeight: number
  ) {
    p5.push();
    if (id === 3) {
      p5.translate(0, 0, 6);
    } else {
      p5.translate(0, 0, -6);
    }
    if (img !== undefined) {
      p5.texture(img);
      imageWidth = img.width;
      imageHeight = img.height;
    } else {
      p5.ambientMaterial(p5.color("#e93dc8"));
    }
    p5.rectMode(p5.CENTER);
    p5.rect(
      0,
      0,
      imgScale * singleWallDimensions.width,
      imgScale * ((imageHeight * singleWallDimensions.width) / imageWidth)
    );
    p5.pop();
  }
  function drawRightImage(
    img: p5Types.Image,
    id: number,
    p5: p5Types,
    imageWidth: number,
    imageHeight: number
  ) {
    p5.push();
    if (id === 3) {
      p5.translate(200, 0, 6);
    } else {
      p5.translate(-200, 0, -6);
    }
    if (img !== undefined) {
      p5.texture(img);
      imageWidth = img.width;
      imageHeight = img.height;
    } else {
      p5.ambientMaterial(p5.color("#e93dc8"));
    }
    p5.rectMode(p5.CENTER);
    p5.rect(
      0,
      0,
      imgScale * singleWallDimensions.width,
      imgScale * ((imageHeight * singleWallDimensions.width) / imageWidth)
    );
    p5.pop();
  }
  function drawLeftImage(
    img: p5Types.Image,
    id: number,
    p5: p5Types,
    imageWidth: number,
    imageHeight: number
  ) {
    p5.push();
    if (id === 3) {
      p5.translate(-200, 0, 6);
    } else {
      p5.translate(200, 0, -6);
    }
    if (img !== undefined) {
      p5.texture(img);
      imageWidth = img.width;
      imageHeight = img.height;
    } else {
      p5.ambientMaterial(p5.color("#e93dc8"));
    }
    p5.rectMode(p5.CENTER);
    p5.rect(
      0,
      0,
      imgScale * singleWallDimensions.width,
      imgScale * ((imageHeight * singleWallDimensions.width) / imageWidth)
    );
    p5.pop();
  }

  return (
    <>
      <p className="instructions">
        Use left and right arrows to rotate the camera
      </p>
      <Sketch setup={setup} draw={draw} preload={preload} />
    </>
  );
}
