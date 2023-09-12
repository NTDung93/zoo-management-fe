const Banner = () => (
	<div className='banner' style={{ backgroundImage: 'url(assets/images/banner-img-2.png)' }}>
		<div className='banner__content'>
			<div className='container'>
				<div className='row g-3 justify-content-center'>
					<div className='col-lg-10 text-center'>
						<h2 className='mt-0 text--white'>Animals</h2>
						<ul className='list list--row breadcrumbs justify-content-center'>
							<li className='list--row__item breadcrumbs__item'>
								<a href='index.html' className='t-link breadcrumbs__link text--white'>
									Home
								</a>
							</li>
							<li className='list--row__item breadcrumbs__item'>
								<a
									href='contact.html'
									className='t-link breadcrumbs__link text--white '
									style={{ marginLeft: '10px' }}>
									Animal
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Banner;
