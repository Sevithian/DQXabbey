// nav.js
document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;

  const navbarHTML = `
    <div id="globalNav" class="mainNav">
      <nav class="header">
        <ul>
          <li class="leftmost"><a href="/index.html" data-match="/index.html">Home</a></li>
          <li class="has-subnav">
            <a href="/pages/getting_started.html" data-match="/pages/getting_started.html">Getting Started</a>
            <ul class="subnav">
              <li><a href="/pages/getting_started.html#account">Setting up a Square-Enix Account</a></li>
              <li><a href="/pages/getting_started.html#trial">Activating the Windows Free Trial</a></li>
              <li><a href="/pages/getting_started.html#download">Downloading and Installing DQX</a></li>
              <li><a href="/pages/getting_started.html#client">Initializing the Client and Config</a></li>
              <li><a href="/pages/getting_started.html#vpn">VPN Setup Guide (Non US only)</a></li>
            </ul>
          </li>
          <li class="has-subnav">
            <a href="/pages/resources.html" data-match="/pages/resources">Resources</a>
            <ul class="subnav" id="resourcesSubnav"></ul>
          </li>
          <li class="has-subnav">
            <a href="/pages/utilities.html" data-match="/pages/utilities.html">Utilities</a>
            <ul class="subnav">
              <li><a href="https://dqx-translation-project.github.io/">Setting up Translation Utilities</a></li>
            </ul>
          </li>
          <li class="has-subnav">
            <a href="/pages/community.html" data-match="/pages/community.html">Community</a>
            <ul class="subnav">
              <li><a href="/pages/community.html#worldwide">DQX Worldwide</a></li>
              <li><a href="/pages/community.html#dragonsden">Dragon's Den</a></li>
              <li><a href="/pages/community.html#teammoon">Team Moon</a></li>
              <li><a href="/pages/community.html#guardians">Guardians of Astoltia</a></li>
            </ul>
          </li>
          <li class="has-subnav rightmost">
            <a href="/pages/faq.html" data-match="/pages/faq.html">FAQ</a>
            <ul class="subnav">
              <li><a href="/pages/faq.html#general">General FAQ</a></li>
              <li><a href="/pages/faq.html#setup">Setup FAQ</a></li>
              <li><a href="/pages/faq.html#game">In-Game FAQ</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>`;

  const container = document.createElement("div");
  container.innerHTML = navbarHTML.trim();
  document.body.prepend(container.firstChild);

  // Populate Resources submenu from resourcesList
  const resourcesSubnav = document.getElementById("resourcesSubnav");
  resourcesList.forEach((resource) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = resource.path;
    link.textContent = resource.title;
    li.appendChild(link);
    resourcesSubnav.appendChild(li);
  });

  // Highlight active section
  const links = document.querySelectorAll("#globalNav nav > ul > li > a");
  links.forEach((link) => {
    const matchPath = link.getAttribute("data-match");

    const isExactMatch = currentPath === matchPath;
    const isDirectoryMatch =
      matchPath.endsWith("/") && currentPath.startsWith(matchPath);
    const isResourcesMatch =
      matchPath === "/pages/resources" &&
      (currentPath === "/pages/resources.html" ||
        currentPath.startsWith("/pages/resources/"));

    if (isExactMatch || isDirectoryMatch || isResourcesMatch) {
      link.style.backgroundColor = "green"; // Customize as needed
      link.style.color = "white";
    }
  });
});
