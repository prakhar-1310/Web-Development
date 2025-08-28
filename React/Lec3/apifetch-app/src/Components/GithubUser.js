import React, { useEffect, useState } from 'react'

const GithubUser = (props) => {
    let [user, setUser] = useState({
                            imgUrl:"",
                            followers:0,
                            following:0
                        });
    
    useEffect(()=>{
        async function getUser(username){
            const response = await fetch(`https://api.github.com/users/${username}`)
            const data =  await response.json();
            // console.log(data);
            const {followers , following, avatar_url} = data;
            setUser(
                 {
                    imgUrl : avatar_url,
                    followers : followers,
                    following : following
                }
            )
        }
        getUser(props.username);
    },[])

    return (
        <div>
            <figure>
                <img src={user.imgUrl} alt="profile picture" />
                <figcaption>
                    <p>Username:{props.username}</p>
                    <p>Followers:{user.followers}</p>
                    <p>Following:{user.following}</p>
                </figcaption>
            </figure>
        </div>
    )
}

export default GithubUser