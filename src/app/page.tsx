"use client";
import { useFileProvider } from "@/context/InputFileContext";
import { useState, useEffect, ChangeEvent } from "react";

export default function Home() {
  // const inputFiles = useFileProvider()!.inputFiles;
  // const setInputFiles = useFileProvider()!.setInputFiles;
  const { inputFiles, setInputFiles } = useFileProvider()!;
  function handleInputFiles(e: ChangeEvent<HTMLInputElement>) {
    setInputFiles(e.currentTarget.files);
  }

  useEffect(() => {
    // console.log(inputFiles);
    Array.from(inputFiles || []).forEach((file) => {
      console.log(file);
    });
  }, [inputFiles]);

  return (
    <main className="border-black border-2 h-screen flex flex-col gap-2 justify-center items-center">
      <section>
        {Array.from(inputFiles || []).map((file, idx) => (
          <div key={idx}>{file.name}</div>
        ))}
      </section>
      <input
        type="file"
        multiple
        onChange={handleInputFiles}
        className="h-16 border-2 border-black p-3 bg-slate-300 rounded drop-shadow-sm active:scale-95"
      ></input>
      <button className="h-16 p-3 rounded drop-shadow-sm bg-slate-300 active:scale-95">
        Upload
      </button>
    </main>
  );
}
