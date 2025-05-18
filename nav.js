document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = `
    <div id="globalNav" class="mainNav">
      <nav class="header">
        <ul>
          <li class="leftmost"><a href="/index.html">Home</a></li>
          <li class="has-subnav">
            <a href="/pages/getting_started.html">Getting Started</a>
            <ul class="subnav">
              <li><a href="/pages/getting_started.html#account">Setting up a Square-Enix Account</a></li>
              <li><a href="/pages/getting_started.html#trial">Activating the Windows Free Trial</a></li>
              <li><a href="/pages/getting_started.html#download">Downloading and Installing DQX</a></li>
              <li><a href="/pages/getting_started.html#client">Initializing the Client and Config</a></li>
              <li><a href="/pages/getting_started.html#vpn">VPN Setup Guide (Non US only)</a></li>
            </ul>
          </li>
          <li class="has-subnav">
            <a href="/pages/resources.html">Resources</a>
            <ul class="subnav">
              <li><a href="/pages/resources/payment_guide.html">Purchasing and Subscription Guide</a></li>
              <li><a href="/pages/resources/hiroba_guide.html">Hiroba and Cash Shop Guide</a></li>
              <li><a href="/pages/resources/casino_guide.html">Efficient Casino Gambling Guide</a></li>
              <li><a href="/pages/resources/otp_guide.html">One-Time-Password Setup Guide</a></li>
            </ul>
          </li>
          <li class="has-subnav">
            <a href="/pages/utilities.html">Utilities</a>
            <ul class="subnav">
              <li><a href="https://dqx-translation-project.github.io/">Setting up Translation Utilities</a></li>
            </ul>
          </li>
          <li class="has-subnav">
            <a href="/pages/community.html">Community</a>
            <ul class="subnav" id="community">
              <li><a href="/pages/community.html#worldwide">DQX Worldwide</a></li>
              <li><a href="/pages/community.html#dragonsden">Dragon's Den</a></li>
              <li><a href="/pages/community.html#teammoon">Team Moon</a></li>
              <li><a href="/pages/community.html#guardians">Guardians of Astoltia</a></li>
            </ul>
          </li>
          <li class="has-subnav rightmost">
            <a href="/pages/faq.html">FAQ</a>
            <ul class="subnav" style="width: 150px">
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
});
