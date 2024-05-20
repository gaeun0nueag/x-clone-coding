import React, { useState } from "react";
import styled from "styled-components";
import Main from "./Main";
import { IoMdArrowRoundBack } from "react-icons/io";
import { SlBubble } from "react-icons/sl";
import { IoIosMore } from "react-icons/io";
import { FaRetweet } from "react-icons/fa6";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { BiBarChart } from "react-icons/bi";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdOutlineIosShare } from "react-icons/md";

const PostDetailWrapper = styled.div`
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

const Post = styled.div`
  font-size: 25px;
  margin-left: 40px;
  color: white;
  font-weight: bold;
  height: 100%;
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 35px;
  margin-top: 30px;
  width: auto;
  padding-right: 15px;
`;

const UserIcon = styled.img`
  border-radius: 100%;
  width: 45px;
  height: 45px;
  margin-top: 5px;
`;

const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nickname = styled.div`
  color: white;
  padding-left: 10px;
  font-size: 20px;
`;

const ID = styled.div`
  font-size: 18px;
  color: #73787d;
  padding-left: 10px;
`;

const BottomMoreIcon = styled(IoIosMore)`
  margin-left: auto;
  margin-right: 20px;
  font-size: 25px;
  color: #73787d;
`;
const PostBox = styled.div`
  margin-top: 25px;
  width: auto;
  padding-left: 20px;
  margin-left: 20px;
`;

const PostText = styled.div`
  text-align: start;
  font-size: 20px;
  color: white;

  padding-bottom: 10px;
`;
const Translatetext = styled.div`
  font-size: 15px;
  color: #1d9bf0;
  margin-bottom: 15px;
`;
const TimeBox = styled.div`
  font-size: 16px;
  color: #73787d;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 5px;
  padding-right: 15px;
  padding-bottom: 15px;
  width: 40vw;
  border-bottom: solid 1px #3a3c3f;
`;
const SocialBox = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40vw;

  margin-left: 35px;
  margin-right: 35px;
  padding-top: 10px;
  padding-bottom: 10px;

  border-bottom: solid 1px #3a3c3f;
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
const PostDetail = ({ setShowDetail }) => {
  return (
    <>
      <PostDetailWrapper>
        <Header>
          <BackstepBtnBox>
            <BackstepBtn onClick={() => setShowDetail(false)} />
          </BackstepBtnBox>
          <Post>Post</Post>
        </Header>
        <UserBox>
          <UserIcon
            src="https://www.tweetgen.com/c/default-pfp.png"
            alt="usericon"
          />
          <UserInfoBox>
            <Nickname>이가은</Nickname>
            <ID>@gaeun</ID>
          </UserInfoBox>
          <BottomMoreIcon />
        </UserBox>
        <PostBox>
          <PostText>안녕</PostText>
          <Translatetext>Translatetext post</Translatetext>
        </PostBox>
        <TimeBox>12:16 PM - May 20, 2024</TimeBox>
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
          <ShareIcon />
          <SaveIcon />
        </SocialBox>
      </PostDetailWrapper>
    </>
  );
};

export default PostDetail;
