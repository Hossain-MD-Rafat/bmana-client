var base_url = "https://icircles.app";
let Id = "";

sliderRender = (sliders) => {
  var length = sliders.length;
  console.log("sliders length = " + length);

  sliders.map((slidersData, index) => {
    // https://icircles.app/uploads/slider/166/banner1.jpg

    if (slidersData.display_order === "0") {
      bannerImgUrl1 = `${base_url}/uploads/slider/${Id}/${slidersData.image}`;
      title1 = slidersData.title;
      description1 = slidersData.description;
      document.getElementById(
        "bannerSlider1"
      ).style.backgroundImage = `url(${bannerImgUrl1})`;

      if (slidersData.title || slidersData.description) {
        document.getElementById("bannnerText1").innerHTML = `
          <h2>${title1}</h2>
          <p>${description1}</p>
          `;
      }
    }
    if (slidersData.display_order === "1") {
      title2 = slidersData.title;
      description2 = slidersData.description;
      bannerImgUrl2 = `${base_url}/uploads/slider/${Id}/${slidersData.image}`;
      document.getElementById(
        "bannerSlider2"
      ).style.backgroundImage = `url(${bannerImgUrl2})`;

      if (slidersData.title || slidersData.description) {
        document.getElementById("bannnerText2").innerHTML = `
        <h2>${title2}</h2>
        <p>${description2}</p>
        `;
      }
    }
    if (slidersData.display_order === "2") {
      title3 = slidersData.title;
      description3 = slidersData.description;
      bannerImgUrl3 = `${base_url}/uploads/slider/${Id}/${slidersData.image}`;
      document.getElementById(
        "bannerSlider3"
      ).style.backgroundImage = `url(${bannerImgUrl3})`;

      if (slidersData.title || slidersData.description) {
        document.getElementById("bannnerText3").innerHTML = `
        <h2>${title3}</h2>
        <p>${description3}</p>
        `;
      }
    }
    if (slidersData.display_order === "3") {
      title4 = slidersData.title;
      description4 = slidersData.description;
      bannerImgUrl4 = `${base_url}/uploads/slider/${Id}/${slidersData.image}`;
      document.getElementById(
        "bannerSlider4"
      ).style.backgroundImage = `url(${bannerImgUrl4})`;

      if (slidersData.title || slidersData.description) {
        document.getElementById("bannnerText4").innerHTML = `
        <h2>${title4}</h2>
        <p>${description4}</p>
        `;
      }
    }
  });
};

//render whole ui
render = (allData) => {
  sliderRender(allData.data.sliders);
};

//Info render
//Fetch api
fetch("https://icircles.app/api/medicalassociation/home/166")
  .then((responsse) => responsse.json())
  .then((allData) => {
    document.getElementById(
      "tabTitle"
    ).innerHTML = `${allData.data.ms_info.name}`;
    document.getElementById(
      "topHeaderLogo"
    ).src = `https://icircles.app/uploads/micrositeslogo/${allData.data.ms_info.entity_logo}`;
    document.getElementById(
      "sideNavLogo"
    ).src = `https://icircles.app/uploads/micrositeslogo/${allData.data.ms_info.entity_logo}`;

    // console.log(allData.data.ms_info.id);

    document.getElementById("footerId").innerHTML =`@copyright 2022. All Rights Reserved by ${allData.data.ms_info.name}`

    //Social Icons
  let socialIcon = ``;
  if (allData.data.ms_info.fb_url) {
    socialIcon += `<li><a href=${allData.data.ms_info.fb_url}><i class="fa-brands fa-facebook-f"></i></a></li>`;
  }
  if (allData.data.ms_info.linkedin_url) {
    socialIcon += ` <li><a href=${allData.data.ms_info.linkedin_url}><i class="fa-brands fa-linkedin-in"></i></a></li>`;
  }
  document.getElementById("socilaMediaId").innerHTML = socialIcon;
  });


//Fetch api
fetch("https://icircles.app/api/medicalassociation/home/166")
  .then((responsse) => responsse.json())
  .then((allData) => {
    Id = allData.data.ms_id;
    // console.log("Id is " +allData.data.ms_id);
    // console.log(allData);
    // console.log(allData.data.menus);
    // console.log(allData.data.ms_info.id);

    // const objectValues = Object.values(allData.data.ms_info);
    // console.log("objectValues " +objectValues);

    // console.log("object values = " +Object.values(data));
    render(allData);
  });
