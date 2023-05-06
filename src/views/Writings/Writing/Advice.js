import React, { Component } from 'react';
import './Writing.css';
import { Link } from 'react-router-dom';

export class Advice extends Component {
	render() {
		return(
			<div className="Writing">
                <Link to="/writings">Back</Link>
                <h3>
                    How To Listen To Advice (Like This)
                </h3>
                <h5>April 30th, 2023</h5>

                <p>When we went through YC our group partners often mentioned how founders (ourselves included) would ask for advice and then proceed to ignore it — only to realize later we should have listened.</p>

                <p>We repeatedly ignored good advice. And then wasted time making mistakes we would have avoided by listening.</p>

                <p>Why did we do that?</p>

                <p>I think one reason people ignore good advice is because it’s hard to figure out what advice is good and what advice is bad. Recognizing good advice is a skill. And if you aren’t convinced that advice is good, the default is to ignore it.</p>

                <p>So, one way to stop ignoring good advice is to get better at recognizing it.</p>

                <p>One characteristic of good advice is that it’s verifiable — the person giving the advice can explain why listening to it will cause the outcome you want. The important part of that sentence is cause. For example, if you want advice on how to get into Harvard, it’s best to speak with a person who understands what causes this to happen, because they’ll be able to explain precisely what to do to get in.</p>

                <p>This person, of course, is an admissions officer — but I think that answer may surprise some people. A common answer to the question of the best person to ask for advice about getting into Harvard is a current student.</p>

                <p>The problem with asking a current Harvard student for advice on how to get into Harvard is that they only have a best-guess of why they got in — a mix of hard work, good grades, affluence, and luck, they'd probably say. Though they may think it, a Harvard student doesn’t know what caused their acceptance into Harvard. Their advice is not verifiable. In fact, a lot of bad advice follows this pattern — from a seemingly trustworthy person who incorrectly believes they understand what causes an outcome.</p>

                <p>So one way to figure out if advice is good is to verify it: ask questions to see if the adviser can truthfully explain what causes the outcomes they are giving advice about.</p>

                <p>But the best advice cannot just be verifiable; it also must be up-to-date.</p>

                <p>Advice is up-to-date when the subject of the advice has not changed since the adviser experienced it. The important part of that sentence is changed. For example, if you want advice on what A.I. tools to try out at your job, it’s better to speak with someone currently in industry than with someone who left industry last month.</p>

                <p>Of course, this is because the field of A.I. is changing quickly. What’s up-to-date today likely wasn’t last month.</p>

                <p>But other subjects change slowly — for example, if you want advice on how to put a newborn to sleep it’s equally as helpful to speak with your grandparents as it is with your parents, because putting a newborn to sleep hasn’t really changed</p>

                <p>Some subjects change quickly, and some change slowly — subjects change at different rates. And the rate of change of a subject is important, because misunderstanding how quickly (or how slowly) a subject changes is another pattern of bad advice — from a seemingly trustworthy person who incorrectly believes they are up-to-date on a subject they are not.</p>

                <p>So another way to figure out if advice is good is to confirm it’s up-to-date: ask questions to see if the subject has significantly changed since the adviser experienced it. </p>

                <p>Now we have a definition for good advice: good advice is verifiable and up-to-date. I think most people know this intuitively, but haven’t defined it explicitly; I hadn’t until writing this.</p>

                <p>A definition is useful because it’s a precondition for recognition — you need to know what you’re looking for in order to recognize it. Hopefully now, that’s a little bit easier.</p>

                <p>And of course, take all of this advice with that in mind.</p>
                
                <p>--</p>

                <Link to="/writings">Read more</Link>
            </div>
		);
	}
}