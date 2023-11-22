import React from "react";
import "./section7.scss";
function Section7() {
  return (
    <div className="section7">
      <div className="map">
        <iframe
          className="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24079.17495638111!2d-74.11532844279638!3d41.027512175107425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e440473470d7%3A0xcaf503ca2ee57958!2sSaddle%20River%2C%20NJ%2007458%2C%20USA!5e0!3m2!1sen!2s!4v1676731189402!5m2!1sen!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Section7;
