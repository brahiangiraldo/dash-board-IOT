"use client"
import React from "react"
import { MenuContentProps } from "./MenuContentProps"
import profilePic from "@/assets/images/camila.jpeg"
import Avatar from "@/components/atoms/avatar/Avatar"
import "./menu-content.css"

const MenuContent = ({
  username,
  documentId,
  age,
  height,
  weight,
  title,
}: MenuContentProps) => {
  return (
    <article className="card">
      <section className="card-header">
        <div className="title">{title}</div>
        <Avatar
          urlImage={profilePic}
          alt="image profile"
          width={150}
          height={150}
        />
        <h2 className="username">{username}</h2>
      </section>
      <section className="card-body">
        <p>
          <strong>Documento de Identidad:</strong> {documentId}
        </p>
        <p>
          <strong>Edad:</strong> {age} años
        </p>
        <p>
          <strong>Estatura:</strong> {height} cm
        </p>
        <p>
          <strong>Peso:</strong> {weight} kg
        </p>
      </section>
    </article>
  )
}

export default MenuContent
