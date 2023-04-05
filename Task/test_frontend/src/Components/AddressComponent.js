import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import logo from '../img/logo.png'
import Footer from './Footer.js';

import { addUserAddress } from '../Redux/Actions/Actions.js'
import bnr from '../img/bnr.jpg';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';

function AddressComponent({ addUserAddressAction, addUserAddressReducer, addNewUserReducer }) {

    const [addAdderss, setAddAderss] = useState(null)
    const [addressList, setAddAderssList] = useState([])

    const navigate = useNavigate();
    console.log(addNewUserReducer)
    useEffect(() => {
        if (!addNewUserReducer?.userDetails?.id) {
            navigate('/');
        }
    }, [])


    useEffect(() => {
        if (addUserAddressReducer?.userAddressDetails) {
            navigate('/thankyou')
        }
    }, [addUserAddressReducer])


    const handdleInputChange = (event, addressNo) => {
        if (event.target.value.trim) {
            setAddAderssList({ ...addressList, [addressNo]: { ...addressList[addressNo], [event.target.id]: event.target.value } })
        }
    }

    const HandleSubmit = () => {
        if (addNewUserReducer?.userDetails?.id) {
            addUserAddressAction({ 'user_id': addNewUserReducer?.userDetails?.id, 'addressList': addressList })
        }
    }
    return <div  >
        <Header />

        <section className="bnrsection">
            <div className="container">
                <div class="row">
                    <div class="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
                        <h1>Hi <span>{addNewUserReducer?.firstName}</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div class="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
                        <div class="formpart">
                            {!addAdderss &&
                                <div id="slide03" >
                                    <h3>Do you have a Previous Address?</h3>
                                    <div class="form-check">
                                        <button type='button' class="form-check-label next02" for="flexRadioDefault1" onClick={() => { setAddAderss(1) }}>
                                            Yes
                                        </button>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <Link to={'/thankyou'} ><label class="form-check-label tothank" for="flexRadioDefault2">
                                            No
                                        </label>
                                        </Link>
                                    </div>
                                </div>
                            }

                            {addAdderss > 0 &&
                                <> <h3>Enter your Previous Address</h3>
                                    < div id="slide04" >
                                        {addAdderss >= 1 &&
                                            <div class="mb-3 mt-5 text-start">
                                                <label class="form-label">Previous Address {addAdderss}</label>
                                                <input type="text" class="form-control mb-3" id="address_1" placeholder="Address line 1" onChange={(event) => handdleInputChange(event, addAdderss)} />
                                                <input type="text" class="form-control mb-3" id="address_2" placeholder="Address line 2" onChange={(event) => handdleInputChange(event, addAdderss)} />
                                                <input type="text" class="form-control mb-3" id="address_3" placeholder="Address line 3" onChange={(event) => handdleInputChange(event, addAdderss)} />
                                            </div>

                                        }

                                        {addAdderss >= 2 &&
                                            <div class="mb-3 mt-5 text-start">
                                                <label class="form-label">Previous Address {addAdderss}</label>
                                                <input type="text" class="form-control mb-3" id="address_1" placeholder="Address line 1" onChange={(event) => handdleInputChange(event, addAdderss)} />
                                                <input type="text" class="form-control mb-3" id="address_2" placeholder="Address line 2" onChange={(event) => handdleInputChange(event, addAdderss)} />
                                                <input type="text" class="form-control mb-3" id="address_3" placeholder="Address line 3" onChange={(event) => handdleInputChange(event, addAdderss)} />
                                            </div>
                                        }

                                        {addAdderss == 3 &&
                                            <div class="mb-3 mt-5 text-start">
                                                <label class="form-label">Previous Address {addAdderss}</label>
                                                <input type="text" class="form-control mb-3" id="address_1" placeholder="Address line 1" onChange={(event) => handdleInputChange(event, addAdderss)} />
                                                <input type="text" class="form-control mb-3" id="address_2" placeholder="Address line 2" onChange={(event) => handdleInputChange(event, addAdderss)} />
                                                <input type="text" class="form-control mb-3" id="address_3" placeholder="Address line 3" onChange={(event) => handdleInputChange(event, addAdderss)} />
                                            </div>
                                        }

                                        <div class="mb-3 mt-5 text-center" id="submitoradd01">
                                            <button onClick={HandleSubmit} class="btn btn-success tothank">Submit</button>

                                            {addAdderss <= 2 &&
                                                <p><div href="#postaddrs2" id="showadrs2" onClick={() => {
                                                    setAddAderss(addAdderss + 1)
                                                }}>Add Another Address</div></p>
                                            }

                                            {addAdderss == 1 &&
                                                <p>
                                                    <div href="#postaddrs2" id="back02" onClick={() => {
                                                        setAddAderss(addAdderss + 1)
                                                    }}>{'<< Back'}</div></p>
                                            }
                                        </div>

                                        <div class="mb-3 text-center">
                                            <p><div href="#slide04" id="remove4"
                                                onClick={() => {
                                                    setAddAderss(addAdderss - 1)
                                                }}
                                            >Remove Address</div></p>
                                        </div>
                                    </div>
                                </>
                            }


                        </div>
                    </div>
                </div>
            </div >

        </section >
        <Footer />
    </div >

}

const mapStatetoProps = (state) => {
    return {
        addNewUserReducer: state.addNewUserReducer,
        addUserAddressReducer: state.addUserAddressReducer
    }
}
const mapDispatchtoProps = {
    addUserAddressAction: (details) => addUserAddress(details),
}

export default connect(mapStatetoProps, mapDispatchtoProps)(AddressComponent)



