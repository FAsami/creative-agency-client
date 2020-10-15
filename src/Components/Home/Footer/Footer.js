import React from 'react'

function Footer() {
    return (
        <div style={{ backgroundColor: '#FBD062' }} className='mt-5' >
            <div className="row m-3">
                <div className="col-md-6">
                    <h3 className='text-brand-header pt-5'>Let us handle your project, professionally.</h3>
                    <p className='text-brand-muted'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-6 px-3 py-5">
                    <input type="text" className="form-control py-4" placeholder='Your email address' />
                    <input type="text" className="form-control py-4 my-2" placeholder='Your name or company name' />
                    <textarea className='form-control my-2' cols="30" rows="5" placeholder='Your message'></textarea>
                    <button className="btn px-5"
                        style={{ color: "#fff", fontSize: '16px', backgroundColor: '#111430' }}>
                        Send
                            </button>
                </div>
            </div>
            <p className="text-center text-brand-muted py-5">copyright Orange labs 2020</p>
        </div>
    )
}

export default Footer
