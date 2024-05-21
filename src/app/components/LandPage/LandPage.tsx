import "./landpage.css";

export default function LandPage() {
  return (
    <div>
      <div className="top-presentation">
        <section className="presentation">
          <h1>Welcome to a simplified Soft Tech</h1>
        </section>
        <section id="top-paragrafer">
          <p>
            We are a few people working together as a team, developing in the
            simplest way<br /> software solution to business problems
          </p>
        </section>
      </div>
      <div className="middle-presentation">
        <article className="card">
          <div id="Isolated">
            <img
              src="/img/top-view-person-writing-laptop-with-copy-space 1.png"
              alt="Card Image 1"
              width="auto"
              height="auto"
              loading="lazy"
            />
            <h2 className="Title">Design Thinking</h2>
            <p className="Text">
              We understand the problem, plan the execution,<br /> and then
              develop a prototype that fits the required solution.
            </p>
          </div>
          <div className="lado-a-lado">
            <ul>
              <li>
                <img
                  src="/img/Man Working At Night.png"
                  alt="Card Image 2"
                  width="auto"
                  height="auto"
                  loading="lazy"
                />
                <h2 className="Title">Web Applications</h2>
                <p className="Text">
                  Let us make simple and organized the complexity of managing
                  <br /> your business with brand new versatile web
                  applications.
                </p>
              </li>
              <li>
                <img
                  src="/img/Girl With Smartphone.png"
                  alt="Card Image 3"
                  width="auto"
                  height="auto"
                  loading="lazy"
                />
                <h2 className="Title">Mobile Applications</h2>
                <p className="Text">
                  We can deliver the experience of a high availability<br /> in
                  the hands of your customers.
                </p>
              </li>
            </ul>
          </div>
        </article>
      </div>
      <div className="last-presentation">
        <section className="co-working">
          <p>Key Associated companies and projects we&apos;re in</p>
          <ul>
            <li>
              <a href="https://www.pagstar.com" target="_blank" rel="noopener noreferrer">
                <img src="/img/Pagstar.png" alt="Company 1" width="auto" height="auto" loading="lazy" />
              </a>
            </li>
            <li>
              <a href="https://admin.nvpro.com.br/" target="_blank" rel="noopener noreferrer">
                <img src="/img/Nvpro.png" alt="Company 2" width="auto" height="auto" loading="lazy" />
              </a>
            </li>
            <li id="third-img">
              <a href="https://www.remoteagro.com.br/" target="_blank" rel="noopener noreferrer">
                <img src="/img/Remote Agro.png" alt="Company 3" width="auto" height="auto" loading="lazy" />
              </a>
            </li>
          </ul>
          <div id="Isolated-Img">
            <a href="https://www.metareports.com.br" target="_blank" rel="noopener noreferrer">
              <img src="/img/META.png" alt="Company 4" width="auto" height="auto" loading="lazy" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

