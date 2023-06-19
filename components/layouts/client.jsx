import Link from 'next/link';
import data from '../../lib/data';
import DefaultLayout from './default';

export default function ClientLayout({ page, portfolio }) {
	const title = page.data.heading ?  page.data.heading  : page.data.title;
	return (
		<DefaultLayout page={page}>

			<section className="hero diagonal">
				<div className="container">
					{ portfolio.heading &&
						<h2>
							<Link href={`${data.site.baseurl}/portfolio`}>{ portfolio.heading }</Link><span> / {page.data.name}</span>
						</h2>
					}
					{ page.data.subtitle &&
						<p className="subtext">{ page.data.subtitle }</p>
					}
				</div>
			</section>

			<section className="diagonal">
				<div className="container">
					<p>
						<img src={ page.data.image_path } className="screenshot" alt={page.data.title}/></p>
					<div>
			 			<div className="post-content" dangerouslySetInnerHTML={{ __html: page.data.contentHtml }} />
					</div>
					<p><a href={ page.data.external_url }>View { page.data.name } &rarr;</a></p>
				</div>
			</section>
		 </DefaultLayout>
	);
}
