import React from "react";
import ContentLoader from "react-content-loader";


const Placeholder: React.FC= (props) => (
  <ContentLoader
    speed={2}
    width={370}
    height={660}
    viewBox="0 0 350 660"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="367" rx="10" ry="10" width="350" height="46" />
    <circle cx="175" cy="160" r="151" />
    <rect x="0" y="442" rx="10" ry="10" width="350" height="120" />
    <rect x="0" y="586" rx="10" ry="10" width="100" height="50" />
    <rect x="146" y="586" rx="24" ry="24" width="200" height="50" />
  </ContentLoader>
);

export default Placeholder;
