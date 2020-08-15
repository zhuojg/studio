// @ts-nocheck
import React, { useState, useRef, useEffect } from 'react'
import styles from './index.module.scss'
import paper, { PaperScope, Point, Tool, Path } from 'paper'

const Editor = (props: any) => {
  const canvasRef = useRef(null)
  const scope = new PaperScope()
  const tool = new Tool()

  let temp = null

  useEffect(() => {
    scope.setup(canvasRef.current as any)
    tool.onMouseDown = (e) => {
      if (temp === null) {
        temp = new Path()
        temp.strokeColor = 'black'
        temp.add(e.point)
      } else {
        temp.add(e.point)
        temp.fullySelected = true
        temp = null
      }
    }
  })

  return (
    <div className={styles.canvas_container}>
      <canvas
        className={styles.main_canvas}
        ref={canvasRef}
        width="800"
        height="600"
        onClick={() => {
          console.log(canvasRef.current)
        }}
      ></canvas>
    </div>
  )
}

export default Editor
