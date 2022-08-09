import React from 'react';
import { BodyContainer } from '../containers/body';
import { Header } from '../containers/header';
import { FeatureProvider } from '../context/feature';


function Home() {
	return(

		<>
			<Header />
			<FeatureProvider>
				<BodyContainer />
			</FeatureProvider>
		</>

	)
}

export default Home;