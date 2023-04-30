import React, { Component } from 'react';
import './Writing.css';
import { Link } from 'react-router-dom';

export class NewThings extends Component {
	render() {
		return(
			<div className="Writing">
                <Link to="/writings">Back</Link>
                <h3>
                    Doing New Things
                </h3>
                <h5>July 19th, 2021</h5>
                <p>Recently, I started writing again. When I sat down to write, I felt uncomfortable. What should I write about? Will I communicate my thoughts clearly? Why do I want to do this?</p>

                <p>Doing new things is uncomfortable. But this seemed odd to me.</p>

                <p>Typically, the more times we experience something, the more used to it we get. For example, I’ve felt stress thousands of times — and over time, I’ve learned to manage it. When I was eight, my default response to stress was crying. Today, it’s taking a deep breathe and making a plan.</p>

                <p>Similarly, I’ve felt uncomfortable about doing new things thousands of times — eating new food, meeting new people, going to new places. I would expect that the more times I am uncomfortable doing new things, the less intense the feeling of “uncomfort” should be next time I do some thing that is new.</p>

                <p>But this doesn’t seem to be true — I felt uncomfortable about starting to write again. Why haven’t I gotten used to feeling uncomfortable about doing new things?</p>

                <p>I think our brains are hardwired to feel uncomfortable about doing new things because it is useful.</p>

                <p>When I’m doing something new, I feel uncomfortable. Because I feel uncomfortable I naturally focus, plan, and think more than I typically would about that new thing, which is useful. It’s like free Adderall.</p>

                <p>Consider the opposite: a world where we do not get uncomfortable doing new things. In this world, our ancestors wouldn’t take a second look at a new berry they’re about to eat; wouldn’t approach that stranger with a little more caution; wouldn’t walk slowly around unfamiliar land.</p>

                <p>Until recently, Darwin would have killed us for that behavior.</p>

                <p>Of course, with practice it’s likely we could train ourselves to get used to feeling uncomfortable. But I think that would be like deleting a superpower.</p>

                <p>We are supposed to feel uncomfortable doing new things. It makes us hyper-focus on the task at hand, which is useful — especially when writing essays.</p>
                
                <p>--</p>

                <Link to="/writings">Read more</Link>
            </div>
		);
	}
}