import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

import * as inky from 'inkjs';

// Static vars
let globalTags = null;
let story1Path = "./story1";
let story2Path = "./story2";
let base_life = 100;
let base_timer = 10;
let tempDelay = 0;
let paused = true;
let friend_name = "Sam";
let stepsIdent = [
    "HOME",
    "QUESTIONS",
    "INTRO_ONE",
    "INTRO_TWO",
    "GAME",
    "CONCLUSION"
]
let currentStepIdent = 0;
let interval = null;
let timeout = null;
let chatmode = "speak";

const Home = () => {

    // In lifecycle vars // useState
    const [stories, setStories] = useState([]);

    const [life, setLife] = useState(base_life);
    const [tempLife, setTempLife] = useState(base_life);
    const [currentActiveStory, setCurrentActiveStory] = useState(0);
    const [step, setStep] = useState(0);
    const [username, setUsername] = useState("Camille");
    const [isIntro2, setIsIntro2] = useState(false);
    const [displayNextBtn, setDisplayNextBtn] = useState(false);

    // DOM elements // useRef
    const storyContainer = useRef(null);
    const outerScrollContainer = useRef(null);
    const paragraphContainer = useRef(null);
    const imgLeftContainer = useRef(null);
    const imgRightContainer = useRef(null);
    const timerBarContainer = useRef(null);
    const timerBar = useRef(null);
    const gameContainer = useRef(null);

    const continueStory = (firstTime = false) => {
        let delay = 1000.0;
        let delayChoice = 200.0;
        let customClasses = [];
        let story = stories[currentActiveStory];

        let showThough = false;
        let showSpeak = false;
        let userHasClicked = false;
        let endofstory_one = false;
        let endofstory_two = false;

        //console.log(currentActiveStory, story);

        /* // Don't over-scroll past new content
        let previousBottomEdge = firstTime ? 0 : contentBottomEdgeY(); */

        if (story.canContinue) {
            console.log("=====Story can continue=====");

            //console.log(story);

            let paragraphText = removeNamePrefix(story.Continue());
            let tags = story.currentTags;
            let choices = story.currentChoices;
            let activeUser = false

            console.log("Curr paragraph:", paragraphText);
            console.log("Curr tags:", tags);
            console.log("Curr choices:", choices);

            if (tags.length > 0) {

                // Any special tags included with this line
                for (let i = 0; i < tags.length; i++) {
                    let tag = tags[i];

                    // Detect tags of the form "X: Y". Currently used for IMAGE and CLASS but could be
                    // customised to be used for other things too.
                    let splitTag = splitPropertyTag(tag);

                    if (splitTag && splitTag.property === "CHAR") {
                        if (splitTag.val === 'USER') {
                            activeUser = true
                        }
                    }

                    if (splitTag && splitTag.property === "LIFE") {
                        let val = parseInt(splitTag.val);
                        console.log(val);
                        setTempLife(life => life + val);
                    }

                    if (splitTag && splitTag.property === "DELAY") {
                        delay += parseInt(splitTag.val) * 1000;
                    }

                    if (splitTag && splitTag.property === "SUBJECT") {
                        let second_choice = "DOG" === splitTag.val ? "JOB" : "DOG";
                        setStoriesGlobalVars([{ label: "second_choice", value: second_choice }])
                    }

                    if (splitTag && (splitTag.val === "END_STORY_ONE" || splitTag.val === "END_STORY_TWO")) {
                        if (splitTag.val === "END_STORY_ONE") {
                            endofstory_one = true;
                        } else if (splitTag.val === "END_STORY_TWO") {
                            endofstory_two = true;
                        }
                        setCurrentActiveStory(1);
                        paused = true;
                        console.log("==== Pass to story 2 ====")
                    }

                    if (splitTag && splitTag.property === "CHAT_TYPE") {
                        if ("though" === splitTag.val) {
                            showThough = true;
                            setTimeout(() => {
                                timerBarContainer.current.classList.add('show');
                                gameContainer.current.classList.remove("speak-mode");
                                gameContainer.current.classList.add("though-mode");
                            }, delay)
                        }
                        if ("speak" === splitTag.val) {
                            showSpeak = true;
                            setTimeout(() => {
                                timerBarContainer.current.classList.remove('show');
                                gameContainer.current.classList.remove("though-mode");
                                gameContainer.current.classList.add("speak-mode");
                            }, delay)
                        }
                        chatmode = splitTag.val
                        console.log("================CHAT MODE CHANGED:", splitTag.val)
                    }

                    // Basic usage
                    // IMAGE: src
                    if (splitTag && splitTag.property == "IMAGE") {
                        let imageElement = document.createElement('img');
                        imageElement.classList.add('answer_illu')
                        imageElement.src = `./img/chat/${splitTag.val}`;
                        let randomX = Math.random() * 150;
                        let randomY = Math.random() * (20 - (-20) + (-20));
                        if (activeUser) {
                            if (imgLeftContainer.current.childElementCount === 3) {
                                imgLeftContainer.current.querySelector("img:first-child").remove()
                            }
                            imageElement.style.transform = `translate(${randomX}px, ${randomY}px)`
                            imgLeftContainer.current.appendChild(imageElement);
                        } else {
                            if (imgRightContainer.childElementCount === 3) {
                                imgRightContainer.current.querySelector("img:first-child").remove()
                            }
                            imageElement.style.transform = `translate(${randomX}px, ${randomY}px)`
                            imgRightContainer.current.appendChild(imageElement);
                        }
                        showAfter(delay, imageElement);
                    } else if (splitTag && splitTag.property == "CLASS") {
                        customClasses.push(splitTag.val);
                    } else if (tag == "CLEAR" || tag == "RESTART") {
                        removeAll("p");
                        removeAll("img");
                        removeAll("button");

                        // Comment out this line if you want to leave the header visible when clearing
                        setVisible(".header", false);

                        if (tag == "RESTART") {
                            restart();
                            return;
                        }
                    }
                }
            }

            if (showSpeak) {
                let paragraphElement = document.createElement('p');
                paragraphElement.classList.add('paraphThough');
                paragraphElement.innerHTML = "De retour dans la discussion";
                paragraphContainer.current.prepend(paragraphElement);

                showAfter(delay, paragraphElement);

                showSpeak = false;
            }

            if ("though" !== chatmode) {
                console.log("Creating paragraph")
                // Create paragraph element (initially hidden)
                let paragraphElement = document.createElement('p');
                paragraphElement.classList.add('discussion_text');
                if (activeUser) {
                    paragraphElement.classList.add('left');
                }
                paragraphElement.innerHTML = paragraphText;
                paragraphContainer.current.prepend(paragraphElement);

                // Add any custom classes derived from ink tags
                for (let i = 0; i < customClasses.length; i++)
                    paragraphElement.classList.add(customClasses[i]);

                // Fade in paragraph after a short delay
                showAfter(delay, paragraphElement);
                delay += 200.0;
            }

            /* if (tempDelay !== 0) {
                delay = tempDelay;
                tempDelay = 0;
            } */

            if (choices.length > 0) {

                if ("though" == chatmode) {
                    delay = 200.0;
                }

                let choiceParagraphContainer = document.createElement('div');
                choiceParagraphContainer.classList.add('choiceContainer');

                storyContainer.current.appendChild(choiceParagraphContainer);
                showAfter(delay, choiceParagraphContainer);

                /* if (showThough) {
                    let paragraphElement = document.createElement('p');
                    paragraphElement.classList.add('infoThough');
                    paragraphElement.innerHTML = "Dans les pensées de Sam...";
                    choiceParagraphContainer.prepend(paragraphElement);
                } */

                let boooool = false;
                if ("though" === chatmode && boooool) {
                    let random = Math.round(Math.random());
                    let time = base_timer;

                    if (null !== timeout) {
                        clearTimeout(timeout);
                        timeout = setTimeout(() => {
                            clearTimeout(timeout);
                            clearInterval(interval);
                            userHasClicked = false;
                            time = base_timer;

                            // Remove all existing choices
                            removeAll("p.choice");
                            removeAll("div.choiceContainer");

                            // Tell the story where to go next
                            story.ChooseChoiceIndex(random);

                            // Aaand loop
                            continueStory();
                        }, 10000);
                    } else {
                        timeout = setTimeout(() => {
                            clearTimeout(timeout);
                            clearInterval(interval);
                            userHasClicked = false;
                            time = base_timer;

                            // Remove all existing choices
                            removeAll("p.choice");
                            removeAll("div.choiceContainer");

                            // Tell the story where to go next
                            story.ChooseChoiceIndex(random);

                            // Aaand loop
                            continueStory();
                        }, 10000);
                    }

                    if (null !== interval) {
                        clearInterval(interval);
                        interval = setInterval(() => {
                            time -= 0.1;
                            if (userHasClicked) {
                                clearTimeout(timeout);
                                clearInterval(interval);
                                time = base_timer;
                                userHasClicked = false;
                            } else if (time > 0) {
                                timerBar.current.style.height = `${time * 74 / base_timer}%`;
                            }
                            console.log(time);
                        }, 100)
                    } else {
                        interval = setInterval(() => {
                            time -= 0.1;
                            if (userHasClicked) {
                                clearTimeout(timeout);
                                clearInterval(interval);
                                time = base_timer;
                                userHasClicked = false;
                            } else if (time > 0) {
                                timerBar.current.style.height = `${time * 74 / base_timer}%`;
                            }
                            console.log(time);
                        }, 100)
                    }
                }

                story.currentChoices.forEach(function (choice) {

                    // Create paragraph with anchor element

                    let choiceParagraphElement = document.createElement('p');
                    choiceParagraphElement.classList.add("choice");
                    choiceParagraphElement.innerHTML = `<button class="answer"><span>${removeNamePrefix(choice.text)}</span></button>`;
                    choiceParagraphContainer.appendChild(choiceParagraphElement);

                    // Fade choice in after a short delay
                    showAfter(delay, choiceParagraphElement);
                    delay += 100.0;


                    // Click on choice
                    let choiceAnchorEl = choiceParagraphElement.querySelector("button.answer");

                    if ("though" === chatmode) {
                        choiceAnchorEl.addEventListener("click", function (event) {
                            event.preventDefault();
                            userHasClicked = true;

                            // Remove all existing choices
                            removeAll("p.choice");
                            removeAll("div.choiceContainer");

                            // Tell the story where to go next
                            story.ChooseChoiceIndex(choice.index);

                            // Aaand loop
                            continueStory();
                        });
                    } else {
                        choiceAnchorEl.addEventListener("click", function (event) {
                            event.preventDefault();

                            // Remove all existing choices
                            removeAll("p.choice");
                            removeAll("div.choiceContainer");

                            // Tell the story where to go next
                            story.ChooseChoiceIndex(choice.index);

                            // Aaand loop
                            continueStory();
                        });
                    }

                });
            }

            /* // Extend height to fit
            // We do this manually so that removing elements and creating new ones doesn't
            // cause the height (and therefore scroll) to jump backwards temporarily.
           //storyContainer.current.style.height = contentBottomEdgeY() + "px";

            if (!firstTime) {
                scrollDown(previousBottomEdge);
            } */

            /* if (showThough) {
                let paragraphElement = document.createElement('p');
                paragraphElement.classList.add('paraphThough');
                paragraphElement.innerHTML = "Dans les pensées de Sam...";
                paragraphContainer.current.prepend(paragraphElement);

                showThough = false;
            } */

            if (endofstory_one) {
                setTimeout(() => {
                    setDisplayNextBtn(true);
                }, delay)

                let paragraphElement = document.createElement('p');
                paragraphElement.classList.add('paraphThough');
                paragraphElement.innerHTML = "Fin de la partie 1.";
                paragraphContainer.current.prepend(paragraphElement);

                showAfter(delay, paragraphElement);

                endofstory_one = false;
            }

            if (endofstory_two) {
                let paragraphElement = document.createElement('p');
                paragraphElement.classList.add('paraphThough');
                paragraphElement.innerHTML = "Fin.";
                paragraphContainer.current.prepend(paragraphElement);

                showAfter(delay, paragraphElement);

                endofstory_two = false;
            }

            if (paused) {
                return;
            }

            console.log("Have to wait:", delay)
            setTimeout(() => {
                console.log("Waited:", delay);
                continueStory();
            }, delay);
        }
    }

    // INKY UTILITY

    const restart = () => {
        story.ResetState();

        setVisible(".header", true);

        continueStory(true);

        outerScrollContainer.current.scrollTo(0, 0);
    }

    // Fades in an element after a specified delay
    const showAfter = (delay, el) => {
        el.classList.add("hide");
        setTimeout(function () { el.classList.remove("hide") }, delay);
    }

    // Scrolls the page down, but no further than the bottom edge of what you could
    // see previously, so it doesn't go too far.
    /* const scrollDown = (previousBottomEdge) => {

        // Line up top of screen with the bottom of where the previous content ended
        let target = previousBottomEdge;

        // Can't go further than the very bottom of the page
        let limit = outerScrollContainer.current.scrollHeight - outerScrollContainer.current.clientHeight;
        if (target > limit) target = limit;

        let start = outerScrollContainer.current.scrollTop;

        let dist = target - start;
        let duration = 300 + 300 * dist / 100;
        let startTime = null;
        function step(time) {
            if (startTime == null) startTime = time;
            let t = (time - startTime) / duration;
            let lerp = 3 * t * t - 2 * t * t * t; // ease in/out
            outerScrollContainer.current.scrollTo(0, (1.0 - lerp) * start + lerp * target);
            if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    // The Y coordinate of the bottom end of all the story content, used
    // for growing the container, and deciding how far to scroll.
    const contentBottomEdgeY = () => {
        let bottomElement = storyContainer.current.lastElementChild;
        return bottomElement ? bottomElement.offsetTop + bottomElement.offsetHeight : 0;
    } */

    // Remove all elements that match the given selector. Used for removing choices after
    // you've picked one, as well as for the CLEAR and RESTART tags.
    const removeAll = (selector) => {
        let allElements = gameContainer.current.querySelectorAll(selector);
        for (let i = 0; i < allElements.length; i++) {
            let el = allElements[i];
            el.parentNode.removeChild(el);
        }
    }

    // Used for hiding and showing the header when you CLEAR or RESTART the story respectively.
    const setVisible = (selector, visible) => {
        let allElements = storyContainer.current.querySelectorAll(selector);
        for (let i = 0; i < allElements.length; i++) {
            let el = allElements[i];
            if (!visible)
                el.classList.add("invisible");
            else
                el.classList.remove("invisible");
        }
    }

    // Helper for parsing out tags of the form:
    //  # PROPERTY: value
    // e.g. IMAGE: source path
    const splitPropertyTag = (tag) => {
        let propertySplitIdx = tag.indexOf(":");
        if (propertySplitIdx != null) {
            let property = tag.substr(0, propertySplitIdx).trim();
            let val = tag.substr(propertySplitIdx + 1).trim();
            return {
                property: property,
                val: val
            };
        }

        return null;
    }

    const removeNamePrefix = (string) => {
        let output = string;
        let index = string.indexOf("- ");
        if (-1 !== index) {
            output = string.slice(2);
        }
        return output;
    }

    // USER INPUTS

    const handleUserName = (val) => {
        if (stories.length > 0) {
            setStoriesGlobalVars([{ label: "user_name", value: val }])
            setUsername(val);
        }
    }
    const handleHateName = (val) => {
        if (stories.length > 0) {
            setStoriesGlobalVars([{ label: "hate_name", value: val }])
        }
    }
    const handleSteps = (e, type) => {
        let el = e.currentTarget.setAttribute('disabled', true);
        currentStepIdent = stepsIdent.indexOf(type)
        setStep(currentStepIdent);
        if ("GAME" === type) {
            if (0 === currentActiveStory) {
                beginStory();
            } else {
                paused = false;
                continueStory();
            }
        } else if ("INTRO_TWO" === type) {
            setIsIntro2(true);
            removeAll(".discussion_text");
            removeAll(".paraphThough");
            removeAll(".answer_illu");
            setDisplayNextBtn(false);
        }
    }

    // INKY CONTROL STORY

    const beginStory = () => {
        if (null !== stories.length) {
            console.log("== Setup and start story ==");
            paused = false;
            setTempLife(parseInt(stories[0].variablesState["love_bar"]))
            continueStory();
        }
    }

    const setStoriesGlobalVars = (vars) => {
        stories.forEach(story => {
            vars.forEach(item => {
                if (null !== story.variablesState[item.label]) {
                    // console.log("Var updated:", item.label, item.value);
                    story.variablesState[item.label] = item.value
                }
            })
        })
    }

    // USE EFFECT

    useEffect(() => {
        let story1Promise = fetch(`${story1Path}.json`);
        let story2Promise = fetch(`${story2Path}.json`);
        Promise.all([story1Promise, story2Promise])
            .then(responses => {
                responses.forEach(res => {
                    console.log("Story file found:", res.url);
                    res.text()
                        .then(content => {
                            console.log("Story file loaded");
                            let newStories = stories;
                            let newStory = new inky.Story(content);
                            newStories.push(newStory);
                            // globalTags = newStory.globalTags;
                            console.log("New ink story created and set");
                            setStories(newStories);
                        })
                })
            })
    }, [])

    useEffect(() => {
        if (tempLife !== life) {
            let duration = 200;
            let valueTo = tempLife;
            let valueFrom = life;
            let dist = tempLife > life ? tempLife - life : life - tempLife;
            let stepTime = duration / dist;
            let stepVal = tempLife > life ? 1 : -1;

            let interval = setInterval(() => {
                valueFrom += stepVal;
                if (stepVal > 0 && valueFrom >= valueTo) {
                    setLife(valueTo);
                    clearInterval(interval);
                } else if (stepVal < 0 && valueTo >= valueFrom) {
                    setLife(valueTo);
                    clearInterval(interval);
                } else {
                    setLife(valueFrom);
                }
            }, stepTime)
        }
    }, [tempLife])

    return (
        <div>
            <Head>
                <title>Dating Sim</title>
            </Head>

            <main className={!isIntro2 ? 'story-one' : 'story-two'}>
                {/* HOME */}
                <div className={`step home ${0 === step ? 'show' : ''}`}>
                    <img className="background" src={`img/bg_screen_1.png`} />
                    <div className="content">
                        <img className="logo" src="img/logo.png" alt="Logo montrant papilou, le chien" />

                        <div className="user-control-container">
                            <div className="user-text-tip">clique pour commencer</div>
                            <button className="btn_start" onClick={(e) => handleSteps(e, "QUESTIONS")}><img src="img/btn-continue.png" /></button>
                        </div>
                    </div>
                </div>
                {/* QUESTIONS */}
                <div className={`step questions ${1 === step ? 'show' : ''}`}>
                    <img className="background" src={`img/bg_screen_2.png`} />
                    <div className="content">
                        <h3 className="title">Deux petites questions</h3>
                        <label htmlFor="username">
                            <p className="text">Quel est ton prénom ?</p>
                            <input name="username" type="text" defaultValue="" onChange={(e) => handleUserName(e.currentTarget.value)} autoComplete="off" />
                        </label>
                        <label htmlFor="hatename">
                            <p className="text">Et le prénom d’une personne que tu détestes ?</p>
                            <input name="hatename" type="text" defaultValue="" onChange={(e) => handleHateName(e.currentTarget.value)} autoComplete="off" />
                        </label>
                        <button className="btn_continue" onClick={(e) => handleSteps(e, "INTRO_ONE")}><img src="img/btn-continue.png" /></button>
                    </div>
                </div>
                {/* PART 1 INTRO */}
                <div className={`step part_one ${2 === step ? 'show' : ''}`}>
                    <img className="background" src={`img/bg_screen_2.png`} />
                    <div className="content">
                        <h3 className="title">1. La nouvelle</h3>
                        <p className="text">Sam et toi échangez par messages depuis quelques semaines.<br /><br />
                        Vous ne vous êtes pas encore rencontré.e.s mais commencez à bien vous connaitre.</p>
                        <button className="btn_continue" onClick={(e) => handleSteps(e, "GAME")}><img src="img/btn-continue.png" /></button>
                    </div>
                </div>
                {/* PART 2 INTRO */}
                <div className={`step part_two ${3 === step ? 'show' : ''}`}>
                    <img className="background" src={`img/bg_screen_2.png`} />
                    <div className="content">
                        <h3 className="title">2. La nouvelle</h3>
                        <p className="text">Sam et toi échangez par messages depuis quelques semaines.<br /><br />
                        Vous ne vous êtes pas encore rencontré.e.s mais commencez à bien vous connaitre.</p>
                        <button className="btn_continue" onClick={(e) => handleSteps(e, "GAME")}><img src="img/btn-continue.png" /></button>
                    </div>
                </div>
                {/* GAME */}
                <div className={`step game ${4 === step ? 'show' : ''} speak-mode`} ref={gameContainer}>
                    <img className="background" src={`img/bg_screen_2.png`} />
                    <div className="lovebar-container">
                        <p className="lovebar" style={{ height: `${(life*74/100)}%` }}></p>
                    </div>
                    <div className="timer-container" ref={timerBarContainer}>
                        <p className="timer" ref={timerBar}></p>
                    </div>

                    <div className="players">
                        <div className={`name user ${!isIntro2 ? 'active' : ''}`}>{username}</div>
                        <div className={`name friend ${isIntro2 ? 'active' : ''}`}>{friend_name}</div>
                    </div>

                    <div className="leftImages" ref={imgLeftContainer}>
                        {/* <img src="./img/chat/01_telepohne.png" class="answer_illu"/>
                        <img src="./img/chat/02_sonnette.png" class="answer_illu"/>
                        <img src="./img/chat/04_yeux.png" class="answer_illu"/> */}
                    </div>
                    <div className="outerContainer" ref={outerScrollContainer}>
                        {/* <div className="gradient-top"></div> */}
                        <div id="story" ref={storyContainer}>
                            <div className="paragraphContainer" ref={paragraphContainer}></div>
                            {displayNextBtn && <button className="btn_continue btn_next" onClick={(e) => handleSteps(e, !isIntro2 ? "INTRO_TWO" : "CONCLUSION")}><img src="img/btn-continue.png" /></button>}
                            <div className="bg-though-mode">
                                <p className="bg-though-text">Dans les pensées de Sam...</p>
                            </div>
                        </div>
                    </div>
                    <div className="rightImages" ref={imgRightContainer}>
                        {/* <img src="./img/chat/01_telepohne.png" class="answer_illu"/>
                        <img src="./img/chat/02_sonnette.png" class="answer_illu"/>
                        <img src="./img/chat/03_yeux.png" class="answer_illu"/> */}
                    </div>
                </div>
                {/* CONCLUSION */}
                <div className={`step conclusion ${5 === step ? 'show' : ''}`}>
                    <img className="background" src={`img/bg_screen_2.png`} />
                    <div className="content">
                        <button className="btn_continue" onClick={(e) => handleSteps(e, "HOME")}><img src="img/btn-continue.png" /></button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;