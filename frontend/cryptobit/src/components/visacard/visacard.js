import React from 'react'
import Faq from '../common/faq'
import SocialShare from '../common/social-share'
import VisaBanner from './visabanner'
import VisaPerks from './visaperks'

function VisaCard(){
    return(
        <>
            <VisaBanner/>
            <SocialShare />
            <VisaPerks/>
            <Faq/>
        
        </>
    )
}

export default VisaCard