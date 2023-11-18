import "./style.css";
const Hero = () => {
  return (
    <section className="Hero--container aic " data-scroll data-scroll-id="hero">
      {/*  */}
      <span
        className="hero-title d1 disappear aic"
        data-scroll
        data-scroll-class="appear"
        data-scroll-repeat
      >
        Rodrigo Andree, UX/UI Developer
      </span>
      {/*  */}
      <div className="hero-content aic ">
        {/*  */}
        <div
          className="hero-content-box hero-content-box-A disappear3"
          data-scroll
          data-scroll-class="appear"
          data-scroll-repeat
        >
          <video
            autoPlay
            muted
            loop
            className="hero-content-box-video"
            src="https://player.vimeo.com/external/568145204.sd.mp4?s=94c95b49fc3ed4d7d41b3244e7998725f8afc76c&profile_id=165&oauth2_token_id=57447761"
          />
        </div>
        {/*  */}
        <div
          className="hero-content-double aic disappear4"
          data-scroll
          data-scroll-class="appear"
          data-scroll-repeat
        >
          <div
            className="hero-content-box hero-content-box-B"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-repeat
          >
            <video
              autoPlay
              muted
              loop
              className="hero-content-box-video"
              src="https://player.vimeo.com/progressive_redirect/playback/798890733/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=2db8145f096d4afda6bafbced9d180de988058d98b4505776d09636a1b3773b9"
            />
          </div>
          <div
            className="hero-content-box hero-content-box-C"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-repeat
          >
            <video
              autoPlay
              muted
              loop
              className="hero-content-box-video"
              src="https://player.vimeo.com/progressive_redirect/playback/792592328/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=5c070d4a2bb7c9ee5fe30a1f81607c62e7ac8858ff008581948ac147d24614a8"
            />
          </div>
        </div>
        {/*  */}
        <div
          className="hero-content-double aic disappear5"
          data-scroll
          data-scroll-class="appear"
          data-scroll-repeat
        >
          <div className="hero-content-box hero-content-box-C">
            <video
              autoPlay
              muted
              loop
              className="hero-content-box-video"
              src="https://player.vimeo.com/progressive_redirect/playback/691304806/rendition/360p?loc=external&oauth2_token_id=57447761&signature=077fefc29dbd796a66ed8deeaeb9ff495b0a071b6eca776f507cef15424d3d28"
            />
          </div>
          <div className="hero-content-box hero-content-box-D">
            <video
              autoPlay
              muted
              loop
              className="hero-content-box-video"
              src="https://player.vimeo.com/external/560138399.sd.mp4?s=4ae6f18a4d755cc137ab982407a58602025d92fd&profile_id=164&oauth2_token_id=57447761"
            />
          </div>
        </div>
        {/*  */}
        <div
          className="hero-content-box hero-content-box-A disappear6"
          data-scroll
          data-scroll-class="appear"
          data-scroll-repeat
        >
          <video
            autoPlay
            muted
            loop
            className="hero-content-box-video"
            // src="https://player.vimeo.com/external/592804480.sd.mp4?s=b369c244e795271528dd6e384f0430b3cf6b597b&profile_id=164&oauth2_token_id=57447761"

            src="https://player.vimeo.com/progressive_redirect/playback/811839511/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=84795a535d19a9524464c6110fd650e6715096c1bd46a22945ac7e5a655aa5a0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
