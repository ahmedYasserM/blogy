"use client";

import { useEffect, useState } from "react";

import styles from "./writePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { app } from "@/utils/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useRouter } from "next/navigation";

function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function WritePage(): React.JSX.Element {
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [file, setFile] = useState<File>();
  const [imgUrl, setImgUrl] = useState<string>();
  const [cat, setCat] = useState<string>("");
  const router = useRouter();

  async function publish() {
    console.log(`user image: `, imgUrl);
    console.log(`value = `, value);
    const res = await fetch("/api/write", {
      cache: "no-cache",
      method: "POST",
      body: JSON.stringify({
        title: title,
        descr: value,
        slug: slugify(title).toLowerCase(),
        catslug: cat,
        img: imgUrl,
      }),
    });

    router.push(`/posts/${slugify(title).toLowerCase()}`);
  }

  function uploadImage(file: File) {
    const storage = getStorage(app);
    const metadata = {
      contentType: "image/jpeg",
    };

    const imageName: string = new Date().getDate() + file!.name;
    const storageRef = ref(storage, imageName);
    const uploadTask = uploadBytesResumable(storageRef, file!, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => { },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((durl) => {
          setImgUrl(durl);
        });
      },
    );
  }

  useEffect(() => {
    let url = "";
    if (file) {
      uploadImage(file);
    }
    console.log(`image url = ${url}`);
  }, [file]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.titleInput}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

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
              <input
                type="file"
                id="image"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files![0])}
              />
              <button
                style={{ borderColor: "#d1f172" }}
                className={styles.button}
              >
                <label htmlFor="image">
                  <Image
                    src="/image.png"
                    alt="image icon"
                    width={16}
                    height={16}
                  />
                </label>
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

        <button className={styles.publishButton} onClick={() => publish()}>
          Publish
        </button>

        <div>
          <label className={styles.select} htmlFor="slct">
            <select id="slct" required onChange={(e) => setCat(e.target.value)}>
              <option value="" disabled selected>
                Select option
              </option>
              <option value="style">style</option>
              <option value="fashion">fashion</option>
              <option value="food">food</option>
              <option value="culture">culture</option>
              <option value="travel">travel</option>
              <option value="coding">coding</option>
            </select>
            <svg className={styles.svg}>
              <use xlinkHref="#select-arrow-down"></use>
            </svg>
          </label>

          <svg className={styles.sprites}>
            <symbol id="select-arrow-down" viewBox="0 0 10 6">
              <polyline points="1 1 5 5 9 1"></polyline>
            </symbol>
          </svg>
        </div>
      </div>
    </div>
  );
}
