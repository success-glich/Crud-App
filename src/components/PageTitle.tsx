import { useEffect } from "react";

const PageTitle = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;

    return () => {
      document.title = "Crud Application";
    };
  }, [title]);

  return null;
};

export default PageTitle;
