import { FC } from "react";
import ImageSplitter from "../../utils/ImageSplitter";

interface ContentProps {
  imgmain: string;
  imgsection: string;
  //   postby: string;
  //   date: Date;
  //   Tags: string;
}

const Content: FC<ContentProps> = ({ imgmain, imgsection }) => {
  return (
    <>
      {/* <img src={imgmain} alt="image" className="img-fluid" /> */}
      <ImageSplitter imageUrls={imgmain.substring(1, imgmain.length - 1).split(", ")} nameClass={"img-fluid"} />
      <h4>The lion is a large cat of the genus Panthera native</h4>
      <ul className="list list--row flex-wrap classNameic-blog__meta">
        <li>
          Post By:
          <a href="#" className="t-link classNameic-blog__meta-link">
            Tomas Wood
          </a>
        </li>
        <li>
          Post On:
          <a href="#" className="t-link classNameic-blog__meta-link">
            22 Jan 2022
          </a>
        </li>
        <li>
          Tag:
          <a href="#" className="t-link classNameic-blog__meta-link">
            Birds
          </a>
        </li>
      </ul>
      <p className="mt-4 mb-5">
        Suspendisse pulvinar, augue ac venenatis condimentum, sem libero
        volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas
        vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant
        morbi tristique. Quisque id mi. Ut tincidunt tincidunt erat. Etiam
        feugiat lorem non metus. Vestibulum dapibus nunc ac augue. Curabitur
        vestibulum aliquam leo. Praesent egestas neque eu enim. In hac habitasse
        platea dictumst.
      </p>
      <blockquote className="blockquote custom--blockquote">
        Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum."
      </blockquote>
      <div className="mt-5">
        <div className="row g-4">
          <div className="col-lg-6">
            <img src={imgsection} style={{width: '5rem'}} alt="image" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <div className="ps-xl-4">
              <h5 className="mt-lg-0">Join Us To Enjoy:</h5>
              <ul className="list list--base">
                <li>More than one million bright and dazzling</li>
                <li>A brand new 26 foot tall LED holiday tree</li>
                <li>Animal Appearances</li>
                <li>Arts & crafts (limited space available)</li>
                <li>Appearances by Santa until December 23</li>
                <li>Letters to Santa</li>
                <li>Hot chocolate and cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="my-5">
        Suspendisse pulvinar, augue ac venenatis condimentum, sem libero
        volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas
        vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant
        morbi tristique. Quisque id mi. Ut tincidunt tincidunt erat. Etiam
        feugiat lorem non metus. Vestibulum dapibus nunc ac augue. Curabitur
        vestibulum aliquam leo. Praesent egestas neque eu enim. In hac habitasse
        platea dictumst.
      </p>
    </>
  );
};

export default Content;
