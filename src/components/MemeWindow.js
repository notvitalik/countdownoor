import { Center } from '@chakra-ui/react';
import React from 'react';

function MemeWindow() {
  return (
    <div className="meme-window">
      <Center><h3><b>MEMES</b></h3></Center>
      <iframe src="https://www.youtube.com/embed/wIhTGB3wqV0?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      {/* <video controls>
        <source src="path_to_your_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
}

export default MemeWindow;
