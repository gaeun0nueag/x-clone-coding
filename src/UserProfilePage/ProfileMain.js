import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "axios";

import { IoMdArrowRoundBack } from "react-icons/io";

import { SlBubble } from "react-icons/sl";
import { IoIosMore } from "react-icons/io";

import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { BiBarChart } from "react-icons/bi";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdOutlineIosShare } from "react-icons/md";

import { MdDeleteForever } from "react-icons/md";

import PostDetail from "../MainPage/PostDetail";
const ProfileMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 45vw;
  border: solid 1px #3a3c3f;
  border-top: none;
  border-bottom: none;
  margin-bottom: 0;
  height: 100vh;
`;
const Header = styled.div`
  display: flex;
  justify-content: start;
  padding-left: 20px;
  margin-top: 25px;
  align-items: center;
  margin-bottom: 10px;
`;

const BackstepBtnBox = styled.button`
  border: none;
  cursor: pointer;
  color: white;
  background-color: black;
`;

const BackstepBtn = styled(IoMdArrowRoundBack)`
  color: white;
  font-size: 30px;
`;

const Nickname = styled.div`
  font-size: 25px;
  margin-left: 40px;
  color: white;
  font-weight: bold;
  height: 100%;
`;
const BackgroundImg = styled.div`
  background-color: #343639;
  height: 20vh;
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 35px;
  margin-top: 5px;
  width: auto;
  padding-right: 15px;
`;

const UserIcon = styled.img`
  border-radius: 100%;
  width: 95px;
  height: 95px;
  margin-top: 5px;
`;
const EditProfile = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 10px;
  font-size: 17px;
  color: white;
  border: solid 2px #73787d;
  font-weight: bold;
  border-radius: 25px;
  height: fit-content;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  align-items: center;
  justify-content: center;
`;

const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const NickName = styled.div`
  font-size: 25px;

  color: white;
  font-weight: bold;
`;
const ID = styled.div`
  font-size: 17px;
  color: #73787d;
  margin-bottom: 10px;
`;
const Join = styled.div`
  font-size: 17px;
  color: #73787d;
`;

const Postbar = styled.div`
  width: 100%;
  border-bottom: solid 1px #3a3c3f;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const Post = styled.div`
  font-size: 18px;
  color: white;
  padding-bottom: 10px;
`;

const Foryoubluebar = styled.div`
  border: solid 2px #1d9bf0;
  width: 100%;
  margin-bottom: 0px;
  border-radius: 2px;
`;

const Replies = styled.div`
  font-size: 17px;
  color: white;
  padding-bottom: 5px;
`;

const Highlights = styled.div`
  font-size: 17px;
  color: white;
  padding-bottom: 5px;
`;

const Alticles = styled.div`
  font-size: 17px;
  color: white;
  padding-bottom: 5px;
`;

const Media = styled.div`
  font-size: 17px;
  color: white;
  padding-bottom: 5px;
`;
const Likes = styled.div`
  font-size: 17px;
  color: white;
  padding-bottom: 5px;
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

const UserIconPost = styled.img`
  border-radius: 100%;
  width: 45px;
  height: 45px;
  margin-top: 5px;
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
const Nicknamepost = styled.div`
  color: white;
  padding-left: 20px;
  font-size: 15px;
  font-weight: bold;
`;

const IDpost = styled.div`
  font-size: 13px;
  color: #73787d;
  padding-left: 10px;
`;

const DeleteIcon = styled(MdDeleteForever)`
  margin-left: auto;

  font-size: 25px;
  color: #73787d;
  cursor: pointer;
`;

const MoreIcon = styled(IoIosMore)`
  font-size: 25px;
  color: #73787d;
`;

const Postpost = styled.div`
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
const ProfileMain = ({ setShowProfile }) => {
  const [tweets, setTweets] = useState([]);
  const [profile, setProfile] = useState({ nickname: "", id: "" });

  useEffect(() => {
    axios
      .get("https://api.x-clone-coding.p-e.kr/members/1/tweets")
      .then((response) => {
        if (response.data && response.data.memberTweetList) {
          const sortedTweets = response.data.memberTweetList.sort(
            (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
          );
          setTweets(sortedTweets);
        } else {
          console.error("No tweets data found");
        }
      })
      .catch((error) => {
        console.error("Error fetching the tweets", error);
      });
    // 프로필 정보 가져오기
    axios
      .get("https://api.x-clone-coding.p-e.kr/members/1")
      .then((response) => {
        if (response.data) {
          setProfile({
            nickname: response.data.nickname,
            id: response.data.id,
          });
        } else {
          console.error("No profile data found");
        }
      })
      .catch((error) => {
        console.error("Error fetching the profile", error);
      });
  }, []);

  const handleDeleteTweet = (tweetId) => {
    axios

      .delete(`https://api.x-clone-coding.p-e.kr/tweets/${tweetId}?memberId=1`)
      .then((response) => {
        console.log("Tweet deleted:", response.data);
        setTweets((prevTweets) =>
          prevTweets.filter((tweet) => tweet.tweetId !== tweetId)
        );
      })
      .catch((error) => {
        if (error.response) {
          // 서버가 응답한 경우
          console.error(
            "트윗 삭제 중 오류가 발생했습니다:",
            error.response.data
          );
          console.error("응답 상태 코드:", error.response.status);
          console.error("응답 헤더:", error.response.headers);
        } else if (error.request) {
          // 요청이 만들어졌지만 서버가 응답하지 않은 경우
          console.error("서버가 응답하지 않습니다:", error.request);
        } else {
          // 요청 설정 중 오류가 발생한 경우
          console.error("요청 설정 중 오류가 발생했습니다:", error.message);
        }
      });
  };

  return (
    <>
      <ProfileMainWrapper>
        <Header>
          <BackstepBtnBox>
            <BackstepBtn onClick={() => setShowProfile(false)} />
          </BackstepBtnBox>

          <Nickname>{profile.nickname} </Nickname>
        </Header>
        <BackgroundImg />
        <UserBox>
          <UserIcon
            src="https://www.tweetgen.com/c/default-pfp.png"
            alt="usericon"
          />
          <EditProfile>Edit Profile</EditProfile>
        </UserBox>
        <UserInfoBox>
          <NickName>{profile.nickname}</NickName>
          <ID>{profile.id}</ID>
          <Join>Joined May 2024</Join>
        </UserInfoBox>
        <Postbar>
          <PostBox>
            <Post>Posts</Post>
            <Foryoubluebar />
          </PostBox>
          <Replies>Replies</Replies>
          <Highlights>Highlights</Highlights>
          <Alticles>Alticles</Alticles>
          <Media>Media</Media>
          <Likes>Likes</Likes>
        </Postbar>
        {tweets.map((tweet) => (
          <TwitterBox key={tweet.tweetId}>
            <UserIconPost
              src="https://www.tweetgen.com/c/default-pfp.png"
              alt="usericon"
            />
            <NickAndPost>
              <NickAndIDBox>
                <Nicknamepost>{tweet.nickname}</Nicknamepost>
                <IDpost>{tweet.id}</IDpost>
                <DeleteIcon onClick={() => handleDeleteTweet(tweet.tweetId)} />
                <MoreIcon />
              </NickAndIDBox>
              <Postpost>{tweet.content}</Postpost>
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
      </ProfileMainWrapper>
    </>
  );
};

export default ProfileMain;
