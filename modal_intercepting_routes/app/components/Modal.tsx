"use client";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef } from "react";

const Modal = ({ children }) => {
  const overlay = useRef();
  const wrapper = useRef();

  const router = useRouter();

  // voltar ou fechar nossa modal
  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onclick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeydown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, [onKeydown]);

  return (
    // overlay the modal
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/40"
      onClick={onclick}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
