// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (!document.querySelector("#container").classList.contains("no-layout")) {
    // Inserting your header and footer:
    document
      .querySelector("#container")
      .insertAdjacentHTML("afterbegin", headerEl);
    document
      .querySelector("#container")
      .insertAdjacentHTML("beforeend", footerEl);

    // Inserting sidebars:
    const wrapperElement = document.querySelector("main"); // you might have to change this selector to something like .my-wrapper
    if (wrapperElement) {
      wrapperElement.insertAdjacentHTML("afterbegin", sidebarEl1);
      wrapperElement.insertAdjacentHTML("beforeend", sidebarEl2);
    }

    initActiveLinks();
  }

  // add your own javascript code here...
});

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el
      .getAttribute("href")
      .replace(".html", "")
      .replace("/public", "");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href
    .replace("http://", "")
    .replace("https://", "")
    .replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
  	 <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual.
const headerEl = `
      <header>
        <h1>the digital home of funtimechicafan !!!</h1>
      <nav>
        <ul>
          <li class="home">
            <a href="/index.html">home</a>
          </li>
          <li class="about">
            <a href="/about.html">about me</a>
          </li>
          <li class="diary">
            <a href="/diary.html">my diary</a>
          </li>
          <li class="fun">
            <a href="/fun.html">fun</a>
          </li>
          <li class="misc">
            <a href="/misc.html">misc</a>
          </li>
        </ul>
      </nav>
            </header>
                 <aside>
        <iframe
          width="131"
          height="131"
          style="border: none"
          src="https://nvlk.dimden.dev/"
          name="neolink"
        ></iframe>
        <p>⏔⏔⏔ ꒰ ᧔ෆ᧓ ꒱ ⏔⏔⏔</p>
        <p>
          consider signing my guestbook!
          <a href="https://funtimechicafan3274.atabook.org/"
            ><img src="${nesting}/assets/guestbook.gif" alt="Please sign my guestbook!"
          /></a>
        </p>
        <p>⏔⏔⏔ ꒰ ᧔ෆ᧓ ꒱ ⏔⏔⏔</p>
        <p>
          you are the
          <script
            type="text/javascript"
            src="https://counter.websiteout.com/js/33/12/0/1"
          ></script>
          visitor!
        </p>
        <p>⏔⏔⏔ ꒰ ᧔ෆ᧓ ꒱ ⏔⏔⏔</p>
        <p>
          cliques <br /><a href="http://cliqued.wings.nu/">
            NPC <img src="${nesting}/assets/pink.png" />
          </a>
          funtime chica<br />
          <a href="http://cliqued.wings.nu/"
            >OTF <img src="${nesting}/assets/pink2.png"
          /></a>
          fnaf<br />

          <a href="https://funnyorangecat.neocities.org/funnyorangecat/cliques"
            ><i>sweet tooth</i></a
          >
          <img src="${nesting}/assets/sthny4.gif" /><br />
          <b>kiki</b> is a
          <a href="http://seafare.neocities.org/cliques">master</a> of the
          <span style="color: #f07ab5">f</span
          ><span style="color: #ee6db6">a</span
          ><span style="color: #ec61b7">i</span
          ><span style="color: #eb54b8">r</span
          ><span style="color: #e948b9">y</span> type!
          <img style="vertical-align: middle" src="${nesting}/assets/fairy.png" />
        </p>
      </aside>
`;

// Insert your footer HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a footer.
const footerEl = `
      <footer>
        <p>
          <img
            src="${nesting}/assets/bestviewedcomp.gif"
            alt="Best viewed on computer!"
          />
          <a href="https://fnafworldfreeversion.straw.page/"
            ><img src="${nesting}/assets/scottgames.gif" alt="I like FNaF" />
          </a>
          <a href="mailto:funtimechicafan3274@gmail.com"
            ><img
              src="${nesting}/assets/email.gif"
              alt="Email me with any questions or comments!"
            />
          </a>
          <img src="${nesting}/assets/100-percent-human.png" alt="100% human! 0% AI!" />
        </p>
      </footer>
`;

// Insert your sidebar HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.
const sidebarEl1 = `

`;

// Insert your sidebar HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.
const sidebarEl2 = `
`;
