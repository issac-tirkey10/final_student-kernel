import { IconButton,Avatar,Button} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import { selectQuestionId, setQuestionInfo } from "../features/questionSlice";
import firebase from "firebase";
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';


function Postprofile({ Id, question, imageUrl, timestamp, users }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const questionId = useSelector(selectQuestionId);
  const [getAnswers, setGetAnswers] = useState([]);
  let z=0;
  useEffect(() => {
    if (questionId) {
      db.collection("questions")
        .doc(questionId)
        .collection("answer")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setGetAnswers(
            snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
          )
        );
    }
  }, [questionId]);

  return (
  
        <div>
    {user.email === users.email?  
    <div
      className="post"
      onClick={() =>
        dispatch(
          setQuestionInfo({
            questionId: Id,
            questionName:question,
          })
        )
      }
    >

      <div className="post__info">
      {user.email === users.email?
      <Avatar
      src={
        user.photo
      }
    />:null} 
        
         {user.email === users.email? <h4>{users.displayName ? users.displayName : users.email}</h4>:null} 
         {user.email === users.email?<small>{new Date(timestamp?.toDate()).toLocaleString()}</small>:null} 
        
      </div>
      <div  style={{float:"right",left:"90%"}}
          className="seecomment"  
          >show Comment 
          </div>
         
      <div className="post__body">
        <div className="post__question">
          {user.email === users.email?
          <p>{question}</p>:null} 
        </div>
       
        
        <div className="post__answer">
          {getAnswers.map(({ id, answers }) => (
            <p key={id} style={{ position: "relative", paddingBottom: "5px" }}>
              {Id === answers.questionId ? (
                <span>
                  {answers.answer}
                  <br />
                  <span
                    style={{
                      position: "absolute",
                      color: "gray",
                      fontSize: "small",
                      display: "flex",
                      right: "0px",
                    }}
                  >
                    <span style={{ color: "#b92b27" }}>
                      {answers.user.displayName
                        ? answers.user.displayName
                        : answers.user.email}{" "}
                      on{" "}
                      {new Date(answers.timestamp?.toDate()).toLocaleString()}
                    </span>
                  </span>
                </span>
              ) : (
                ""
              )}
            </p>
          ))}
        </div>
        {user.email === users.email?<img src={imageUrl} alt="" />:null} 
      </div>

    </div>    
    :null}     
    </div>


  );

}


export default Postprofile;
