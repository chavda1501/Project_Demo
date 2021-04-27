import React from 'react';

const Contact = () => {
    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="title text-center">
                        <h1>Custom form</h1>
                    </div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">FirstName</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">LastName</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Email</label>
                            <input type="Email" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Password</label>
                            <input type="Password" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;
