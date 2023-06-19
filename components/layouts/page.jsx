import DefaultLayout from './default';

export default function PageLayout({ children, page }) {
	const title = page.data.heading ?  page.data.heading  : page.data.title;
	return (
		<DefaultLayout page={page}>

            <section className="hero diagonal">
                <div className="container">
                { (page.data.heading || page.data.title) &&
                    <h2>{ title }</h2>
                }
                { page.data.subtitle &&
                    <p className="subtext" data-cms-bind="#subtitle">{ page.data.subtitle }</p>
                }
                </div>
            </section>
            {children}
		 </DefaultLayout>
	);
}
