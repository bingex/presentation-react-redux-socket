export const slides = [
  {
    id: 1,
    title: 'Perfomance goals',
    html: (
      `
      <div>
        <h4 class="slide-title">Our goal isn't to make your site perform fast on any specific device, it's to ultimately make users happy. Focus on user.</h4>

        <ul class="slide-description">
          <li>Deliver interactive content in under 1 second. If you don't, user attention wanders, and their perception of dealing with the task is broken.</li>
          <li>You have 100ms to respond to user input before they notice a lag. This applies to most inputs, such as clicking buttons, toggling form controls, or starting animations. This does not apply to touch drags or scrolls.</li>
          <li>For actions that take longer than 500ms to complete, always provide feedback.</li>
        </ul>
      </div>
    `
    ),
    img: '/images/slide.png'
  },
  {
    id: 2,
    title: 'Eliminating unnecessary downloads',
    html: (
      `
      <div>
        <h4 class="slide-title">To deliver great performance we need to optimize delivery of each and every byte!</h4>

        <ul class="slide-description">
          <li>Inventory your own assets and third-party assets on your pages.</li>
          <li>Measure the performance of each asset: its value and its technical performance.</li>
          <li>Determine if the resources are providing sufficient value.</li>
        </ul>
      </div>
    `
    ),
    img: '/images/slide.png'
  },
  {
    id: 3,
    title: 'Optimizing resources',
    html: (
      `
      <div>
        <h4 class="slide-title">The best thing you can do to improve page-load speed is to minimize the overall download size by optimizing and compressing the remaining resources.</h4>

        <ul class="slide-description">
          <li>Minify your code.</li>
          <li>Uglify your code.</li>
          <li>Use GZIP.</li>
        </ul>
      </div>
    `
    ),
    img: '/images/slide.png'
  },
  {
    id: 4,
    title: 'Optimizing images',
    html: (
      `
      <div>
        <h4 class="slide-title">Images often account for most of the downloaded bytes on a web page and also often occupy a significant amount of visual space.</h4>

        <ul class="slide-description">
          <li>Leverage CSS3 effects where possible</li>
          <li>Use web fonts instead of encoding text in images</li>
          <li>Prefer vector formats: vector images are resolution and scale independent, which makes them a perfect fit for the multi-device and high-resolution world.</li>
          <li>Minify and compress with GZIP SVG assets.</li>
          <li>Use raster image optimization tools (gifsicle - create and optimize GIF images, jpegtran - optimize jpeg images, optipng - lossless PNG optimization, pngquant - lossy PNG optimization). Experiment with it.</li>
          <li>Use responsive images.</li>
        </ul>
      </div>
    `
    ),
    img: '/images/slide.png'
  },
  {
    id: 5,
    title: 'Optimizing css',
    html: (
      `
      <div>
        <h4 class="slide-title">Make sure to keep your CSS lean, deliver it as quickly as possible, and use media types and queries to unblock rendering.</h4>

        <ul class="slide-description">
          <li>CSS is a render blocking resource. Get it to the client as soon and as quickly as possible to optimize the time to first render.</li>
          <li>Media types and media queries allow us to mark some CSS resources as non-render blocking. (<link href="other.css" rel="stylesheet" media="(min-width: 40em)">).</li>
          <li>The browser downloads all CSS resources, regardless of blocking or non-blocking behavior.</li>
        </ul>
      </div>
    `
    ),
    img: '/images/slide.png'
  },
  {
    id: 6,
    title: 'JavaScript optimization',
    html: (
      `
      <div>
        <h4 class="slide-title">When it comes to Javascript there are some best practices to always keep in mind.</h4>

        <ul class="slide-description">
          <li>Move your scripts to the bottom of the page right before your </body> tag.</li>
          <li>Use the async or defer directive to avoid render blocking.</li>
          <li>Concatenate your JS files into one file (with HTTP/2 this is no longer as important).</li>
          <li>Inline your javascript if it is small.</li>
        </ul>
      </div>
    `
    ),
    img: '/images/slide.png'
  },
  {
    id: 7,
    title: 'Rendering perfomance',
    description: [
      'Avoid setTimeout or setInterval for visual updates; always use requestAnimationFrame instead',
      'Reduce the complexity of your selectors; use a class-centric methodology like BEM.',
      'Reduce the number of elements on which style calculation must be calculated.'
    ],
    html: (
      `
      <div>
        <h4 class="slide-title">Pages should not only load quickly, but also run well; scrolling should be stick-to-finger fast, and animations and interactions should be silky smooth.</h4>

        <ul class="slide-description">
          <li>Avoid setTimeout or setInterval for visual updates; always use requestAnimationFrame instead.</li>
          <li>Reduce the complexity of your selectors; use a class-centric methodology like BEM.</li>
          <li>Reduce the number of elements on which style calculation must be calculated.</li>
        </ul>
      </div>
    `
    ),
    img: '/images/slide.png'
  },
  {
    id: 8,
    title: 'Tools',
    html: (
      `
      <div>
        <h4 class="slide-title">Tools to help you with perfomance</h4>

        <ul class="slide-description">
          <li>Google Chrome DevTools.</li>
          <li>Google PageSpeed: https://developers.google.com/speed/pagespeed.</li>
          <li>Google Chrome Lighthouse: https://github.com/GoogleChrome/lighthouse.</li>
          <li>Other tools: https://www.pingdom.com, https://gtmetrix.com</li>
        </ul>
      </div>
    `
    ),
    img: '/images/slide.png'
  },
  {
    id: 9,
    title: '',
    html: (
      `
      <ul class="slide-description">
        <li class="dev">
          <img class="dev-pic" width="150" src="/images/ilya.jpeg" alt="Ilya Grigorik"/>
          <span class="dev-title">Ilya Grigorik: Google Developer Advocate and Web Perf Guru (https://twitter.com/igrigorik)</span>
        </li>
        <li class="dev">
          <img class="dev-pic" width="150" src="/images/paul.webp" alt="Paul Lewis"/>
          <span class="dev-title">Paul Lewis: Google Design and Perf Advocate (https://twitter.com/aerotwist)</span>
        </li>
        <li class="dev">
          <img class="dev-pic" width="150" src="/images/addy.jpg" alt="Addy Osmani"/>
          <span class="dev-title">Addy Osmani: work on Google Chrome, proggresive web app guru (https://twitter.com/addyosmani)</span>
        </li>
      </ul>
    `
    ),
    img: ''
  }
];
