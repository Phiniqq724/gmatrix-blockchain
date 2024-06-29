"use client"
import { FormButton } from '@/app/components/Button';
import { FormComp, StatusDropdown } from '@/app/components/Form';
import {AuthContext} from './auth';
import {Backdrop} from './backdrop';
import {setDoc, uploadFile} from '@junobuild/core-peer';
import {nanoid} from 'nanoid';
import {useContext, useEffect, useRef, useState} from 'react';

export const Modal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [inputText, setInputText] = useState("");
  const [valid, setValid] = useState(false);
  const [progress, setProgress] = useState(false);
  const [file, setFile] = useState<File | undefined>(undefined);
  const uploadElement = useRef<HTMLInputElement>(null);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    setValid(inputText !== "" && user !== undefined && user !== null);
  }, [showModal, inputText, user]);

  const reload = () => {
    const event = new CustomEvent("reload");
    window.dispatchEvent(event);
  };

  const add = async () => {
    // Demo purpose therefore edge case not properly handled
    if (user === undefined || user === null) {
      return;
    }

    setProgress(true);

    try {
      let url;

      if (file !== undefined) {
        const filename = `${user.key}-${file.name}`;

        const { downloadUrl } = await uploadFile({
          collection: "images",
          data: file,
          filename,
        });

        url = downloadUrl;
      }

      const key = nanoid();

      await setDoc({
        collection: 'Buku',
        doc: {
          key: "buku-" + key,
          data: {
            text: inputText,
            ...(url !== undefined && { url }),
          },
        },
      });

      setShowModal(false);

      reload();
    } catch (err) {
      console.error(err);
    }

    setProgress(false);
  };

  return (
    <>
      <FormButton variant="blue" onClick={() => setShowModal(true)} className="flex items-center">
        Add Book
      </FormButton>

      {showModal ? (
        <>
          <section>
            <div className="w-screen h-screen fixed top-0 left-0 right-0 bg-slate-500"></div>
            <div className="inset-0 z-10 p-16 animate-fade absolute" role="dialog">
              <div className="w-full max-w-7xl px-20 py-8 h-auto bg-white rounded-xl">
                <main className="w-full px-6 py-8 h-auto bg-white rounded-xl">
                  <div className="">
                    <h1 className="text-2xl font-bold text-center mt-4">Add Book</h1>
                    <FormComp
                    onChange={(e) => {
                      setInputText(e.target.value);
                    }}
                    value={inputText}
                    label="Judul" type="text" variants="normal" />
                    <FormComp
                    onChange={(e) => {
                      setInputText(e.target.value);
                    }}
                    value={inputText}
                    label="Pengarang" type="text" variants="normal" />
                    <FormComp
                    onChange={(e) => {
                      setInputText(e.target.value);
                    }}
                    value={inputText}
                    label="Penerbit" type="text" variants="normal" />
                    <FormComp
                    onChange={(e) => {
                      setInputText(e.target.value);
                    }}
                    value={inputText}
                    label="Tahun Terbit" type="text" variants="normal" />
                    <div className="my-4">
                      <label>Cover</label>
                      <button
                        aria-label="Attach a file to the entry"
                        onClick={() => uploadElement?.current?.click()}
                        className="gap-2 items-center mt-2 bg-gray-50 border border-gray-600 focus:border-blue-600 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-primary-600 flex w-full p-2.5 "
                      >
                        <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" fill="currentColor">
                          <g>
                            <rect fill="none" className="opacity-25" width="29" height="29" />
                            <path d="M8.36,26.92c-2,0-3.88-.78-5.29-2.19C.15,21.81.15,17.06,3.06,14.14L12.57,4.64c.39-.39,1.02-.39,1.41,0s.39,1.02,0,1.41L4.48,15.56c-2.14,2.14-2.14,5.62,0,7.76,1.04,1.04,2.41,1.61,3.88,1.61s2.84-.57,3.88-1.61l12.79-12.79c1.47-1.47,1.47-3.87,0-5.34-1.47-1.47-3.87-1.47-5.34,0l-12.45,12.45c-.73.73-.73,1.91,0,2.64.73.73,1.91.73,2.64,0l9.17-9.17c.39-.39,1.02-.39,1.41,0s.39,1.02,0,1.41l-9.17,9.17c-1.51,1.51-3.96,1.51-5.47,0-1.51-1.51-1.51-3.96,0-5.47L18.26,3.77c2.25-2.25,5.92-2.25,8.17,0s2.25,5.92,0,8.17l-12.79,12.79c-1.41,1.41-3.29,2.19-5.29,2.19Z" />
                          </g>
                        </svg>
                        <p className="truncate max-w-48">
                          <small>{file !== undefined ? file.name : "Attach file"}</small>
                        </p>
                      </button>
                      <input ref={uploadElement} type="file" className="fixed right-0 -bottom-24 opacity-0" onChange={(event) => setFile(event.target.files?.[0])} disabled={progress} />
                    </div>
                    <StatusDropdown label="Status" />
                    <FormComp
                    onChange={(e) => {
                      setInputText(e.target.value);
                    }}
                    value={inputText}
                    label="Dipinjam Oleh" type="text" variants="normal" />
                    <FormComp
                    onChange={(e) => {
                      setInputText(e.target.value);
                    }}
                    value={inputText}
                    label="Waktu Pinjaman (Deadline)" type="Date" variants="normal" />
                    <FormComp                     
                    value={inputText}
                    onChange={(e) => {
                      setInputText(e.target.value);
                    }} label="Cover" type="file" className="opacity-0" variants="normal" />
                    <FormComp
                      className=""
                      variants="textarea"
                      label="deskripsi"
                      placeholder="Your diary entry"
                      onChange={(e) => {
                        setInputText(e.target.value);
                      }}
                      value={inputText}
                      disabled={progress}
                    ></FormComp>
                    <div className="w-full flex justify-between my-4 gap-x-4">
                      <FormButton onClick={() => setShowModal(false)} variant="white" className="w-full">
                        Cancel
                      </FormButton>
                      <FormButton onClick={add} disabled={!valid} variant="blue" className="w-full">
                        Add
                      </FormButton>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <Backdrop />
          </section>
        </>
      ) : null}
    </>
  );
};
