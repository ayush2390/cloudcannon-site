import PageLayout from '../components/layouts/page';

export default function NotFound() {
	return (
		<PageLayout page={{ data: { title: 'Not Found' }}}>
			<p>This page doesn&apos;t exist.</p>
		</PageLayout>
	);
}
