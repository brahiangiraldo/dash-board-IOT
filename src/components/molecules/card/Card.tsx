import { useEffect, useState } from "react"
import { CardProps } from "./CardProps"
import "./card.css"
import BoldTitle from "@/components/atoms/bold-title/BoldTitle"

const Card = (props: CardProps) => {
  const [title, setTitle] = useState(props.title || "")

  useEffect(() => {
    setTitle(props.title || "")
  }, [props.title])

  return (
    <article
      className={`card custom-card ${
        props.showWave ? "custom-card-wave" : ""
      } ${props.linearGradient ? "linear-gradient" : ""}`}
      style={{
        maxWidth: `${props.percentageWidth}%`,
        maxHeight: `${props.percentageHeight}%`,
      }}
    >
      {/**Header */}
      {props.widget}
      <section className="cont-header-card" suppressHydrationWarning={true}>
        {/**Subtitle */}
        <span className="card-subtitle">{props.subtitle}</span>
        {/**Title */}
        {title ? (
          <div suppressHydrationWarning={true}>
            <BoldTitle text={title} />
          </div>
        ) : (
          ""
        )}
      </section>
    </article>
  )
}

export default Card
