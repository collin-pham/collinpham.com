import React, { Component } from 'react';
import './Writing.css';
import { Link } from 'react-router-dom';

export class LongTerm extends Component {
	render() {
		return(
			<div className="Writing">
                <Link to="/writings">Back</Link>
                <h3>
                    Long-Term
                </h3>
                <h5>September 7th, 2024</h5>
                <p>Most people would agree that the ability to think long-term consistently is good. But, surprisingly, one thing I've observed while building a startup is that people who think long-term consistently are rare.</p>

                <p>If a behavior is both good and rare, it's likely hard — like exercising.</p>
                <p>I think it's hard to think long-term consistently because it goes against our instincts. Our brains are wired to solve short-term problems before long-term problems. We instinctually prioritize short-term thinking. And this makes sense — ignoring short-term problems as a caveman would get you killed eventually.</p>

                <p>In a life full of short-term problems, it's no surprise we let them consume our attention.</p>

                <p>Of course, we've all fought this instinct before. Recall the last time you did think long-term. It was probably when you had an abundance of free time, or more likely, when you forced yourself to do so.</p>

                <p>If you want to think long-term more often, you need to make time to think long-term.</p>

                <p>That's laughably obvious, yet most of us still fail to do so consistently — and that's expected, because it's hard to fight an instinct.</p>

                <p>But if you want to fight an instinct, you first have to realize it exists.</p>

                <p>--</p>

                <Link to="/writings">Read more</Link>
            </div>
		);
	}
}