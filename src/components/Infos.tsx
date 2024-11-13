import { TInfos } from "../lib/types";

/* type InfosProps = {
  userData: TInfos | null;
}; */

export default function Infos({ userData }: { userData: TInfos | null }) {
  if (!userData) {
    return <p>Enter a github username...</p>;
  }

  return (
    <div className="infos">
      <picture>
        <img src={`https://github.com/${userData.login}.png`} alt="" />
      </picture>
      <div className="text">
        <div className="personal__infos">
          <div className="name">
            <h2>{userData.name ?? "Name not available"}</h2>
            <p>{`@${userData.login}`}</p>
          </div>
          <div className="date">{`Joined ${new Date(
            userData.created_at
          ).toLocaleDateString()}`}</div>
        </div>

        <p className="bio">{userData.bio ?? "No bio available"}</p>

        <div className="repos__follow">
          <div className="rf__info">
            <h3>Repos</h3>
            <p>{userData.public_repos}</p>
          </div>
          <div className="rf__info">
            <h3>Followers</h3>
            <p>{userData.followers}</p>
          </div>
          <div className="rf__info">
            <h3>Following</h3>
            <p>{userData.following}</p>
          </div>
        </div>

        <div className="location__links">
          <div className="ll__info">
            <img src="src\assets\icon-location.svg" alt="" />
            <p>{userData.location ?? "Location not available"}</p>
          </div>
          <div className="ll__info">
            <img src="src\assets\icon-twitter.svg" alt="" />
            <p>{userData.twitter_username ?? "Twitter not available"}</p>
          </div>
          <div className="ll__info">
            <img src="src\assets\icon-website.svg" alt="" />
            {userData.blog ? (
              <a href={userData.blog}>{userData.blog}</a>
            ) : (
              <p>Website not available</p>
            )}
          </div>
          <div className="ll__info">
            <img src="src\assets\icon-company.svg" alt="" />
            <a href={userData.html_url}>{userData.html_url}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
