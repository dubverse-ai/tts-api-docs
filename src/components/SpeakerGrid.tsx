import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpeakers } from '../store/speakerSlice';

const SpeakerGrid = () => {
  const dispatch = useDispatch();
  const { speakers, loading, error } = useSelector((state) => state.speakers);

  useEffect(() => {
    dispatch(getSpeakers());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="css-mtq8eu">
      <div className="ScrollShadows css-1yjx4fb">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="css-xzfnlp">
            <div className="css-19krbr0">
              <div className="css-xxoahw">
                <div className="css-1tq9xcn">
                  <img src={speaker.s3} alt={speaker.name} />
                </div>
              </div>
              <div className="css-34o5sd">
                <div className="css-1nfmx3n">{speaker.name}</div>
                <p className="chakra-text css-1uy4bqm">Speaker no : {speaker.speaker_no}</p>
                <div className="css-17w4vwq">{speaker.labels} Style</div>
              </div>
              <div className="css-4w7h2e">
                <div className="css-1diyjz0">
                  <audio src={speaker.s3} controls />
                </div>
                <div className="css-0">
                  <div className="css-1diyjz0">
                    {/* Add copy button functionality here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakerGrid;