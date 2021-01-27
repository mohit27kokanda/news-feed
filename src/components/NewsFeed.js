import React from 'react'
import './NewsFeed.css'
import Home from './Home'


const postData = [{
    id:1,
    headImg:'https://cdn.pixabay.com/photo/2020/06/14/14/50/man-5298147_960_720.jpg',
    Name:'Kunal Verma',
    about:'#something #some #any #like #share #endregion #region',
    bodyImg:'https://www.prayermate.net/assets/humaaans/church-d59e3b5cfe00183b73ca83c38d7488ee3bf917ebc9bdb2534d9f3ee42b668649.svg'
}
,
{id:2,
    headImg:'https://www.pngitem.com/pimgs/m/265-2650014_human-face-png-man-face-portrait-male-person.png',
    Name:'The Professor',
    about:'This is the Time.',
    bodyImg:'https://assets.website-files.com/5bff8886c3964a992e90d465/5c00fa0eb8b0816e1a10dfe6_hero-2.svg'
},
{id:3,
    headImg:'https://png.clipart.me/previews/cb6/human-face-vector-22-39614.jpg',
    Name:'Tokyo',
    about:'Living in own world',
    bodyImg:'https://assets.website-files.com/5bff8886c3964a992e90d465/5c00fa3ad82b40e853c9952f_hero-3.svg'
},
{id:4,
    headImg:'https://png.vector.me/files/images/7/2/721045/human_face_vector_30.jpg',
    Name:'Jennifer Aniston',
    about:'#Whatever',
    bodyImg:'https://www.uidownload.com/files/118/58/328/human-face-vector-28.jpg'
},{id:5,
    headImg:'https://cdn.pixabay.com/photo/2016/03/11/03/25/steve-jobs-1249665_960_720.jpg',
    Name:'Steve Jobs',
    about:'#apple',
    bodyImg:'https://i.pinimg.com/originals/af/17/db/af17dbaee9ff1ebf9c0adbfcafdc4cb0.jpg'
}
];
 

const Card  = () =>{
    return(<>
    
    <Home/>
    <section>
        {postData.map((data)=>{
         const {headImg,Name,about,bodyImg}=data;
         return(
            <InnerCard key={data.id} datas={data}></InnerCard> 
         );
        })}
    </section>
    </>);
}

const InnerCard = (props) =>{
    const {headImg,Name,about,bodyImg}=props.datas;
    return<>
    <div className='card'>
    <div className='post-head'>
        <img className='person-img' src={headImg}></img>
        
            <h3>{Name}</h3>
            
            </div>
            <div className='about-text'>
                <p> {about}</p>
            </div>
        <div className='post-body'>
            <img className='post-img' src={bodyImg}></img>

        </div>
        <div className='post-bottom'>
            <a href="/"><i className="far fa-thumbs-up"></i> <strong>Like</strong></a>
            <a href="/"><i className="fal fa-comment-alt"></i> <strong>Comment</strong></a>
            <a href="/"><i className="fal fa-share"></i><strong>Share</strong></a>
        </div>
        </div>
    </>

}
export default Card;