import React, { useEffect, useState } from 'react';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

import './AllPost.css'
import { Button } from '@material-ui/core';
import { Link} from 'react-router-dom'
const AllPost = (props) => { 
    const { id, title, body } = props.users
    const [randomUser, setRandonUsers] = useState([]);
    useEffect(() => {
        fetch(`https://randomuser.me/api/`)
            .then(res => res.json())
            .then(data => setRandonUsers(data.results))
    }, [])
    // const [likeColor, setLikeColor] = useState('');
    // const likeHandle = () => {
    //     const color = likeColor ? '' : "primary";
    //     setLikeColor(color);
    // }
    return (
        <div className="psotContainer">
            {
                randomUser.map(randomUser => <div  style={{ paddingBottom: '30px', boxShadow: "0px 0px 20px rgba(180, 180, 180, 0.918)", margin: "15px", borderRadius: '8px' ,padding:"30px, 15px"}}>
                    <div className="imgContiner">
                        <img src={randomUser.picture.large} alt="" />
                    </div>
                    <h2>name: {randomUser.name.title} {''} {randomUser.name?.first}</h2>
                    {/* {randomUser.name && randomUser.name.first} <br/> */}

                    <h3>title:{title}</h3>
                    <h4>Gender:{randomUser.gender}</h4>
                    <p> <span style={{ fontSize: '20px', fontWeight: 'bold' }}>comment:</span>  {body}</p>
                    <Link className ="link" to ={"/post/"+ id}>
                        <Button variant="contained" color="primary">
                            Primary
                        </Button>
                    </Link>

                </div>)
            }
        </div>
    );
};

export default AllPost;