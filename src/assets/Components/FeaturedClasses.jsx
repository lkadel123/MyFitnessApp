import React from 'react';
import VideoComponent from './VedioAdd';
import './FeaturedClasses.css';

const FeaturedClasses = () => {
  return (
    <div className="clearfix">
      <div className="container">
        <div className="row ">
          <div className="col-md-5 col-sm-12 text-left heading-wrap  pt-5 mt-4">
            <h2 className="mt-0">Featured Classes</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
          </div>
          <div className="col-md-7 col-sm-12 align-self-center text-md-right">
            <VideoComponent/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedClasses;