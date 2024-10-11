import React, { useState, useEffect } from 'react';
import { ShimmerTitle, ShimmerThumbnail, ShimmerText } from 'react-shimmer';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate data fetching with a timeout
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulates a 3-second data loading time
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      {loading ? (
        <div>
          {/* Shimmer Placeholder for Blog Title */}
          <ShimmerTitle line={1} gap={20} />

          {/* Shimmer Placeholder for Blog Image */}
          <ShimmerThumbnail width={800} height={200} style={{ marginTop: '20px' }} />

          {/* Shimmer Placeholder for Blog Text */}
          <ShimmerText line={3} gap={10} style={{ marginTop: '20px' }} />
        </div>
      ) : (
        <div>
          {/* Actual Blog Content */}
          <h1>How to Implement Shimmer Effect in React</h1>
          <img
            src="https://via.placeholder.com/800x200"
            alt="Blog"
            style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
          />
          <p>
            Shimmer effects are a great way to show loading placeholders for content that’s being fetched asynchronously.
            They create a more pleasant user experience than showing blank screens or spinners. In this blog, we’ll
            explore how to implement a simple shimmer effect using React.
          </p>
          <p>
            You can use CSS animations or libraries like `react-shimmer` to easily implement shimmer effects. Customizing
            shimmer effects for different content types like images, text, and buttons enhances the overall look of your
            app during loading.
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
