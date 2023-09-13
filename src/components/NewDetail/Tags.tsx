import { FC } from "react";

interface TagsProps {
  nameTag: string;
}

const Tags: FC<TagsProps> = ({ nameTag }) => {
  return (
    <li>
      <a
        href="#"
        className="t-link btn btn--gallery text-uppercase sm-text fw-bold"
      >
        {nameTag}
      </a>
    </li>
  );
};

export default Tags;
