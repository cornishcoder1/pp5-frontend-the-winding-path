import React from "react";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import styles from "../../styles/Profile.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";

const WhoToFollow = ( {mobile} ) => {
    const { popularProfiles } = useProfileData();

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularProfiles.results.length ? (
        <>
          <p className={styles.WhoToFollow}>Who to follow</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            popularProfiles.results.map((profile) => (
                <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default WhoToFollow