import React, { useRef, useEffect, useState } from 'react'
import "./App.css"
import ReactScrollToBottom from "react-scroll-to-bottom"
const Test2 = () => {
    const messagesEndRef = useRef(null)
    const [data, setadata] = useState("chat")

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, []);

    return (
        <>




            <div className='chatcontainer'>


                <div className='alignTextDhpTwo'>
                    <div className={data == "chat" ? "textcenterCahtBoxDhpchat" : "textcenterCahtBoxDhp"} onMouseEnter={() => setadata("chat")}>Chat</div>
                    <div className={data == "participant" ? "textcenterCahtBoxDhpchat" : "textcenterCahtBoxDhp"} onMouseEnter={() => setadata("participant")}>Participants</div>
                </div>


                {data == "participant" ? <div className='participantbox'>
                    <div>
                        <div className='participantsdata'>
                            <div>
                                <img style={{ height: 45, width: 45, borderRadius: "50%" }} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                            </div>
                            <div style={{ marginLeft: 10, width: "100%" }}>
                                <div className='sdetoDhphh'>
                                    <div className='Dhpchatperson'>Me</div>
                                    <div className='xcfghyuiopkDhp'>
                                        <div style={{ width: 7.5, height: 7.5, backgroundColor: "#14CEC3", borderRadius: "50%", verticalAlign: "top" }}></div>
                                    </div>
                                </div>
                                <div className='Dphpersoninterest' style={{ marginTop: 4 }}>Investor interested in agriculture</div>
                            </div>
                        </div>
                        <div className='participantsdata'>
                            <div>
                                <img style={{ height: 45, width: 45, borderRadius: "50%" }} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                            </div>
                            <div style={{ marginLeft: 10, width: "100%" }}>
                                <div className='sdetoDhphh'>
                                    <div className='Dhpchatperson'>Me</div>
                                    <div className='xcfghyuiopkDhp'>
                                        <div style={{ width: 7.5, height: 7.5, backgroundColor: "#14CEC3", borderRadius: "50%", verticalAlign: "top" }}></div>
                                    </div>
                                </div>
                                <div className='Dphpersoninterest' style={{ marginTop: 4 }}>Investor interested in agriculture</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className='pareticipantBUttONDhp'>
                            + Add People
                        </button>
                    </div>


                </div> : null}

                {data == "chat" ?
                    <div className='ChatBoxDhp'>
                        <div className='comingChatPerson'>
                            <div className='userChatPImageDhp'>
                                <img style={{ height: 30, width: 30, borderRadius: "50%" }} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                            </div>
                            <div className='personCahtsDhp'>
                                Lorem ipsum dolor sit amet consectet. Sodales fusce eu molestie ligula varius cursus bibendum quam.
                            </div>
                        </div>
                        <div className='sendingChatPerson'>

                            <div className='sendinpersonCahtsDhp'>
                                Okay 👍
                            </div>
                            <div className='userChatPImageDhp'>
                                <img style={{ height: 30, width: 30, borderRadius: "50%" }} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                            </div>
                        </div>
                        <div className='comingChatPerson'>
                            <div className='userChatPImageDhp'>
                                <img style={{ height: 30, width: 30, borderRadius: "50%" }} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                            </div>
                            <div className='personCahtsDhp'>
                                Lorem ipsum dolor sit amet consectet. Sodales fusce eu molestie ligula varius cursus bibendum quam.
                            </div>
                        </div>
                        <div className='comingChatPerson'>
                            <div className='userChatPImageDhp'>
                                <img style={{ height: 30, width: 30, borderRadius: "50%" }} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                            </div>
                            <div className='personCahtsDhp'>
                                Lorem ipsum dolor sit amet consectet. Sodales fusce eu molestie ligula varius cursus bibendum quam.
                            </div>
                        </div>
                        <div className='comingChatPerson'>
                            <div className='userChatPImageDhp'>
                                <img style={{ height: 30, width: 30, borderRadius: "50%" }} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                            </div>
                            <div className='personCahtsDhp'>
                                Lorem ipsum dolor sit amet consectet. Sodales fusce eu molestie ligula varius cursus bibendum quam.
                            </div>
                        </div>
                        <div className='comingChatPerson'>
                            <div className='userChatPImageDhp'>
                                <img style={{ height: 30, width: 30, borderRadius: "50%" }} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                            </div>
                            <div className='personCahtsDhp'>
                                Lorem ipsum dolor sit amet consectet. Sodales fusce eu molestie ligula varius cursus bibendum quam.
                            </div>
                        </div>
                        <div className='comingChatPerson'>
                            <div className='userChatPImageDhp'>
                                <img style={{ height: 30, width: 30, borderRadius: "50%" }} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                            </div>
                            <div className='personCahtsDhp'>
                                Lorem ipsum dolor sit amet consectet. Sodales fusce eu molestie ligula varius cursus bibendum quam.
                            </div>
                        </div>
                        <div className='comingChatPerson'>
                            <div className='userChatPImageDhp'>
                                <img style={{ height: 30, width: 30, borderRadius: "50%" }} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                            </div>
                            <div className='personCahtsDhp'>
                                Lorem ipsum dolor sit amet consectet. Sodales fusce eu molestie ligula varius cursus bibendum quam.
                            </div>
                        </div>
                        <div className='comingChatPerson'>
                            <div className='userChatPImageDhp'>
                                <img style={{ height: 30, width: 30, borderRadius: "50%" }} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                            </div>
                            <div className='personCahtsDhp'>
                                Lorem ipsum dolor sit amet consectet. Sodales fusce eu molestie ligula varius cursus bibendum quam.
                            </div>
                        </div>
                        <div className='sendingChatPerson'>

                            <div className='sendinpersonCahtsDhp'>
                                Okay 👍
                            </div>
                            <div className='userChatPImageDhp'>
                                <img style={{ height: 30, width: 30, borderRadius: "50%" }} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                            </div>
                        </div>

                        <div ref={messagesEndRef}></div>



                    </div>
                    : null}


                {data == "chat" ? <div className='dbhjuiobnhjDhp'>
                    <div className='sendMessageInputDhp'>
                        <input type="text" name="message" placeholder='Message...' />
                    </div>
                    <div>
                        <button className='buttonSendMessage'>

                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.39969 6.31997L15.8897 3.48997C19.6997 2.21997 21.7697 4.29997 20.5097 8.10997L17.6797 16.6C15.7797 22.31 12.6597 22.31 10.7597 16.6L9.91969 14.08L7.39969 13.24C1.68969 11.34 1.68969 8.22997 7.39969 6.31997Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.1094 13.65L13.6894 10.06" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                    </div>
                </div> : null}

            </div>





        </>
    )
}

export default Test2
