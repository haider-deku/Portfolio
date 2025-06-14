import React from "react";
export default function Contact() { 
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "02a4fa8f-c9ce-4ebe-a61c-36241619f591");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
        <div className="Contact">
            <div className="form">
                <form onSubmit={onSubmit}>
                <div className="l1">
                    <div>
                    <label>
                        Name <br />
                        <input type="text" name="first_name" placeholder="Your Name" required />
                    </label>
                    </div>
                    <div>
                    <label>
                        Family Name <br />
                        <input type="text" name="last_name" placeholder="Your Surname" required />
                    </label>
                    </div>
                </div>
                <div className="ad">
                    <label>
                    Adresse <br />
                    <input type="email" name="email" placeholder="Your email address" required />
                    </label>
                </div>
                <div className="mess">
                    <label>
                    Write your message here: <br />
                    <textarea name="message" placeholder="Your message here" required></textarea>
                    </label>
                </div>
                <button type="submit">Send</button>
                </form>

             <span>{result}</span>
            </div>
            <div className="p2">
                <div className='desc'>
                        <p><span>Téléphone :</span> <br/> 20348338</p>
                        <p><span>E-mail :</span> <br/> haiderrrrrr492@gmail.com</p>
                        <p><span>Adresse :</span> <br/> Megrine Cheker N=°4 <br/> 2024 BenArous, Tunis</p>
                </div>
                <div className="link">
                            <a href="https://github.com/haider-deku" target="_blank" rel="noreferrer">
                                    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="32"
      height="32"
      viewBox="0 0 256 256"
      style={{ fill: "#000000" }}
    >
      <g
        fill="#000000"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <g transform="scale(8,8)">
          <path d="M16,4c-6.62891,0 -12,5.37109 -12,12c0,5.30078 3.4375,9.80078 8.20703,11.38672c0.60156,0.10938 0.82031,-0.25781 0.82031,-0.57812c0,-0.28516 -0.01172,-1.03906 -0.01562,-2.03906c-3.33984,0.72266 -4.04297,-1.60937 -4.04297,-1.60937c-0.54687,-1.38672 -1.33203,-1.75781 -1.33203,-1.75781c-1.08984,-0.74219 0.08203,-0.72656 0.08203,-0.72656c1.20313,0.08594 1.83594,1.23438 1.83594,1.23438c1.07031,1.83594 2.80859,1.30469 3.49219,1c0.10938,-0.77734 0.42188,-1.30469 0.76172,-1.60547c-2.66406,-0.30078 -5.46484,-1.33203 -5.46484,-5.92969c0,-1.3125 0.46875,-2.38281 1.23438,-3.22266c-0.12109,-0.30078 -0.53516,-1.52344 0.11719,-3.17578c0,0 1.00781,-0.32031 3.30078,1.23047c0.95703,-0.26562 1.98438,-0.39844 3.00391,-0.40234c1.01953,0.00391 2.04688,0.13672 3.00391,0.40234c2.29297,-1.55078 3.29688,-1.23047 3.29688,-1.23047c0.65625,1.65234 0.24609,2.875 0.12109,3.17578c0.76953,0.83984 1.23047,1.91016 1.23047,3.22266c0,4.60938 -2.80469,5.62109 -5.47656,5.92188c0.42969,0.36719 0.8125,1.10156 0.8125,2.21875c0,1.60547 -0.01172,2.89844 -0.01172,3.29297c0,0.32031 0.21484,0.69531 0.82422,0.57813c4.76563,-1.58984 8.19922,-6.08594 8.19922,-11.38672c0,-6.62891 -5.37109,-12 -12,-12z" />
        </g>
      </g>
    </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/haider-youzbechi-8b69bb241" target="_blank" rel="noreferrer"> 
                                <svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="30"
  height="30"
  viewBox="0 0 256 256"
  style={{ fill: "000000" }}
>
  <g
    fill="000000"
    fillRule=""
    stroke="none"
    strokeWidth="1"
    strokeLinecap="butt"
    strokeLinejoin="miter"
    strokeMiterlimit="10"
    strokeDasharray=""
    strokeDashoffset="0"
    fontFamily="none"
    fontWeight="none"
    fontSize="none"
    textAnchor="none"
    style={{ mixBlendMode: "normal" }}
  >
    <g transform="scale(8.53333,8.53333)">
      <path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM10.954,22h-2.95v-9.492h2.95zM9.449,11.151c-0.951,0 -1.72,-0.771 -1.72,-1.72c0,-0.949 0.77,-1.719 1.72,-1.719c0.948,0 1.719,0.771 1.719,1.719c0,0.949 -0.771,1.72 -1.719,1.72zM22.004,22h-2.948v-4.616c0,-1.101 -0.02,-2.517 -1.533,-2.517c-1.535,0 -1.771,1.199 -1.771,2.437v4.696h-2.948v-9.492h2.83v1.297h0.04c0.394,-0.746 1.356,-1.533 2.791,-1.533c2.987,0 3.539,1.966 3.539,4.522z"></path>
    </g>
  </g>
</svg>
 
                            </a>
                </div>
            </div>
        </div>
     );
}
 
