import React from "react";
import styled, { css } from "styled-components";
import { PiXLogo } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { PiBellBold } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { RiSlashCommands2 } from "react-icons/ri";
import { IoIosMore } from "react-icons/io";
import { RiFileListLine } from "react-icons/ri";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

const MainComponent = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 15vw;
  margin-left: 10vw;
`;

const Xlogo = styled(PiXLogo)`
  color: white;
  font-size: 40px;

  margin-bottom: 25px;
  margin-top: 20px;
`; // X로고 이미지 넣기

const Home = styled.button`
  display: flex;
  border: none;
  justify-content: start;
  align-items: center;
  background-color: black;
  margin-bottom: 30px;
  padding-left: 0px;
  cursor: pointer;
`;

const HomeIcon = styled(GoHomeFill)`
  color: white;
  font-size: 25px;
  margin-right: 10px;
`;
const HomeText = styled.div`
  color: white;
  font-size: 20px;
`;

const Search = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
`;

const SearchIcon = styled(IoSearch)`
  color: white;
  font-size: 25px;
  margin-right: 10px;
  margin-top: 1px;
`;

const SearchText = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 2px;
`;

const Notification = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
`;

const NotificationIcon = styled(PiBellBold)`
  color: white;
  font-size: 25px;
  margin-right: 10px;
`;

const NotificationText = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 2px;
`;

const Messages = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
`;

const MessagesIcon = styled(HiOutlineMail)`
  color: white;
  font-size: 25px;
  margin-right: 10px;
`;

const MessagesText = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 2px;
`;

const Grok = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
`;

const GrokIcon = styled(RiSlashCommands2)`
  color: white;
  font-size: 25px;
  margin-right: 10px;
`;

const GrokText = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 2px;
`;

const Lists = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
`;

const ListsIcon = styled(RiFileListLine)`
  color: white;
  font-size: 25px;
  margin-right: 10px;
`;

const ListsText = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 2px;
`;

const Bookmarks = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
`;

const BookmarksIcon = styled(IoBookmarkOutline)`
  color: white;
  font-size: 25px;
  margin-right: 10px;
`;

const BookmarksText = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 2px;
`;
const Communities = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
`;

const CommunitiesIcon = styled(IoPeopleOutline)`
  color: white;
  font-size: 25px;
  margin-right: 10px;
`;

const CommunitiesText = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 2px;
`;

const Premium = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
`;

const PremiumIcon = styled(PiXLogo)`
  color: white;
  font-size: 25px;
  margin-right: 10px;
`;

const PremiumText = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 2px;
`;

const Profile = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
  border: none;
  background-color: black;
  padding-left: 0px;
`;

const ProfileIcon = styled(BsPerson)`
  color: white;
  font-size: 25px;
  margin-right: 10px;
`;

const ProfileText = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 2px;
`;

const More = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
`;

const MoreIcon = styled(CgMoreO)`
  color: white;
  font-size: 25px;
  margin-right: 10px;
`;

const MoreText = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 2px;
`;

const PostBtn = styled.button`
  border: none;
  background-color: #1d9bf0;
  border-radius: 25px;
  color: white;
  font-size: 18px;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 85%;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #0f7bc0;
  }
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 5px;
  margin-top: 30px;
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

const NavigationBar = ({ setShowDetail, setShowProfile }) => {
  return (
    <MainComponent>
      <Xlogo />
      <Home
        onClick={() => {
          setShowDetail(false);
          setShowProfile(false);
        }}
      >
        <HomeIcon />
        <HomeText>Home</HomeText>
      </Home>
      <Search>
        <SearchIcon />
        <SearchText>Explor</SearchText>
      </Search>
      <Notification>
        <NotificationIcon />
        <NotificationText>Notification</NotificationText>
      </Notification>
      <Messages>
        <MessagesIcon />
        <MessagesText>Messages</MessagesText>
      </Messages>
      <Grok>
        <GrokIcon />
        <GrokText>Grok</GrokText>
      </Grok>
      <Lists>
        <ListsIcon />
        <ListsText>Lists</ListsText>
      </Lists>
      <Bookmarks>
        <BookmarksIcon />
        <BookmarksText>Bookmarks</BookmarksText>
      </Bookmarks>
      <Communities>
        <CommunitiesIcon />
        <CommunitiesText>Communities</CommunitiesText>
      </Communities>
      <Premium>
        <PremiumIcon />
        <PremiumText>Premium</PremiumText>
      </Premium>
      <Profile
        onClick={() => {
          setShowDetail(false);
          setShowProfile(true);
        }}
      >
        <ProfileIcon />
        <ProfileText>Profile</ProfileText>
      </Profile>
      <More>
        <MoreIcon /> <MoreText>More</MoreText>
      </More>
      <PostBtn>Post</PostBtn>
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
    </MainComponent>
  );
};

export default NavigationBar;
