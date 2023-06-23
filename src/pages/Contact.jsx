import React, { useEffect, useState } from "react";
import { Contact } from "../components/contact";

const ContactPage = ({ data }) => {
  return <Contact data={data} />;
};

export default ContactPage;
