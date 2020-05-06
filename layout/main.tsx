/**
 * Chorale: A blazing fast Notion page renderer.
 * Copyright (C) 2020 Sam Wight
 */
import React from "react";
import Head from "next/head";

const Layout: React.FC = (props) => {
  return <>{props.children}</>;
};

export default Layout;
