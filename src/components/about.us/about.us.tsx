import './about.us.scss';

export function AboutUS() {
  return (
    <div className="about-us-container">
      <div className="image-about">
        <img
          src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106107/about_kiglun.png"
          alt="banner logo smoke"
          className="banner-logo-smoke"
          style={{ width: '100%', height: '' }}
        />
      </div>
      <div className="text-container">
        <div className="text-about-us">
          <h3 className="title-about-us">ABOUT US</h3>
          <p>
            We are a specialized clinic dedicated to enhancing your beauty from
            head to toe. With a team of experts in hair care, nails, eyebrows,
            and lashes, we are committed to highlighting your unique style. Our
            mission is to provide personalized treatments that make you feel
            radiant and confident. At Beauty Care Clinic, we merge the latest
            technology with innovative techniques to offer unparalleled quality
            services. Trust us to rejuvenate your image and leave a lasting
            impression. Discover the art of beauty with us!
          </p>
        </div>
      </div>
    </div>
  );
}
