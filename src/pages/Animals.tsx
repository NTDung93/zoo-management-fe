import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Header2 from '../components/Header/Header2';

const Animals = () => {
	return (
		<>
			<Header2 />
			<Banner />

			<div className='section--sm section--top'>
				<div className='section__head'>
					<div className='container'>
						<div className='row g-4 justify-content-center'>
							<div className='col-md-8 col-xl-6'>
								<div className='text-center'>
									<span className='section__particles'>
										<span className='section__subtitle section__subtitle-dash'>Animals</span>
									</span>
									<h2 className='section__title mt-2'>
										Our Zoo <span>Animals</span>
									</h2>
									<p className='section__para mx-auto'>
										Phasellus consectetuer vestibulum elit. Ametusbibendum mattis non. Vestibulum
										fringilla pede sit ameugue.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='container'>
					<div className='row g-4'>
						<div className='col-md-6 col-lg-4 col-xl-3'>
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
						<div className='col-md-6 col-lg-4 col-xl-3'>
							<div className='animal-card'>
								<img src='assets/images/img-2.png' alt='image' className='animal-card__img' />
								<div className='animal-card__body'>
									<h5 className='mt-0 mb-2 text-center'>
										<a
											href='animal-details.html'
											className='t-link t-link--base heading-clr d-inline-block'>
											Poison Green Frog
										</a>
									</h5>
									<span className='d-block sm-text text-center'> World of Reptiles </span>
								</div>
							</div>
						</div>
						<div className='col-md-6 col-lg-4 col-xl-3'>
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
						<div className='col-md-6 col-lg-4 col-xl-3'>
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
						<div className='col-md-6 col-lg-4 col-xl-3'>
							<div className='animal-card'>
								<img src='assets/images/img-5.png' alt='image' className='animal-card__img' />
								<div className='animal-card__body'>
									<h5 className='mt-0 mb-2 text-center'>
										<a
											href='animal-details.html'
											className='t-link t-link--base heading-clr d-inline-block'>
											Green Pythons
										</a>
									</h5>
									<span className='d-block sm-text text-center'> World of Reptiles </span>
								</div>
							</div>
						</div>
						<div className='col-md-6 col-lg-4 col-xl-3'>
							<div className='animal-card'>
								<img src='assets/images/img-6.png' alt='image' className='animal-card__img' />
								<div className='animal-card__body'>
									<h5 className='mt-0 mb-2 text-center'>
										<a
											href='animal-details.html'
											className='t-link t-link--base heading-clr d-inline-block'>
											Asian Elephant
										</a>
									</h5>
									<span className='d-block sm-text text-center'> World of Reptiles </span>
								</div>
							</div>
						</div>
						<div className='col-md-6 col-lg-4 col-xl-3'>
							<div className='animal-card'>
								<img src='assets/images/img-7.png' alt='image' className='animal-card__img' />
								<div className='animal-card__body'>
									<h5 className='mt-0 mb-2 text-center'>
										<a
											href='animal-details.html'
											className='t-link t-link--base heading-clr d-inline-block'>
											Blue Iguana
										</a>
									</h5>
									<span className='d-block sm-text text-center'> World of Reptiles </span>
								</div>
							</div>
						</div>
						<div className='col-md-6 col-lg-4 col-xl-3'>
							<div className='animal-card'>
								<img src='assets/images/img-8.png' alt='image' className='animal-card__img' />
								<div className='animal-card__body'>
									<h5 className='mt-0 mb-2 text-center'>
										<a
											href='animal-details.html'
											className='t-link t-link--base heading-clr d-inline-block'>
											Red Macaw
										</a>
									</h5>
									<span className='d-block sm-text text-center'> World of Reptiles </span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Animal Gallery End */}
			<div className='section--sm'>
				<div className='section event-section'>
					<div className='container-fluid container-restricted'>
						<div className='row g-4 align-items-center'>
							<div className='col-lg-6'>
								<ul className='list list--row flex-wrap event-image-group justify-content-center'>
									<li>
										<img src='assets/images/event-img-1.png' alt='image' className='event-image' />
									</li>
									<li>
										<img src='assets/images/event-img-2.png' alt='image' className='event-image' />
									</li>
									<li>
										<img src='assets/images/event-img-3.png' alt='image' className='event-image' />
									</li>
									<li>
										<img src='assets/images/event-img-4.png' alt='image' className='event-image' />
									</li>
									<li>
										<img src='assets/images/event-img-5.png' alt='image' className='event-image' />
									</li>
									<li>
										<img src='assets/images/event-img-6.png' alt='image' className='event-image' />
									</li>
								</ul>
							</div>
							<div className='col-lg-6'>
								<div className='event-section__content text-center text-lg-start'>
									<div className='section__head'>
										<span className='section__particles'>
											<span className='section__subtitle text--white'> Upcoming </span>
										</span>
										<h2 className='section__title mt-2 text--white'>
											Our Upcoming Zoo <span>Animals</span>
										</h2>
										<p className='section__para mx-auto ms-xl-0 text--white mb-0'>
											Phasellus consectetuer vestibulum elit. Aenean tellus metusbibendum suere mat
											non nunc. Vestibulum fringilla
										</p>
									</div>
									<div className='upcoming-slider'>
										<div className='upcoming-slider__item'>
											<div className='upcoming-card'>
												<div className='upcoming-card__img'>
													<img
														src='assets/images/event-img-1.png'
														alt='image'
														className='upcoming-card__img-is'
													/>
												</div>
												<div className='upcoming-card__content'>
													<h5 className='upcoming-card__title'>Medina Deer</h5>
													<ul className='list'>
														<li>
															<div className='d-flex justify-content-between gap-3'>
																<span className='text--white'> Class </span>
																<span className='text--white'> Mammalia </span>
															</div>
														</li>
														<li>
															<div className='d-flex justify-content-between gap-3'>
																<span className='text--white'> Order </span>
																<span className='text--white'> Artiodactyla </span>
															</div>
														</li>
														<li>
															<div className='d-flex justify-content-between gap-3'>
																<span className='text--white'> Family </span>
																<span className='text--white'> Bovidae </span>
															</div>
														</li>
														<li>
															<div className='d-flex justify-content-between gap-3'>
																<span className='text--white'> Subfamily </span>
																<span className='text--white'> Antiloinae </span>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className='upcoming-slider__item'>
											<div className='upcoming-card'>
												<div className='upcoming-card__img'>
													<img
														src='assets/images/event-img-2.png'
														alt='image'
														className='upcoming-card__img-is'
													/>
												</div>
												<div className='upcoming-card__content'>
													<h5 className='upcoming-card__title'>Medina Deer</h5>
													<ul className='list'>
														<li>
															<div className='d-flex justify-content-between gap-3'>
																<span className='text--white'> Class </span>
																<span className='text--white'> Mammalia </span>
															</div>
														</li>
														<li>
															<div className='d-flex justify-content-between gap-3'>
																<span className='text--white'> Order </span>
																<span className='text--white'> Artiodactyla </span>
															</div>
														</li>
														<li>
															<div className='d-flex justify-content-between gap-3'>
																<span className='text--white'> Family </span>
																<span className='text--white'> Bovidae </span>
															</div>
														</li>
														<li>
															<div className='d-flex justify-content-between gap-3'>
																<span className='text--white'> Subfamily </span>
																<span className='text--white'> Antiloinae </span>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className='upcoming-slider__item'>
											<div className='upcoming-card'>
												<div className='upcoming-card__img'>
													<img
														src='assets/images/event-img-3.png'
														alt='image'
														className='upcoming-card__img-is'
													/>
												</div>
												<div className='upcoming-card__content'>
													<h5 className='upcoming-card__title'>Medina Deer</h5>
													<ul className='list'>
														<li>
															<div className='d-flex justify-content-between gap-3'>
																<span className='text--white'> Class </span>
																<span className='text--white'> Mammalia </span>
															</div>
														</li>
														<li>
															<div className='d-flex justify-content-between gap-3'>
																<span className='text--white'> Order </span>
																<span className='text--white'> Artiodactyla </span>
															</div>
														</li>
														<li>
															<div className='d-flex justify-content-between gap-3'>
																<span className='text--white'> Family </span>
																<span className='text--white'> Bovidae </span>
															</div>
														</li>
														<li>
															<div className='d-flex justify-content-between gap-3'>
																<span className='text--white'> Subfamily </span>
																<span className='text--white'> Antiloinae </span>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='section--sm section--bottom'>
				<div className='container'>
					<div className='row g-4 justify-content-center'>
						<div className='col-md-8 col-xl-6 col-xxl-5'>
							<div className='text-center text-xl-start'>
								<span className='section__particles'>
									<span className='section__subtitle'> FAQ </span>
								</span>
								<h2 className='section__title mt-2'>
									What`s you know about <span>viserzoo</span>
								</h2>
								<p className='section__para mx-auto ms-xl-0'>
									Phasellus consectetuer vestibulum elit. Ametusbibendum mattis non. Vestibulum
									fringilla pede sit ameugue.
								</p>
							</div>
							<div className='accordion custom--accordion' id='faqAccordion'>
								<div className='accordion-item'>
									<h2 className='accordion-header'>
										<button
											className='accordion-button'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseOne'
											aria-expanded='true'>
											Why Viserzoo?
										</button>
									</h2>
									<div
										id='collapseOne'
										className='accordion-collapse collapse show'
										data-bs-parent='#faqAccordion'>
										<div className='accordion-body'>
											Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas neque
											sit amet convallis pulvinar justo nulla eleifend augue ac auctor orci leo non
											est. Quisque incidunt tincidunt erat.
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseTwo'
											aria-expanded='false'>
											How to buy ticket in online?
										</button>
									</h2>
									<div
										id='collapseTwo'
										className='accordion-collapse collapse'
										data-bs-parent='#faqAccordion'>
										<div className='accordion-body'>
											Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas neque
											sit amet convallis pulvinar justo nulla eleifend augue ac auctor orci leo non
											est. Quisque incidunt tincidunt erat.
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseThree'
											aria-expanded='false'>
											Upcoming Animals?
										</button>
									</h2>
									<div
										id='collapseThree'
										className='accordion-collapse collapse'
										data-bs-parent='#faqAccordion'>
										<div className='accordion-body'>
											Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas neque
											sit amet convallis pulvinar justo nulla eleifend augue ac auctor orci leo non
											est. Quisque incidunt tincidunt erat.
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-8 col-xl-6 col-xxl-7'>
							<div className='section__img-bottom text-center'>
								<img
									src='assets/images/rhino.png'
									alt='images'
									className='img-fluid section__img-bottom-img'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='fact-section-container'>
				<div className='section fact-section'>
					<div className='container'>
						<div className='row g-4'>
							<div className='col-md-3 col-xl-3'>
								<div className='counter-card'>
									<div className='counter-card__head justify-content-center text-center'>
										<h1 className='m-0'>
											<span className='counter-card__title odometer' data-odometer-final={156}>
												0
											</span>
										</h1>
									</div>
									<div className='counter-card__body'>
										<h5 className='m-0 text-center text--white'>Total type of animal</h5>
									</div>
								</div>
							</div>
							<div className='col-md-3 col-xl-3'>
								<div className='counter-card'>
									<div className='counter-card__head justify-content-center text-center'>
										<h1 className='d-flex align-items-center gap-2 m-0'>
											<span className='counter-card__title odometer' data-odometer-final={2}>
												{' '}
												0{' '}
											</span>
											<span className='counter-card__title'>m</span>
										</h1>
									</div>
									<div className='counter-card__body'>
										<h5 className='m-0 text-center text--white'>Daily Visitors</h5>
									</div>
								</div>
							</div>
							<div className='col-md-3 col-xl-3'>
								<div className='counter-card'>
									<div className='counter-card__head justify-content-center text-center'>
										<h1 className='d-flex align-items-center gap-2 m-0'>
											<span className='counter-card__title odometer' data-odometer-final='1.5'>
												{' '}
												0{' '}
											</span>
											<span className='counter-card__title'>k</span>
										</h1>
									</div>
									<div className='counter-card__body'>
										<h5 className='m-0 text-center text--white'>Team Member</h5>
									</div>
								</div>
							</div>
							<div className='col-md-3 col-xl-3'>
								<div className='counter-card'>
									<div className='counter-card__head justify-content-center text-center'>
										<h1 className='d-flex align-items-center gap-2 m-0'>
											<span className='counter-card__title odometer' data-odometer-final={35}>
												{' '}
												0{' '}
											</span>
											<span className='counter-card__title'>k</span>
										</h1>
									</div>
									<div className='counter-card__body'>
										<h5 className='m-0 text-center text--white'>Save Wild Life</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Membership Section  */}
			<div className='section--sm section--top'>
				<div className='section__head'>
					<div className='container'>
						<div className='row g-4 justify-content-center'>
							<div className='col-md-8 col-xl-6 col-xxl-5'>
								<div className='text-center'>
									<span className='section__particles'>
										<span className='section__subtitle section__subtitle-dash'>
											{' '}
											Membership Plan{' '}
										</span>
									</span>
									<h2 className='section__title mt-2'>
										You can be a member of <span>Viserzoo</span>
									</h2>
									<p className='section__para mx-auto mb-0'>
										Phasellus consectetuer vestibulum elit. Ametusbibendum mattis non. Vestibulum
										fringilla pede sit ameugue.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='container'>
					<div className='row g-4'>
						<div className='col-md-4'>
							<div className='member-card'>
								<img
									src='assets/images/member-card-1.png'
									alt='image'
									className='member-card__img'
								/>
								<div className='member-card__content'>
									<h5 className='membership-card__title mb-2 text--white'>Premium</h5>
									<h4 className='membership-card__price mt-2'>$108.59</h4>
									<ul className='list list--base'>
										<li className='text--white'>20% Dsicount All Event</li>
										<li className='text--white'>Allow 2 adult person</li>
										<li className='text--white'>Free Animal museum Exhibition</li>
									</ul>
								</div>
								<a href='member.html' className='t-link member-card__overlay'>
									<i className='las la-plus' />
								</a>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='member-card'>
								<img
									src='assets/images/member-card-2.png'
									alt='image'
									className='member-card__img'
								/>
								<div className='member-card__content'>
									<h5 className='membership-card__title mb-2 text--white'>Standard</h5>
									<h4 className='membership-card__price mt-2'>$108.59</h4>
									<ul className='list list--base'>
										<li className='text--white'>20% Dsicount All Event</li>
										<li className='text--white'>Allow 2 adult person</li>
										<li className='text--white'>Free Animal museum Exhibition</li>
									</ul>
								</div>
								<a href='member.html' className='t-link member-card__overlay'>
									<i className='las la-plus' />
								</a>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='member-card'>
								<img
									src='assets/images/member-card-3.png'
									alt='image'
									className='member-card__img'
								/>
								<div className='member-card__content'>
									<h5 className='membership-card__title mb-2 text--white'>Popular</h5>
									<h4 className='membership-card__price mt-2'>$108.59</h4>
									<ul className='list list--base'>
										<li className='text--white'>20% Dsicount All Event</li>
										<li className='text--white'>Allow 2 adult person</li>
										<li className='text--white'>Free Animal museum Exhibition</li>
									</ul>
								</div>
								<a href='member.html' className='t-link member-card__overlay'>
									<i className='las la-plus' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Membership Section End */}

			{/* Client Section Slider */}
			<div className='section--sm section--bottom'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='client-slider'>
								<div className='client-slider__item'>
									<div className='client-card'>
										<img
											src='assets/images/client-1.png'
											alt='image'
											className='client-card__img'
										/>
									</div>
								</div>
								<div className='client-slider__item'>
									<div className='client-card'>
										<img
											src='assets/images/client-2.png'
											alt='image'
											className='client-card__img'
										/>
									</div>
								</div>
								<div className='client-slider__item'>
									<div className='client-card'>
										<img
											src='assets/images/client-3.png'
											alt='image'
											className='client-card__img'
										/>
									</div>
								</div>
								<div className='client-slider__item'>
									<div className='client-card'>
										<img
											src='assets/images/client-4.png'
											alt='image'
											className='client-card__img'
										/>
									</div>
								</div>
								<div className='client-slider__item'>
									<div className='client-card'>
										<img
											src='assets/images/client-5.png'
											alt='image'
											className='client-card__img'
										/>
									</div>
								</div>
								<div className='client-slider__item'>
									<div className='client-card'>
										<img
											src='assets/images/client-6.png'
											alt='image'
											className='client-card__img'
										/>
									</div>
								</div>
								<div className='client-slider__item'>
									<div className='client-card'>
										<img
											src='assets/images/client-7.png'
											alt='image'
											className='client-card__img'
										/>
									</div>
								</div>
								<div className='client-slider__item'>
									<div className='client-card'>
										<img
											src='assets/images/client-8.png'
											alt='image'
											className='client-card__img'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Client Section Slider End */}

			{/* Subscribe Section  */}
			<div className='subscribe-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='subscribe-section__content'>
								<div className='row g-4 align-items-center'>
									<div className='col-md-6'>
										<div className='text-center text-md-start d-grid gap-2'>
											{/* Logo  */}
											<a href='index.html' className='logo mx-auto ms-md-0'>
												<img
													src='assets/images/logo-alt.png'
													alt='viserhyip'
													className='img-fluid logo__is'
												/>
											</a>
											{/* Logo End */}
											<p className='t-short-para mb-0 text--white mx-auto ms-md-0'>
												Phasellus consectetuer vestibenean tellus metusbibenu muere mattis non nunc.
											</p>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='text-center text-md-end'>
											<h5 className='mt-0 text--white'>Subscribe Our Newsletters</h5>
											<div className='newsletter mx-auto ms-md-auto me-md-0'>
												<div className='newsletter__container rounded-pill'>
													<input
														type='text'
														className='form-control form--control newsletter__input flex-grow-1 rounded-pill'
														placeholder='Subscribe now..'
													/>
													<button className='btn xxl-text lh-1 text--white rounded-pill sm-text'>
														<i className='far fa-paper-plane' />
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Subscribe Section End */}

			{/* Footer */}
			<Footer />
		</>
	);
};

export default Animals;
