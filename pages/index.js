import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

import * as inky from 'inkjs';

export default function Home() {

    // In lifecycle vars
    const [story, setStory] = useState(null);

    // Static vars
    let globalTags = null;

    // DOM elements
    const storyContainer = useRef(null);
    const outerScrollContainer = useRef(null);

    const continueStory = (firstTime) => {
        let paragraphIndex = 0;
        let delay = 1000.0;
        let customClasses = [];

        // Don't over-scroll past new content
        let previousBottomEdge = firstTime ? 0 : contentBottomEdgeY();

        if (story.canContinue) {
            console.log("Story can continue");

            let paragraphText = story.Continue();
            let tags = story.currentTags;
            let choices = story.currentChoices;

            console.log("Curr paragraph:", paragraphText);
            console.log("Curr tags:", tags);
            console.log("Curr choices:", choices);

            // Create paragraph element (initially hidden)
            let paragraphElement = document.createElement('p');
            paragraphElement.innerHTML = paragraphText;
            storyContainer.current.appendChild(paragraphElement);

            // Add any custom classes derived from ink tags
            for (let i = 0; i < customClasses.length; i++)
                paragraphElement.classList.add(customClasses[i]);

            // Fade in paragraph after a short delay
            showAfter(delay, paragraphElement);
            delay += 200.0;

            if (tags.length > 0) {
                console.log("Tags:", tags);

                // Any special tags included with this line
                for (let i = 0; i < tags.length; i++) {
                    let tag = tags[i];

                    // Detect tags of the form "X: Y". Currently used for IMAGE and CLASS but could be
                    // customised to be used for other things too.
                    let splitTag = splitPropertyTag(tag);

                    // IMAGE: src
                    if (splitTag && splitTag.property == "IMAGE") {
                        let imageElement = document.createElement('img');
                        imageElement.src = splitTag.val;
                        storyContainer.current.appendChild(imageElement);

                        showAfter(delay, imageElement);
                        delay += 200.0;
                    } else if (splitTag && splitTag.property == "CLASS") {
                        customClasses.push(splitTag.val);
                    } else if (tag == "CLEAR" || tag == "RESTART") {
                        removeAll("p");
                        removeAll("img");

                        // Comment out this line if you want to leave the header visible when clearing
                        setVisible(".header", false);

                        if (tag == "RESTART") {
                            restart();
                            return;
                        }
                    }
                }
            }

            if (choices.length > 0) {
                console.log("Choices:", choices);

                story.currentChoices.forEach(function (choice) {

                    // Create paragraph with anchor element
                    let choiceParagraphElement = document.createElement('p');
                    choiceParagraphElement.classList.add("choice");
                    choiceParagraphElement.innerHTML = `<button class="answer"><span>${choice.text}</span></button>`
                    storyContainer.current.appendChild(choiceParagraphElement);

                    // Fade choice in after a short delay
                    showAfter(delay, choiceParagraphElement);
                    delay += 200.0;

                    // Click on choice
                    let choiceAnchorEl = choiceParagraphElement.querySelector("button.answer");
                    choiceAnchorEl.addEventListener("click", function (event) {

                        // Don't follow <a> link
                        event.preventDefault();

                        // Remove all existing choices
                        removeAll("p.choice");

                        // Tell the story where to go next
                        story.ChooseChoiceIndex(choice.index);

                        // Aaand loop
                        continueStory();
                    });
                });
            }

            // Extend height to fit
            // We do this manually so that removing elements and creating new ones doesn't
            // cause the height (and therefore scroll) to jump backwards temporarily.
            storyContainer.current.style.height = contentBottomEdgeY() + "px";

            if (!firstTime) {
                scrollDown(previousBottomEdge);
            }

            setTimeout(() => {
                continueStory();
            }, 1000);
        }
    }


    // Utility functions //
    
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
    const scrollDown = (previousBottomEdge) => {

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
    }

    // Remove all elements that match the given selector. Used for removing choices after
    // you've picked one, as well as for the CLEAR and RESTART tags.
    const removeAll = (selector) => {
        let allElements = storyContainer.current.querySelectorAll(selector);
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

    useEffect(() => {
        fetch("story1.json")
            .then(function (response) {
                console.log("Story file found");
                return response.text();
            })
            .then(function (storyContent) {
                console.log("Story file loaded");
                let newStory = new inky.Story(storyContent);
                console.log("New ink story created")
                setStory(newStory);
            });
    }, [])

    // After story is loaded
    useEffect(() => {
        if (null !== story) {
            continueStory();
        }
    }, [story])

    return (
        <div>
            <Head>
                <title>Dating Sim</title>
            </Head>

            <main>
                <h1>Dating Sim</h1>

                <div className="outerContainer" ref={outerScrollContainer}>
                    <div id="story" ref={storyContainer}></div>
                </div>
            </main>
        </div>
    )
}