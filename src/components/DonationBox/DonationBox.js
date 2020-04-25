import React, { useState } from 'react';
import { StripeProvider, Elements, CardElement, injectStripe } from 'react-stripe-elements';

import './DonationBox.css';

export const DonationBox = () => (
	<div className="DonationBox">
    <StripeProvider apiKey="pk_test_JIqV4OfFxtW0aUgK0BXk6YBd">
      <Elements>
        <InjectedDonationForm/>
      </Elements>
    </StripeProvider>
	</div>
);

const DonationForm = (props) => {
	const [amountKey, setAmountKey] = useState(0);

	const amounts = [0, 1, 1, 2, 3, 5, 8];
	const amount = amounts[amountKey];

  const submit = async (ev) => {
    let {token} = await props.stripe.createToken({name: 'test'});
  }
  return (
    <div className='DonationBox-form'>
      <div className='DonationBox-title'> This is a donation box. </div>
			<div className='DonationBox-card'>
      	<CardElement/>
			</div>
			<div className='DonationBox-select'>
				{amounts.map((a, i) => {
					return (
						<div
							className={`${i === amountKey ? 'DonationBox-amount-selected' : 'DonationBox-amount'}`}
							onClick={() => setAmountKey(i)}
							key={i}
						>
							${a}
						</div>
					);
				})}
			</div>
			<div className={`DonationBox-form-submit ${amount ? 'DonationBox-form-submit-active' : 'DonationBox-form-submit-inactive'}`} onClick={submit}>
				Donate {`${amount ? '$' : '$'}`}{amount}
			</div>
    </div>
  );
}

const InjectedDonationForm = injectStripe(DonationForm);
