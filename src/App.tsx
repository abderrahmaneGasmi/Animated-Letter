import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Line from "./layout/Line";
// import { useState } from 'react'
const style: { [key: string]: React.CSSProperties } = {
  main: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#282c34",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "20px",
  },
  title: {
    color: "white",
    fontSize: "50px",
    fontWeight: "bold",
    marginBottom: "20px",
    fontFamily: "monospace",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#282c34",
    gap: "10px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  item: {
    width: "20px",
    height: "12px",
    backgroundColor: "#ccc",
  },
  barrier: {
    width: "20px",
    height: "6px",
    backgroundColor: "transparent",
  },
};

// const makerandom = (min: number, max: number, size: number) => {
//   const arr = Array.from({ length: size }).map(() =>
//     Math.floor(Math.random() * (max - min + 1) + min)
//   );
//   return arr;
// };

const array = [
  [
    {
      case: 4,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 5,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 5,
      colored: "white",
    },
    {
      case: 6,
      colored: "colored",
    },
    {
      case: 4,
      colored: "colored",
    },
    {
      case: 3,
      colored: "colored",
    },
    {
      case: 4,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 6,
      colored: "white",
    },
  ],
  [
    {
      case: 2,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
    {
      case: 3,
      colored: "colored",
    },
    {
      case: 5,
      colored: "colored",
    },
    {
      case: 5,
      colored: "colored",
    },
    {
      case: 5,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
  ],
  [
    {
      case: 4,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 2,
      colored: "colored",
    },
    {
      case: 3,
      colored: "colored",
    },
    {
      case: 2,
      colored: "colored",
    },
    {
      case: 3,
      colored: "colored",
    },
    {
      case: 1,
      colored: "colored",
    },
    {
      case: 9,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 8,
      colored: "white",
    },
  ],
  [
    {
      case: 6,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
    {
      case: 4,
      colored: "colored",
    },
    {
      case: 3,
      colored: "colored",
    },
    {
      case: 3,
      colored: "colored",
    },
    {
      case: 2,
      colored: "colored",
    },
    {
      case: 5,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
  ],
  // [
  //   {
  //     case: 2,
  //     colored: "white",
  //   },
  //   {
  //     case: 4,
  //     colored: "white",
  //   },
  //   {
  //     case: 3,
  //     colored: "white",
  //   },
  //   {
  //     case: 3,
  //     colored: "white",
  //   },
  //   {
  //     case: 4,
  //     colored: "white",
  //   },
  //   {
  //     case: 3,
  //     colored: "colored",
  //   },
  //   {
  //     case: 4,
  //     colored: "colored",
  //   },
  //   {
  //     case: 4,
  //     colored: "colored",
  //   },
  //   {
  //     case: 1,
  //     colored: "colored",
  //   },
  //   {
  //     case: 3,
  //     colored: "white",
  //   },
  //   {
  //     case: 3,
  //     colored: "white",
  //   },
  //   {
  //     case: 4,
  //     colored: "white",
  //   },
  //   {
  //     case: 2,
  //     colored: "white",
  //   },
  //   {
  //     case: 3,
  //     colored: "white",
  //   },
  //   {
  //     case: 1,
  //     colored: "white",
  //   },
  // ],
  // [
  //   {
  //     case: 4,
  //     colored: "white",
  //   },
  //   {
  //     case: 2,
  //     colored: "white",
  //   },
  //   {
  //     case: 3,
  //     colored: "white",
  //   },
  //   {
  //     case: 2,
  //     colored: "white",
  //   },
  //   {
  //     case: 1,
  //     colored: "white",
  //   },
  //   {
  //     case: 3,
  //     colored: "white",
  //   },
  //   {
  //     case: 2,
  //     colored: "white",
  //   },
  //   {
  //     case: 2,
  //     colored: "colored",
  //   },
  //   {
  //     case: 3,
  //     colored: "colored",
  //   },
  //   {
  //     case: 2,
  //     colored: "colored",
  //   },
  //   {
  //     case: 3,
  //     colored: "colored",
  //   },
  //   {
  //     case: 1,
  //     colored: "colored",
  //   },
  //   {
  //     case: 9,
  //     colored: "white",
  //   },
  //   {
  //     case: 1,
  //     colored: "white",
  //   },
  //   {
  //     case: 3,
  //     colored: "white",
  //   },
  //   {
  //     case: 8,
  //     colored: "white",
  //   },
  // ],
  // [
  //   {
  //     case: 2,
  //     colored: "white",
  //   },
  //   {
  //     case: 4,
  //     colored: "white",
  //   },
  //   {
  //     case: 3,
  //     colored: "white",
  //   },
  //   {
  //     case: 3,
  //     colored: "white",
  //   },
  //   {
  //     case: 4,
  //     colored: "white",
  //   },
  //   {
  //     case: 3,
  //     colored: "colored",
  //   },
  //   {
  //     case: 3,
  //     colored: "colored",
  //   },
  //   {
  //     case: 3,
  //     colored: "colored",
  //   },
  //   {
  //     case: 3,
  //     colored: "colored",
  //   },
  //   {
  //     case: 3,
  //     colored: "white",
  //   },
  //   {
  //     case: 3,
  //     colored: "white",
  //   },

  //   {
  //     case: 4,
  //     colored: "white",
  //   },
  //   {
  //     case: 2,
  //     colored: "white",
  //   },
  //   {
  //     case: 3,
  //     colored: "white",
  //   },
  //   {
  //     case: 1,
  //     colored: "white",
  //   },
  // ],
  [
    {
      case: 5,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },

    {
      case: 2,
      colored: "colored",
    },
    {
      case: 1,
      colored: "colored",
    },
    {
      case: 2,
      colored: "colored",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
    {
      case: 5,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
  ],
  [
    {
      case: 2,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 8,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 3,
      colored: "colored",
    },
    {
      case: 3,
      colored: "colored",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 7,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
  ],
  [
    {
      case: 5,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 10,
      colored: "white",
    },

    {
      case: 1,
      colored: "white",
    },

    {
      case: 7,
      colored: "colored",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },

    {
      case: 3,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },

    {
      case: 2,
      colored: "white",
    },
    {
      case: 5,
      colored: "white",
    },
  ],
  [
    {
      case: 9,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
    {
      case: 6,
      colored: "white",
    },
    {
      case: 5,
      colored: "white",
    },

    {
      case: 2,
      colored: "colored",
    },
    {
      case: 1,
      colored: "colored",
    },
    {
      case: 2,
      colored: "colored",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
    {
      case: 5,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
  ],
  [
    {
      case: 2,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 8,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 3,
      colored: "colored",
    },
    {
      case: 3,
      colored: "colored",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 7,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
  ],
  [
    {
      case: 5,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },

    {
      case: 7,
      colored: "colored",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },

    {
      case: 4,
      colored: "white",
    },
    {
      case: 5,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
  ],
  [
    {
      case: 2,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 8,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 3,
      colored: "colored",
    },
    {
      case: 3,
      colored: "colored",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 7,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
  ],
  [
    {
      case: 5,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },

    {
      case: 2,
      colored: "colored",
    },
    {
      case: 1,
      colored: "colored",
    },
    {
      case: 2,
      colored: "colored",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
    {
      case: 5,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
  ],
  [
    {
      case: 5,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },

    {
      case: 7,
      colored: "colored",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },

    {
      case: 4,
      colored: "white",
    },
    {
      case: 5,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },
  ],
  [
    {
      case: 5,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 10,
      colored: "white",
    },

    {
      case: 1,
      colored: "white",
    },

    {
      case: 3,
      colored: "colored",
    },
    {
      case: 3,
      colored: "colored",
    },
    {
      case: 1,
      colored: "white",
    },
    {
      case: 1,
      colored: "white",
    },

    {
      case: 3,
      colored: "white",
    },
    {
      case: 3,
      colored: "white",
    },
    {
      case: 2,
      colored: "white",
    },
    {
      case: 4,
      colored: "white",
    },

    {
      case: 2,
      colored: "white",
    },
    {
      case: 5,
      colored: "white",
    },
  ],
];
const randomcolors = ["#f7ba3e", "#56b3b4", "#bf85bf", "#ea5e5e"];
const initialvalues = Array.from(
  { length: array.length },
  () => Math.floor(Math.random() * 120) + 1
);
function App() {
  const [xvalues, setXvalues] = useState([] as number[]);
  const [colors, setColors] = useState([] as string[]);
  const [directions, setDirections] = useState([] as number[]);

  useEffect(() => {
    // Set the initial state for items with their translateX values
    setXvalues(initialvalues);
    setColors(
      Array.from(
        { length: array.length },
        () => randomcolors[Math.floor(Math.random() * randomcolors.length)]
      )
    );
    setDirections(
      Array.from(
        { length: array.length },
        () => Math.floor(Math.random() * 2) + 1
      )
    );

    // Animate items back to 0 after 2 seconds
  }, []);

  useEffect(() => {
    const animateBackToZero = () => {
      setXvalues((prevItems) =>
        prevItems.map((item, i) => {
          const ratio = initialvalues[i] / 30;
          return item <= 0 ? 0 : item - ratio;
        })
      );
      // requestAnimationFrame(animateBackToZero);
    };

    const animationId = requestAnimationFrame(animateBackToZero);

    if (xvalues.every((item) => item == 0)) {
      // setAnimationRunning(false); // Animation is done, stop further updates
      cancelAnimationFrame(animationId);
    }
    // Clear the animation frame when component unmounts
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [xvalues]);

  return (
    <div className="container" style={style.main}>
      <motion.div
        initial={{ opacity: 0, x: 350 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <Line direction="left" balldelay={0} />

        <div style={style.title}>
          Letter <span style={{ color: "#f7ba3e" }}>T</span> Design{" "}
          <span style={{ color: "#ea5e5e" }}>By</span> React
        </div>
        <Line direction="right" balldelay={1} />
      </motion.div>

      <div className="container" style={style.container}>
        {/* <Row items={[4, 1, 5, 2, 5, 6, 4, 3, 4, 4, 1, 3, 6]} />
        <Row items={[2, 4, 3, 3, 4, 3, 5, 5, 5, 1, 4, 2, 3, 1]} />
        <Row items={[4, 2, 3, 2, 1, 3, 2, 2, 3, 2, 3, 1, 9, 1, 3, 8]} />
        <Row items={[6, 3, 3, 4, 4, 3, 3, 2, 5, 1, 4, 2, 4]} />
        <Row items={[2, 4, 3, 3, 4, 3, 4, 4, 1, 3, 3, 4, 2, 3, 1]} />
        <Row items={[4, 2, 3, 2, 1, 3, 2, 2, 3, 2, 3, 1, 9, 1, 3, 8]} />
        <Row items={[2, 4, 3, 3, 4, 3, 3, 3, 3, 3, 3, 4, 2, 3, 1]} />

        <Row
             items={[5, 3, 4, 2, 2, 2, 1, 1, 2, 1, 2, 1, 1, 4, 5, 2, 1, 3, 4]}
        />

        <Row items={[2, 2, 8, 1, 3, 2, 3, 3, 3, 3, 1, 7, 3, 1, 1, 1, 1, 2]} />
        <Row items={[5, 3, 4, 2, 2, 2, 1, 1, 7, 1, 1, 4, 5, 2, 1, 3, 4]} />
        <Row items={[2, 2, 8, 1, 3, 2, 3, 3, 3, 3, 1, 7, 3, 1, 1, 1, 1, 2]} />
        <Row
          items={[5, 3, 4, 2, 2, 2, 1, 1, 2, 1, 2, 1, 1, 4, 5, 2, 1, 3, 4]}
        /> */}

        {array.map((item, i) => {
          return (
            <Row
              items={item}
              xvalue={xvalues[i]}
              color={colors[i] == undefined ? randomcolors[0] : colors[i]}
              direction={directions[i]}
            />
          );
        })}
      </div>
    </div>
  );
}
function Row({
  items,
  xvalue,
  color,
  direction,
}: {
  items: {
    case: number;
    colored: string;
  }[];
  xvalue: number;
  color: string;
  direction: number;
}) {
  const row = React.useRef<HTMLDivElement>(null);
  return (
    <motion.div
      // layout
      className="row"
      style={{
        ...style.row,

        transform: `translateX( ${direction == 1 ? "" : "-"}${xvalue}%)`,
      }}
      initial={{
        opacity: 0.3,
      }}
      transition={{
        duration: 1,
      }}
      animate={{
        opacity: 1,
      }}
      ref={row}
    >
      {items.map((item) => {
        return (
          <>
            <div
              style={{ borderRadius: "15px", overflow: "hidden", ...style.row }}
            >
              <Item
                color={item.colored == "colored" ? color : "#344651"}
                number={item.case}
              />
            </div>
            <div style={style.barrier} className="bar"></div>
          </>
        );
      })}
    </motion.div>
  );
}
function Item({ color, number }: { color: string; number: number }) {
  return (
    <>
      {Array.from({ length: number }).map((_, index) => (
        <div
          key={index}
          style={{
            ...style.item,
            background: color,
          }}
        ></div>
      ))}
    </>
  );
}
export default App;
