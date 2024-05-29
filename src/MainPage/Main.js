import React, { useState, useEffect } from "react";
import axios from "axios";

import styled, { css } from "styled-components";
import PostDetail from "./PostDetail";
import { TbSettings } from "react-icons/tb";
import { SlBubble } from "react-icons/sl";
import { IoIosMore } from "react-icons/io";
import { FaRetweet } from "react-icons/fa6";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { BiBarChart } from "react-icons/bi";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdOutlineIosShare } from "react-icons/md";
import ProfileMain from "../UserProfilePage/ProfileMain";

const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 45vw;
  border: solid 1px #3a3c3f;
  border-top: none;
  border-bottom: none;
  margin-bottom: 0;
  height: 100vh;
`;

const Topbox = styled.div`
  margin-top: 25px;
  border: solid 1px #3a3c3f;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Foryoutext = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 22px;
  color: white;
  width: 48%;

  justify-content: center;
  align-items: center;
`;

const Foryoubluebar = styled.div`
  border: solid 2px #1d9bf0;
  width: 20%;
  margin-top: 12px;
  margin-bottom: 0px;
  border-radius: 2px;
`;
const Followingtext = styled.div`
  text-align: center;
  font-size: 20px;
  color: #3a3c3f;
  width: 48%;
`;

const SettingIcon = styled(TbSettings)`
  color: white;
  font-size: 25px;
`;
const InputBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px #3a3c3f;
`;
const UserIcon = styled.img`
  border-radius: 100%;
  width: 45px;
  height: 45px;
`;
const InputTextField = styled.div`
  padding-left: 12px;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputText = styled.textarea`
  background-color: black;
  border: none;
  color: white;
  font-size: 20px;
  border: none;
  resize: none;
  &::placeholder {
    color: #73787d;
    background-color: black;
    border: none;
  }
  &:focus {
    outline: none;
  }
`;

const PostBtn = styled.button`
  border: none;
  background-color: #1d9bf0;
  border-radius: 20px;
  color: white;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 10%;
  margin-left: auto;
  cursor: pointer;

  &:hover {
    background-color: #0f7bc0;
  }
`;

const TwitterBox = styled.button`
  padding: 20px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: start;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid 1px #3a3c3f;
  cursor: pointer;
`;

const NickAndPost = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;
const NickAndIDBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  padding-bottom: 10px;
`;
const Nickname = styled.div`
  color: white;
  padding-left: 20px;
  font-size: 15px;
  font-weight: bold;
`;

const ID = styled.div`
  font-size: 13px;
  color: #73787d;
  padding-left: 10px;
`;

const MoreIcon = styled(IoIosMore)`
  margin-left: auto;

  font-size: 25px;
  color: #73787d;
`;

const Post = styled.div`
  text-align: start;
  font-size: 14px;
  color: white;
  padding-left: 20px;
  padding-bottom: 20px;
`;
const ShareBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const SocialBox = styled.div`
  padding-top: auto;
  padding-left: 20px;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: end;
  width: 100%;
`;

const QuoteBox = styled.div`
  display: flex;
  align-items: end;
`;

const QuoteIcon = styled(SlBubble)`
  font-size: 25px;
  color: #73787d;
`;

const QuoteNum = styled.div`
  padding-left: 5px;
  color: #73787d;
  padding-bottom: 2px;
`;

const RetweetBox = styled.div`
  display: flex;
  align-items: end;
`;

const RetweetIcon = styled(HiArrowPathRoundedSquare)`
  font-size: 25px;
  height: 100%;
  color: #73787d;
`;

const RetweetNum = styled.div`
  padding-left: 5px;
  color: #73787d;
  padding-bottom: 2px;
`;

const LikeBox = styled.div`
  display: flex;
  align-items: end;
`;

const LikeIcon = styled(GoHeart)`
  font-size: 25px;
  color: #73787d;
`;

const LikeNum = styled.div`
  padding-left: 5px;
  color: #73787d;
  padding-bottom: 2px;
`;

const StatsBox = styled.div`
  display: flex;
  align-items: end;
`;

