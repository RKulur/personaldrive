"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface FileContextValue {
  inputFiles: FileList | null;
  setInputFiles: Dispatch<SetStateAction<FileList | null>>;
}

interface FileProviderType {
  children: ReactNode;
}
const FileContext = createContext<FileContextValue | undefined>(undefined);

export const FileContextProvider = ({ children }: FileProviderType) => {
  const [inputFiles, setInputFiles] = useState<FileList | null>(null);

  return (
    <FileContext.Provider value={{ inputFiles, setInputFiles }}>
      {children}
    </FileContext.Provider>
  );
};

export function useFileProvider() {
  return useContext(FileContext);
}
