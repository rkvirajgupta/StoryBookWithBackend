import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="ddyymm">
        <div className="Footercontainer-1">
          <h2 className="Footer-11">
            {" "}
            <b> GET THE DETAIL'S OF TOP STORIE'S </b>
          </h2>
          <div className="Footer-12">
            <div className="Footer-13">
              <input
                className="Footer-14"
                type="text"
                placeholder="Enter your email address"
              />
              <button className="Footer-15">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="Footercontainer-2">
          <div className="Footer-21">
            <h4 className="Footer-22"> WHO WE ARE</h4>
            <h4 className="Footer-22">FREQUENTLY ASKED QUESTIONS</h4>
            <h4 className="Footer-22">CONTACT US</h4>
          </div>
          <div className="Footer-23">
            <li>
              <img
                src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-facebook-512.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://cdn0.iconfinder.com/data/icons/phosphor-thin-vol-3/256/instagram-logo-thin-128.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-256.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Youtube_glyph_svg-256.png"
                alt=""
              />
            </li>
          </div>
          <div className="Footer-24">
            <div>
              <li>© 2022 </li>
              <li> |</li>
              <li>Privacy Policy</li>
              <li>|</li>
              <li>Terms & Conditions</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
