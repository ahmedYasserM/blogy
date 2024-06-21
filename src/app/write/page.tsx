"use client";

import { useState } from "react";

import styles from "./writePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

export default function WritePage(): React.JSX.Element {
  const [isOpened, setIsOpened] = useState(true);
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.titleInput} />

      <div className={styles.editor}>
        <div className={styles.editorButtons}>
          <button className={styles.button}>
            <Image
              src="/plus.png"
              alt="plus icon"
              width={16}
              height={16}
              onClick={() => setIsOpened(!isOpened)}
            />
          </button>

          {isOpened && (
            <>
              <button className={styles.button}>
                <Image
                  src="/image.png"
                  alt="image icon"
                  width={16}
                  height={16}
                />
              </button>

              <button className={styles.button}>
                <Image
                  src="/upload.png"
                  alt="upload icon"
                  width={16}
                  height={16}
                />
              </button>

              <button className={styles.button}>
                <Image
                  src="/video.png"
                  alt="video icon"
                  width={16}
                  height={16}
                />
              </button>
            </>
          )}
        </div>

        <ReactQuill
          className={styles.textarea}
          theme="bubble"
          value={value}
          placeholder="Write your story..."
          onChange={(newValue) => setValue(newValue)}
        />

        <button className={styles.publishButton}>Publish</button>
      </div>
    </div>
  );
}
