import React from 'react';
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    TwitterShareButton,
    TwitterIcon,
    FacebookIcon,LinkedinIcon,EmailIcon,
    PinterestIcon

  } from "react-share";

function SocialShare(){
    // let shareCount  = 300;
    let  shareUrl = "https://www.google.com";
    return(
        <>
        <div id="share-bar">
            <ul className='sharing-providers sharing-providers.circle'>
        
                <li>
                    <FacebookShareButton className='' url={shareUrl} hashtag="adklfs" >
                        <FacebookIcon></FacebookIcon>
                    </FacebookShareButton>
                </li>
                <li>
                    <TwitterShareButton className='' url={shareUrl} hashtag="adklfs" >
                        <TwitterIcon></TwitterIcon>
                    </TwitterShareButton>
                </li>
                <li>
                    <LinkedinShareButton className='' url={shareUrl} hashtag="adklfs" >
                        <LinkedinIcon></LinkedinIcon>
                    </LinkedinShareButton>
                </li>
                <li>
                    <PinterestShareButton className='' url={shareUrl} hashtag="adklfs" >
                        <PinterestIcon></PinterestIcon>
                    </PinterestShareButton>
                </li>
                <li>
                    <EmailShareButton className='' url={shareUrl} hashtag="adklfs" >
                        <EmailIcon></EmailIcon>
                    </EmailShareButton>
                </li>
            </ul>
        </div>
       

        </>
    )
}
export default SocialShare