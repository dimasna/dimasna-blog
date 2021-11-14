
import Header from './header';
import Footer from './footer';

export const siteTitle = 'Dimas NA - Blogfolio';

export default function Layout({ children, home }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}