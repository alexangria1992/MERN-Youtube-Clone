import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  /* background-color: lightgreen; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Home;
