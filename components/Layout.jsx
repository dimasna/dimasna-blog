
import Header from './header';
import Footer from './Footer';

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