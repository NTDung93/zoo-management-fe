const OtherAnimalsSection = () => {
	return (
		<div className='section--sm'>
			<div className='container'>
				<div className='row g-4'>
					<div className='col-12'>
						<h4 className='m-0'>Other Animals</h4>
					</div>
					<div className='col-md-4 col-lg-3'>
						<div className='animal-card'>
							<img src='assets/images/img-1.png' alt='image' className='animal-card__img' />
							<div className='animal-card__body'>
								<h5 className='mt-0 mb-2 text-center'>
									<a
										href='animal-details.html'
										className='t-link t-link--base heading-clr d-inline-block'>
										Lion
									</a>
								</h5>
								<span className='d-block sm-text text-center'> African Plains </span>
							</div>
						</div>
					</div>
					<div className='col-md-4 col-lg-3'>
						<div className='animal-card'>
							<img src='assets/images/img-2.png' alt='image' className='animal-card__img' />
							<div className='animal-card__body'>
								<h5 className='mt-0 mb-2 text-center'>
									<a
										href='animal-details.html'
										className='t-link t-link--base heading-clr d-inline-block'>
										Green Frog
									</a>
								</h5>
								<span className='d-block sm-text text-center'> World of Reptiles </span>
							</div>
						</div>
					</div>
					<div className='col-md-4 col-lg-3'>
						<div className='animal-card'>
							<img src='assets/images/img-3.png' alt='image' className='animal-card__img' />
							<div className='animal-card__body'>
								<h5 className='mt-0 mb-2 text-center'>
									<a
										href='animal-details.html'
										className='t-link t-link--base heading-clr d-inline-block'>
										Siberian Tiger
									</a>
								</h5>
								<span className='d-block sm-text text-center'> Tiger Mountain </span>
							</div>
						</div>
					</div>
					<div className='col-md-4 col-lg-3'>
						<div className='animal-card'>
							<img src='assets/images/img-4.png' alt='image' className='animal-card__img' />
							<div className='animal-card__body'>
								<h5 className='mt-0 mb-2 text-center'>
									<a
										href='animal-details.html'
										className='t-link t-link--base heading-clr d-inline-block'>
										Hippos
									</a>
								</h5>
								<span className='d-block sm-text text-center'> Zoo Center </span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OtherAnimalsSection;
