import React from "react";
import { motion } from "framer-motion";

export default function Line({
  direction,
  balldelay,
}: {
  direction: "left" | "right";
  balldelay: number;
}) {
  return (
    <motion.div
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        marginBottom: "20px",
      }}
    >
      {/* {showball && ( */}
      <motion.div
        className="ball"
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "#bf85bf",
          position: "absolute",
        }}
        initial={{
          // x: direction === "left" ? "0%" : "100%",
          // x: "0%",
          left: "0%",
        }}
        animate={{
          // x: direction === "left" ? "0%" : "100%",
          // x: "100%",
          left: "90%",
        }}
        transition={{
          duration: 1,
          delay: balldelay,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      ></motion.div>
      {/* )} */}
      {direction === "left" && (
        <div
          className="dot"
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#fff",
          }}
        ></div>
      )}

      {[1, 2, 3, 4].map(() => (
        <div
          className="step"
          style={{
            width: "25px",
            height: "2px",
            backgroundColor: "#fff",
            margin: "0 10px",
          }}
        ></div>
      ))}
      {direction === "right" && (
        <div
          className="dot"
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#fff",
          }}
        ></div>
      )}
    </motion.div>
  );
}
