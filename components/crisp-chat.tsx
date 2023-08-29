"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("816e69b7-017d-4896-8ffa-80fd0030a83d");
  }, []);

  return null;
};
