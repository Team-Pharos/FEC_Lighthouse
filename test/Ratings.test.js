import renderer from 'react-test-renderer';
import React from 'react';
import ReviewTile from '../src/components/Ratings/ReviewTile.jsx';
import RatingsBreakdown from '../src/components/RatingsBreakdown.jsx';




describe('Review Tile', () => {
  it('renders ReviewTile correctly', () => {
    let review = {
      review_id: 12345,
      rating: 3,
      body: 'This was great!'
    }

    const tree = renderer
      .create(< ReviewTile review={review}/>)
      .toJSON();

      expect(tree).toMatchInlineSnapshot(`
Array [
  <h2>
    Rating:
    3
  </h2>,
  <h5>
    This was great!
  </h5>,
]
`);
  });
});