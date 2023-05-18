import React from 'react';

const Search = () => {
    return(
        <div className='search'>
            <div className='searchForm'>
                <input type='text' placeholder='Find a user'/>
            </div>
            <div className="userChat">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISEhIYEhIYDw8fDxgYDx8SEhAZJSEnJyUhJCQpLjwzKSw4LSQkNDo0ODM1TTc3KDE8Skg1SjxCNzQBDAwMEA8PGRARGTEdGSs/MTE/MTExPz8xNDQxMTExMTMxMTExMTQxMTE0NDE0MTE/MTExNDE0MTQxMTQxNDExNP/AABEIAMgAyAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAEDBAYCB//EADUQAAEDAwIEBQIFAwUBAAAAAAEAAhEDBCESMQVBUWETInGRoQaBMkKxwfAjYuEUcpLR8ST/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACERAQEAAgICAwADAAAAAAAAAAABAhEhMQNBEiJRMlJh/9oADAMBAAIRAxEAPwDCymSKYpKOkmSQZ065lPKAdPC5BSa7PbmpCZrCdsjnhQ1XNbsMorYwRkegVHiNsQ6dOkEYCdEU23ZHJStu55Sqb6Z6J2UzO3wkehJrpzBAxykKQ9dukKrQbUGQB8yrrbk7VGFoP5t2z3VFpFKUqepbkCRkKBAJOmSQDpJJII6SZOgiTymSQHUpJgnQFGUyRXMoUeUpTSkpDqUlyumCSAgOo+U7RkAbfqV1UZGyucMotAdVf+BrTE8yltek73ikwFw8xHlH+E1laPqO1OGJEDYKK3b4jzUfk8hyaOQWksG7fZTllpeOOz2vA6Z/GEQp/TtDofdELZuNlZY08lnutZjIHs+lqLsS4fP6qC7+jagBNJwqA7se3SffZae3eRAgInTceiqWxOUeQvtDRcabmlsYexwhzO46hDr+hodtg5Hdewcb4Oy5bJGmo0HQ8bjseoXnnFbHSHU3jQ5sxnAPbsVWOTPLH8ZlJJwyfukrZEkkkqB0kydBHSSCcBBHSSASQFAhclSFMQhSNKV0QmhSDEqxatzKrgSr1uwgKbV4xJ4eoAdSF1xaoGhlEbAS7+esq5bABzTyEn22QK9q6qrz0MeyIq9r9g6SByG/7LQ2VSFnuHD3KM0RHwpvLTHhpbW4/ZFaEnKz9hMg+i0lqQMehS0vae3YSi9Bkb9FHaUAfMO6Acc45WDjSoUyXyRq5BOSIytvQ/WvWsmSMLKfWVvTr0HVqZl7ANUbkJcH4JUqO13NUknZozpR+8+nKfhuaxztRY4EkzqBEEIsncTLeq8XcZz7ppV+pYOZ47XCCyqA4dJmfmFQcIwtJ0yynJJJJAIScBOEgE8KgQTgJwE8IIgEk4SQA8pk8pFBuUoTrukySAlROXVKliVZY6CB6riudIAG5TWYl2Vl3y264EA6NXZh+SsyHSZ6krV/6f8Ap1Hf2E/z2WSarnSfYxa3IYASrrOLHZlMvPZBbSlrMnZbLhN3RogatLepU70rW1e04ncEwKWkdwUZHGYgH8WJT3HGqdSnLANEkE6HkE+oELNXNYPcXMiOcJWX2rGzfFes/TXE2VGROY2UH1I80gXMYIIydgsD9P8AEXUqjTMCRK9Ne1lxTE+YEdUr1petZbYXg3GLh90ymT4bHFsO0a9zGwIW2t6tfxCwltWmMF7QWQekEmfsqlvwejTdJaEWbcNADWj/AAn60my72yX1XwxjarnAQKzACeWoY/cLzq5olpg7gkFex/U1qX27nDdhD/sN/j9F5lxu2g6ow7LuxTxuuGeU9gScJ9KcBWzMAugEgF0AgjAJwE8JQqBJJJKSBRVXbX91VKYJ6G14PVy0ZzQum4yAEZY3S0DoM+qnKtMYp3D5d6SprIxk7T79VXc3c8pUlJ+QeXJSudtW/SLWq+fykepjKwVPOFpby6LbV1PnB58z/Cs3bonRXsWt2aWgqW3salQyRIlcUDt2WisKwgCAlK0+O0Nhw8UmkTAcPMAd/uuLikBsICNNaDyQ/iMNBPNVeYWOOqHUxBHqFvvpm6fAbyWBbDfM4x1JK1f0pxNhBggw4ZChrpub1oDA4yDzXFhDvfCkt31Kj3tdT009MNJd5n/bkFWfRNB8/kkR2T3rlM/r7Fa1uCwtOWuaQ4dQV5Xc0zoLHNJLHva8+hj9l6uytqaPRYHjNLw7mtiR4gfA7gE/ulbzuM8d8ysDd0tLlCAjHFKYORjbHRCCFpOWWU0QCdQPuADHNN4ruQhNKwkobaoXDIggmYU8oBkk8pkEzydoSDVat6PM46J05E1nRjJ5RHqr1bDY7ZUdrTLiD+VskruqdRMbBZ5NcZqB9wTt6K3bWpcRAnBUfhy+O4WptrdlOm50ZDSlfxWP6F8etPDpNn87WmfSf+1nGRqEY6rV/UVXxLemRyc4faCslRbOZ6KpOEzsWt0UsnZQu15IlQwot5b49NLY09SGcbojUWg7RKI8LrQ37FBr+5GrJyc5T3sXtTdQLoBgj0Wg4PZ+EG1G5OoY5IGy4CNcNuqnljU5vMAI1s5t6fYXYcxpJAdAnKi4pfMY0B+Q4x+GR7oHw2o9wkMDd5ncI1bgVGw8AyeY3Tyl0z+Ml3XXA3aqcEzDnR6LPfUFObp8c6bQf+J/7WrsbUU9QGxcSOyzbh4lWtU3Gp0HqNv0AWfUkTveVsYq/oQGA4lrt+WSs9dt06uRAH6gLZ/UNHS2ljd4n91luL0oJPIjPYbrTGpygJUBiQQCcSeS6ZU5A7NzhNWIENOYLYjmoalTSww2CWxnfYrXTLZcOuSS6cbKO4v3kkDygHko7Km7eDv0WleaRp6S1pMbaFPBcs6/ijg0AAF3MlOr9pZtbUkt8pHl5hJHBaqpTpQJI9O6no0y89segTU2azG4lF6NMCABsitMYhczQyBtzXFsf6bnf3D4XfEKgA0g9VUfWhgAU6XtYsWanjn5pR2u+GPMxgD4QjhgiTG8aVbu3lwLBuRHuVPtXpT4hU/+OmTuXPI/T91nbesGgagSJOyL/UjwPDog4YyHDuUCe3yt+8rT0z3q7FLO8DnwBAxCOMGFjWOIIIwcLUcKvm1GwcPG4WeWOuW3jz3xR2wOpjmh2l35SqV8zURqAkKRjoSrPDspb4X7VGUyNjCK8LrODhlDyrdk8SMIlp7bPhZO8zK0FA4CzvCbhun2R1lYAeyqM8t7d8X4l4VB5mHkBrPU4+N/sh1iWNpEziD7fwLIfVPGvErilTPlYSCeruftt7ojwu7Gky7AY+J/2/z2WeXYxkkT8ZYHuaDkMYZ9ScLMfUekOFPs3Vncx/CtLUqy156vZPYTCyXHDqqOdkSHRPac/CrFOXEZ+qWgkhvM/wA+VH4/QBJ7D4cjk509cKPRgOcYGOWcrRnt2a56qN1Y9fld3NHSwumYjGy5FEggjaDqn9E9JuTulcuGJkd0l1aWgc7sAUkfEvktWbSrr3hrZ9k1Bga2TgRhUrmpJj1SaRBc1NRhcsZJE7BPRYSdlM2mczy26JbORfsaTnkADKJ1GU6A1E+JVjA/K091ToVDTbpZgn8R5ojwvh3iFwO4YDn1ypOsbfU3Fxe7dziSqFdhEei9C+oeBhlKm9on8U9iP8fosNxGnp0jsR8q5ltNnCiAprZ5ZUBBiCFG1qcN5p0RraFYuAlSOKH8Oqy0fZEAZXPeHVOZspV2wHmA3EhVGtVmm7RmYKY205e2mAZ04yg/Gvq8MpmnQM1DI1D8LPTqVneK3T6mC4kdJQWo0j7N+ZV4/wCs8r+ClnJLXE5jJPfmjXBLsVAQTEPcD/tKDWBDmjs0qrwy68Kqeh/EE5GdtbFtw+G0xv4jS/uADj3Vfitqak6HDIJaT3mflM2682sGPK6CMzj+e64pVwMOxvpPJLWuhvfYQ+0qMHmbyOQPKVUZQ8RrSfKdQJjO3JbG2eClccIp1BLAGO7Dyn1CqZfqcvH+MtWt2OEOGN94VSs1r/DbJhz/AClu0Dqit3alupj28jI6odSuDTYwOZ5i4jS38vRaMbwt+A2CANMjMYKS5v2OdTcGCXEdYSTJJxOsGCBvyQykJEnqVLxElzzmUohgHdZOiO7cgeY88BWqVLUJ7qucRyCMcKphwjlqCXs7xFptiQASOh90ToTRfSqAQdJDv7h/4p7toa1n9wAA+6s1aIeGCMiCfRGWombulLiFzIe3cFrtP32XnfEGgudjYkHGx3K9VqcIJY4j8ehxYOkCVkHfTLyxw5y77n+EKMbrmtLN8RiAzc8l25mAijuHuZIIBgnfYqA0T0/wr+RTEuFPIJHJGmFCbdmkq+xyzy5rbHiLzE9U4UVNx6/K5qPKcKqVyFTu4DWgZOSVNck7KOrTDm9xsnEWHsK0A8jgtKol3nk9TKsUaZ9u6moWepw1SBgyOYT2Wlu2qOcwtBy0eUDopLS6ccHK6tqYGp2AC1wGc9lXpUwCSDuSiXZ6HrSojltUkLNWrtkdtH7IB+N2BqU3GnHiBp0E/osMG+IyHVIc13nIEGRuF6ZTyFkvqGxFOoC1kNe5xcQIDXd/VXjfTLyY75Ara/NTUNMNGAec90kqFrTpEefLtgSMpLRzm0yfeV08E6QO8nouziQMnqrNhTGqTyj7lY7dUiH/AExcQDgCEXtJZAA5hXH2ggF2CYXTGNNRojyt6c0jXHuLondoCNcPZLXPiYA045oM8QMYmMdlqeEBop55R8R+6XZdRQZxCHZJGHR0iIcPtj5T8LcytTkEeIwgPE9JA9/2CC/UZcTVFMEDWS3P4D69CgvCzWpnWHlvlPzv9kXFWN300H1ayi4Asp6ahB1EHS5rupHNY19Anmi9w95MucSepMqppQqTQTUpLtjDsVffTXDacJaVtG0LsDqpHN7JtM+iei2H12Tn2UPhlEHsUbmhADa1PB+6KW1QU6JOzg0CmYJa7Mnl2IVW5Z5TG5hEnUdFGs4keZkDywJB5dt/la+PHe2Pky1ZoINUuJ5CTgbBS03KsCu2PWTYVtno1ZVB+izdGoilpVTTptbBjXRK447wcVaFRrXQ4tOmd2nkVT4XcbCei0TWB7cYMKd6os3Hhr6DabmB4J87mvMxo5FJaX6r4XoucsljwS7lpeN/2SXRjeHJlLLoPYNpUtpUioOkqAvzCsMpkEO9Fg6h6k8uJJOFZosEhxCo2z/LurBrBgJccAEwnpNqS5qeZzuQADR2Wk4TW1Q3YuBI7zyWDPEG1KgYZaJk+i0PD+It0mSKbmPIb5vyjMnvBV442pyy1F26eQ24JaMvayTnO+33+EHccK3xXiLqgbIA1SfYkT8FDdaMrzo/HONuKoVUq29U6qhtCKeFEHKUOQK4YweaSdhpXJK7JUbygnDlC5SErlAQvALmAnSNbJPMZRJ9dgpOZU/EfFNMuAbqmRhD3TqpkGDrZBImMohSYx58VoLiS+ZZ5SdREwcjYbLp8U+tc3lv2jOAptaZzS1zmndrnA/ZRucuazl0y8LVF6J2tRCKJV+g9I2lsa+y1fDrqQFgraqtFwy52ylkIKfVVh4tE1GiXMgn05pIlbVJbByCDKSJnZNJy8ct28nt7ck6nYHfmrpgiOSaowg5XLnhoyqkRclui/SIOwQ68u9bw0mBIBzkqKpe7wqFqfErCdhJGOfJaTFFyEbamPEcJJMiDHz9t0atr0OL2hhLWsJaXAlrjOfjYoU0PaZpiSXNBJw3P8+VecxoqOPiOl72AgDVGI5evwtcZplldprkFlRzC7VpDQT3iT8kpg9Q1Hy+oer3/qnaVz5c2unDjGO3vUDyu3hQvSWZPKic+E5egOy5ROcmc9cygESnSATEJptRuPnp5A/qMyRIGVaYwtFPQ6GBzvFJECN/tv2VC4fBaej2H5RK+1vYSH6DAJOn8cTH6bd10eHqufzdwE4iD4jnFunVB3kdFSByiXEmmGlxMgCOhPMfpy5Ie0LLOfatsMtyJGFWqb1Tap2OWTUToPRmxrxCztJ6I21Q9UE3XD7iQM9EkG4dX/ZJTpTDnis7yT1VOtfOcd06S3clQPuDEK7wQS9xOwaB9z/4kkqTR4UzpcJE5EEA78j7qf8A0TnupCMeIzxNO75325ASkktcUVy4eZ2I8zsHcZThJJc2Xbqw/jHTlDUakkkpWeFG58JkklEHqRiSSIVdwuHBJJWhRvzDfuOavufJcD5ND3hnmPmJI98zPqkktvF1WPk7iANNSoOsiBr2wfnCPWH07T8N5qDQXNdodIO46dkklUxl3tncrOmMIXbSkkuS9u6dJ6TlfoOSSQBmyqwkkkkb/9k="/>
                <div className="userChatInfo">
                    <span>Anna</span>
                </div>

            </div>
        </div>
    )
}
        
export default Search;