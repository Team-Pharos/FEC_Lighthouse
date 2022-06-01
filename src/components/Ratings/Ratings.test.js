import renderer from 'react-test-renderer';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { render, fireEvent, screen } from '@testing-library/react';
import ReviewTile from './ReviewTile.jsx';
import RatingsBreakdown from './RatingBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import RatingsReviews from './RatingsReviews.jsx';
import AddStarRating from './AddStarRating.jsx';


describe('Review Tile', () => {
  it('renders ReviewTile correctly', () => {
    let review = {
      review_id: 12345,
      rating: 3,
      summary: 'AWESOME',
      body: `This was great! I'm going to type even more because I want this to try to activate the truncBody conditional rendering so that more test points are covered. If that if Statement can be hit it would help immensely. Hopefully this is enough to hit that mark.`,
      photos: ['http://imgur/img/183y58']
    }

    const tree = renderer
      .create(< ReviewTile review={review} />)
      .toJSON();

    expect(tree).toMatchInlineSnapshot(`
<div
  className="sc-hKMtZM hsEPoU"
>
  <span
    className="sc-iBkjds glkhnv"
  >
    <svg
      fill="currentColor"
      height="1em"
      stroke="currentColor"
      strokeWidth="0"
      style={
        Object {
          "color": undefined,
        }
      }
      viewBox="0 0 16 16"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
      />
    </svg>
  </span>
  <span
    className="sc-iBkjds glkhnv"
  >
    <svg
      fill="currentColor"
      height="1em"
      stroke="currentColor"
      strokeWidth="0"
      style={
        Object {
          "color": undefined,
        }
      }
      viewBox="0 0 16 16"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
      />
    </svg>
  </span>
  <span
    className="sc-iBkjds glkhnv"
  >
    <svg
      fill="currentColor"
      height="1em"
      stroke="currentColor"
      strokeWidth="0"
      style={
        Object {
          "color": undefined,
        }
      }
      viewBox="0 0 16 16"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
      />
    </svg>
  </span>
  <span
    className="sc-bczRLJ fFnuja"
  >
    <span />
     
     
    May 31, 2022
  </span>
  <div>
    <h4>
      AWESOME
    </h4>
  </div>
  <div>
    <div
      className="sc-dkzDqf jeFvdf"
    >
      <p>
        This was great! I'm going to type even more because I want this to try to activate the truncBody conditional rendering so that more test points are covered. If that if Statement can be hit it would help immensely. Hopefully this is enough to hit that mark.
      </p>
    </div>
  </div>
  <div />
  <div>
    <p />
  </div>
  <span
    onClick={[Function]}
  >
    Helpful? 
    0
  </span>
  <span
    className="sc-bczRLJ fFnuja"
    onClick={[Function]}
  >
    report
  </span>
</div>
`);
  });
});


