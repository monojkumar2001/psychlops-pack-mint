import React from 'react';

function Footer() {

    return (

        <>
            <section className='footer'>
                <div className='footer-con'>
                    <div className='socials'>
                        <a href='https://discord.gg/MBemqnWhtQ' target='_blank'>
                            <img src="./images/discord.png" alt="discord" />
                        </a>
                        <a href='https://twitter.com/cryptoottersnft' target='_blank'>
                            <img src="./images/twitter.png" alt="twitter" />
                        </a>
                        <a href='https://www.instagram.com/cryptootters/' target='_blank'>
                            <img src="./images/instagram.png" alt="instagram" />
                        </a>
                    </div>
                    <div className='copyright'>
                        <p>Cryptootters Verse 2022 all right reserved</p>
                    </div>
                    <div className='nft-constructer'>
                        <p>BROUGHT TO YOU BY
                            <a href='https://www.nftconstructer.com/' target='_blank'><img src="./images/nft-constructor.png" alt="NFT CONSTRUCTER" />NFT CONSTRUCTER</a>
                        </p>
                    </div>

                </div>


            </section>

        </>

    )

}

export default Footer;



