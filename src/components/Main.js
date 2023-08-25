import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostModal from './PostModal';
import { connect } from 'react-redux';
import { getArticlesAPI } from '../actions';

function Main(props) {

  const [showModal, setShowModal] = useState('close');

  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    if (event.target !== event.currentTarget) {
      return;
    }
    switch (showModal) {
      case 'open':
        setShowModal('close');
        break;
      case 'close':
        setShowModal('open');
        break;
      default:
        setShowModal('close');
        break;
    }
  };

  return (
    <>
      {/* { props.articles.length() === 0 ? 
    <p>There are no articles</p>
    : */}
      <Container>
        <ShareBox>Share
          <div>
            {props.user && props.user.photoURL ? (<img src={props.user.photoURL} />)
              : (<img src='/images/user.svg' />)}
            <button onClick={handleClick} disabled={props.loading ? (true) : (false)}> Start a post </button>
          </div>
          <div>
            <button>
              <img src='/images/photo-icon.svg' />
              <span>Photo</span>
            </button>

            <button>
              <img src='/images/video-icon.svg' />
              <span>Video</span>
            </button>

            <button>
              <img src='/images/event-icon.svg' />
              <span>Event</span>
            </button>

            <button>
              <img src='/images/article-icon.svg' />
              <span>Article</span>
            </button>

          </div>
        </ShareBox>

        <Content>
          {
            props.loading && <img src='./images/spinner.gif' />
          }


          {{/* props.articles.length > 0 &&  */ }
          /* props.articles.map( (article, key) => ( */}
          <Article>
            <SharedActor>
              <a>
                {/* <img src={article.actor.image} />  */}
                <div>
                  <span>Title</span>
                  <span>Info</span>
                  <span>Date</span>
                </div>
              </a>
              <button>
                <img src='/images/ellipsis.png' />
              </button>
            </SharedActor>

            <Description> Description </Description>
            <SharedImg>
              <a>
                <img src='/images/share-img.jpg' />
              </a>
            </SharedImg>

            <SocialCounts>
              <li>
                <button>
                  <img src='/images/like.png' />
                  <img src='/images/clap.png' />
                  <span>75</span>
                </button>
              </li>
              <li>
                <a>2 comments</a>
              </li>
            </SocialCounts>

            <SocialActions>
              <button>
                <img src='/images/like.png' />
                <span>Like</span>
              </button>
              <button>
                <img src='/images/comment.png' />
                <span>Comment</span>
              </button>
              <button>
                <img src='/images/share.png' />
                <span>Share</span>
              </button>
              <button>
                <img src='/images/send.png' />
                <span>Send</span>
              </button>
            </SocialActions>
          </Article>
          {/* ) )
        } */}
        </Content>

        <PostModal showModal={showModal} handleClick={handleClick} />

      </Container>
      {/* } */}
    </>
  )
}

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%) ;
`;

const ShareBox = styled(CommonCard)`
display: flex;
flex-direction: column;
margin: 0 0 8px;
background: white;
color: #958b7b;
div {
  button {
    outline: none;
    color: rgba(0 0 0 0.6);
    font-size: 14px;
    font-weight: 600;
    display: flex;
    line-height: 1.5;
    min-height: 48px;
    background: transparent;
    border: none;
    align-items: center;
  }
  &:first-child{
    display: flex;
    align-items: center;
    padding: 8px 16px 0px 16px;
    img {
      width: 48px;
      border-radius: 50%;
      margin-right: 8px;
    }

    button{
      margin: 4px 0;
      flex-grow: 1;
      border-radius: 35px;
      padding-left: 16px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 35px;
      background-color: white;
      text-align: left;
    }
  }

  &:nth-child(2){
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 4px;
    button{
      img {
        margin: 0 4px 0 -2px;
      }
      span {
        color: #70b5f9;
      }
    }
  }
}
`;

const Article = styled(CommonCard)`
padding: 0;
margin: 0 0 8px;
overflow: visible;
`;

const SharedActor = styled.div`
padding-right: 40px;
display: flex;
flex-wrap: nowrap;
padding: 12px 16px 0;
margin-bottom: 8px;
align-items: center;
a {
  margin-right: 12px;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  text-decoration: none;
  img {
    width: 48px;
    height: 48px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    margin-left: 8px;
    overflow: hidden;
    span {
      text-align: left;
      &:first-child{
        font-size: 16px;
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
      }
      &:nth-child(n+1){
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
}

button{
  position: absolute;
  right: 12px;
  border: none;
  background: transparent;
  top: 0;
  outline: none;

}
`;

const Description = styled.div`
padding: 0 16px;
overflow: hidden;
color: rgba(0, 0, 0, 0.9);
text-align: left;
font-size: 14px;
`;

const SharedImg = styled.div`
margin-top: 8px;
width: 100%;
display: block;
position: relative;
background-color: #f9fafb;
img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
`;

const SocialCounts = styled.ul`
line-height: 1.3;
display: flex;
align-items: start;
overflow: auto;
margin: 0 16px;
padding: 8px 0;
border-bottom: 1 px solid #e9efdf;
list-style: none;
li{
  margin-right: 5px;
  font-size: 14px;
  button{
    display: flex;
    img{
      width: 24px;
    }
  }
}
`;

const SocialActions = styled.div`
align-items: center;
display: flex;
justify-content: flex-start;
margin: 0;
min-height: 40px;
padding: 4px 8px;
button{
  display: inline-flex;
  align-items: center;
  padding: 8px;
  img {
    width: 24px;
    height: 25px;
  }
  @media(min-width: 768px){  //Do this only on a screen bigger than 768px.
    span {
      margin-left: 8px;
    }
  }

}
`;

const Content = styled.div`
text-align: center;
& > image{
  width: 30px;
}
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    loading: state.articleState.loading,
    article: state.articleState.article
  }
}

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);