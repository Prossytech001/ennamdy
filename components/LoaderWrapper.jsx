"use client";

import { useState, useEffect } from "react";
import CustomLoader from "@/components/CustomLoader";

export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // show loader 2s
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <CustomLoader />;

  return <>{children}</>;
}
