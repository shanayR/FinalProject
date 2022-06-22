import React from 'react';
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    TwitterIcon,
    FacebookIcon

  } from "react-share";

function SocialShare(){
    let shareCount  = 300;
    let  shareUrl = "https://www.google.com";
    return(
        <>
        elsa shaney
        <FacebookShareButton className='' url={shareUrl} hashtag="adklfs" >
            <FacebookIcon></FacebookIcon>
             </FacebookShareButton>

        </>
    )
}
export default SocialShare