describe('Review Breakdown', () => {

  it('calculateOverallRating correctly gets average', () => {
    let ratings = {
      "1": "1",
      "2": "2",
      "3": "1",
      "4": "18",
      "5": "12"
    }

    let calculateOverallRating = (ratingsObject) => {
      //let average = 0;
      let numVotes = 0;
      let totalScore = 0;

      for (let rating in ratingsObject) {
        numVotes += Number(ratingsObject[rating]);
        totalScore += rating * ratingsObject[rating];
      }
      return (numVotes === 0) ? 5 : (totalScore / numVotes).toFixed(1);
    };

    expect(calculateOverallRating(ratings)).toBe('4.1');
  });

  it('renders Breakdown correctly', () => {
    let metaData = {
      "product_id": "37313",
      "ratings": {
        "1": "1",
        "2": "2",
        "3": "1",
        "4": "18",
        "5": "12"
      },
      "recommended": {
        "false": "5",
        "true": "29"
      },
      "characteristics": {
        "Fit": {
          "id": 125036,
          "value": "2.4375000000000000"
        },
        "Length": {
          "id": 125037,
          "value": "2.8125000000000000"
        },
        "Comfort": {
          "id": 125038,
          "value": "2.8437500000000000"
        },
        "Quality": {
          "id": 125039,
          "value": "3.4375000000000000"
        }
      }
    }

    const tree = renderer
      .create(< RatingsBreakdown metaData={metaData} productId={37313} ratings={metaData.ratings} />)
      .toJSON();

    expect(tree).toMatchInlineSnapshot(`
<div
  className="sc-eCYdqJ jWlxCE"
>
  <h2>
     
    4.1
     
  </h2>
  <div
    className="sc-ftvSup kslLaj"
  >
    <span>
      <svg
        fill="currentColor"
        height="1em"
        stroke="currentColor"
        strokeWidth="0"
        style={
          Object {
            "color": undefined,
          }
        }
        viewBox="0 0 16 16"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
        />
      </svg>
    </span>
    <span>
      <svg
        fill="currentColor"
        height="1em"
        stroke="currentColor"
        strokeWidth="0"
        style={
          Object {
            "color": undefined,
          }
        }
        viewBox="0 0 16 16"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
        />
      </svg>
    </span>
    <span>
      <svg
        fill="currentColor"
        height="1em"
        stroke="currentColor"
        strokeWidth="0"
        style={
          Object {
            "color": undefined,
          }
        }
        viewBox="0 0 16 16"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
        />
      </svg>
    </span>
    <span>
      <svg
        fill="currentColor"
        height="1em"
        stroke="currentColor"
        strokeWidth="0"
        style={
          Object {
            "color": undefined,
          }
        }
        viewBox="0 0 16 16"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
        />
      </svg>
    </span>
    <span>
      <svg
        fill="currentColor"
        height="1em"
        stroke="currentColor"
        strokeWidth="0"
        style={
          Object {
            "color": undefined,
          }
        }
        viewBox="0 0 16 16"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
        />
      </svg>
    </span>
    <div
      className="sc-papXJ iTbntT"
    >
      <span>
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span>
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span>
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span>
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span>
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
    </div>
  </div>
  <h3>
    Ratings
  </h3>
  <div>
    <div
      className="sc-gKXOVf KMUSB"
    >
      <span
        className="sc-iBkjds glkhnv"
      >
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span
        className="sc-jSMfEi ceCftO"
      >
        1
      </span>
    </div>
    <div
      className="sc-gKXOVf KMUSB"
    >
      <span
        className="sc-iBkjds glkhnv"
      >
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span
        className="sc-iBkjds glkhnv"
      >
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span
        className="sc-jSMfEi ceCftO"
      >
        2
      </span>
    </div>
    <div
      className="sc-gKXOVf KMUSB"
    >
      <span
        className="sc-iBkjds glkhnv"
      >
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span
        className="sc-iBkjds glkhnv"
      >
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span
        className="sc-iBkjds glkhnv"
      >
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span
        className="sc-jSMfEi ceCftO"
      >
        1
      </span>
    </div>
    <div
      className="sc-gKXOVf KMUSB"
    >
      <span
        className="sc-iBkjds glkhnv"
      >
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span
        className="sc-iBkjds glkhnv"
      >
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span
        className="sc-iBkjds glkhnv"
      >
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span
        className="sc-iBkjds glkhnv"
      >
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span
        className="sc-jSMfEi ceCftO"
      >
        18
      </span>
    </div>
    <div
      className="sc-gKXOVf KMUSB"
    >
      <span
        className="sc-iBkjds glkhnv"
      >
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span
        className="sc-iBkjds glkhnv"
      >
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span
        className="sc-iBkjds glkhnv"
      >
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span
        className="sc-iBkjds glkhnv"
      >
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span
        className="sc-iBkjds glkhnv"
      >
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          style={
            Object {
              "color": undefined,
            }
          }
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </span>
      <span
        className="sc-jSMfEi ceCftO"
      >
        12
      </span>
    </div>
  </div>
  <div>
    <span>
      Fit: 
      2.4
    </span>
  </div>
  <div>
    <span>
      Length: 
      2.8
    </span>
  </div>
  <div>
    <span>
      Comfort: 
      2.8
    </span>
  </div>
  <div>
    <span>
      Quality: 
      3.4
    </span>
  </div>
</div>
`);
  });
});

describe('Review List', () => {

  let productId = { productId: 37313 }
  let wrapper = renderer.create(<ReviewList productId={productId} />)

  it('displays two tiles initially', () => {
    expect(wrapper.toJSON().children.length).toEqual(2);
  });
});

describe('Ratings Reviews', () => {

  let productId = { product_id: 37313 };
  let productName = { productName: 'Morning Joggers' };
  let metaData = {
    "product_id": "37313",
    "ratings": {
      "1": "1",
      "2": "2",
      "3": "1",
      "4": "18",
      "5": "12"
    },
    "recommended": {
      "false": "5",
      "true": "29"
    },
    "characteristics": {
      "Fit": {
        "id": 125036,
        "value": "2.4375000000000000"
      },
      "Length": {
        "id": 125037,
        "value": "2.8125000000000000"
      },
      "Comfort": {
        "id": 125038,
        "value": "2.8437500000000000"
      },
      "Quality": {
        "id": 125039,
        "value": "3.4375000000000000"
      }
    }
  }

  it('renders ReviewRatings without crashing', () => {
    let div = document.createElement('div');
    ReactDOM.render(
      <RatingsReviews
        productId={productId}
        productName={productName}
        metaData={metaData}
        ratings={metaData.ratings} />, div);
  });

  it('Sets modalOpen to true', () => {
    render(<RatingsReviews
      productId={productId}
      productName={productName}
      metaData={metaData}
      ratings={metaData.ratings} />)

      fireEvent.click(screen.getByText('Add Review'));

      let modal = RatingsReviews.toJSON().modalOpen;
      expect(modal).toBe(true);
  })
});


describe('AddStarRating', () => {
  let rating = 0;
  let transferRating = (newRating) => { rating = newRating };

  it('renders AddStarRating without crashing', () => {
    let div = document.createElement('div');
    ReactDOM.render(
      <AddStarRating transferRating={transferRating}/>, div
    )
  });
});