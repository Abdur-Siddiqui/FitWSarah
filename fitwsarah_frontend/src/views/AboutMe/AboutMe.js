import { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import "../../css/style.css";
import NavNotLoggedIn from "../../components/navigation/NotLoggedIn/navNotLoggedIn";
import FooterNotLoggedIn from "../../components/footer/footer";
import NavLoggedIn from "../../components/navigation/loggedIn/navLoggedIn";
import { ROLES } from "../../components/authentication/roles";
import "../../components/authentication/switch.css"
import RoleBasedSwitch from "../../components/authentication/RoleBasedSwitch";
import 'react-toastify/dist/ReactToastify.css';
import ReactStars from 'react-stars'
import AddFeedbackButton from '../../components/feedback/newFeedbackBtn';
import "./AboutMe.css";
import { useTranslation } from "react-i18next";
import workoutImage from './workout.png';

function AboutMe() {
    const {
        isAuthenticated,
        user
    } = useAuth0();

    const [editMode, setEditMode] = useState(false);
    const {t} = useTranslation('contactMe');

    function extractAfterPipe(originalString) {
        const parts = originalString.split('|');
        if (parts.length === 2) {
            return parts[1];
        } else {
            return originalString;
        }
    }

    const {sub} = isAuthenticated ? user : {};
    const RegexUserId = sub ? extractAfterPipe(sub) : null;

    const [feedbackDataToSend, setFeedbackDataToSend] = useState({});

    const handleInputChange = (e) => {
        const {name, value} = e?.target || {};
        const updatedData = {
            ...feedbackDataToSend,
            userId: RegexUserId,
            [name]: value,
        };
        console.log(updatedData)
        setFeedbackDataToSend(updatedData);
    };

    const handleStarsChange = (value) => {
        const updatedData = {
            ...feedbackDataToSend,
            userId: RegexUserId,
            stars: value,
        };
        console.log(updatedData)
        setFeedbackDataToSend(updatedData);
    };


    return (
        <div>
            {!isAuthenticated && <NavNotLoggedIn/>}
            {isAuthenticated && <NavLoggedIn/>}
            <div id="contactBackground">
                <div className="feedback-container">
                    <div className="grey-box">
                        <p>Hello, I am<br/>
                            <span className="large-bold">Tom Staronskiy,</span><br/>
                            A professional personal fitness trainer.
                        </p>
                    </div>
                    <div className="image-container">
                        <img src={workoutImage} alt="Workout"/>
                    </div>
                </div>
                <FooterNotLoggedIn/>
            </div>
        </div>
    );
}

export default AboutMe;

