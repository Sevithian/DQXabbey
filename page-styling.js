document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");

  if (
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("/index.html")
  ) {
    // Insert the Banner first
    const bannerHTML = `
      <div id="topTitle">
        <h1></h1>
      </div>`;

    // Insert banner after the navbar (globalNav)
    const siteBanner = document.createElement("div");
    siteBanner.innerHTML = bannerHTML.trim();
    container.prepend(siteBanner.firstChild);
  }

  // Now Insert Wrappers inside the Container
  const wrappersHTML = `
    <div id="wrapper">
      <div id="leaf">
        <div id="leaf_L">
          <div id="leaf_R">
            <div id="illust"></div>
          </div>
        </div>
      </div>
      <footer>
        <div id="leaf" style="height: 56px"></div>
      </footer>
    </div>`;

  container.insertAdjacentHTML("beforeend", wrappersHTML.trim());

  // Move all existing content elements (userArea, contentArea, etc.) into #illust
  const illustDiv = container.querySelector("#illust");

  Array.from(container.children).forEach((child) => {
    if (child.id !== "wrapper" && child.id !== "topTitle") {
      illustDiv.appendChild(child);
    }
  });
});
