import Header from '../Header';
import Footer from '../Footer';

export const siteTitle = 'Dimas NA - Blogfolio';

export default function Layout({ children, home }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer text="© Made by Dimas N Al who ❤️ code and design." />
        </div>
    )
}