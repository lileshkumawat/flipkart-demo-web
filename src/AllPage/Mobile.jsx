import './All.css'
const PhoneProductDetails = [
    {
        phoneUrl: "https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3Drealme&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&param=7564&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNob3AgTm93Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&otracker=clp_metro_expandable_1_3.metroExpandable.METRO_EXPANDABLE_Shop%2BNow_mobile-phones-store_Q1PDG4YW86MF_wp2&fm=neo%2Fmerchandising&iid=M_ec2dce8d-9eb6-4c74-9caa-71504f237f9a_3.Q1PDG4YW86MF&ssid=hudx1yubig46a29s1652887615038",
        phoneImg: "https://rukminim2.flixcart.com/flap/240/240/image/0f46b1ccbe7d0620.jpg?q=90",
        phoneProduct: "Shop Now"
    },
    {
        phoneUrl: "https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3DPOCO&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNob3AgTm93Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&otracker=clp_metro_expandable_2_3.metroExpandable.METRO_EXPANDABLE_Shop%2BNow_mobile-phones-store_O1WYX08RHODP_wp2&fm=neo%2Fmerchandising&iid=M_ec2dce8d-9eb6-4c74-9caa-71504f237f9a_3.O1WYX08RHODP&ssid=hudx1yubig46a29s1652887615038",
        phoneImg: "https://rukminim2.flixcart.com/flap/240/240/image/8e8ae4fdd4f3b773.jpg?q=90",
        phoneProduct: "Shop Now"
    },
    {
        phoneUrl: "https://www.flipkart.com/mobiles/~cs-5ikxi0dku2/pr?sid=tyy%2C4io&collection-tab-name=realme+narzo+series&sort=price_desc&param=234&pageUID=1626267808088&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNob3AgTm93Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&otracker=clp_metro_expandable_3_3.metroExpandable.METRO_EXPANDABLE_Shop%2BNow_mobile-phones-store_YELWEWN3DMAC_wp2&fm=neo%2Fmerchandising&iid=M_ec2dce8d-9eb6-4c74-9caa-71504f237f9a_3.YELWEWN3DMAC&ssid=hudx1yubig46a29s1652887615038",
        phoneImg: "https://rukminim2.flixcart.com/flap/240/240/image/f40c586fa2ac65af.jpg?q=90",
        phoneProduct: "Shop Now"
    },
    {
        phoneUrl: "https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&param=7564&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNob3AgTm93Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&fm=neo%2Fmerchandising&iid=M_020c2ff1-bc48-49be-a7c2-c470dde716ea_3.Q1PDG4YW86MF&ppt=browse&ppn=browse&ssid=eq9s0abzuo0000001652858828460&p%5B%5D=facets.brand%255B%255D%3DOPPO&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNob3AgTm93Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&otracker=clp_metro_expandable_4_3.metroExpandable.METRO_EXPANDABLE_Shop%2BNow_mobile-phones-store_YN2R24UWDDQ8_wp2&fm=neo%2Fmerchandising&iid=M_ec2dce8d-9eb6-4c74-9caa-71504f237f9a_3.YN2R24UWDDQ8&ssid=hudx1yubig46a29s1652887615038",
        phoneImg: "https://rukminim2.flixcart.com/flap/240/240/image/b9303df2d42c0e91.jpg?q=90",
        phoneProduct: "Shop Now"
    },
    {
        phoneUrl: "https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3DApple&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNob3AgTm93Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&otracker=clp_metro_expandable_7_3.metroExpandable.METRO_EXPANDABLE_Shop%2BNow_mobile-phones-store_92RED14GXPXF_wp2&fm=neo%2Fmerchandising&iid=M_ec2dce8d-9eb6-4c74-9caa-71504f237f9a_3.92RED14GXPXF&ssid=hudx1yubig46a29s1652887615038",
        phoneImg: "https://rukminim2.flixcart.com/flap/240/240/image/7fa17461d52794c9.jpg?q=90",
        phoneProduct: "Shop Now"
    },
]
function Mobile() {
    return (
        <>
            <div className='container-0'>
                <h1 className='mo_size'>Mobile Phones</h1>
                <div className='text_size'>
                    Mobile phones are no more merely a part of our lives.
                    Whether it's to stay connected with friends and family or to keep abreast of important developments
                    around the world, mobiles are no longer for sending a text or making a call. From budget to state-of-the-art
                    smartphones; indigenous names to global big-wigs - a whole universe of mobiles await you on Flipkart.
                    Whether you’re looking for waterdrop notch screens, a high screen to body ratio,
                    AI-powered sensational cameras, high storage capacity, blazing quick processing engines or reflective
                    glass designs, rest assured you won’t have to venture anywhere else for your smartphone needs.
                    The information you are reading has been last updated on 11-May-22.
                    <br />
                    <span>
                        OPPO Reno7 Pro 5G, OPPO Reno7 5G, Vivo Y33T, OPPO A16K, iPhone 13 | iPhone 13 Pro | iPhone 13 Pro Max | iPhone 13 Mini | iPhone 12 | iPhone 12 Pro | iPhone 12 Pro Max |
                    </span>
                </div>
            </div>
            <div className='mobile-container'>
                <div className='aside-left'>
                    <h1 className='fil_text'>Filters</h1>
                    <section>
                        <div className='categories'>CATEGORIES</div>
                        <div className='text_0'>
                            <span><svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787"></path>
                            </svg>
                            </span>
                            <a title="Mobiles &amp; Accessories" href="/mobiles-accessories/pr?sid=tyy&amp;otracker=categorytree">Mobiles &amp; Accessories</a>
                        </div>
                        <div className='text_1'>
                            <span>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class=""></path>
                                </svg>
                            </span>
                            <a title="Mobiles" href="/mobiles/pr?sid=tyy,4io&amp;otracker=categorytree">Mobiles</a>
                        </div>
                    </section>
                </div>
                <div className='aside-right'>
                    <div className='row'>
                        {PhoneProductDetails.map(content => (
                            <div class="col-sm-3 col-sm-5">
                                <a className="productLink" href={content.phoneUrl}>
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="img-hover-zoom img-hover-zoom--basic">
                                                <img class="cursor img-width" src={content.phoneImg} alt="Best of Electronics" />
                                            </div>
                                            <div>
                                                <div className='productName'>{content.phoneProduct}</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        ))
                        }
                    </div>
                    <div>
                        <img className='im_g1' src="https://rukminim2.flixcart.com/flap/1688/280/image/c0f1e37ae2a37038.jpg?q=50" alt="infinix days" />
                        <img className='im_g1' src="https://rukminim2.flixcart.com/flap/1688/280/image/067ab1d0a1c85807.jpg?q=50" alt="mobile" />
                    </div>
                    <div>
                        <img className='im_g2' src="https://rukminim2.flixcart.com/flap/1688/280/image/1c101944131dcd7c.jpg?q=50" alt="mobile" />
                    </div>
                    <div className='container-view'>
                        <div class="row">
                            <div class="page1"><img src="https://rukminim2.flixcart.com/flap/480/480/image/c160444f6efd0f09.jpg?q=50" alt="a" /></div>
                            <div class="page-2"><img src="https://rukminim2.flixcart.com/flap/480/480/image/cf53057ef3e4abca.jpg?q=50" alt="b" /></div>
                            <div class="page3"><img src="https://rukminim2.flixcart.com/flap/480/480/image/9bafb7f1e95bacbc.jpg?q=50" alt="c" /></div>
                        </div>
                    </div>
                    <div>
                        <img className='img-width' src="https://rukminim2.flixcart.com/flap/2222/192/image/fa01a425feabd334.jpg?q=50" alt="mobile" />
                    </div>
                    <div>
                        <img className='im_g1' src="https://rukminim2.flixcart.com/flap/844/140/image/e2d1c87a9a00cee8.png?q=50" alt="mobile" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Mobile;