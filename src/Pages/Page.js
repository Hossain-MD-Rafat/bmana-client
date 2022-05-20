import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "./Includes/PageHeader";
import Footer from "./Includes/Footer";

export default function Page() {
  const { ms_id, page_id } = useParams();
  let parser = new DOMParser();
  const [navData, setNavData] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    fetch(
      `https://icircles.app/api/medicalassociation/page/${ms_id}/${page_id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setNavData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <PageHeader mainNav={navData.main_nav} ms_id={ms_id} />

      {navData.data &&
        navData.data.map((item) => {
          return (
            <div style={{ margin: "100px 0px", textAlign: "center" }}>
              <img
                src={`https://icircles.app/uploads/content/${ms_id}/${item.featured_image}`}
              ></img>
              <br></br>
              {
                parser.parseFromString(item.body_content, "text/html").body
                  .innerText
              }
            </div>
          );
        })}
      <Footer></Footer>
    </div>
  );
}
