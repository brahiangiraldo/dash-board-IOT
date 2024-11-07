"use client"
import { useEffect, useState } from "react"
import "./progress-circle.css"
import { ProgressCircleProps } from "./ProgressCircleProps"

const initDashOffset = 185

const ProgressCircle = ({ percentage, size }: ProgressCircleProps) => {
  const [number, setNumber] = useState(0)
  const [dashOffset, setDashOffset] = useState(initDashOffset)

  useEffect(() => {
    if (size) {
      setDashOffset(size === "sm" ? initDashOffset : 348)
    }
  }, [size])

  useEffect(() => {
    setNumber(0)
  }, [percentage])

  useEffect(() => {
    const interval = setInterval(() => {
      if (number >= percentage) {
        clearInterval(interval)
      } else {
        setNumber(number + 1)
      }
    }, 30)

    return () => {
      clearInterval(interval)
    }
  }, [percentage, number])

  return (
    <div
      className={`circle-skill-progress ${size ? (size === "sm" ? "skill-circle-sm" : "skill-circle-md") : null}`}
    >
      <div
        className={`circle-outer-progress ${size ? (size === "sm" ? "circle-outer-sm" : "circle-outer-md") : null}`}
      >
        <div
          className={`circle-inner-progress ${size ? (size === "md" ? "circle-inner-md" : null) : null}`}
        >
          <div className={`circle-number-progress`}>
            {percentage < 100 ? percentage.toFixed(2) : percentage}%
          </div>
        </div>
      </div>
      {/**SVG */}
      <svg
        xmlns="http ://ww.w3.org/2000/svg"
        version="1.1"
        width="80px"
        height="80px"
        className={`svg-progress ${size ? (size === "md" ? "skill-circle-md" : "skill-circle-sm") : null}`}
      >
        <defs>
          <linearGradient id="GradientColor" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary400)" />{" "}
            <stop offset="100%" stopColor="var(--primary500)" />
          </linearGradient>
        </defs>
        <circle
          cx={size ? (size === "md" ? "14" : "40") : "45"}
          cy={size ? (size === "md" ? "66" : "40") : "45"}
          r={size ? (size === "md" ? "56" : "30") : "35"}
          transform="rotate(-90 ) translate(-80 0)"
          strokeLinecap="round"
          className={`svg-circle-inner-progress ${size && size === "md" ? "svg-circle-inner-md" : null}`}
          style={{ strokeDashoffset: dashOffset - dashOffset * (number / 100) }}
        />
      </svg>
    </div>
  )
}

export default ProgressCircle
