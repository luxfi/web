const followUsList = [
  {
    logo: "/assets/contact/x.svg",
    link: "https://x.com/luxdefi",
  },
  {
    logo: "/assets/contact/facebook.svg",
    link: "https://facebook.com/luxdefi",
  },
  // {
  //   logo: "/assets/contact/github.svg",
  //   link: "https://github.com/luxfi/xwallet",
  // },
  {
    logo: "/assets/contact/instagram.svg",
    link: "https://instagram.com/luxdefi",
  },
  {
    logo: "/assets/contact/linkedin.svg",
    link: "https://linkedin.com/company/luxdefi",
  },
];

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2 className="title">Contact Us</h2>
      <div className="card">
        <div className="email-box">
          <h3 className="sub-title">Email</h3>
          <div className="email">
            <div>
              Customer Support:{" "}
              <a href="mailto:z@lux.network">z@lux.network</a>
            </div>
            <div>
              Business: <a href="mailto:hi@lux.finance">hi@lux.finance</a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="sub-title">Follow Us</h3>
          <div className="follow-us">
            {followUsList.map((e) => (
              <a href={e.link} target="_blank" rel="noreferrer">
                <img key={e.link} src={e.logo} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
