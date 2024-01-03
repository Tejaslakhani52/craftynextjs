import Link from "next/link";
import React from "react";

export default function FLink(props: any) {
  return (
    <Link
      href={props.lk}
      className="text_linear"
      target="_blank"
      style={{ display: "unset", fontWeight: "500" }}
    >
      {" "}
      {props.children}{" "}
    </Link>
  );
}