const StatsIcon = styled(BiBarChart)`
  font-size: 25px;
  color: #73787d;
`;

const StatsNum = styled.div`
  padding-left: 5px;
  color: #73787d;
  padding-bottom: 2px;
`;

const SaveIcon = styled(IoBookmarkOutline)`
  font-size: 25px;
  color: #73787d;
`;

const ShareIcon = styled(MdOutlineIosShare)`
  font-size: 25px;
  color: #73787d;
  padding-right: 20px;
  padding-left: 20px;
`;

const Main = ({ showDetail, setShowDetail, showProfile, setShowProfile }) => {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");

  const fetchTweets = () => {
    axios
      .get("https://api.x-clone-coding.p-e.kr/tweets")
      .then((response) => {
        setTweets(response.data.tweets.sort((a, b) => b.tweetId - a.tweetId));
      })
      .catch((error) => {
        console.error("Error fetching the tweets", error);
      });
  };
  useEffect(() => {
    fetchTweets();
  }, []);

  useEffect(() => {
    axios
      .get("https://api.x-clone-coding.p-e.kr/tweets")
      .then((response) => {
        const sortedTweets = response.data.tweets.sort(
          (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
        );
        setTweets(sortedTweets);
      })
      .catch((error) => {
        console.error("Error fetching the tweets", error);
      });
  }, []);

  const handlePostTweet = () => {
    const tweetData = {
      memberId: 1,
      content: newTweet,
    };
    axios
      .post("https://api.x-clone-coding.p-e.kr/tweets", tweetData)
      .then((response) => {
        console.log("New tweet added:", response.data);
        setTweets([response.data, ...tweets]);
        setNewTweet("");
      })
      .catch((error) => {
        console.error("Error posting the tweet", error);
      });
  };

  if (showProfile) {
    return (
      <ProfileMain
        setShowProfile={setShowProfile}
        setShowDetail={setShowDetail}
      />
    );
  }
  if (showDetail) {
    return (
      <PostDetail
        setShowDetail={setShowDetail}
        tweetId={showDetail}
        refreshTweets={fetchTweets}
      />
    );
  }

  return (
    <MainComponent>
      <Topbox>
        <Foryoutext>
          For You
          <Foryoubluebar />
        </Foryoutext>
        <Followingtext>Following</Followingtext>
        <SettingIcon />
      </Topbox>
      <InputBox>
        <UserIcon
          src="https://www.tweetgen.com/c/default-pfp.png"
          alt="usericon"
        />
        <InputTextField>
          <InputText
            placeholder="What's going on?"
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
          />
          <PostBtn onClick={handlePostTweet}>Post</PostBtn>
        </InputTextField>
      </InputBox>
      {tweets.map((tweet) => (
        <TwitterBox
          key={tweet.tweetId}
          onClick={() => setShowDetail(tweet.tweetId)}
        >
          <UserIcon
            src="https://www.tweetgen.com/c/default-pfp.png"
            alt="usericon"
          />
          <NickAndPost>
            <NickAndIDBox>
              <Nickname>{tweet.nickname}</Nickname>
              <ID>{tweet.id}</ID>

              <MoreIcon />
            </NickAndIDBox>
            <Post>{tweet.content}</Post>
            <ShareBox>
              <SocialBox>
                <QuoteBox>
                  <QuoteIcon />
                  <QuoteNum>3.8k</QuoteNum>
                </QuoteBox>
                <RetweetBox>
                  <RetweetIcon /> <RetweetNum>2.5k</RetweetNum>
                </RetweetBox>
                <LikeBox>
                  <LikeIcon />
                  <LikeNum>20k</LikeNum>
                </LikeBox>
                <StatsBox>
                  <StatsIcon />
                  <StatsNum>2.5k</StatsNum>
                </StatsBox>
                <SaveIcon />
              </SocialBox>
              <ShareIcon />
            </ShareBox>
          </NickAndPost>
        </TwitterBox>
      ))}
    </MainComponent>
  );
};
export default Main;
